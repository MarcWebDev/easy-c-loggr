"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

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
  function Logger(formattedDate, formatLanguage) {
    _classCallCheck(this, Logger);

    _defineProperty(this, "formattedDate", false);

    _defineProperty(this, "formatLanguage", 'EN');

    this.formattedDate = formattedDate;
    this.formatLanguage = formatLanguage;
  }

  _createClass(Logger, [{
    key: "error",
    value: function error(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].red(msg));
    }
  }, {
    key: "log",
    value: function log(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].white(msg));
    }
  }, {
    key: "success",
    value: function success(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].green(msg));
    }
  }, {
    key: "warn",
    value: function warn(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].yellow(msg));
    }
  }, {
    key: "hint",
    value: function hint(msg) {
      console.log(_ansiColors["default"].gray("[".concat(this.formattedDate ? formatString(this.formatLanguage) : formatString(), "] ")), _ansiColors["default"].blueBright(msg));
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;