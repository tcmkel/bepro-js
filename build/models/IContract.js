"use strict";var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Contract = require("../utils/Contract");
var _ = require("lodash");
var axios = require('axios');

/**
                               * Contract Object Interface
                               * @constructor IContract
                               * @param {Web3} web3
                               * @param {Address} contractAddress ? (opt)
                               * @param {ABI} abi
                               * @param {Account} acc ? (opt)
                               */var

IContract = function () {
	function IContract(_ref)





	{var web3 = _ref.web3,_ref$contractAddress = _ref.contractAddress,contractAddress = _ref$contractAddress === undefined ? null : _ref$contractAddress,abi = _ref.abi,acc = _ref.acc,web3EventsProvider = _ref.web3EventsProvider;(0, _classCallCheck3.default)(this, IContract);
		try {
			if (!abi) {
				throw new Error("No ABI Interface provided");
			}
			if (!web3) {
				throw new Error("Please provide a valid web3 provider");
			};

			this.web3 = web3;

			if (acc) {
				this.acc = acc;
			}

			this.params = {
				web3: web3,
				abi: abi,
				contractAddress: contractAddress,
				web3EventsProvider: web3EventsProvider,
				contract: new Contract(web3, abi, contractAddress) };

		} catch (err) {
			throw err;
		}
	}(0, _createClass3.default)(IContract, [{ key: "__init__", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;if (



								this.getAddress()) {_context.next = 3;break;}throw (
									new Error("Please add a Contract Address"));case 3:_context.next = 5;return (


									this.__assert());case 5:_context.next = 10;break;case 7:_context.prev = 7;_context.t0 = _context["catch"](0);throw _context.t0;case 10:case "end":return _context.stop();}}}, _callee, this, [[0, 7]]);}));function __init__() {return _ref2.apply(this, arguments);}return __init__;}() }, { key: "__metamaskCall", value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {var





				f = _ref4.f,acc = _ref4.acc,value = _ref4.value,_ref4$callback = _ref4.callback,callback = _ref4$callback === undefined ? function () {} : _ref4$callback;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt("return",
								f.send({
									from: acc,
									value: value }).

								on("confirmation", function (confirmationNumber, receipt) {
									callback(confirmationNumber);
									if (confirmationNumber > 0) {
										resolve(receipt);
									}
								}).
								on("error", function (err) {
									reject(err);
								}));case 1:case "end":return _context2.stop();}}}, _callee2, this);}));function __metamaskCall(_x) {return _ref3.apply(this, arguments);}return __metamaskCall;}() }, { key: "getABI", value: function getABI()


		{
			return this.params.abi;
		} }, { key: "__sendTx", value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(

			f) {var call = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var value = arguments[2];var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};var res, accounts, data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;if (!(


								!this.acc && !call)) {_context3.next = 10;break;}_context3.next = 4;return (
									this.params.web3.eth.getAccounts());case 4:accounts = _context3.sent;_context3.next = 7;return (
									this.__metamaskCall({ f: f, acc: accounts[0], value: value, callback: callback }));case 7:res = _context3.sent;_context3.next = 26;break;case 10:if (!(
								this.acc && !call)) {_context3.next = 17;break;}
								data = f.encodeABI();_context3.next = 14;return (
									this.params.contract.send(
									this.acc.getAccount(),
									data,
									value).
									catch(function (err) {throw err;}));case 14:res = _context3.sent;_context3.next = 26;break;case 17:if (!(
								this.acc && call)) {_context3.next = 23;break;}_context3.next = 20;return (
									f.call({ from: this.acc.getAddress() }).catch(function (err) {throw err;}));case 20:res = _context3.sent;_context3.next = 26;break;case 23:_context3.next = 25;return (

									f.call().catch(function (err) {throw err;}));case 25:res = _context3.sent;case 26:return _context3.abrupt("return",

								res);case 29:_context3.prev = 29;_context3.t0 = _context3["catch"](0);throw _context3.t0;case 32:case "end":return _context3.stop();}}}, _callee3, this, [[0, 29]]);}));function __sendTx(_x2) {return _ref5.apply(this, arguments);}return __sendTx;}() }, { key: "__deploy", value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(





			params, callback) {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
									this.params.contract.deploy(
									this.acc,
									this.params.contract.getABI(),
									this.params.contract.getJSON().bytecode,
									params,
									callback));case 2:return _context4.abrupt("return", _context4.sent);case 3:case "end":return _context4.stop();}}}, _callee4, this);}));function __deploy(_x5, _x6) {return _ref6.apply(this, arguments);}return __deploy;}() }, { key: "__assert", value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:if (




								this.getAddress()) {_context5.next = 2;break;}throw (
									new Error("Contract is not deployed, first deploy it and provide a contract address"));case 2:

								/* Use ABI */
								this.params.contract.use(this.params.abi, this.getAddress());case 3:case "end":return _context5.stop();}}}, _callee5, this);}));function __assert() {return _ref7.apply(this, arguments);}return __assert;}()


		/**
                                                                                                                                                                                                                       * @function deploy
                                                                                                                                                                                                                       * @description Deploy the Contract
                                                                                                                                                                                                                      */ }, { key: "deploy", value: function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref9) {var
				callback = _ref9.callback,_ref9$params = _ref9.params,params = _ref9$params === undefined ? [] : _ref9$params;var res;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
									this.__deploy(params, callback));case 2:res = _context6.sent;
								this.params.contractAddress = res.contractAddress;
								/* Call to Backend API */_context6.next = 6;return (
									this.__assert());case 6:return _context6.abrupt("return",
								res);case 7:case "end":return _context6.stop();}}}, _callee6, this);}));function deploy(_x7) {return _ref8.apply(this, arguments);}return deploy;}() }, { key: "setNewOwner",



		/**
                                                                                                                                                                                       * @function setNewOwner
                                                                                                                                                                                       * @description Set New Owner of the Contract
                                                                                                                                                                                       * @param {string} address
                                                                                                                                                                                       */value: function () {var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref11) {var
				address = _ref11.address;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
									this.__sendTx(
									this.params.contract.
									getContract().
									methods.transferOwnership(address)));case 2:return _context7.abrupt("return", _context7.sent);case 3:case "end":return _context7.stop();}}}, _callee7, this);}));function setNewOwner(_x8) {return _ref10.apply(this, arguments);}return setNewOwner;}()



		/**
                                                                                                                                                                                                                                                                   * @function owner
                                                                                                                                                                                                                                                                   * @description Get Owner of the Contract
                                                                                                                                                                                                                                                                   * @returns {string} address
                                                                                                                                                                                                                                                                   */ }, { key: "owner", value: function () {var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (


									this.params.contract.getContract().methods.owner().call());case 2:return _context8.abrupt("return", _context8.sent);case 3:case "end":return _context8.stop();}}}, _callee8, this);}));function owner() {return _ref12.apply(this, arguments);}return owner;}()


		/**
                                                                                                                                                                                                                                                                          * @function isPaused
                                                                                                                                                                                                                                                                          * @description Get Owner of the Contract
                                                                                                                                                                                                                                                                          * @returns {boolean}
                                                                                                                                                                                                                                                                          */ }, { key: "isPaused", value: function () {var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return (


									this.params.contract.getContract().methods.paused().call());case 2:return _context9.abrupt("return", _context9.sent);case 3:case "end":return _context9.stop();}}}, _callee9, this);}));function isPaused() {return _ref13.apply(this, arguments);}return isPaused;}()


		/**
                                                                                                                                                                                                                                                                                 * @function pauseContract
                                                                                                                                                                                                                                                                                 * @type admin
                                                                                                                                                                                                                                                                                 * @description Pause Contract
                                                                                                                                                                                                                                                                                 */ }, { key: "pauseContract", value: function () {var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return (

									this.__sendTx(
									this.params.contract.getContract().methods.pause()));case 2:return _context10.abrupt("return", _context10.sent);case 3:case "end":return _context10.stop();}}}, _callee10, this);}));function pauseContract() {return _ref14.apply(this, arguments);}return pauseContract;}()



		/**
                                                                                                                                                                                                                                                                                        * @function unpauseContract
                                                                                                                                                                                                                                                                                        * @type admin
                                                                                                                                                                                                                                                                                        * @description Unpause Contract
                                                                                                                                                                                                                                                                                        */ }, { key: "unpauseContract", value: function () {var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {return _regenerator2.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.next = 2;return (

									this.__sendTx(
									this.params.contract.getContract().methods.unpause()));case 2:return _context11.abrupt("return", _context11.sent);case 3:case "end":return _context11.stop();}}}, _callee11, this);}));function unpauseContract() {return _ref15.apply(this, arguments);}return unpauseContract;}()



		/* Optional */

		/**
                  * @function removeOtherERC20Tokens
                  * @description Remove Tokens from other ERC20 Address (in case of accident)
                  * @param {Address} tokenAddress
                  * @param {Address} toAddress
                  */ }, { key: "removeOtherERC20Tokens", value: function () {var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref17) {var
				tokenAddress = _ref17.tokenAddress,toAddress = _ref17.toAddress;return _regenerator2.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return (
									this.__sendTx(
									this.params.contract.
									getContract().
									methods.removeOtherERC20Tokens(tokenAddress, toAddress)));case 2:return _context12.abrupt("return", _context12.sent);case 3:case "end":return _context12.stop();}}}, _callee12, this);}));function removeOtherERC20Tokens(_x9) {return _ref16.apply(this, arguments);}return removeOtherERC20Tokens;}() }, { key: "safeGuardAllTokens",



		/**
                                                                                                                                                                                                                                                                                                                                                  * @function safeGuardAllTokens
                                                                                                                                                                                                                                                                                                                                                  * @description Remove all tokens for the sake of bug or problem in the smart contract, contract has to be paused first, only Admin
                                                                                                                                                                                                                                                                                                                                                  * @param {Address} toAddress
                                                                                                                                                                                                                                                                                                                                                  */value: function () {var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(_ref19) {var
				toAddress = _ref19.toAddress;return _regenerator2.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:_context13.next = 2;return (
									this.__sendTx(
									this.params.contract.
									getContract().
									methods.safeGuardAllTokens(toAddress)));case 2:return _context13.abrupt("return", _context13.sent);case 3:case "end":return _context13.stop();}}}, _callee13, this);}));function safeGuardAllTokens(_x10) {return _ref18.apply(this, arguments);}return safeGuardAllTokens;}() }, { key: "changeTokenAddress",



		/**
                                                                                                                                                                                                                                                                                                                         * @function changeTokenAddress
                                                                                                                                                                                                                                                                                                                         * @description Change Token Address of Application
                                                                                                                                                                                                                                                                                                                         * @param {Address} newTokenAddress
                                                                                                                                                                                                                                                                                                                         */value: function () {var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(_ref21) {var
				newTokenAddress = _ref21.newTokenAddress;return _regenerator2.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.next = 2;return (
									this.__sendTx(
									this.params.contract.
									getContract().
									methods.changeTokenAddress(newTokenAddress)));case 2:return _context14.abrupt("return", _context14.sent);case 3:case "end":return _context14.stop();}}}, _callee14, this);}));function changeTokenAddress(_x11) {return _ref20.apply(this, arguments);}return changeTokenAddress;}() }, { key: "getAddress",



		/**
                                                                                                                                                                                                                                                                                                                       * @function getAddress
                                                                                                                                                                                                                                                                                                                       * @description Get Balance of Contract
                                                                                                                                                                                                                                                                                                                       * @param {Integer} Balance
                                                                                                                                                                                                                                                                                                                       */value: function getAddress()
		{
			return this.params.contractAddress;
		}

		/**
     * @function getContract
     * @description Gets Contract
     * @return {Contract} Contract
     */ }, { key: "getContract", value: function getContract()
		{
			return this.params.contract.getContract();
		}

		/**
     * @function getBalance
     * @description Get Balance of Contract
     * @param {Integer} Balance
     */ }, { key: "getBalance", value: function () {var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {var wei;return _regenerator2.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:_context15.next = 2;return (


									this.web3.eth.getBalance(this.getAddress()));case 2:wei = _context15.sent;return _context15.abrupt("return",
								this.web3.utils.fromWei(wei, 'ether'));case 4:case "end":return _context15.stop();}}}, _callee15, this);}));function getBalance() {return _ref22.apply(this, arguments);}return getBalance;}() }, { key: "getMyAccount",


		/**
                                                                                                                                                                                                                                  * @function getMyAccount
                                                                                                                                                                                                                                  * @description Returns connected wallet account address
                                                                                                                                                                                                                                  * @returns {String | undefined} address
                                                                                                                                                                                                                                  */value: function () {var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {var accounts;return _regenerator2.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!

								this.acc) {_context16.next = 2;break;}return _context16.abrupt("return",
								this.acc.getAddress());case 2:_context16.next = 4;return (


									this.params.web3.eth.getAccounts());case 4:accounts = _context16.sent;return _context16.abrupt("return",

								accounts[0]);case 6:case "end":return _context16.stop();}}}, _callee16, this);}));function getMyAccount() {return _ref23.apply(this, arguments);}return getMyAccount;}()


		/**
                                                                                                                                                                                  * @function getEvents
                                                                                                                                                                                  * @description Gets contract events
                                                                                                                                                                                  * @returns {String | undefined} address
                                                                                                                                                                                  */ }, { key: "getEvents", value: function () {var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(
			event, filter) {var events, uri, _ref25, data;return _regenerator2.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:if (
								this.params.web3EventsProvider) {_context17.next = 3;break;}
								events = this.getContract().getPastEvents(event, {
									fromBlock: 0,
									toBlock: 'latest',
									filter: filter });return _context17.abrupt("return",


								events);case 3:


								// getting events via http from web3 events provide
								uri = this.params.web3EventsProvider + "/events?contract=" + this.contractName + "&address=" + this.getAddress() + "&eventName=" + event;
								if (filter) uri = uri.concat("&filter=" + (0, _stringify2.default)(filter));_context17.next = 7;return (

									axios.get(uri));case 7:_ref25 = _context17.sent;data = _ref25.data;return _context17.abrupt("return",
								data);case 10:case "end":return _context17.stop();}}}, _callee17, this);}));function getEvents(_x12, _x13) {return _ref24.apply(this, arguments);}return getEvents;}() }]);return IContract;}();



module.exports = IContract;