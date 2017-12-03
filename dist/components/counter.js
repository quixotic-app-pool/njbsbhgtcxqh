'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      // console.log(`${this.$name} receive ${$event.name} from ${$event.source.$name}`)
    }
  };
  this.watch = {
    num: function num(curVal, oldVal) {
      // console.log(`旧值：${oldVal}，新值：${curVal}`)
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      // console.log(this.$name + ' plus tap')

      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      // console.log(this.$name + ' minus tap')
    }
  };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIndhdGNoIiwiY3VyVmFsIiwib2xkVmFsIiwibWV0aG9kcyIsInBsdXMiLCIkZW1pdCIsIm1pbnVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQWdCLGVBQUtDLFM7OztPQUN4Q0MsSyxHQUFRO0FBQ05DLFNBQUs7QUFDSEMsWUFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVIQyxjQUFRLGdCQUFVQyxDQUFWLEVBQWE7QUFDbkIsZUFBTyxDQUFDQSxDQUFSO0FBQ0QsT0FKRTtBQUtIQyxlQUFTO0FBTE47QUFEQyxHO09BVVJDLEksR0FBTyxFO09BRVBDLE0sR0FBUztBQUNQLHVCQUFtQiwwQkFBYTtBQUFBOztBQUM5QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQTtBQUNEO0FBSk0sRztPQU9UQyxLLEdBQVE7QUFDTlgsT0FETSxlQUNEWSxNQURDLEVBQ09DLE1BRFAsRUFDZTtBQUNuQjtBQUNEO0FBSEssRztPQU1SQyxPLEdBQVU7QUFDUkMsUUFEUSxrQkFDQTtBQUNOLFdBQUtmLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQTs7QUFFQSxXQUFLZ0IsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDRCxLQU5PO0FBT1JDLFNBUFEsbUJBT0M7QUFDUCxXQUFLakIsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNBO0FBQ0Q7QUFWTyxHOzs7a0JBMUJTSCxPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8vIGltcG9ydCBhYmMgZnJvbSAnYWJjJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIG51bToge1xyXG4gICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcbiAgICAgICAgY29lcmNlOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgcmV0dXJuICt2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0OiA1MFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgICBudW0gKGN1clZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYOaXp+WAvO+8miR7b2xkVmFsfe+8jOaWsOWAvO+8miR7Y3VyVmFsfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBwbHVzICgpIHtcclxuICAgICAgICB0aGlzLm51bSA9IHRoaXMubnVtICsgMVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJylcclxuXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5kZXgtZW1pdCcsIDEsIDIsIDMpXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pbnVzICgpIHtcclxuICAgICAgICB0aGlzLm51bSA9IHRoaXMubnVtIC0gMVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIG1pbnVzIHRhcCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==