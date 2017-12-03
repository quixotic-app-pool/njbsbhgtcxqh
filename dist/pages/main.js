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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      page: 0,
      sysHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      filterStatus: '女生',
      uploaded: false,
      gender: ['男生', '女生'],
      toView: 'red',
      scrollTop: 100,
      list: []
    }, _this.methods = {
      filter: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.page = 0;
                  this.list = [];
                  _context.next = 4;
                  return this.requestList(this.filterStatus);

                case 4:
                  _wepy2.default.setStorageSync('_genderPreference', this.filterStatus);
                  if (this.filterStatus === '女生') {
                    this.filterStatus = '男生';
                  } else {
                    this.filterStatus = '女生';
                  }

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function filter() {
          return _ref2.apply(this, arguments);
        }

        return filter;
      }(),
      navigateToDetail: function navigateToDetail(id) {
        var _id = id;
        _wepy2.default.navigateTo({
          url: 'detail?_id=' + _id
        });
      },
      radioChange: function radioChange() {},
      bindPickerChange: function bindPickerChange() {},
      upper: function upper(e) {
        // // console.log(e)
      },
      lower: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var genderPreference;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  genderPreference = _wepy2.default.getStorageSync('_genderPreference');
                  _context2.next = 3;
                  return this.requestList(genderPreference);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function lower() {
          return _ref3.apply(this, arguments);
        }

        return lower;
      }(),
      scroll: function scroll(e) {
        // // console.log(e)
      },
      goEdit: function goEdit() {
        _wepy2.default.navigateTo({
          url: 'edit'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Main, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var genderPreference;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // this.uploaded = wepy.getStorageSync('_uploaded')
                genderPreference = _wepy2.default.getStorageSync('_genderPreference');

                if (genderPreference === '女生') {
                  this.filterStatus = '男生';
                } else {
                  this.filterStatus = '女生';
                }
                this.page = 0;
                _context3.next = 5;
                return this.requestList(genderPreference);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad() {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'requestList',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(genderPreference) {
        var self, res, _self$list;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = this;
                _context4.next = 3;
                return _api2.default.getlist({
                  query: {
                    genderpreference: genderPreference,
                    page: self.page
                  }
                });

              case 3:
                res = _context4.sent;

                // // console.log('request list get result from server: ' + JSON.stringify(res))
                if (res.data) {
                  self.page++;
                  if (self.list.length === 0) {
                    self.list = res.data;
                  } else {
                    (_self$list = self.list).push.apply(_self$list, _toConsumableArray(res.data));
                  }
                  // // console.log('list: ' + JSON.stringify(self.list));
                  self.$apply();
                } else {
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发生异常，请重新尝试。',
                    showCancel: false
                  });
                }

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function requestList(_x) {
        return _ref5.apply(this, arguments);
      }

      return requestList;
    }()
  }]);

  return Main;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Main , 'pages/main'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGFnZSIsInN5c0hlaWdodCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwiZmlsdGVyU3RhdHVzIiwidXBsb2FkZWQiLCJnZW5kZXIiLCJ0b1ZpZXciLCJzY3JvbGxUb3AiLCJsaXN0IiwibWV0aG9kcyIsImZpbHRlciIsInJlcXVlc3RMaXN0Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvRGV0YWlsIiwiaWQiLCJfaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmFkaW9DaGFuZ2UiLCJiaW5kUGlja2VyQ2hhbmdlIiwidXBwZXIiLCJlIiwibG93ZXIiLCJnZW5kZXJQcmVmZXJlbmNlIiwiZ2V0U3RvcmFnZVN5bmMiLCJzY3JvbGwiLCJnb0VkaXQiLCJzZWxmIiwiZ2V0bGlzdCIsInF1ZXJ5IiwiZ2VuZGVycHJlZmVyZW5jZSIsInJlcyIsImxlbmd0aCIsInB1c2giLCIkYXBwbHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUREO0FBRUxDLGlCQUFXLGVBQUtDLGlCQUFMLEdBQXlCQyxZQUYvQjtBQUdMQyxvQkFBYyxJQUhUO0FBSUxDLGdCQUFVLEtBSkw7QUFLTEMsY0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLENBTEg7QUFNTEMsY0FBUSxLQU5IO0FBT0xDLGlCQUFXLEdBUE47QUFRTEMsWUFBTTtBQVJELEssUUErQ1BDLE8sR0FBVTtBQUNGQyxZQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVOLHVCQUFLWCxJQUFMLEdBQVksQ0FBWjtBQUNBLHVCQUFLUyxJQUFMLEdBQVksRUFBWjtBQUhNO0FBQUEseUJBSUEsS0FBS0csV0FBTCxDQUFpQixLQUFLUixZQUF0QixDQUpBOztBQUFBO0FBS04saUNBQUtTLGNBQUwsQ0FBb0IsbUJBQXBCLEVBQXlDLEtBQUtULFlBQTlDO0FBQ0Esc0JBQUksS0FBS0EsWUFBTCxLQUFzQixJQUExQixFQUFnQztBQUM5Qix5QkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNELG1CQUZELE1BRU87QUFDTCx5QkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNEOztBQVZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBWVJVLHNCQVpRLDRCQVlVQyxFQVpWLEVBWWM7QUFDcEIsWUFBSUMsTUFBTUQsRUFBVjtBQUNBLHVCQUFLRSxVQUFMLENBQWdCO0FBQ2RDLGVBQUssZ0JBQWdCRjtBQURQLFNBQWhCO0FBR0QsT0FqQk87QUFrQlJHLGlCQWxCUSx5QkFrQk8sQ0FFZCxDQXBCTztBQXFCUkMsc0JBckJRLDhCQXFCWSxDQUVuQixDQXZCTztBQXdCUkMsV0F4QlEsaUJBd0JEQyxDQXhCQyxFQXdCRTtBQUNSO0FBQ0QsT0ExQk87QUEyQkZDLFdBM0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEJGQyxrQ0E1QkUsR0E0QmlCLGVBQUtDLGNBQUwsQ0FBb0IsbUJBQXBCLENBNUJqQjtBQUFBO0FBQUEseUJBNkJBLEtBQUtiLFdBQUwsQ0FBaUJZLGdCQUFqQixDQTdCQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQStCUkUsWUEvQlEsa0JBK0JBSixDQS9CQSxFQStCRztBQUNUO0FBQ0QsT0FqQ087QUFrQ1JLLFlBbENRLG9CQWtDRTtBQUNSLHVCQUFLVixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBdENPLEs7Ozs7Ozs7Ozs7OztBQXBDUjtBQUNJTSxnQyxHQUFtQixlQUFLQyxjQUFMLENBQW9CLG1CQUFwQixDOztBQUN2QixvQkFBSUQscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLHVCQUFLcEIsWUFBTCxHQUFvQixJQUFwQjtBQUNELGlCQUZELE1BRU87QUFDTCx1QkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNEO0FBQ0QscUJBQUtKLElBQUwsR0FBWSxDQUFaOzt1QkFDTSxLQUFLWSxXQUFMLENBQWlCWSxnQkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFFV0EsZ0I7Ozs7Ozs7QUFDYkksb0IsR0FBTyxJOzt1QkFDSyxjQUFJQyxPQUFKLENBQVk7QUFDMUJDLHlCQUFPO0FBQ0xDLHNDQUFrQlAsZ0JBRGI7QUFFTHhCLDBCQUFNNEIsS0FBSzVCO0FBRk47QUFEbUIsaUJBQVosQzs7O0FBQVpnQyxtQjs7QUFNSjtBQUNBLG9CQUFJQSxJQUFJakMsSUFBUixFQUFjO0FBQ1o2Qix1QkFBSzVCLElBQUw7QUFDQSxzQkFBSTRCLEtBQUtuQixJQUFMLENBQVV3QixNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCTCx5QkFBS25CLElBQUwsR0FBWXVCLElBQUlqQyxJQUFoQjtBQUNELG1CQUZELE1BRU87QUFDTCx1Q0FBS1UsSUFBTCxFQUFVeUIsSUFBVixzQ0FBa0JGLElBQUlqQyxJQUF0QjtBQUNEO0FBQ0Q7QUFDQTZCLHVCQUFLTyxNQUFMO0FBQ0QsaUJBVEQsTUFTTztBQUNMLGlDQUFLQyxTQUFMLENBQWU7QUFDYkMsMkJBQU8sSUFETTtBQUViQyw2QkFBUyxhQUZJO0FBR2JDLGdDQUFZO0FBSEMsbUJBQWY7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpENkIsZUFBS3ZDLEk7O2tCQUFsQkosSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZfkuqzmnKznoZXljZrmtbflvZLnm7jkurLkvJonXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHN5c0hlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGZpbHRlclN0YXR1czogJ+Wls+eUnycsXG4gICAgICB1cGxvYWRlZDogZmFsc2UsXG4gICAgICBnZW5kZXI6IFsn55S355SfJywgJ+Wls+eUnyddLFxuICAgICAgdG9WaWV3OiAncmVkJyxcbiAgICAgIHNjcm9sbFRvcDogMTAwLFxuICAgICAgbGlzdDogW11cbiAgICB9O1xuICAgIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgICAvLyB0aGlzLnVwbG9hZGVkID0gd2VweS5nZXRTdG9yYWdlU3luYygnX3VwbG9hZGVkJylcbiAgICAgIHZhciBnZW5kZXJQcmVmZXJlbmNlID0gd2VweS5nZXRTdG9yYWdlU3luYygnX2dlbmRlclByZWZlcmVuY2UnKVxuICAgICAgaWYgKGdlbmRlclByZWZlcmVuY2UgPT09ICflpbPnlJ8nKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyU3RhdHVzID0gJ+eUt+eUnydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyU3RhdHVzID0gJ+Wls+eUnydcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZSA9IDBcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdExpc3QoZ2VuZGVyUHJlZmVyZW5jZSlcbiAgICB9O1xuICAgIGFzeW5jIHJlcXVlc3RMaXN0IChnZW5kZXJQcmVmZXJlbmNlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkuZ2V0bGlzdCh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgZ2VuZGVycHJlZmVyZW5jZTogZ2VuZGVyUHJlZmVyZW5jZSxcbiAgICAgICAgICBwYWdlOiBzZWxmLnBhZ2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGxpc3QgZ2V0IHJlc3VsdCBmcm9tIHNlcnZlcjogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpXG4gICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgc2VsZi5wYWdlICsrXG4gICAgICAgIGlmIChzZWxmLmxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2VsZi5saXN0ID0gcmVzLmRhdGFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmxpc3QucHVzaCguLi5yZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnbGlzdDogJyArIEpTT04uc3RyaW5naWZ5KHNlbGYubGlzdCkpO1xuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICflj5HnlJ/lvILluLjvvIzor7fph43mlrDlsJ3or5XjgIInLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgZmlsdGVyICgpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gMFxuICAgICAgICB0aGlzLmxpc3QgPSBbXVxuICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RMaXN0KHRoaXMuZmlsdGVyU3RhdHVzKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfZ2VuZGVyUHJlZmVyZW5jZScsIHRoaXMuZmlsdGVyU3RhdHVzKVxuICAgICAgICBpZiAodGhpcy5maWx0ZXJTdGF0dXMgPT09ICflpbPnlJ8nKSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJTdGF0dXMgPSAn55S355SfJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmlsdGVyU3RhdHVzID0gJ+Wls+eUnydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRlVG9EZXRhaWwgKGlkKSB7XG4gICAgICAgIHZhciBfaWQgPSBpZFxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2RldGFpbD9faWQ9JyArIF9pZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHJhZGlvQ2hhbmdlICgpIHtcblxuICAgICAgfSxcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2UgKCkge1xuXG4gICAgICB9LFxuICAgICAgdXBwZXIgKGUpIHtcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coZSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBsb3dlciAoKSB7XG4gICAgICAgIHZhciBnZW5kZXJQcmVmZXJlbmNlID0gd2VweS5nZXRTdG9yYWdlU3luYygnX2dlbmRlclByZWZlcmVuY2UnKVxuICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RMaXN0KGdlbmRlclByZWZlcmVuY2UpXG4gICAgICB9LFxuICAgICAgc2Nyb2xsIChlKSB7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICB9LFxuICAgICAgZ29FZGl0ICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19