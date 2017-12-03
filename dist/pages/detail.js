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
        var imgArrays = imgList.map(function (item) {
          return item.url;
        });
        _wepy2.default.previewImage({
          current: cur.url,
          urls: imgArrays
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
                _context.next = 2;
                return _api2.default.getdetail({
                  query: {
                    _id: option._id
                  }
                });

              case 2:
                res = _context.sent;

                // console.log('detail back:' + JSON.stringify(res))
                if (res.data) {
                  this.box = res.data;
                  // console.log('this.box: ' + JSON.stringify(this.box))
                  this.$apply();
                } else {
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发生异常，请重新尝试。',
                    showCancel: false
                  });
                }

              case 4:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN5c0hlaWdodCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0Iiwic3lzV2lkdGgiLCJ3aW5kb3dXaWR0aCIsImJveCIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWdMaXN0IiwiaW1nQXJyYXlzIiwibWFwIiwiaXRlbSIsInVybCIsImN1cnJlbnQiLCJ1cmxzIiwib3B0aW9uIiwiZ2V0ZGV0YWlsIiwicXVlcnkiLCJfaWQiLCJyZXMiLCIkYXBwbHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwibmFtZSIsIm5pY2tuYW1lIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxpQkFBVyxlQUFLQyxpQkFBTCxHQUF5QkMsWUFEL0I7QUFFTEMsZ0JBQVUsZUFBS0YsaUJBQUwsR0FBeUJHLFdBRjlCO0FBR0xDLFdBQUs7QUFIQSxLLFFBdUNQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ01DLEdBRE4sRUFDV0MsT0FEWCxFQUNvQjtBQUMxQixZQUFJQyxZQUFZRCxRQUFRRSxHQUFSLENBQVksVUFBU0MsSUFBVCxFQUFlO0FBQ3pDLGlCQUFPQSxLQUFLQyxHQUFaO0FBQ0QsU0FGZSxDQUFoQjtBQUdBLHVCQUFLTixZQUFMLENBQWtCO0FBQ2hCTyxtQkFBU04sSUFBSUssR0FERztBQUVoQkUsZ0JBQU1MO0FBRlUsU0FBbEI7QUFJRDtBQVRPLEs7Ozs7OzsyRkFsQ0lNLE07Ozs7Ozs7dUJBRUksY0FBSUMsU0FBSixDQUFjO0FBQzVCQyx5QkFBTztBQUNMQyx5QkFBS0gsT0FBT0c7QUFEUDtBQURxQixpQkFBZCxDOzs7QUFBWkMsbUI7O0FBS0o7QUFDQSxvQkFBSUEsSUFBSXJCLElBQVIsRUFBYztBQUNaLHVCQUFLTSxHQUFMLEdBQVdlLElBQUlyQixJQUFmO0FBQ0E7QUFDQSx1QkFBS3NCLE1BQUw7QUFDRCxpQkFKRCxNQUlPO0FBQ0wsaUNBQUtDLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxJQURNO0FBRWJDLDZCQUFTLGFBRkk7QUFHYkMsZ0NBQVk7QUFIQyxtQkFBZjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRWdCTCxHLEVBQUs7QUFDdEIsVUFBSUQsTUFBTSxLQUFLZCxHQUFMLENBQVNjLEdBQW5CO0FBQ0EsVUFBSU8sT0FBTyxLQUFLckIsR0FBTCxDQUFTc0IsUUFBcEI7QUFDQSxhQUFPO0FBQ0xKLGVBQU8sV0FBV0csSUFEYjtBQUVMRSxjQUFNLHFCQUFxQlQsR0FGdEI7QUFHTFUsaUJBQVMsaUJBQVNULEdBQVQsRUFBYztBQUN0QjtBQUNBLFNBTEk7QUFNTFUsY0FBTSxjQUFTVixHQUFULEVBQWM7QUFDbkI7QUFDQTtBQVJJLE9BQVA7QUFVRDs7OztFQTFDaUMsZUFBS1csSTs7a0JBQXBCbkMsTSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LuL57uN6aG1J1xuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIHN5c0hlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIHN5c1dpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBib3g6IHt9XG4gICAgfTtcbiAgICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKVxuICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5nZXRkZXRhaWwoe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIF9pZDogb3B0aW9uLl9pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coJ2RldGFpbCBiYWNrOicgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgIHRoaXMuYm94ID0gcmVzLmRhdGFcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuYm94OiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5ib3gpKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICflj5HnlJ/lvILluLjvvIzor7fph43mlrDlsJ3or5XjgIInLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICB2YXIgX2lkID0gdGhpcy5ib3guX2lkXG4gICAgICB2YXIgbmFtZSA9IHRoaXMuYm94Lm5pY2tuYW1lXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+Wkp+WutuWlve+8jOaIkeaYrycgKyBuYW1lLFxuICAgICAgICBwYXRoOiAnL3BhZ2UvZGV0YWlsP2lkPScgKyBfaWQsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1nTGlzdCkge1xuICAgICAgICB2YXIgaW1nQXJyYXlzID0gaW1nTGlzdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnVybFxuICAgICAgICB9KVxuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogY3VyLnVybCxcbiAgICAgICAgICB1cmxzOiBpbWdBcnJheXNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==