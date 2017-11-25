'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edit = function (_wepy$page) {
  _inherits(Edit, _wepy$page);

  function Edit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑'
    }, _this.data = {
      images: [],
      array: ['未婚', '离异'],
      array2: ['本科', '硕士', '博士'],
      haigui: false,
      xinshui: ['2 ~ 5K', '5 ~ 10K', '10 ~ 20K', '20 ~ 50K', '50K以上']
    }, _this.methods = {
      bindTextAreaBlur: function bindTextAreaBlur(e) {
        console.log(e.detail.value);
      },
      chooseImage: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _images;

          var _ref3, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 3 - this.images.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref3 = _context.sent;
                  tempFilePaths = _ref3.tempFilePaths;

                  (_images = this.images).push.apply(_images, _toConsumableArray(tempFilePaths));
                  this.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function chooseImage() {
          return _ref2.apply(this, arguments);
        }

        return chooseImage;
      }(),
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      deleteImage: function deleteImage(idx) {
        this.images.splice(idx, 1);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Edit;
}(_wepy2.default.page);

exports.default = Edit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiRWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1hZ2VzIiwiYXJyYXkiLCJhcnJheTIiLCJoYWlndWkiLCJ4aW5zaHVpIiwibWV0aG9kcyIsImJpbmRUZXh0QXJlYUJsdXIiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsImxlbmd0aCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsInB1c2giLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaWR4Iiwic3BsaWNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZGO0FBR0xDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FISDtBQUlMQyxjQUFRLEtBSkg7QUFLTEMsZUFBUyxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLFVBQXRCLEVBQWtDLFVBQWxDLEVBQThDLE9BQTlDO0FBTEosSyxRQU9QQyxPLEdBQVU7QUFDUkMsd0JBQWtCLDBCQUFTQyxDQUFULEVBQVk7QUFDNUJDLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQUhPO0FBSUZDLGlCQUpFO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSzBCLGVBQUtBLFdBQUwsQ0FBaUI7QUFDL0NDLDJCQUFPLElBQUksS0FBS2IsTUFBTCxDQUFZYyxNQUR3QjtBQUUvQ0MsOEJBQVU7QUFGcUMsbUJBQWpCLENBTDFCOztBQUFBO0FBQUE7QUFLRUMsK0JBTEYsU0FLRUEsYUFMRjs7QUFTTixrQ0FBS2hCLE1BQUwsRUFBWWlCLElBQVosbUNBQW9CRCxhQUFwQjtBQUNBLHVCQUFLRSxNQUFMOztBQVZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBWVJDLGtCQVpRLHdCQVlNQyxHQVpOLEVBWVdDLFNBWlgsRUFZc0I7QUFDNUIsdUJBQUtGLFlBQUwsQ0FBa0I7QUFDaEJHLG1CQUFTRixHQURPO0FBRWhCRyxnQkFBTUY7QUFGVSxTQUFsQjtBQUlELE9BakJPO0FBa0JSRyxpQkFsQlEsdUJBa0JLQyxHQWxCTCxFQWtCVTtBQUNoQixhQUFLekIsTUFBTCxDQUFZMEIsTUFBWixDQUFtQkQsR0FBbkIsRUFBd0IsQ0FBeEI7QUFDQSxhQUFLUCxNQUFMO0FBQ0Q7QUFyQk8sSzs7OztFQVhzQixlQUFLUyxJOztrQkFBbEIvQixJIiwiZmlsZSI6ImVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6RJ1xuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGltYWdlczogW10sXG4gICAgICBhcnJheTogWyfmnKrlqZonLCAn56a75byCJ10sXG4gICAgICBhcnJheTI6IFsn5pys56eRJywgJ+ehleWjqycsICfljZrlo6snXSxcbiAgICAgIGhhaWd1aTogZmFsc2UsXG4gICAgICB4aW5zaHVpOiBbJzIgfiA1SycsICc1IH4gMTBLJywgJzEwIH4gMjBLJywgJzIwIH4gNTBLJywgJzUwS+S7peS4iiddXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZFRleHRBcmVhQmx1cjogZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDMgLSB0aGlzLmltYWdlcy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmltYWdlcy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZGVsZXRlSW1hZ2UgKGlkeCkge1xuICAgICAgICB0aGlzLmltYWdlcy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=