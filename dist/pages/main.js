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

var Main = function (_wepy$page) {
  _inherits(Main, _wepy$page);

  function Main() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '南京本硕博海归相亲会'
    }, _this.data = {
      gender: ['男生', '女生'],
      array: ['未婚', '离异'],
      array2: ['本科以上', '硕士以上', '博士以上', '海归派'],
      toView: 'red',
      scrollTop: 100,
      list: [{ name: '爱因斯坦', age: '25', gender: '男生', height: '175', degree: '本科', weight: '68', industry: '互联网', position: '前端程序员', img: './einstain.jpeg' }, { name: '爱因斯坦', age: '25', gender: '男生', height: '175', degree: '本科', weight: '68', industry: '互联网', position: '前端程序员', img: './einstain.jpeg' }, { name: '爱因斯坦', age: '25', gender: '男生', height: '175', degree: '本科', weight: '68', industry: '互联网', position: '前端程序员', img: './einstain.jpeg' }, { name: '爱因斯坦', age: '25', gender: '男生', height: '175', degree: '本科', weight: '68', industry: '互联网', position: '前端程序员', img: './einstain.jpeg' }, { name: '爱因斯坦', age: '25', gender: '男生', height: '175', degree: '本科', weight: '68', industry: '互联网', position: '前端程序员', img: './einstain.jpeg' }, { name: '爱因斯坦', age: '25', gender: '男生', height: '175', degree: '本科', weight: '68', industry: '互联网', position: '前端程序员', img: './einstain.jpeg' }]
    }, _this.methods = {
      radioChange: function radioChange() {},
      bindPickerChange: function bindPickerChange() {},

      upper: function upper(e) {
        // console.log(e)
      },
      lower: function lower(e) {
        // console.log(e)
      },
      scroll: function scroll(e) {
        // console.log(e)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Main;
}(_wepy2.default.page);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZ2VuZGVyIiwiYXJyYXkiLCJhcnJheTIiLCJ0b1ZpZXciLCJzY3JvbGxUb3AiLCJsaXN0IiwibmFtZSIsImFnZSIsImhlaWdodCIsImRlZ3JlZSIsIndlaWdodCIsImluZHVzdHJ5IiwicG9zaXRpb24iLCJpbWciLCJtZXRob2RzIiwicmFkaW9DaGFuZ2UiLCJiaW5kUGlja2VyQ2hhbmdlIiwidXBwZXIiLCJlIiwibG93ZXIiLCJzY3JvbGwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQURIO0FBRUxDLGFBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZGO0FBR0xDLGNBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixDQUhIO0FBSUxDLGNBQVEsS0FKSDtBQUtMQyxpQkFBVyxHQUxOO0FBTUxDLFlBQU0sQ0FBQyxFQUFDQyxNQUFNLE1BQVAsRUFBZUMsS0FBSyxJQUFwQixFQUEwQlAsUUFBUSxJQUFsQyxFQUF3Q1EsUUFBUSxLQUFoRCxFQUF1REMsUUFBUSxJQUEvRCxFQUFxRUMsUUFBUSxJQUE3RSxFQUFtRkMsVUFBVSxLQUE3RixFQUFvR0MsVUFBVSxPQUE5RyxFQUF1SEMsS0FBSyxpQkFBNUgsRUFBRCxFQUFpSixFQUFDUCxNQUFNLE1BQVAsRUFBZUMsS0FBSyxJQUFwQixFQUEwQlAsUUFBUSxJQUFsQyxFQUF3Q1EsUUFBUSxLQUFoRCxFQUF1REMsUUFBUSxJQUEvRCxFQUFxRUMsUUFBUSxJQUE3RSxFQUFtRkMsVUFBVSxLQUE3RixFQUFvR0MsVUFBVSxPQUE5RyxFQUF1SEMsS0FBSyxpQkFBNUgsRUFBakosRUFBaVMsRUFBQ1AsTUFBTSxNQUFQLEVBQWVDLEtBQUssSUFBcEIsRUFBMEJQLFFBQVEsSUFBbEMsRUFBd0NRLFFBQVEsS0FBaEQsRUFBdURDLFFBQVEsSUFBL0QsRUFBcUVDLFFBQVEsSUFBN0UsRUFBbUZDLFVBQVUsS0FBN0YsRUFBb0dDLFVBQVUsT0FBOUcsRUFBdUhDLEtBQUssaUJBQTVILEVBQWpTLEVBQWliLEVBQUNQLE1BQU0sTUFBUCxFQUFlQyxLQUFLLElBQXBCLEVBQTBCUCxRQUFRLElBQWxDLEVBQXdDUSxRQUFRLEtBQWhELEVBQXVEQyxRQUFRLElBQS9ELEVBQXFFQyxRQUFRLElBQTdFLEVBQW1GQyxVQUFVLEtBQTdGLEVBQW9HQyxVQUFVLE9BQTlHLEVBQXVIQyxLQUFLLGlCQUE1SCxFQUFqYixFQUFpa0IsRUFBQ1AsTUFBTSxNQUFQLEVBQWVDLEtBQUssSUFBcEIsRUFBMEJQLFFBQVEsSUFBbEMsRUFBd0NRLFFBQVEsS0FBaEQsRUFBdURDLFFBQVEsSUFBL0QsRUFBcUVDLFFBQVEsSUFBN0UsRUFBbUZDLFVBQVUsS0FBN0YsRUFBb0dDLFVBQVUsT0FBOUcsRUFBdUhDLEtBQUssaUJBQTVILEVBQWprQixFQUFpdEIsRUFBQ1AsTUFBTSxNQUFQLEVBQWVDLEtBQUssSUFBcEIsRUFBMEJQLFFBQVEsSUFBbEMsRUFBd0NRLFFBQVEsS0FBaEQsRUFBdURDLFFBQVEsSUFBL0QsRUFBcUVDLFFBQVEsSUFBN0UsRUFBbUZDLFVBQVUsS0FBN0YsRUFBb0dDLFVBQVUsT0FBOUcsRUFBdUhDLEtBQUssaUJBQTVILEVBQWp0QjtBQU5ELEssUUFRUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNPLENBRWQsQ0FITztBQUlSQyxzQkFKUSw4QkFJWSxDQUVuQixDQU5POztBQU9SQyxhQUFPLGVBQVNDLENBQVQsRUFBWTtBQUNqQjtBQUNELE9BVE87QUFVUkMsYUFBTyxlQUFTRCxDQUFULEVBQVk7QUFDakI7QUFDRCxPQVpPO0FBYVJFLGNBQVEsZ0JBQVNGLENBQVQsRUFBWTtBQUNsQjtBQUNEO0FBZk8sSzs7OztFQVpzQixlQUFLRyxJOztrQkFBbEJ6QixJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2X5Lqs5pys56GV5Y2a5rW35b2S55u45Lqy5LyaJ1xuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGdlbmRlcjogWyfnlLfnlJ8nLCAn5aWz55SfJ10sXG4gICAgICBhcnJheTogWyfmnKrlqZonLCAn56a75byCJ10sXG4gICAgICBhcnJheTI6IFsn5pys56eR5Lul5LiKJywgJ+ehleWjq+S7peS4iicsICfljZrlo6vku6XkuIonLCAn5rW35b2S5rS+J10sXG4gICAgICB0b1ZpZXc6ICdyZWQnLFxuICAgICAgc2Nyb2xsVG9wOiAxMDAsXG4gICAgICBsaXN0OiBbe25hbWU6ICfniLHlm6Dmlq/lnaYnLCBhZ2U6ICcyNScsIGdlbmRlcjogJ+eUt+eUnycsIGhlaWdodDogJzE3NScsIGRlZ3JlZTogJ+acrOenkScsIHdlaWdodDogJzY4JywgaW5kdXN0cnk6ICfkupLogZTnvZEnLCBwb3NpdGlvbjogJ+WJjeerr+eoi+W6j+WRmCcsIGltZzogJy4vZWluc3RhaW4uanBlZyd9LCB7bmFtZTogJ+eIseWboOaWr+WdpicsIGFnZTogJzI1JywgZ2VuZGVyOiAn55S355SfJywgaGVpZ2h0OiAnMTc1JywgZGVncmVlOiAn5pys56eRJywgd2VpZ2h0OiAnNjgnLCBpbmR1c3RyeTogJ+S6kuiBlOe9kScsIHBvc2l0aW9uOiAn5YmN56uv56iL5bqP5ZGYJywgaW1nOiAnLi9laW5zdGFpbi5qcGVnJ30sIHtuYW1lOiAn54ix5Zug5pav5Z2mJywgYWdlOiAnMjUnLCBnZW5kZXI6ICfnlLfnlJ8nLCBoZWlnaHQ6ICcxNzUnLCBkZWdyZWU6ICfmnKznp5EnLCB3ZWlnaHQ6ICc2OCcsIGluZHVzdHJ5OiAn5LqS6IGU572RJywgcG9zaXRpb246ICfliY3nq6/nqIvluo/lkZgnLCBpbWc6ICcuL2VpbnN0YWluLmpwZWcnfSwge25hbWU6ICfniLHlm6Dmlq/lnaYnLCBhZ2U6ICcyNScsIGdlbmRlcjogJ+eUt+eUnycsIGhlaWdodDogJzE3NScsIGRlZ3JlZTogJ+acrOenkScsIHdlaWdodDogJzY4JywgaW5kdXN0cnk6ICfkupLogZTnvZEnLCBwb3NpdGlvbjogJ+WJjeerr+eoi+W6j+WRmCcsIGltZzogJy4vZWluc3RhaW4uanBlZyd9LCB7bmFtZTogJ+eIseWboOaWr+WdpicsIGFnZTogJzI1JywgZ2VuZGVyOiAn55S355SfJywgaGVpZ2h0OiAnMTc1JywgZGVncmVlOiAn5pys56eRJywgd2VpZ2h0OiAnNjgnLCBpbmR1c3RyeTogJ+S6kuiBlOe9kScsIHBvc2l0aW9uOiAn5YmN56uv56iL5bqP5ZGYJywgaW1nOiAnLi9laW5zdGFpbi5qcGVnJ30sIHtuYW1lOiAn54ix5Zug5pav5Z2mJywgYWdlOiAnMjUnLCBnZW5kZXI6ICfnlLfnlJ8nLCBoZWlnaHQ6ICcxNzUnLCBkZWdyZWU6ICfmnKznp5EnLCB3ZWlnaHQ6ICc2OCcsIGluZHVzdHJ5OiAn5LqS6IGU572RJywgcG9zaXRpb246ICfliY3nq6/nqIvluo/lkZgnLCBpbWc6ICcuL2VpbnN0YWluLmpwZWcnfV1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICByYWRpb0NoYW5nZSAoKSB7XG5cbiAgICAgIH0sXG4gICAgICBiaW5kUGlja2VyQ2hhbmdlICgpIHtcblxuICAgICAgfSxcbiAgICAgIHVwcGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICB9LFxuICAgICAgbG93ZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAgIH0sXG4gICAgICBzY3JvbGw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==