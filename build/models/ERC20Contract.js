"use strict";var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _extends2 = require("babel-runtime/helpers/extends");var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var ierc20 = require("../interfaces").ierc20;
var Numbers = require("../utils/Numbers");
var IContract = require('./IContract');var

ERC20Contract = function (_IContract) {(0, _inherits3.default)(ERC20Contract, _IContract);
	function ERC20Contract(params) {(0, _classCallCheck3.default)(this, ERC20Contract);var _this = (0, _possibleConstructorReturn3.default)(this, (ERC20Contract.__proto__ || (0, _getPrototypeOf2.default)(ERC20Contract)).call(this, (0, _extends3.default)({
			abi: ierc20 }, params)));
		_this.contractName = 'erc20';return _this;
	}(0, _createClass3.default)(ERC20Contract, [{ key: "__assert", value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:


								this.params.contract.use(ierc20, this.getAddress());_context.next = 3;return (
									this.getDecimalsAsync());case 3:this.params.decimals = _context.sent;case 4:case "end":return _context.stop();}}}, _callee, this);}));function __assert() {return _ref.apply(this, arguments);}return __assert;}() }, { key: "getContract", value: function getContract()


		{
			return this.params.contract.getContract();
		} }, { key: "getAddress", value: function getAddress()

		{
			return this.params.contractAddress;
		} }, { key: "transferTokenAmount", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {var

				toAddress = _ref3.toAddress,tokenAmount = _ref3.tokenAmount;var amountWithDecimals;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
								amountWithDecimals = Numbers.toSmartContractDecimals(
								tokenAmount,
								this.getDecimals());_context2.next = 3;return (

									this.__sendTx(
									this.params.contract.
									getContract().
									methods.transfer(toAddress, amountWithDecimals)));case 3:return _context2.abrupt("return", _context2.sent);case 4:case "end":return _context2.stop();}}}, _callee2, this);}));function transferTokenAmount(_x) {return _ref2.apply(this, arguments);}return transferTokenAmount;}() }, { key: "getTokenAmount", value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(



			address) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.t0 =
								Numbers;_context3.next = 3;return (
									this.getContract().methods.balanceOf(address).call());case 3:_context3.t1 = _context3.sent;_context3.t2 =
								this.getDecimals();return _context3.abrupt("return", _context3.t0.fromDecimals.call(_context3.t0, _context3.t1, _context3.t2));case 6:case "end":return _context3.stop();}}}, _callee3, this);}));function getTokenAmount(_x2) {return _ref4.apply(this, arguments);}return getTokenAmount;}() }, { key: "totalSupply", value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.t0 =




								Numbers;_context4.next = 3;return this.getContract().methods.totalSupply().call();case 3:_context4.t1 = _context4.sent;_context4.t2 = this.getDecimals();return _context4.abrupt("return", _context4.t0.fromDecimals.call(_context4.t0, _context4.t1, _context4.t2));case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function totalSupply() {return _ref5.apply(this, arguments);}return totalSupply;}() }, { key: "getABI", value: function getABI()


		{
			return this.params.contract;
		} }, { key: "getDecimals", value: function getDecimals()

		{
			return this.params.decimals;
		} }, { key: "getDecimalsAsync", value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (


									this.getContract().methods.decimals().call());case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}}, _callee5, this);}));function getDecimalsAsync() {return _ref6.apply(this, arguments);}return getDecimalsAsync;}() }, { key: "isApproved", value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref8) {var


				address = _ref8.address,amount = _ref8.amount,spenderAddress = _ref8.spenderAddress;var approvedAmount;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;_context6.t0 =

								Numbers;_context6.next = 4;return (
									this.getContract().methods.allowance(address, spenderAddress).call());case 4:_context6.t1 = _context6.sent;_context6.t2 =
								this.getDecimals();approvedAmount = _context6.t0.fromDecimals.call(_context6.t0, _context6.t1, _context6.t2);return _context6.abrupt("return",

								approvedAmount >= amount);case 10:_context6.prev = 10;_context6.t3 = _context6["catch"](0);throw _context6.t3;case 13:case "end":return _context6.stop();}}}, _callee6, this, [[0, 10]]);}));function isApproved(_x3) {return _ref7.apply(this, arguments);}return isApproved;}() }, { key: "approve", value: function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref10) {var





				address = _ref10.address,amount = _ref10.amount,callback = _ref10.callback;var amountWithDecimals, res;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.prev = 0;

								amountWithDecimals = Numbers.toSmartContractDecimals(
								amount,
								this.getDecimals());_context7.next = 4;return (

									this.__sendTx(
									this.params.contract.
									getContract().
									methods.approve(address, amountWithDecimals),
									null,
									null,
									callback));case 4:res = _context7.sent;return _context7.abrupt("return",

								res);case 8:_context7.prev = 8;_context7.t0 = _context7["catch"](0);throw _context7.t0;case 11:case "end":return _context7.stop();}}}, _callee7, this, [[0, 8]]);}));function approve(_x4) {return _ref9.apply(this, arguments);}return approve;}() }]);return ERC20Contract;}(IContract);






module.exports = ERC20Contract;