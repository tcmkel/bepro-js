"use strict";var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _extends2 = require("babel-runtime/helpers/extends");var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _ = require("lodash");
var moment = require("moment");

var realitio = require("../interfaces").realitio;
var Numbers = require("../utils/Numbers");
var IContract = require('./IContract');

/**
                                         * RealitioERC20 Contract Object
                                         * @constructor RealitioERC20Contract
                                         * @param {Web3} web3
                                         * @param {Integer} decimals
                                         * @param {Address} contractAddress
                                         */var

RealitioERC20Contract = function (_IContract) {(0, _inherits3.default)(RealitioERC20Contract, _IContract);
	function RealitioERC20Contract(params) {(0, _classCallCheck3.default)(this, RealitioERC20Contract);var _this = (0, _possibleConstructorReturn3.default)(this, (RealitioERC20Contract.__proto__ || (0, _getPrototypeOf2.default)(RealitioERC20Contract)).call(this, (0, _extends3.default)({
			abi: realitio }, params)));
		_this.contractName = 'realitio';return _this;
	}

	/**
    * @function getQuestion
    * @description getQuestion
     * @param {bytes32} questionId
    * @returns {Object} question
    */(0, _createClass3.default)(RealitioERC20Contract, [{ key: "getQuestion", value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var
				questionId = _ref2.questionId;var question, isFinalized, isClaimed;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
									this.getContract().methods.questions(questionId).call());case 2:question = _context.sent;_context.next = 5;return (
									this.getContract().methods.isFinalized(questionId).call());case 5:isFinalized = _context.sent;
								isClaimed = isFinalized && question.history_hash === Numbers.nullHash();return _context.abrupt("return",

								{
									id: questionId,
									bond: Numbers.fromDecimalsNumber(question.bond, 18),
									bestAnswer: question.best_answer,
									finalizeTs: question.finalize_ts,
									isFinalized: isFinalized,
									isClaimed: isClaimed });case 8:case "end":return _context.stop();}}}, _callee, this);}));function getQuestion(_x) {return _ref.apply(this, arguments);}return getQuestion;}()



		/**
                                                                                                                                                                                        * @function getQuestionBestAnswer
                                                                                                                                                                                        * @description getQuestionBestAnswer
                                                                                                                                                                                         * @param {bytes32} questionId
                                                                                                                                                                                        * @returns {bytes32} answerId
                                                                                                                                                                                        */ }, { key: "getQuestionBestAnswer", value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {var
				questionId = _ref4.questionId;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
									this.getContract().methods.getBestAnswer(questionId).call());case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function getQuestionBestAnswer(_x2) {return _ref3.apply(this, arguments);}return getQuestionBestAnswer;}()


		/**
                                                                                                                                                                                                                                                                                                              * @function resultForQuestion
                                                                                                                                                                                                                                                                                                              * @description resultForQuestion - throws an error if question is not finalized
                                                                                                                                                                                                                                                                                                               * @param {bytes32} questionId
                                                                                                                                                                                                                                                                                                              * @returns {bytes32} answerId
                                                                                                                                                                                                                                                                                                              */ }, { key: "getResultForQuestion", value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref6) {var
				questionId = _ref6.questionId;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
									this.getContract().methods.resultFor(questionId).call());case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function getResultForQuestion(_x3) {return _ref5.apply(this, arguments);}return getResultForQuestion;}()


		/**
                                                                                                                                                                                                                                                                                                        * @function getQuestionBondsByAnswer
                                                                                                                                                                                                                                                                                                        * @description getQuestionBondsByAnswer - throws an error if question is not finalized
                                                                                                                                                                                                                                                                                                         * @param {bytes32} questionId
                                                                                                                                                                                                                                                                                                        * @returns {Object} bonds
                                                                                                                                                                                                                                                                                                        */ }, { key: "getQuestionBondsByAnswer", value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref8) {var
				questionId = _ref8.questionId,user = _ref8.user;var bonds, answers;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
								bonds = {};_context4.next = 3;return (

									this.getEvents('LogNewAnswer', { question_id: questionId, user: user }));case 3:answers = _context4.sent;

								answers.forEach(function (answer) {
									var answerId = answer.returnValues.answer;

									if (!bonds[answerId]) bonds[answerId] = 0;

									bonds[answerId] += Numbers.fromDecimalsNumber(answer.returnValues.bond, 18);
								});return _context4.abrupt("return",

								bonds);case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function getQuestionBondsByAnswer(_x4) {return _ref7.apply(this, arguments);}return getQuestionBondsByAnswer;}()


		/**
                                                                                                                                                                                                    * @function submitAnswerERC20
                                                                                                                                                                                                    * @description Submit Answer for a Question
                                                                                                                                                                                                    * @param {bytes32} questionId
                                                                                                                                                                                                    * @param {bytes32} answerId
                                                                                                                                                                                                    * @param {Integer} amount
                                                                                                                                                                                                    */ }, { key: "submitAnswerERC20", value: function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref10) {var
				questionId = _ref10.questionId,answerId = _ref10.answerId,amount = _ref10.amount;var amountDecimals;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
								amountDecimals = Numbers.toSmartContractDecimals(amount, 18);_context5.next = 3;return (

									this.__sendTx(
									this.getContract().methods.submitAnswerERC20(
									questionId,
									answerId,
									0,
									amountDecimals),

									false));case 3:return _context5.abrupt("return", _context5.sent);case 4:case "end":return _context5.stop();}}}, _callee5, this);}));function submitAnswerERC20(_x5) {return _ref9.apply(this, arguments);}return submitAnswerERC20;}()



		/**
                                                                                                                                                                                                                                                 * @function getMyBonds
                                                                                                                                                                                                                                                 * @description Get My Bonds
                                                                                                                                                                                                                                                 * @returns {Array} Outcome Shares
                                                                                                                                                                                                                                                 */ }, { key: "getMyBonds", value: function () {var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {var account, events, claimEvents, withdrawEvents, lastWithdrawBlockNumber, bonds;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (

									this.getMyAccount());case 2:account = _context6.sent;if (
								account) {_context6.next = 5;break;}return _context6.abrupt("return", {});case 5:_context6.next = 7;return (

									this.getEvents('LogNewAnswer', { user: account }));case 7:events = _context6.sent;_context6.next = 10;return (
									this.getEvents('LogClaim', { user: account }));case 10:claimEvents = _context6.sent;_context6.next = 13;return (
									this.getEvents('LogWithdraw', { user: account }));case 13:withdrawEvents = _context6.sent;

								lastWithdrawBlockNumber = withdrawEvents[withdrawEvents.length - 1] ?
								withdrawEvents[withdrawEvents.length - 1].blockNumber :
								0;

								bonds = {};

								// iterating through every answer and summing up the bonds
								events.forEach(function (event) {
									var questionId = event.returnValues.question_id;

									// initializing bond vars
									if (!bonds[questionId]) bonds[questionId] = { total: 0, answers: {}, claimed: 0, withdrawn: false };
									if (!bonds[questionId].answers[event.returnValues.answer]) {
										bonds[questionId].answers[event.returnValues.answer] = 0;
									}

									var bond = Numbers.fromDecimalsNumber(event.returnValues.bond, 18);

									bonds[questionId].total += bond;
									bonds[questionId].answers[event.returnValues.answer] += bond;
								});

								claimEvents.forEach(function (event) {
									var questionId = event.returnValues.question_id;

									var amount = Numbers.fromDecimalsNumber(event.returnValues.amount, 18);

									bonds[questionId].claimed += amount;

									// withdraw occurred after claim, marking as withdrawn
									if (lastWithdrawBlockNumber >= event.blockNumber) bonds[questionId].withdrawn = true;
								});return _context6.abrupt("return",

								bonds);case 19:case "end":return _context6.stop();}}}, _callee6, this);}));function getMyBonds() {return _ref11.apply(this, arguments);}return getMyBonds;}()



		/**
                                                                                                                                                                       * @function getMyActions
                                                                                                                                                                       * @description Get My Actions
                                                                                                                                                                       * @returns {Array} Actions
                                                                                                                                                                       */ }, { key: "getMyActions", value: function () {var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {var account, events;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (

									this.getMyAccount());case 2:account = _context7.sent;if (
								account) {_context7.next = 5;break;}return _context7.abrupt("return", []);case 5:_context7.next = 7;return (

									this.getEvents('LogNewAnswer', { user: account }));case 7:events = _context7.sent;return _context7.abrupt("return",

								events.map(function (event) {
									return {
										action: 'Bond',
										questionId: event.returnValues.question_id,
										answerId: event.returnValues.answer,
										value: Numbers.fromDecimalsNumber(event.returnValues.bond, 18),
										timestamp: Numbers.fromBigNumberToInteger(event.returnValues.ts, 18),
										transactionHash: event.transactionHash };

								}));case 9:case "end":return _context7.stop();}}}, _callee7, this);}));function getMyActions() {return _ref12.apply(this, arguments);}return getMyActions;}()


		/**
                                                                                                                                                                       * @function claimWinnings
                                                                                                                                                                       * @description claimWinnings
                                                                                                                                                                       * @param {bytes32} questionId
                                                                                                                                                                       */ }, { key: "claimWinningsAndWithdraw", value: function () {var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref14) {var
				questionId = _ref14.questionId;var question, events, historyHashes, addrs, bonds, answers;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
									this.getQuestion({ questionId: questionId }));case 2:question = _context8.sent;if (


								question.isFinalized) {_context8.next = 5;break;}return _context8.abrupt("return", false);case 5:if (!

								question.isClaimed) {_context8.next = 9;break;}_context8.next = 8;return (

									this.__sendTx(
									this.getContract().methods.withdraw(),
									false));case 8:return _context8.abrupt("return", _context8.sent);case 9:_context8.next = 11;return (



									this.getEvents('LogNewAnswer', { question_id: questionId }));case 11:events = _context8.sent;

								historyHashes = events.map(function (event) {return event.returnValues.history_hash;}).slice(0, -1).reverse();
								// adding an empty hash to the history hashes
								historyHashes.push(Numbers.nullHash());

								addrs = events.map(function (event) {return event.returnValues.user;}).reverse();
								bonds = events.map(function (event) {return event.returnValues.bond;}).reverse();
								answers = events.map(function (event) {return event.returnValues.answer;}).reverse();_context8.next = 19;return (

									this.__sendTx(
									this.getContract().methods.claimMultipleAndWithdrawBalance(
									[questionId],
									[historyHashes.length],
									historyHashes,
									addrs,
									bonds,
									answers),

									false));case 19:return _context8.abrupt("return", _context8.sent);case 20:case "end":return _context8.stop();}}}, _callee8, this);}));function claimWinningsAndWithdraw(_x6) {return _ref13.apply(this, arguments);}return claimWinningsAndWithdraw;}() }]);return RealitioERC20Contract;}(IContract);




module.exports = RealitioERC20Contract;