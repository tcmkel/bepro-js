"use strict";var _promise = require("babel-runtime/core-js/promise");var _promise2 = _interopRequireDefault(_promise);var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _ = require("lodash");
var web = require("web3");var

Contract = function () {
	function Contract(web3, contract_json, address) {(0, _classCallCheck3.default)(this, Contract);
		this.web3 = web3;
		this.json = contract_json;
		this.abi = contract_json.abi;
		this.address = address;
		this.contract = new web3.eth.Contract(contract_json.abi, address);
	}(0, _createClass3.default)(Contract, [{ key: "deploy", value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(

			account, abi, byteCode) {var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};var data, rawTransaction, accounts, res;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

								this.contract = new this.web3.eth.Contract(abi);if (!
								account) {_context.next = 12;break;}
								data = this.contract.deploy({
									data: byteCode,
									arguments: args });_context.next = 6;return (


									account.getAccount().signTransaction({
										data: data.encodeABI(),
										from: account.getAddress(),
										gas: 5913388 }));case 6:rawTransaction = _context.sent.
								rawTransaction;_context.next = 9;return (

									this.web3.eth.sendSignedTransaction(rawTransaction));case 9:return _context.abrupt("return", _context.sent);case 12:_context.next = 14;return (

									this.web3.eth.getAccounts());case 14:accounts = _context.sent;_context.next = 17;return (
									this.__metamaskDeploy({
										byteCode: byteCode,
										args: args,
										acc: accounts[0],
										callback: callback }));case 17:res = _context.sent;

								this.address = res.contractAddress;
								resolve(res);case 20:_context.next = 25;break;case 22:_context.prev = 22;_context.t0 = _context["catch"](0);


								reject(_context.t0);case 25:case "end":return _context.stop();}}}, _callee, this, [[0, 22]]);}));function deploy(_x, _x2, _x3) {return _ref.apply(this, arguments);}return deploy;}() }, { key: "__metamaskDeploy", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {var _this = this;var



				byteCode = _ref3.byteCode,args = _ref3.args,acc = _ref3.acc,_ref3$callback = _ref3.callback,callback = _ref3$callback === undefined ? function () {} : _ref3$callback;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt("return",
								new _promise2.default(function (resolve, reject) {
									try {
										_this.getContract().
										deploy({
											data: byteCode,
											arguments: args }).
										send({ from: acc }).
										on('confirmation', function (confirmationNumber, receipt) {
											callback(confirmationNumber);
											if (confirmationNumber > 0) {
												resolve(receipt);
											}
										}).
										on('error', function (err) {reject(err);});
									} catch (err) {
										reject(err);
									}
								}));case 1:case "end":return _context2.stop();}}}, _callee2, this);}));function __metamaskDeploy(_x6) {return _ref2.apply(this, arguments);}return __metamaskDeploy;}() }, { key: "use", value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(


			contract_json, address) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
								this.json = contract_json;
								this.abi = contract_json.abi;
								this.address = address ? address : this.address;
								this.contract = new this.web3.eth.Contract(
								contract_json.abi,
								this.address);case 4:case "end":return _context3.stop();}}}, _callee3, this);}));function use(_x7, _x8) {return _ref4.apply(this, arguments);}return use;}() }, { key: "send", value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(



			account, byteCode) {var _this2 = this;var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0x0';var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:return _context5.abrupt("return",
								new _promise2.default(function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {var tx, result;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
														tx = {
															data: byteCode,
															from: account.address,
															to: _this2.address,
															gas: 4430000,
															gasPrice: 0,
															value: value ? value : '0x0' };_context4.next = 3;return (


															account.signTransaction(tx));case 3:result = _context4.sent;
														_this2.web3.eth.sendSignedTransaction(result.rawTransaction).
														on('confirmation', function (confirmationNumber, receipt) {
															callback(confirmationNumber);
															if (confirmationNumber > 0) {
																resolve(receipt);
															}
														}).
														on('error', function (err) {reject(err);});case 5:case "end":return _context4.stop();}}}, _callee4, _this2);}));return function (_x13, _x14) {return _ref6.apply(this, arguments);};}()));case 1:case "end":return _context5.stop();}}}, _callee5, this);}));function send(_x9, _x10) {return _ref5.apply(this, arguments);}return send;}() }, { key: "getContract", value: function getContract()




		{
			return this.contract;
		} }, { key: "getABI", value: function getABI()

		{
			return this.abi;
		} }, { key: "getJSON", value: function getJSON()

		{
			return this.json;
		} }, { key: "getAddress", value: function getAddress()

		{
			return this.address;
		} }]);return Contract;}();


module.exports = Contract;