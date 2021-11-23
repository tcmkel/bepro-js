"use strict";var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _extends3 = require("babel-runtime/helpers/extends");var _extends4 = _interopRequireDefault(_extends3);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _ = require("lodash");
var moment = require("moment");

var prediction = require("../interfaces").prediction;

var Numbers = require("../utils/Numbers");
var IContract = require('./IContract');

var realitioLib = require('@reality.eth/reality-eth-lib/formatters/question');

var actions = {
	0: 'Buy',
	1: 'Sell',
	2: 'Add Liquidity',
	3: 'Remove Liquidity',
	4: 'Claim Winnings',
	5: 'Claim Liquidity',
	6: 'Claim Fees',
	7: 'Claim Voided'


	/**
                    * PredictionMarket Contract Object
                    * @constructor PredictionMarketContract
                    * @param {Web3} web3
                    * @param {Integer} decimals
                    * @param {Address} contractAddress
                    */ };var

PredictionMarketContract = function (_IContract) {(0, _inherits3.default)(PredictionMarketContract, _IContract);
	function PredictionMarketContract(params) {(0, _classCallCheck3.default)(this, PredictionMarketContract);var _this = (0, _possibleConstructorReturn3.default)(this, (PredictionMarketContract.__proto__ || (0, _getPrototypeOf2.default)(PredictionMarketContract)).call(this, (0, _extends4.default)({
			abi: prediction }, params)));
		_this.contractName = 'predictionMarket';return _this;
	}

	/* Get Functions */
	/**
                      * @function getMinimumRequiredBalance
                      * @description Returns minimum required ERC20 balance to create markets
                      * @returns {Integer} requiredBalance
                      */(0, _createClass3.default)(PredictionMarketContract, [{ key: "getMinimumRequiredBalance", value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var requiredBalance;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

									this.params.contract.
									getContract().
									methods.
									requiredBalance().
									call());case 2:requiredBalance = _context.sent;return _context.abrupt("return",

								Numbers.fromDecimalsNumber(requiredBalance, 18));case 4:case "end":return _context.stop();}}}, _callee, this);}));function getMinimumRequiredBalance() {return _ref.apply(this, arguments);}return getMinimumRequiredBalance;}()


		/* Get Functions */
		/**
                       * @function getFee
                       * @description Returns fee taken from every transaction to liquidity providers
                       * @returns {Integer} fee
                       */ }, { key: "getFee", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var fee;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

									this.params.contract.
									getContract().
									methods.
									fee().
									call());case 2:fee = _context2.sent;return _context2.abrupt("return",

								Numbers.fromDecimalsNumber(fee, 18));case 4:case "end":return _context2.stop();}}}, _callee2, this);}));function getFee() {return _ref2.apply(this, arguments);}return getFee;}()


		/* Get Functions */
		/**
                       * @function getMarkets
                       * @description Get Markets
                       * @returns {Integer | Array} Get Market Ids
                       */ }, { key: "getMarkets", value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var res;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (

									this.params.contract.
									getContract().
									methods.
									getMarkets().
									call());case 2:res = _context3.sent;return _context3.abrupt("return",
								res.map(function (marketId) {return Number(Numbers.fromHex(marketId));}));case 4:case "end":return _context3.stop();}}}, _callee3, this);}));function getMarkets() {return _ref3.apply(this, arguments);}return getMarkets;}()


		/**
                                                                                                                                                                                                                                        * @function getMarketData
                                                                                                                                                                                                                                        * @description Get getMarketData
                                                                                                                                                                                                                                        * @param {Integer} marketId
                                                                                                                                                                                                                                        * @returns {String} Market Name
                                                                                                                                                                                                                                        * @returns {Integer} closeDateTime
                                                                                                                                                                                                                                        * @returns {Integer} state
                                                                                                                                                                                                                                        * @returns {Address} Oracle Address
                                                                                                                                                                                                                                        * @returns {Integer} liquidity
                                                                                                                                                                                                                                        * @returns {Array} outcomeIds
                                                                                                                                                                                                                                        */ }, { key: "getMarketData", value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref5) {var
				marketId = _ref5.marketId;var marketData, outcomeIds;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
									this.params.contract.getContract().methods.getMarketData(marketId).call());case 2:marketData = _context4.sent;_context4.next = 5;return (
									this.__sendTx(this.getContract().methods.getMarketOutcomeIds(marketId), true));case 5:outcomeIds = _context4.sent;return _context4.abrupt("return",

								{
									name: '', // TODO: remove; deprecated
									closeDateTime: moment.unix(marketData[1]).format("YYYY-MM-DD HH:mm"),
									state: parseInt(marketData[0]),
									oracleAddress: '0x0000000000000000000000000000000000000000',
									liquidity: Numbers.fromDecimalsNumber(marketData[2], 18),
									outcomeIds: outcomeIds.map(function (outcomeId) {return Numbers.fromBigNumberToInteger(outcomeId, 18);}) });case 7:case "end":return _context4.stop();}}}, _callee4, this);}));function getMarketData(_x) {return _ref4.apply(this, arguments);}return getMarketData;}()



		/**
                                                                                                                                                                                                                                                                                   * @function getOutcomeData
                                                                                                                                                                                                                                                                                   * @description Get Market Outcome Data
                                                                                                                                                                                                                                                                                   * @param {Integer} marketId
                                                                                                                                                                                                                                                                                   * @param {Integer} outcomeId
                                                                                                                                                                                                                                                                                   * @returns {String} name
                                                                                                                                                                                                                                                                                   * @returns {Integer} price
                                                                                                                                                                                                                                                                                   * @returns {Integer} sahres
                                                                                                                                                                                                                                                                                   */ }, { key: "getOutcomeData", value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref7) {var
				marketId = _ref7.marketId,outcomeId = _ref7.outcomeId;var outcomeData;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
									this.params.contract.getContract().methods.getMarketOutcomeData(marketId, outcomeId).call());case 2:outcomeData = _context5.sent;return _context5.abrupt("return",

								{
									name: '', // TODO: remove; deprecated
									price: Numbers.fromDecimalsNumber(outcomeData[0], 18),
									shares: Numbers.fromDecimalsNumber(outcomeData[1], 18) });case 4:case "end":return _context5.stop();}}}, _callee5, this);}));function getOutcomeData(_x2) {return _ref6.apply(this, arguments);}return getOutcomeData;}()



		/**
                                                                                                                                                                                                                                    * @function getMarketDetails
                                                                                                                                                                                                                                    * @description getMarketDetails
                                                                                                                                                                                                                                    * @param {Integer} marketId
                                                                                                                                                                                                                                    * @returns {String} name
                                                                                                                                                                                                                                    * @returns {String} category
                                                                                                                                                                                                                                    * @returns {String} subcategory
                                                                                                                                                                                                                                    * @returns {String} image
                                                                                                                                                                                                                                    * @returns {Array} outcomes
                                                                                                                                                                                                                                    */ }, { key: "getMarketDetails", value: function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref9) {var
				marketId = _ref9.marketId;var marketData, outcomeIds, events, question;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
									this.params.contract.getContract().methods.getMarketData(marketId).call());case 2:marketData = _context6.sent;_context6.next = 5;return (
									this.__sendTx(this.getContract().methods.getMarketOutcomeIds(marketId), true));case 5:outcomeIds = _context6.sent;_context6.next = 8;return (

									this.getEvents('MarketCreated', { marketId: marketId }));case 8:events = _context6.sent;if (!(

								events.length === 0)) {_context6.next = 11;break;}return _context6.abrupt("return",

								{ name: '', category: '', subcategory: '', image: '', outcomes: [] });case 11:


								// parsing question with realitio standard
								question = realitioLib.populatedJSONForTemplate(
								'{"title": "%s", "type": "single-select", "outcomes": [%s], "category": "%s", "lang": "%s"}',
								events[0].returnValues.question);return _context6.abrupt("return",


								{
									name: question.title,
									category: question.category.split(';')[0],
									subcategory: question.category.split(';')[1],
									outcomes: question.outcomes,
									image: events[0].returnValues.image });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getMarketDetails(_x3) {return _ref8.apply(this, arguments);}return getMarketDetails;}()




		/**
                                                                                                                                                                                                                      * @function getAverageOutcomeBuyPrice
                                                                                                                                                                                                                      * @description Calculates average buy price of market outcome based on user events
                                                                                                                                                                                                                      * @param {Array} events
                                                                                                                                                                                                                      * @param {Integer} marketId
                                                                                                                                                                                                                      * @param {Integer} outcomeId
                                                                                                                                                                                                                      * @returns {Integer} price
                                                                                                                                                                                                                      */ }, { key: "getAverageOutcomeBuyPrice", value: function getAverageOutcomeBuyPrice(_ref10)
		{var events = _ref10.events,marketId = _ref10.marketId,outcomeId = _ref10.outcomeId;
			// filtering by marketId + outcomeId + buy action
			events = events.filter(function (event) {
				return (
					event.action === 'Buy' &&
					event.marketId === marketId &&
					event.outcomeId === outcomeId);

			});

			if (events.length === 0) return 0;

			var totalShares = events.map(function (item) {return item.shares;}).reduce(function (prev, next) {return prev + next;});
			var totalAmount = events.map(function (item) {return item.value;}).reduce(function (prev, next) {return prev + next;});

			return totalAmount / totalShares;
		}

		/**
     * @function getAverageAddLiquidityPrice
     * @description Calculates average add liquidity of market outcome based on user events
     * @param {Array} events
     * @param {Integer} marketId
     * @returns {Integer} price
     */ }, { key: "getAverageAddLiquidityPrice", value: function getAverageAddLiquidityPrice(_ref11)
		{var events = _ref11.events,marketId = _ref11.marketId;
			// filtering by marketId + add liquidity action
			events = events.filter(function (event) {
				return (
					event.action === 'Add Liquidity' &&
					event.marketId === marketId);

			});

			if (events.length === 0) return 0;

			var totalShares = events.map(function (item) {return item.shares;}).reduce(function (prev, next) {return prev + next;});
			var totalAmount = events.map(function (item) {return item.value;}).reduce(function (prev, next) {return prev + next;});

			return totalAmount / totalShares;
		}

		/**
     * @function getMyPortfolio
     * @description Get My Porfolio
     * @returns {Array} Outcome Shares
     */ }, { key: "getMyPortfolio", value: function () {var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {var _this2 = this;var account, marketIds, events;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (

									this.getMyAccount());case 2:account = _context8.sent;if (
								account) {_context8.next = 5;break;}return _context8.abrupt("return", []);case 5:_context8.next = 7;return (

									this.getMarkets());case 7:marketIds = _context8.sent;_context8.next = 10;return (
									this.getMyActions());case 10:events = _context8.sent;_context8.next = 13;return (


									marketIds.reduce(function () {var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(obj, marketId) {var marketShares, claimStatus, portfolio;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
																_this2.getContract().methods.getUserMarketShares(marketId, account).call());case 2:marketShares = _context7.sent;_context7.next = 5;return (
																_this2.getContract().methods.getUserClaimStatus(marketId, account).call());case 5:claimStatus = _context7.sent;

															portfolio = {
																liquidity: {
																	shares: Numbers.fromDecimalsNumber(marketShares[0], 18),
																	price: _this2.getAverageAddLiquidityPrice({ events: events, marketId: marketId }) },

																outcomes: {
																	0: {
																		shares: Numbers.fromDecimalsNumber(marketShares[1], 18),
																		price: _this2.getAverageOutcomeBuyPrice({ events: events, marketId: marketId, outcomeId: 0 }) },

																	1: {
																		shares: Numbers.fromDecimalsNumber(marketShares[2], 18),
																		price: _this2.getAverageOutcomeBuyPrice({ events: events, marketId: marketId, outcomeId: 1 }) } },


																claimStatus: {
																	winningsToClaim: claimStatus[0],
																	winningsClaimed: claimStatus[1],
																	liquidityToClaim: claimStatus[2],
																	liquidityClaimed: claimStatus[3],
																	liquidityFees: Numbers.fromDecimalsNumber(claimStatus[4], 18) } };_context7.t0 = _extends4.default;_context7.t1 = {};_context7.next = 11;return (




																obj);case 11:_context7.t2 = _context7.sent;_context7.t3 = (0, _defineProperty3.default)({},
															marketId, portfolio);_context7.next = 15;return (0, _context7.t0)(_context7.t1, _context7.t2, _context7.t3);case 15:return _context7.abrupt("return", _context7.sent);case 16:case "end":return _context7.stop();}}}, _callee7, _this2);}));return function (_x4, _x5) {return _ref13.apply(this, arguments);};}(),

									{}));case 13:return _context8.abrupt("return", _context8.sent);case 14:case "end":return _context8.stop();}}}, _callee8, this);}));function getMyPortfolio() {return _ref12.apply(this, arguments);}return getMyPortfolio;}()


		/**
                                                                                                                                                                                                                                        * @function getMyMarketShares
                                                                                                                                                                                                                                        * @description Get My Market Shares
                                                                                                                                                                                                                                        * @param {Integer} marketId
                                                                                                                                                                                                                                        * @returns {Integer} Liquidity Shares
                                                                                                                                                                                                                                        * @returns {Array} Outcome Shares
                                                                                                                                                                                                                                        */ }, { key: "getMyMarketShares", value: function () {var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(_ref15) {var
				marketId = _ref15.marketId;var account, marketShares;return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return (
									this.getMyAccount());case 2:account = _context9.sent;if (
								account) {_context9.next = 5;break;}return _context9.abrupt("return", []);case 5:_context9.next = 7;return (

									this.getContract().methods.getUserMarketShares(marketId, account).call());case 7:marketShares = _context9.sent;return _context9.abrupt("return",

								{
									liquidityShares: Numbers.fromDecimalsNumber(marketShares[0], 18),
									outcomeShares: {
										0: Numbers.fromDecimalsNumber(marketShares[1], 18),
										1: Numbers.fromDecimalsNumber(marketShares[2], 18) } });case 9:case "end":return _context9.stop();}}}, _callee9, this);}));function getMyMarketShares(_x6) {return _ref14.apply(this, arguments);}return getMyMarketShares;}() }, { key: "getMyActions", value: function () {var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {var account, events;return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return (





									this.getMyAccount());case 2:account = _context10.sent;if (
								account) {_context10.next = 5;break;}return _context10.abrupt("return", []);case 5:_context10.next = 7;return (

									this.getEvents('MarketActionTx', { user: account }));case 7:events = _context10.sent;return _context10.abrupt("return",


								events.map(function (event) {
									return {
										action: actions[Numbers.fromBigNumberToInteger(event.returnValues.action, 18)],
										marketId: Numbers.fromBigNumberToInteger(event.returnValues.marketId, 18),
										outcomeId: Numbers.fromBigNumberToInteger(event.returnValues.outcomeId, 18),
										shares: Numbers.fromDecimalsNumber(event.returnValues.shares, 18),
										value: Numbers.fromDecimalsNumber(event.returnValues.value, 18),
										timestamp: Numbers.fromBigNumberToInteger(event.returnValues.timestamp, 18),
										transactionHash: event.transactionHash };

								}));case 9:case "end":return _context10.stop();}}}, _callee10, this);}));function getMyActions() {return _ref16.apply(this, arguments);}return getMyActions;}()


		// TODO
		// /**
		//  * @function isMarketOpen
		//  * @param {Integer} marketId
		//  * @description Check if market is open for trading
		//  * @returns {Boolean}
		//  */
		// async isMarketOpen(marketId) {
		// 	return await this.getContract().methods.isMarketOpen(marketId).call();
		// }

		/**
   * @function getMarketOutcomePrice
   * @description Get Market Price
   * @param {Integer} marketId
   * @param {Integer} outcomeId
   * @return {Integer} price
   */ }, { key: "getMarketOutcomePrice", value: function () {var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(_ref18) {var
				marketId = _ref18.marketId,outcomeId = _ref18.outcomeId;return _regenerator2.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.t0 =
								Numbers;_context11.next = 3;return (
									this.__sendTx(
									this.getContract().methods.getMarketOutcomePrice(marketId, outcomeId),
									true));case 3:_context11.t1 = _context11.sent;return _context11.abrupt("return", _context11.t0.fromDecimals.call(_context11.t0, _context11.t1,

								18));case 5:case "end":return _context11.stop();}}}, _callee11, this);}));function getMarketOutcomePrice(_x7) {return _ref17.apply(this, arguments);}return getMarketOutcomePrice;}()



		/**
                                                                                                                                                                                               * @function getMarketPrices
                                                                                                                                                                                               * @description Get Market Price
                                                                                                                                                                                               * @param {Integer} marketId
                                                                                                                                                                                               * @return {Object} prices
                                                                                                                                                                                               */ }, { key: "getMarketPrices", value: function () {var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref20) {var
				marketId = _ref20.marketId;var marketPrices;return _regenerator2.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return (
									this.getContract().methods.getMarketPrices(marketId).call());case 2:marketPrices = _context12.sent;return _context12.abrupt("return",

								{
									liquidity: Numbers.fromDecimalsNumber(marketPrices[0], 18),
									outcomes: {
										0: Numbers.fromDecimalsNumber(marketPrices[1], 18),
										1: Numbers.fromDecimalsNumber(marketPrices[2], 18) } });case 4:case "end":return _context12.stop();}}}, _callee12, this);}));function getMarketPrices(_x8) {return _ref19.apply(this, arguments);}return getMarketPrices;}()




		/* POST User Functions */

		/**
                             * @function createMarket
                             * @description Create a µarket
                             * @param {String} name
                             * @param {Integer} duration
                             * @param {Address} oracleAddress
                             * @param {String} outcome1Name
                             * @param {String} outcome2Name
                             * @param {Integer} ethAmount
                             */ }, { key: "createMarket", value: function () {var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(_ref22) {var
				name = _ref22.name,image = _ref22.image,duration = _ref22.duration,oracleAddress = _ref22.oracleAddress,outcomes = _ref22.outcomes,category = _ref22.category,ethAmount = _ref22.ethAmount;var ethToWei, question;return _regenerator2.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
								ethToWei = Numbers.toSmartContractDecimals(ethAmount, 18);
								question = realitioLib.encodeText('single-select', name, outcomes, category);_context13.next = 4;return (

									this.__sendTx(
									this.getContract().methods.createMarket(
									question,
									image,
									duration,
									oracleAddress,
									outcomes.length),

									false,
									ethToWei));case 4:return _context13.abrupt("return", _context13.sent);case 5:case "end":return _context13.stop();}}}, _callee13, this);}));function createMarket(_x9) {return _ref21.apply(this, arguments);}return createMarket;}() }, { key: "addLiquidity",



		/**
                                                                                                                                                                                                                                                                         * @function addLiquidity
                                                                                                                                                                                                                                                                         * @description Add Liquidity from Market
                                                                                                                                                                                                                                                                         * @param {Integer} marketId
                                                                                                                                                                                                                                                                         * @param {Integer} ethAmount
                                                                                                                                                                                                                                                                         */value: function () {var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(_ref24) {var
				marketId = _ref24.marketId,ethAmount = _ref24.ethAmount;var ethToWei;return _regenerator2.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:
								ethToWei = Numbers.toSmartContractDecimals(ethAmount, 18);_context14.next = 3;return (
									this.__sendTx(
									this.getContract().methods.addLiquidity(marketId),
									false,
									ethToWei));case 3:return _context14.abrupt("return", _context14.sent);case 4:case "end":return _context14.stop();}}}, _callee14, this);}));function addLiquidity(_x10) {return _ref23.apply(this, arguments);}return addLiquidity;}() }, { key: "removeLiquidity",



		/**
                                                                                                                                                                                                                                                                             * @function removeLiquidity
                                                                                                                                                                                                                                                                             * @description Remove Liquidity from Market
                                                                                                                                                                                                                                                                             * @param {Integer} marketId
                                                                                                                                                                                                                                                                             * @param {Integer} shares
                                                                                                                                                                                                                                                                             */value: function () {var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(_ref26) {var
				marketId = _ref26.marketId,shares = _ref26.shares;return _regenerator2.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:
								shares = Numbers.toSmartContractDecimals(shares, 18);_context15.next = 3;return (
									this.__sendTx(
									this.getContract().methods.removeLiquidity(marketId, shares)));case 3:return _context15.abrupt("return", _context15.sent);case 4:case "end":return _context15.stop();}}}, _callee15, this);}));function removeLiquidity(_x11) {return _ref25.apply(this, arguments);}return removeLiquidity;}() }, { key: "buy",




		/**
                                                                                                                                                                                                                                                                                                                           * @function buy
                                                                                                                                                                                                                                                                                                                           * @description Buy Shares of a Market Outcome
                                                                                                                                                                                                                                                                                                                           * @param {Integer} marketId
                                                                                                                                                                                                                                                                                                                           * @param {Integer} outcomeId
                                                                                                                                                                                                                                                                                                                           * @param {Integer} ethAmount
                                                                                                                                                                                                                                                                                                                           */value: function () {var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(_ref28) {var
				marketId = _ref28.marketId,outcomeId = _ref28.outcomeId,ethAmount = _ref28.ethAmount,minOutcomeSharesToBuy = _ref28.minOutcomeSharesToBuy;var ethToWei;return _regenerator2.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:
								ethToWei = Numbers.toSmartContractDecimals(ethAmount, 18);
								minOutcomeSharesToBuy = Numbers.toSmartContractDecimals(minOutcomeSharesToBuy, 18);_context16.next = 4;return (

									this.__sendTx(
									this.getContract().methods.buy(marketId, outcomeId, minOutcomeSharesToBuy),
									false,
									ethToWei));case 4:return _context16.abrupt("return", _context16.sent);case 5:case "end":return _context16.stop();}}}, _callee16, this);}));function buy(_x12) {return _ref27.apply(this, arguments);}return buy;}() }, { key: "sell",



		/**
                                                                                                                                                                                                                                                * @function sell
                                                                                                                                                                                                                                                * @description Sell Shares of a Market Outcome
                                                                                                                                                                                                                                                * @param {Integer} marketId
                                                                                                                                                                                                                                                * @param {Integer} outcomeId
                                                                                                                                                                                                                                                * @param {Integer} shares
                                                                                                                                                                                                                                                */value: function () {var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(_ref30) {var
				marketId = _ref30.marketId,outcomeId = _ref30.outcomeId,ethAmount = _ref30.ethAmount,maxOutcomeSharesToSell = _ref30.maxOutcomeSharesToSell;return _regenerator2.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:
								ethAmount = Numbers.toSmartContractDecimals(ethAmount, 18);
								maxOutcomeSharesToSell = Numbers.toSmartContractDecimals(maxOutcomeSharesToSell, 18);_context17.next = 4;return (
									this.__sendTx(
									this.getContract().methods.sell(marketId, outcomeId, ethAmount, maxOutcomeSharesToSell),
									false));case 4:return _context17.abrupt("return", _context17.sent);case 5:case "end":return _context17.stop();}}}, _callee17, this);}));function sell(_x13) {return _ref29.apply(this, arguments);}return sell;}() }, { key: "resolveMarketOutcome", value: function () {var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(_ref32) {var



				marketId = _ref32.marketId;return _regenerator2.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:_context18.next = 2;return (
									this.__sendTx(
									this.getContract().methods.resolveMarketOutcome(marketId),
									false));case 2:return _context18.abrupt("return", _context18.sent);case 3:case "end":return _context18.stop();}}}, _callee18, this);}));function resolveMarketOutcome(_x14) {return _ref31.apply(this, arguments);}return resolveMarketOutcome;}() }, { key: "claimWinnings", value: function () {var _ref33 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(_ref34) {var



				marketId = _ref34.marketId;return _regenerator2.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:_context19.next = 2;return (
									this.__sendTx(
									this.getContract().methods.claimWinnings(marketId),
									false));case 2:return _context19.abrupt("return", _context19.sent);case 3:case "end":return _context19.stop();}}}, _callee19, this);}));function claimWinnings(_x15) {return _ref33.apply(this, arguments);}return claimWinnings;}() }, { key: "claimVoidedOutcomeShares", value: function () {var _ref35 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(_ref36) {var



				marketId = _ref36.marketId,outcomeId = _ref36.outcomeId;return _regenerator2.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:_context20.next = 2;return (
									this.__sendTx(
									this.getContract().methods.claimVoidedOutcomeShares(marketId, outcomeId),
									false));case 2:return _context20.abrupt("return", _context20.sent);case 3:case "end":return _context20.stop();}}}, _callee20, this);}));function claimVoidedOutcomeShares(_x16) {return _ref35.apply(this, arguments);}return claimVoidedOutcomeShares;}() }, { key: "claimLiquidity", value: function () {var _ref37 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21(_ref38) {var



				marketId = _ref38.marketId;return _regenerator2.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:_context21.next = 2;return (
									this.__sendTx(
									this.getContract().methods.claimLiquidity(marketId),
									false));case 2:return _context21.abrupt("return", _context21.sent);case 3:case "end":return _context21.stop();}}}, _callee21, this);}));function claimLiquidity(_x17) {return _ref37.apply(this, arguments);}return claimLiquidity;}() }, { key: "calcBuyAmount", value: function () {var _ref39 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22(_ref40) {var



				marketId = _ref40.marketId,outcomeId = _ref40.outcomeId,ethAmount = _ref40.ethAmount;var amount;return _regenerator2.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:
								ethAmount = Numbers.toSmartContractDecimals(ethAmount, 18);_context22.next = 3;return (

									this.getContract().
									methods.calcBuyAmount(
									ethAmount,
									marketId,
									outcomeId).

									call());case 3:amount = _context22.sent;return _context22.abrupt("return",

								Numbers.fromDecimalsNumber(amount, 18));case 5:case "end":return _context22.stop();}}}, _callee22, this);}));function calcBuyAmount(_x18) {return _ref39.apply(this, arguments);}return calcBuyAmount;}() }, { key: "calcSellAmount", value: function () {var _ref41 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23(_ref42) {var


				marketId = _ref42.marketId,outcomeId = _ref42.outcomeId,ethAmount = _ref42.ethAmount;var amount;return _regenerator2.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:
								ethAmount = Numbers.toSmartContractDecimals(ethAmount, 18);_context23.next = 3;return (

									this.getContract().
									methods.calcSellAmount(
									ethAmount,
									marketId,
									outcomeId).

									call());case 3:amount = _context23.sent;return _context23.abrupt("return",

								Numbers.fromDecimalsNumber(amount, 18));case 5:case "end":return _context23.stop();}}}, _callee23, this);}));function calcSellAmount(_x19) {return _ref41.apply(this, arguments);}return calcSellAmount;}() }]);return PredictionMarketContract;}(IContract);



module.exports = PredictionMarketContract;