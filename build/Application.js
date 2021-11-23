"use strict";var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Web3 = require("web3");

var ERC20Contract = require("./models/index").ERC20Contract;
var PredictionMarketContract = require("./models/index").PredictionMarketContract;
var RealitioERC20Contract = require("./models/index").RealitioERC20Contract;

var Account = require('./utils/Account');

var networksEnum = (0, _freeze2.default)({
	1: "Main",
	2: "Morden",
	3: "Ropsten",
	4: "Rinkeby",
	42: "Kovan" });var


Application = function () {
	function Application(_ref) {var web3Provider = _ref.web3Provider,web3PrivateKey = _ref.web3PrivateKey,web3EventsProvider = _ref.web3EventsProvider;(0, _classCallCheck3.default)(this, Application);
		this.web3Provider = web3Provider;
		// evm logs http source
		this.web3EventsProvider = web3EventsProvider;

		// IMPORTANT: this parameter should only be used for testing purposes
		if (web3PrivateKey) {
			this.start();
			this.login();
			this.account = new Account(this.web3, this.web3.eth.accounts.privateKeyToAccount(web3PrivateKey));
		}
	}

	/**********/
	/** CORE **/
	/**********/

	/**
               * @name start
               * @description Start the Application
               */(0, _createClass3.default)(Application, [{ key: "start", value: function start()
		{
			this.web3 = new Web3(new Web3.providers.HttpProvider(this.web3Provider));
			if (typeof window !== "undefined") {
				window.web3 = this.web3;
			}
		}

		/**
     * @name login
     * @description Login with Metamask or a web3 provider
     */ }, { key: "login", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;if (!(


								typeof window === "undefined")) {_context.next = 3;break;}return _context.abrupt("return", false);case 3:if (!
								window.ethereum) {_context.next = 9;break;}
								window.web3 = new Web3(window.ethereum);
								this.web3 = window.web3;_context.next = 8;return (
									window.ethereum.enable());case 8:return _context.abrupt("return",
								true);case 9:return _context.abrupt("return",

								false);case 12:_context.prev = 12;_context.t0 = _context["catch"](0);throw _context.t0;case 15:case "end":return _context.stop();}}}, _callee, this, [[0, 12]]);}));function login() {return _ref2.apply(this, arguments);}return login;}() }, { key: "isLoggedIn",





		/**
                                                                                                                                                                                                                                                                             * @name isLoggedIn
                                                                                                                                                                                                                                                                             * @description Returns wether metamask account is connected to service or not
                                                                                                                                                                                                                                                                             */value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var accounts;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;if (!(


								typeof window === "undefined" || typeof window.ethereum === "undefined")) {_context2.next = 3;break;}return _context2.abrupt("return", false);case 3:_context2.next = 5;return (
									ethereum.request({ method: 'eth_accounts' }));case 5:accounts = _context2.sent;return _context2.abrupt("return",

								accounts.length > 0);case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](0);return _context2.abrupt("return",

								false);case 12:case "end":return _context2.stop();}}}, _callee2, this, [[0, 9]]);}));function isLoggedIn() {return _ref3.apply(this, arguments);}return isLoggedIn;}() }, { key: "getPredictionMarketContract",



		/*************/
		/** GETTERS **/
		/*************/

		/**
                   * @name getPredictionMarketContract
                   * @param {Address} ContractAddress (Opt) If it is deployed
                   * @description Create a PredictionMarket Contract
                   */value: function getPredictionMarketContract()
		{var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref4$contractAddress = _ref4.contractAddress,contractAddress = _ref4$contractAddress === undefined ? null : _ref4$contractAddress;
			try {
				return new PredictionMarketContract({
					web3: this.web3,
					contractAddress: contractAddress,
					acc: this.account,
					web3EventsProvider: this.web3EventsProvider });

			} catch (err) {
				throw err;
			}
		} }, { key: "getRealitioERC20Contract",

		/**
                                           * @name getRealitioERC20Contract
                                           * @param {Address} ContractAddress (Opt) If it is deployed
                                           * @description Create a RealitioERC20 Contract
                                           */value: function getRealitioERC20Contract()
		{var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref5$contractAddress = _ref5.contractAddress,contractAddress = _ref5$contractAddress === undefined ? null : _ref5$contractAddress;
			try {
				return new RealitioERC20Contract({
					web3: this.web3,
					contractAddress: contractAddress,
					acc: this.account,
					web3EventsProvider: this.web3EventsProvider });

			} catch (err) {
				throw err;
			}
		} }, { key: "getERC20Contract",

		/**
                                   * @name getERC20Contract
                                   * @param {Address} ContractAddress (Opt) If it is deployed
                                   * @description Create a ERC20 Contract
                                   */value: function getERC20Contract(_ref6)
		{var _ref6$contractAddress = _ref6.contractAddress,contractAddress = _ref6$contractAddress === undefined ? null : _ref6$contractAddress;
			try {
				return new ERC20Contract({
					web3: this.web3,
					contractAddress: contractAddress,
					acc: this.account,
					web3EventsProvider: this.web3EventsProvider });

			} catch (err) {
				throw err;
			}
		} }, { key: "getETHNetwork",

		/***********/
		/** UTILS **/
		/***********/

		/**
                 * @name getETHNetwork
                 * @description Access current ETH Network used
                 * @returns {String} Eth Network
                 */value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var netId, networkName;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (

									this.web3.eth.net.getId());case 2:netId = _context3.sent;
								networkName = networksEnum.hasOwnProperty(netId) ?
								networksEnum[netId] :
								"Unknown";return _context3.abrupt("return",
								networkName);case 5:case "end":return _context3.stop();}}}, _callee3, this);}));function getETHNetwork() {return _ref7.apply(this, arguments);}return getETHNetwork;}() }, { key: "getAddress",


		/**
                                                                                                                                                                                                         * @name getAddress
                                                                                                                                                                                                         * @description Access current Address Being Used under Web3 Injector (ex : Metamask)
                                                                                                                                                                                                         * @returns {Address} Address
                                                                                                                                                                                                         */value: function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var accounts;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (

									this.web3.eth.getAccounts());case 2:accounts = _context4.sent;return _context4.abrupt("return",
								accounts[0]);case 4:case "end":return _context4.stop();}}}, _callee4, this);}));function getAddress() {return _ref8.apply(this, arguments);}return getAddress;}() }, { key: "getETHBalance",


		/**
                                                                                                                                                                                                      * @name getETHBalance
                                                                                                                                                                                                      * @description Access current ETH Balance Available for the Injected Web3 Address
                                                                                                                                                                                                      * @returns {Integer} Balance
                                                                                                                                                                                                      */value: function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var address, wei;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (

									this.getAddress());case 2:address = _context5.sent;_context5.next = 5;return (
									window.web3.eth.getBalance(address));case 5:wei = _context5.sent;return _context5.abrupt("return",
								this.web3.utils.fromWei(wei, "ether"));case 7:case "end":return _context5.stop();}}}, _callee5, this);}));function getETHBalance() {return _ref9.apply(this, arguments);}return getETHBalance;}() }]);return Application;}();



module.exports = Application;