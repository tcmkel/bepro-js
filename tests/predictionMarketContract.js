

import { expect } from 'chai';
import moment from 'moment';

import { mochaAsync } from './utils';
import { Application } from '..';
import { ERC20Contract, } from "../build";
context('Prediction Market Contract', async () => {
  require('dotenv').config();

  let app;
  let predictionMarketContract;
  let realitioERC20Contract;
  let ERC20Contract;

  // market / outcome ids we'll make unit tests with
  let marketId = 0;
  let outcomeIds = [0, 1];
  const ethAmount = 0.01;

  context('Contract Deployment', async () => {
    it('should start the Application', mochaAsync(async () => {
      app = new Application({
        web3Provider: 'https://kovan.infura.io/v3/5a3e570fd7e544779cf240da53d0d908',
        web3PrivateKey: '0x2e0bf3d13116fbb5b323c8969f61cb9710da3d6df66ceff81a962e57b3701905'
      });
      expect(app).to.not.equal(null);
    }));

    it('should deploy Prediction Market Contract', mochaAsync(async () => {
      // Create Contract
      predictionMarketContract = app.getPredictionMarketContract({});
      realitioERC20Contract = app.getRealitioERC20Contract({});
      ERC20Contract = app.getERC20Contract({});
      // // Deploy
      await realitioERC20Contract.deploy({});
      await ERC20Contract.deploy({params: ['Polkamarkets', 'POLK']});

      const realitioContractAddress = realitioERC20Contract.getAddress();
      const ERC20ContractAddress = ERC20Contract.getAddress();
      const accountAddress = await predictionMarketContract.getMyAccount();

      await predictionMarketContract.deploy({
        params: [
          0,
          ERC20ContractAddress,
          0,
          realitioContractAddress,
          86400
        ]
      });
      const predictionMarketContractAddress = predictionMarketContract.getAddress();

      expect(predictionMarketContractAddress).to.not.equal(null);
      expect(realitioContractAddress).to.not.equal(null);

      // setting predictionMarket ownable vars
      // await predictionMarketContract.getContract().methods.initialize().send({ from: accountAddress });
      // // setting realitioERC20 governance vars
      // await predictionMarketContract.getContract().methods.setRealitioERC20(realitioContractAddress).send({ from: accountAddress });
      // await predictionMarketContract.getContract().methods.setRealitioTimeout(86400).send({ from: accountAddress });
      // await predictionMarketContract.getContract().methods.setToken(ERC20ContractAddress).send({ from: accountAddress });
      // await predictionMarketContract.getContract().methods.setRequiredBalance(0).send({ from: accountAddress });
    }));
  });

  context('Market Creation', async () => {
    it('should create a Market', mochaAsync(async () => {
      try {
        const res = await predictionMarketContract.createMarket({
          name: 'Will BTC price close above 100k$ on May 1st 2022',
          image: 'foo-bar',
          category: 'Foo;Bar',
          oracleAddress: '0x0000000000000000000000000000000000000001', // TODO
          duration: moment('2022-05-01').unix(),
          outcomes: ['Yes', 'No'],
          ethAmount: ethAmount
        });
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const marketIds = await predictionMarketContract.getMarkets();
      marketId = marketIds[marketIds.length - 1];
      expect(marketIds.length).to.equal(1);
      expect(marketIds[marketIds.length - 1]).to.equal(marketId);
    }));

    it('should create another Market', mochaAsync(async () => {
      const res = await predictionMarketContract.createMarket({
        name: 'Will ETH price close above 10k$ on May 1st 2022',
        image: 'foo-bar',
        category: 'Foo;Bar',
        oracleAddress: '0x0000000000000000000000000000000000000001', // TODO
        duration: moment('2022-05-01').unix(),
        outcomes: ['Yes', 'No'],
        ethAmount: 0.001
      });
      expect(res.status).to.equal(true);

      const marketIds = await predictionMarketContract.getMarkets();
      expect(marketIds.length).to.equal(2);
    }));
  });

  context('Market Data', async () => {
    it('should get Market data', mochaAsync(async () => {
      const res = await predictionMarketContract.getMarketData({marketId: 0});
      expect(res).to.eql({
        name: '',
        closeDateTime: '2022-05-01 00:00',
        state: 0,
        oracleAddress: '0x0000000000000000000000000000000000000000',
        liquidity: 0.01,
        outcomeIds: [0, 1],
      });
    }));

    it('should get Market details', mochaAsync(async () => {
      const res = await predictionMarketContract.getMarketDetails({marketId: 0});
      expect(res).to.eql({
        name: 'Will BTC price close above 100k$ on May 1st 2022',
        category: 'Foo',
        subcategory: 'Bar',
        outcomes: ['Yes', 'No'],
        image: 'foo-bar'
      });
    }));

    it('should get Market Outcomes data', mochaAsync(async () => {
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      expect(outcome1Data).to.include({
        price: 0.5,
        shares: 0.01
      });

      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      expect(outcome2Data).to.include({
        price: 0.5,
        shares: 0.01
      });

      // outcomes share prices should sum to 1
      expect(outcome1Data.price + outcome2Data.price).to.equal(1);
      // outcomes number of shares should dum to ethAmount * 2
      expect(outcome1Data.shares + outcome2Data.shares).to.equal(ethAmount * 2);
    }));
  });

  context('Market Interaction - Balanced Market (Same Outcome Odds)', async () => {
    it('should add liquidity without changing shares balance', mochaAsync(async () => {
      const myShares = await predictionMarketContract.getMyMarketShares({marketId});
      const marketData = await predictionMarketContract.getMarketData({marketId});
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});

      // balanced market - same price in all outcomoes
      expect(outcome1Data.price).to.equal(outcome2Data.price);

      try {
        const res = await predictionMarketContract.addLiquidity({marketId, ethAmount})
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const myNewShares = await predictionMarketContract.getMyMarketShares({marketId});
      const newMarketData = await predictionMarketContract.getMarketData({marketId});
      const newOutcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const newOutcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});

      expect(newMarketData.liquidity).to.above(marketData.liquidity);
      expect(newMarketData.liquidity).to.equal(marketData.liquidity + ethAmount);

      // Outcome prices shoud remain the same after providing liquidity
      expect(newOutcome1Data.price).to.equal(outcome1Data.price);
      expect(newOutcome2Data.price).to.equal(outcome2Data.price);

      // Price balances are 0.5-0.5, liquidity will be added solely through liquidity shares
      expect(myNewShares.liquidityShares).to.above(myShares.liquidityShares);
      expect(myNewShares.liquidityShares).to.equal(myShares.liquidityShares + ethAmount);
      // shares balance remains the same
      expect(myNewShares.outcomeShares[0]).to.equal(myShares.outcomeShares[0]);
      expect(myNewShares.outcomeShares[1]).to.equal(myShares.outcomeShares[1]);
    }));

    it('should remove liquidity without changing shares balance', mochaAsync(async () => {
      const myShares = await predictionMarketContract.getMyMarketShares({marketId});
      const marketData = await predictionMarketContract.getMarketData({marketId});
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const contractBalance = Number(await predictionMarketContract.getBalance());

      // balanced market - same price in all outcomoes
      expect(outcome1Data.price).to.equal(outcome2Data.price);

      try {
        const res = await predictionMarketContract.removeLiquidity({marketId, shares: ethAmount})
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const myNewShares = await predictionMarketContract.getMyMarketShares({marketId});
      const newMarketData = await predictionMarketContract.getMarketData({marketId});
      const newOutcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const newOutcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const newContractBalance = Number(await predictionMarketContract.getBalance());

      expect(newMarketData.liquidity).to.below(marketData.liquidity);
      expect(newMarketData.liquidity).to.equal(marketData.liquidity - ethAmount);

      // Outcome prices shoud remain the same after providing liquidity
      expect(newOutcome1Data.price).to.equal(outcome1Data.price);
      expect(newOutcome2Data.price).to.equal(outcome2Data.price);

      // Price balances are 0.5-0.5, liquidity will be added solely through liquidity shares
      expect(myNewShares.liquidityShares).to.below(myShares.liquidityShares);
      expect(myNewShares.liquidityShares).to.equal(myShares.liquidityShares - ethAmount);
      // shares balance remains the same
      expect(myNewShares.outcomeShares[0]).to.equal(myShares.outcomeShares[0]);
      expect(myNewShares.outcomeShares[1]).to.equal(myShares.outcomeShares[1]);

      // User gets liquidity tokens back in ETH
      expect(newContractBalance).to.below(contractBalance);
      // TODO: check amountTransferred from internal transactions
      const amountTransferred = Number((contractBalance - newContractBalance).toFixed(5));
      expect(amountTransferred).to.equal(ethAmount);
    }));
  });

  context('Market Interaction - Unbalanced Market (Different Outcome Odds)', async () => {
    it('should display my shares', mochaAsync(async () => {
      const res = await predictionMarketContract.getMyMarketShares({marketId});
      // currently holding liquidity tokens from market creation
      expect(res).to.eql({
        liquidityShares: 0.01,
        outcomeShares: {
          0: 0.00,
          1: 0.00,
        }
      });
    }));

    it('should buy outcome shares', mochaAsync(async () => {
      const outcomeId = 0;
      const minOutcomeSharesToBuy = 0.015;

      const marketData = await predictionMarketContract.getMarketData({marketId});
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const contractBalance = Number(await predictionMarketContract.getBalance());

      try {
        const res = await predictionMarketContract.buy({marketId, outcomeId, ethAmount, minOutcomeSharesToBuy});
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const newMarketData = await predictionMarketContract.getMarketData({marketId});
      const newOutcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const newOutcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const newContractBalance = Number(await predictionMarketContract.getBalance());

      // outcome price should increase
      expect(newOutcome1Data.price).to.above(outcome1Data.price);
      expect(newOutcome1Data.price).to.equal(0.8);
      // opposite outcome price should decrease
      expect(newOutcome2Data.price).to.below(outcome2Data.price);
      expect(newOutcome2Data.price).to.equal(0.2);
      // Prices sum = 1
      // 0.05 + 0.05 = 1
      expect(newOutcome1Data.price + newOutcome2Data.price).to.equal(1);

      // Liquidity value remains the same
      expect(newMarketData.liquidity).to.equal(marketData.liquidity);

      // outcome shares should decrease
      expect(newOutcome1Data.shares).to.below(outcome1Data.shares);
      expect(newOutcome1Data.shares).to.equal(0.005);
      // opposite outcome shares should increase
      expect(newOutcome2Data.shares).to.above(outcome2Data.shares);
      expect(newOutcome2Data.shares).to.equal(0.02);
      // # Shares Product = Liquidity^2
      // 0.005 * 0.02 = 0.01^2
      expect(outcome1Data.shares * outcome2Data.shares).to.equal(newMarketData.liquidity**2);
      expect(newOutcome1Data.shares * newOutcome2Data.shares).to.equal(newMarketData.liquidity**2);

      const myShares = await predictionMarketContract.getMyMarketShares({marketId});
      expect(myShares).to.eql({
        liquidityShares: 0.01,
        outcomeShares: {
          0: 0.015,
          1: 0.00,
        }
      });

      // Contract adds ethAmount to balance
      expect(newContractBalance).to.above(contractBalance);
      // TODO: check amountReceived from internal transactions
      const amountReceived = Number((newContractBalance - contractBalance).toFixed(5));
      expect(amountReceived).to.equal(ethAmount);
    }));

    it('should add liquidity', mochaAsync(async () => {
      const myShares = await predictionMarketContract.getMyMarketShares({marketId});
      const marketData = await predictionMarketContract.getMarketData({marketId});
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});

      try {
        const res = await predictionMarketContract.addLiquidity({marketId, ethAmount})
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const myNewShares = await predictionMarketContract.getMyMarketShares({marketId});
      const newMarketData = await predictionMarketContract.getMarketData({marketId});
      const newOutcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const newOutcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});

      // Outcome prices shoud remain the same after providing liquidity
      expect(newOutcome1Data.price).to.equal(outcome1Data.price);
      expect(newOutcome2Data.price).to.equal(outcome2Data.price);

      // # Shares Product = Liquidity^2
      // 0.0075 * 0.03 = 0.015^2
      expect(newMarketData.liquidity).to.above(marketData.liquidity);
      expect(newMarketData.liquidity).to.equal(0.015);
      expect(newOutcome1Data.shares).to.above(outcome1Data.shares);
      expect(newOutcome1Data.shares).to.equal(0.0075);
      expect(newOutcome2Data.shares).to.above(outcome2Data.shares);
      expect(newOutcome2Data.shares).to.equal(0.03);
      expect(newOutcome1Data.shares * newOutcome2Data.shares).to.equal(newMarketData.liquidity**2);

      // Price balances are not 0.5-0.5, liquidity will be added through shares + liquidity
      expect(myNewShares.liquidityShares).to.above(myShares.liquidityShares);
      expect(myNewShares.liquidityShares).to.equal(0.015);
      // shares balance of higher odd outcome increases
      expect(myNewShares.outcomeShares[0]).to.above(myShares.outcomeShares[0]);
      expect(myNewShares.outcomeShares[0]).to.equal(0.0225);
      // shares balance of lower odd outcome remains
      expect(myNewShares.outcomeShares[1]).to.equal(myShares.outcomeShares[1]);
      expect(myNewShares.outcomeShares[1]).to.equal(0);
    }));

    it('should remove liquidity', mochaAsync(async () => {
      const myShares = await predictionMarketContract.getMyMarketShares({marketId});
      const marketData = await predictionMarketContract.getMarketData({marketId});
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const contractBalance = Number(await predictionMarketContract.getBalance());
      const liquiditySharesToRemove = 0.005;

      try {
        const res = await predictionMarketContract.removeLiquidity({marketId, shares: liquiditySharesToRemove});
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const myNewShares = await predictionMarketContract.getMyMarketShares({marketId});
      const newMarketData = await predictionMarketContract.getMarketData({marketId});
      const newOutcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const newOutcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const newContractBalance = Number(await predictionMarketContract.getBalance());

      // Outcome prices shoud remain the same after removing liquidity
      expect(newOutcome1Data.price).to.equal(outcome1Data.price);
      expect(newOutcome2Data.price).to.equal(outcome2Data.price);

      // # Shares Product = Liquidity^2
      // 0.005 * 0.02 = 0.01^2
      expect(newMarketData.liquidity).to.below(marketData.liquidity);
      expect(newMarketData.liquidity).to.equal(0.01);
      expect(newOutcome1Data.shares).to.below(outcome1Data.shares);
      expect(newOutcome1Data.shares).to.equal(0.005);
      expect(newOutcome2Data.shares).to.below(outcome2Data.shares);
      expect(newOutcome2Data.shares).to.equal(0.02);
      expect(newOutcome1Data.shares * newOutcome2Data.shares).to.equal(newMarketData.liquidity**2);

      // Price balances are not 0.5-0.5, liquidity will be added through shares + liquidity
      expect(myNewShares.liquidityShares).to.below(myShares.liquidityShares);
      expect(myNewShares.liquidityShares).to.equal(0.01);
      // shares balance of higher odd outcome remains
      expect(myNewShares.outcomeShares[0]).to.equal(myShares.outcomeShares[0]);
      expect(myNewShares.outcomeShares[0]).to.equal(0.0225);
      // shares balance of lower odd outcome increases
      expect(myNewShares.outcomeShares[1]).to.above(myShares.outcomeShares[1]);
      expect(myNewShares.outcomeShares[1]).to.equal(0.0075);

      // User gets part of the liquidity tokens back in ETH
      expect(newContractBalance).to.below(contractBalance);
      // TODO: check amountTransferred from internal transactions
      const amountTransferred = Number((contractBalance - newContractBalance).toFixed(5));
      expect(amountTransferred).to.equal(0.0025);
    }));

    it('should sell outcome shares', mochaAsync(async () => {
      const outcomeId = 0;
      const maxOutcomeSharesToSell = 0.015;

      const marketData = await predictionMarketContract.getMarketData({marketId});
      const outcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const outcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const contractBalance = Number(await predictionMarketContract.getBalance());

      try {
        const res = await predictionMarketContract.sell({marketId, outcomeId, ethAmount, maxOutcomeSharesToSell});
        expect(res.status).to.equal(true);
      } catch(e) {
        // TODO: review this
      }

      const newMarketData = await predictionMarketContract.getMarketData({marketId});
      const newOutcome1Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[0]});
      const newOutcome2Data = await predictionMarketContract.getOutcomeData({marketId, outcomeId: outcomeIds[1]});
      const newContractBalance = Number(await predictionMarketContract.getBalance());

      // outcome price should decrease
      expect(newOutcome1Data.price).to.below(outcome1Data.price);
      expect(newOutcome1Data.price).to.equal(0.5);
      // opposite outcome price should increase
      expect(newOutcome2Data.price).to.above(outcome2Data.price);
      expect(newOutcome2Data.price).to.equal(0.5);
      // Prices sum = 1
      // 0.05 + 0.05 = 1
      expect(newOutcome1Data.price + newOutcome2Data.price).to.equal(1);

      // Liquidity value remains the same
      expect(newMarketData.liquidity).to.equal(marketData.liquidity);

      // outcome shares should increase
      expect(newOutcome1Data.shares).to.above(outcome1Data.shares);
      expect(newOutcome1Data.shares).to.equal(0.01);
      // opposite outcome shares should increase
      expect(newOutcome2Data.shares).to.below(outcome2Data.shares);
      expect(newOutcome2Data.shares).to.equal(0.01);
      // # Shares Product = Liquidity^2
      // 0.01 * 0.01 = 0.01^2
      expect(outcome1Data.shares * outcome2Data.shares).to.equal(newMarketData.liquidity**2);
      expect(newOutcome1Data.shares * newOutcome2Data.shares).to.equal(newMarketData.liquidity**2);

      const myShares = await predictionMarketContract.getMyMarketShares({marketId});
      expect(myShares).to.eql({
        liquidityShares: 0.01,
        outcomeShares: {
          0: 0.0075,
          1: 0.0075,
        }
      });

      // User gets shares value back in ETH
      expect(newContractBalance).to.below(contractBalance);
      // TODO: check amountTransferred from internal transactions
      const amountTransferred = Number((contractBalance - newContractBalance).toFixed(5));
      expect(amountTransferred).to.equal(0.01);
    }));
  });
});
