'use strict';var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var moment = require('moment');
var accounting = require('accounting');
var dayjs = require('dayjs');
var BN = require('bn.js');
var web3 = require("web3");
var Web3 = new web3();

Number.prototype.noExponents = function () {
  var data = String(this).split(/[eE]/);
  if (data.length == 1) return data[0];

  var z = '',
  sign = this < 0 ? '-' : '',
  str = data[0].replace('.', ''),
  mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + '0.';
    while (mag++) {z += '0';}
    return z + str.replace(/^\-/, '');
  }
  mag -= str.length;
  while (mag--) {z += '0';}
  return str + z;
};var

numbers = function () {
  function numbers() {(0, _classCallCheck3.default)(this, numbers);}(0, _createClass3.default)(numbers, [{ key: 'fromDayMonthYear', value: function fromDayMonthYear(

    date) {
      var mom = moment().dayOfYear(date.day);
      mom.set('hour', date.hour);
      mom.set('year', date.year);
      return mom.format('ddd, hA');
    } }, { key: 'fromSmartContractTimeToMinutes', value: function fromSmartContractTimeToMinutes(

    time) {
      return dayjs.unix(time).toDate();
    } }, { key: 'fromMinutesToSmartContracTime', value: function fromMinutesToSmartContracTime(

    time) {
      return time;
    } }, { key: 'fromHex', value: function fromHex(

    hex) {
      return hex.toString();
    } }, { key: 'toFloat', value: function toFloat(

    number) {
      return parseFloat(parseFloat(number).toFixed(2));
    } }, { key: 'timeToSmartContractTime', value: function timeToSmartContractTime(

    time) {
      return parseInt(new Date(time).getTime() / 1000);
    } }, { key: 'toDate', value: function toDate(

    date) {
      var mom = moment().dayOfYear(date.day);
      mom.set('hour', date.hour);
      mom.set('year', date.year);
      return mom.unix();
    } }, { key: 'toMoney', value: function toMoney(

    number) {
      return accounting.formatMoney(number, { symbol: 'EUR', format: '%v' });
    } }, { key: 'toFormatBet', value: function toFormatBet(

    number) {
      return parseFloat(parseFloat(number).toFixed(6));
    } }, { key: 'formatNumber', value: function formatNumber(

    number) {
      return accounting.formatNumber(number);
    } }, { key: 'toSmartContractDecimals', value: function toSmartContractDecimals(

    value, decimals) {
      var numberWithNoExponents = new Number((Number(value) * Math.pow(10, decimals)).toFixed(0)).noExponents();
      return numberWithNoExponents;
    } }, { key: 'fromBigNumberToInteger', value: function fromBigNumberToInteger(

    value) {var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
      return Math.round(value / Math.pow(10, decimals) * 1000000000000000000);
    } }, { key: 'fromDecimals', value: function fromDecimals(

    value, decimals) {
      return Number(parseFloat(value / Math.pow(10, decimals)).toPrecision(decimals)).noExponents();
    } }, { key: 'fromDecimalsNumber', value: function fromDecimalsNumber(

    value, decimals) {
      var number = Number(parseFloat(value / Math.pow(10, decimals)).toPrecision(decimals)).noExponents();
      return Number(number);
    } }, { key: 'fromExponential', value: function fromExponential(

    x) {
      if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
          x *= Math.pow(10, e - 1);
          x = '0.' + new Array(e).join('0') + x.toString().substring(2);
        }
      } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
          e -= 20;
          x /= Math.pow(10, e);
          x += new Array(e + 1).join('0');
        }
      }
      return x;
    } }, { key: 'nullHash', value: function nullHash()

    {
      return '0x0000000000000000000000000000000000000000000000000000000000000000';
    } }]);return numbers;}();


var Numbers = new numbers();

module.exports = Numbers;