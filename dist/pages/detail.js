'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '介绍页'
    }, _this.data = {
      sysHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      sysWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      box: {}
    }, _this.methods = {
      previewImage: function previewImage(cur, imgList) {
        console.log(cur);
        console.log(imgList);
        _wepy2.default.previewImage({
          current: cur,
          urls: imgList
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(option);
                _context.next = 3;
                return _api2.default.getdetail({
                  query: {
                    _id: option._id
                  }
                });

              case 3:
                res = _context.sent;

                console.log('detail back:' + JSON.stringify(res));
                if (res.data) {
                  this.box = res.data;
                  this.$apply();
                } else {
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发生异常，请重新尝试。',
                    showCancel: false
                  });
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      var _id = this.box._id;
      var name = this.box.nickname;
      return {
        title: '大家好，我是' + name,
        path: '/page/detail?id=' + _id,
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN5c0hlaWdodCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0Iiwic3lzV2lkdGgiLCJ3aW5kb3dXaWR0aCIsImJveCIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWdMaXN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ1cmxzIiwib3B0aW9uIiwiZ2V0ZGV0YWlsIiwicXVlcnkiLCJfaWQiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsIm5hbWUiLCJuaWNrbmFtZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsZUFBS0MsaUJBQUwsR0FBeUJDLFlBRC9CO0FBRUxDLGdCQUFVLGVBQUtGLGlCQUFMLEdBQXlCRyxXQUY5QjtBQUdMQyxXQUFLO0FBSEEsSyxRQXNDUEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNNQyxHQUROLEVBQ1dDLE9BRFgsRUFDb0I7QUFDMUJDLGdCQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLHVCQUFLRixZQUFMLENBQWtCO0FBQ2hCSyxtQkFBU0osR0FETztBQUVoQkssZ0JBQU1KO0FBRlUsU0FBbEI7QUFJRDtBQVJPLEs7Ozs7OzsyRkFqQ0lLLE07Ozs7OztBQUNaSix3QkFBUUMsR0FBUixDQUFZRyxNQUFaOzt1QkFDZ0IsY0FBSUMsU0FBSixDQUFjO0FBQzVCQyx5QkFBTztBQUNMQyx5QkFBS0gsT0FBT0c7QUFEUDtBQURxQixpQkFBZCxDOzs7QUFBWkMsbUI7O0FBS0pSLHdCQUFRQyxHQUFSLENBQVksaUJBQWlCUSxLQUFLQyxTQUFMLENBQWVGLEdBQWYsQ0FBN0I7QUFDQSxvQkFBSUEsSUFBSW5CLElBQVIsRUFBYztBQUNaLHVCQUFLTSxHQUFMLEdBQVdhLElBQUluQixJQUFmO0FBQ0EsdUJBQUtzQixNQUFMO0FBQ0QsaUJBSEQsTUFHTztBQUNMLGlDQUFLQyxTQUFMLENBQWU7QUFDYkMsMkJBQU8sSUFETTtBQUViQyw2QkFBUyxhQUZJO0FBR2JDLGdDQUFZO0FBSEMsbUJBQWY7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUVnQlAsRyxFQUFLO0FBQ3RCLFVBQUlELE1BQU0sS0FBS1osR0FBTCxDQUFTWSxHQUFuQjtBQUNBLFVBQUlTLE9BQU8sS0FBS3JCLEdBQUwsQ0FBU3NCLFFBQXBCO0FBQ0EsYUFBTztBQUNMSixlQUFPLFdBQVdHLElBRGI7QUFFTEUsY0FBTSxxQkFBcUJYLEdBRnRCO0FBR0xZLGlCQUFTLGlCQUFTWCxHQUFULEVBQWM7QUFDdEI7QUFDQSxTQUxJO0FBTUxZLGNBQU0sY0FBU1osR0FBVCxFQUFjO0FBQ25CO0FBQ0E7QUFSSSxPQUFQO0FBVUQ7Ozs7RUF6Q2lDLGVBQUthLEk7O2tCQUFwQm5DLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S7i+e7jemhtSdcbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICBzeXNIZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBzeXNXaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgYm94OiB7fVxuICAgIH07XG4gICAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbilcbiAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkuZ2V0ZGV0YWlsKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBfaWQ6IG9wdGlvbi5faWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCdkZXRhaWwgYmFjazonICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgdGhpcy5ib3ggPSByZXMuZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICflj5HnlJ/lvILluLjvvIzor7fph43mlrDlsJ3or5XjgIInLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICB2YXIgX2lkID0gdGhpcy5ib3guX2lkXG4gICAgICB2YXIgbmFtZSA9IHRoaXMuYm94Lm5pY2tuYW1lXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+Wkp+WutuWlve+8jOaIkeaYrycgKyBuYW1lLFxuICAgICAgICBwYXRoOiAnL3BhZ2UvZGV0YWlsP2lkPScgKyBfaWQsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1nTGlzdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGltZ0xpc3QpXG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1nTGlzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19