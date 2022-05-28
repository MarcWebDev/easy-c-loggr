"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ansiColors = _interopRequireDefault(require("ansi-colors"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function formatString(type) {
  switch (type) {
    case 'EN':
      {
        return (0, _dayjs["default"])().format('HH:MM:ss - MM/DD/YYYY');
      }

    case 'DE':
      {
        return (0, _dayjs["default"])().format('HH:MM:ss - DD.MM.YYYY');
      }

    default:
      {
        return (0, _dayjs["default"])().format();
      }
  }
}

var Logger = /*#__PURE__*/function () {
  function Logger(options) {
    _classCallCheck(this, Logger);

    _defineProperty(this, "formattedDate", false);

    _defineProperty(this, "formatLanguage", 'EN');

    _defineProperty(this, "prefixes", {
      error: '',
      log: '',
      success: '',
      warn: '',
      hint: ''
    });

    this.formattedDate = options.formattedDate;
    this.formatLanguage = options.formatLanguage;
  } // Color methods


  _createClass(Logger, [{
    key: "error",
    value: function error(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].red("".concat(this.prefixes.error != '' ? this.prefixes.error + ' ' : '').concat(msg)));
    }
  }, {
    key: "log",
    value: function log(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].white("".concat(this.prefixes.log != '' ? this.prefixes.log + ' ' : '').concat(msg)));
    }
  }, {
    key: "success",
    value: function success(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].green("".concat(this.prefixes.success != '' ? this.prefixes.success + ' ' : '').concat(msg)));
    }
  }, {
    key: "warn",
    value: function warn(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].yellow("".concat(this.prefixes.warn != '' ? this.prefixes.warn + ' ' : '').concat(msg)));
    }
  }, {
    key: "hint",
    value: function hint(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].blueBright("".concat(this.prefixes.hint != '' ? this.prefixes.hint + ' ' : '').concat(msg)));
    } // Configuration methods

  }, {
    key: "setPrefixes",
    value: function setPrefixes(options) {
      this.prefixes.error = options.error;
      this.prefixes.log = options.log;
      this.prefixes.success = options.success;
      this.prefixes.warn = options.warn;
      this.prefixes.hint = options.hint;
    }
  }]);

  return Logger;
}();

exports["default"] = Logger;