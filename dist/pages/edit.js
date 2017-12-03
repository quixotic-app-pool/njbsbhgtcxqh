'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      invitecode: '',
      marriageStatusIndex: 0,
      degreeIndex: 0,
      salaryIndex: 0,
      genderValue: '',
      accessible: false,
      selfintro: '',
      age: 0,
      height: 0,
      weight: 0,
      gender: ['女生', '男生'],
      images: [],
      nickname: '',
      college: '',
      major: '',
      shihaigui: false,
      youfang: false,
      hometown: '',
      industry: '',
      companytype: '',
      marriageStatusRange: ['未选择', '未婚', '离异'],
      degreeRange: ['未选择', '本科', '硕士', '博士'],
      haigui: false,
      salaryRange: ['未选择', '在读', '2 ~ 5K', '5 ~ 10K', '10 ~ 20K', '20 ~ 50K', '50K以上']
    }, _this.methods = {
      send: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var self;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  self = this;
                  // 检查必填项

                  if (self.nickname.length > 0 && self.gender.length > 0 && self.degreeIndex !== 0 && self.height.length > 0 && self.marriageStatusIndex !== 0 && self.age.length > 0) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '确定上传吗？只此一次上传机会额，因为群主有点忙，暂时没有修改的功能的呢。修改暂时只能找泽铭从后台完成😜。'
                    }).then(function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                        var imgUrls, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r, pack, _res;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!res.confirm) {
                                  _context.next = 60;
                                  break;
                                }

                                // // console.log(self)
                                // imgUrls: []

                                imgUrls = [];
                                // upload images

                                if (!(self.images.length > 0)) {
                                  _context.next = 40;
                                  break;
                                }

                                _context.prev = 3;

                                // console.log('self.images: ' + self.images)
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context.prev = 7;
                                _iterator = self.images[Symbol.iterator]();

                              case 9:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                  _context.next = 19;
                                  break;
                                }

                                v = _step.value;
                                _context.next = 13;
                                return _wepy2.default.uploadFile({
                                  url: 'https://www.takeiteasydude.com/api/upload/image',
                                  filePath: v,
                                  name: 'file',
                                  success: function success(res) {
                                    // console.log('image has been successfully saved in server. Congrats!')
                                  }
                                });

                              case 13:
                                r = _context.sent;


                                r.data = JSON.parse(r.data);
                                // console.log('r.data: ' + r.data)
                                if (r.data.img) {
                                  imgUrls.push(r.data.img);
                                } else {
                                  _wepy2.default.hideToast();
                                  _wepy2.default.showModal({
                                    title: '提示',
                                    content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                                    showCancel: false
                                  });
                                }

                              case 16:
                                _iteratorNormalCompletion = true;
                                _context.next = 9;
                                break;

                              case 19:
                                _context.next = 25;
                                break;

                              case 21:
                                _context.prev = 21;
                                _context.t0 = _context['catch'](7);
                                _didIteratorError = true;
                                _iteratorError = _context.t0;

                              case 25:
                                _context.prev = 25;
                                _context.prev = 26;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                  _iterator.return();
                                }

                              case 28:
                                _context.prev = 28;

                                if (!_didIteratorError) {
                                  _context.next = 31;
                                  break;
                                }

                                throw _iteratorError;

                              case 31:
                                return _context.finish(28);

                              case 32:
                                return _context.finish(25);

                              case 33:
                                _context.next = 40;
                                break;

                              case 35:
                                _context.prev = 35;
                                _context.t1 = _context['catch'](3);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '服务器错误，上传图片失败。' + _context.t1.message,
                                  showCancel: false
                                });
                                return _context.abrupt('return');

                              case 40:

                                // update portfolio
                                pack = {
                                  invitecode: self.invitecode,
                                  imgUrls: imgUrls,
                                  nickname: self.nickname,
                                  selfintro: self.selfintro,
                                  gender: self.genderValue,
                                  age: self.age,
                                  marriagestatus: self.marriageStatusRange[self.marriageStatusIndex],
                                  height: self.height,
                                  weight: self.weight,
                                  degree: self.degreeRange[self.degreeIndex],
                                  shihaigui: self.shihaigui,
                                  college: self.college,
                                  major: self.major,
                                  city: '南京',
                                  salary: self.salaryRange[self.salaryIndex],
                                  youfang: self.youfang,
                                  hometown: self.hometown,
                                  industry: self.industry,
                                  companytype: self.companytype
                                };
                                _context.prev = 41;
                                _context.next = 44;
                                return _api2.default.newportfolio({
                                  query: {
                                    pack: pack
                                  },
                                  method: 'POST'
                                });

                              case 44:
                                _res = _context.sent;

                                // // console.log('data back from new blog: ' + JSON.stringify(res))
                                _wepy2.default.hideToast();

                                if (!_res.data.success) {
                                  _context.next = 51;
                                  break;
                                }

                                _context.next = 49;
                                return _wepy2.default.showToast({
                                  title: '发送成功！',
                                  icon: 'success',
                                  duration: 1500,
                                  mask: true
                                });

                              case 49:
                                _context.next = 52;
                                break;

                              case 51:
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '抱歉，服务器发生异常，请联系泽铭: takeiteasydude',
                                  showCancel: false
                                });

                              case 52:

                                _wepy2.default.navigateTo({
                                  url: 'main'
                                });
                                _context.next = 60;
                                break;

                              case 55:
                                _context.prev = 55;
                                _context.t2 = _context['catch'](41);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '抱歉，服务器发生异常，请联系泽铭: takeiteasydude。',
                                  showCancel: false
                                });
                                return _context.abrupt('return', _context.t2);

                              case 60:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, this, [[3, 35], [7, 21, 25, 33], [26,, 28, 32], [41, 55]]);
                      }));

                      return function (_x) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  } else {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '请把绿色提示必填的内容补齐额^_^...'
                    });
                  }

                case 2:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function send() {
          return _ref2.apply(this, arguments);
        }

        return send;
      }(),
      edityoufang: function edityoufang(e) {
        this.youfang = !this.youfang;
      },
      edithaigui: function edithaigui(e) {
        this.shihaigui = !this.shihaigui;
      },
      editgender: function editgender(e) {
        this.genderValue = e.detail.value;
      },
      editcompanytype: function editcompanytype(e) {
        this.companytype = e.detail.value;
      },
      editindustry: function editindustry(e) {
        this.industry = e.detail.value;
      },
      edithometown: function edithometown(e) {
        this.hometown = e.detail.value;
      },
      editmajor: function editmajor(e) {
        this.major = e.detail.value;
      },
      editcollege: function editcollege(e) {
        this.college = e.detail.value;
      },
      editweight: function editweight(e) {
        var temp = e.detail.value;
        if (temp.length > 3) {
          _wepy2.default.showModal({
            title: '提示',
            content: 'Are you kidding me... 别以为泽铭不知道，哼！'
          });
        } else {
          if (isNaN(temp)) {
            _wepy2.default.showModal({
              title: '提示',
              content: '请输入数字...'
            });
          } else {
            this.weight = e.detail.value;
          }
        }
      },
      editheight: function editheight(e) {
        var temp = e.detail.value;
        if (temp.length > 3) {
          _wepy2.default.showModal({
            title: '提示',
            content: 'Are you kidding me... 别以为泽铭不知道，哼！'
          });
        } else {
          if (isNaN(temp)) {
            _wepy2.default.showModal({
              title: '提示',
              content: '请输入数字...'
            });
          } else {
            this.height = e.detail.value;
          }
        }
      },
      editage: function editage(e) {
        var temp = e.detail.value;

        if (temp.length > 2) {
          _wepy2.default.showModal({
            title: '提示',
            content: 'Are you kidding me... 别以为泽铭不知道，哼！'
          });
        } else {
          if (isNaN(temp)) {
            _wepy2.default.showModal({
              title: '提示',
              content: '请输入数字...'
            });
          } else {
            this.age = e.detail.value;
          }
        }
      },
      editselfintro: function editselfintro(e) {
        if (e.detail.value.length < 1000) {
          this.selfintro = e.detail.value;
        } else {
          _wepy2.default.showModal({
            title: '提示',
            content: '你已超出字数范围...'
          });
        }
      },
      editnickname: function editnickname(e) {
        if (e.detail.value.length < 10) {
          this.nickname = e.detail.value;
        } else {
          _wepy2.default.showModal({
            title: '提示',
            content: '你已超出字数范围...'
          });
        }
      },
      editSalary: function editSalary(e) {
        this.salaryIndex = e.detail.value;
      },
      degreeChoose: function degreeChoose(e) {
        this.degreeIndex = e.detail.value;
      },
      editMarriageStatus: function editMarriageStatus(e) {
        this.marriageStatusIndex = e.detail.value;
      },
      inviteGuest: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var self, res;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.invitecode.length === 0)) {
                    _context3.next = 4;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '抱歉，邀请码不能为空。',
                    showCancel: false
                  });
                  _context3.next = 11;
                  break;

                case 4:
                  _wepy2.default.showToast({
                    title: '验证中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });
                  self = this;
                  // console.log(typeof self.invitecode)

                  _context3.next = 8;
                  return _api2.default.verifyinvite({
                    query: {
                      invitecode: self.invitecode
                    },
                    method: 'POST'
                  });

                case 8:
                  res = _context3.sent;

                  // console.log(res)
                  _wepy2.default.hideToast();
                  if (res.data && res.data.available) {
                    _wepy2.default.showToast({
                      title: '成功',
                      icon: 'success',
                      duration: 2000
                    });
                    this.accessible = true;
                    self.$apply();
                  } else {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '抱歉，邀请码无法识或者已失效，请重新输入有效邀请码。',
                      showCancel: false
                    });
                  }

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function inviteGuest() {
          return _ref4.apply(this, arguments);
        }

        return inviteGuest;
      }(),
      editinvite: function editinvite(e) {
        this.invitecode = e.detail.value;
      },

      bindTextAreaBlur: function bindTextAreaBlur(e) {
        // console.log(e.detail.value)
      },
      chooseImage: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var _images;

          var _ref6, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 3 - this.images.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref6 = _context4.sent;
                  tempFilePaths = _ref6.tempFilePaths;

                  (_images = this.images).push.apply(_images, _toConsumableArray(tempFilePaths));
                  this.$apply();

                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function chooseImage() {
          return _ref5.apply(this, arguments);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Edit , 'pages/edit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiRWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW52aXRlY29kZSIsIm1hcnJpYWdlU3RhdHVzSW5kZXgiLCJkZWdyZWVJbmRleCIsInNhbGFyeUluZGV4IiwiZ2VuZGVyVmFsdWUiLCJhY2Nlc3NpYmxlIiwic2VsZmludHJvIiwiYWdlIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiZ2VuZGVyIiwiaW1hZ2VzIiwibmlja25hbWUiLCJjb2xsZWdlIiwibWFqb3IiLCJzaGloYWlndWkiLCJ5b3VmYW5nIiwiaG9tZXRvd24iLCJpbmR1c3RyeSIsImNvbXBhbnl0eXBlIiwibWFycmlhZ2VTdGF0dXNSYW5nZSIsImRlZ3JlZVJhbmdlIiwiaGFpZ3VpIiwic2FsYXJ5UmFuZ2UiLCJtZXRob2RzIiwic2VuZCIsInNlbGYiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzIiwiY29uZmlybSIsImltZ1VybHMiLCJ2IiwidXBsb2FkRmlsZSIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsInN1Y2Nlc3MiLCJyIiwiSlNPTiIsInBhcnNlIiwiaW1nIiwicHVzaCIsImhpZGVUb2FzdCIsImVycm1zZyIsInNob3dDYW5jZWwiLCJtZXNzYWdlIiwicGFjayIsIm1hcnJpYWdlc3RhdHVzIiwiZGVncmVlIiwiY2l0eSIsInNhbGFyeSIsIm5ld3BvcnRmb2xpbyIsInF1ZXJ5IiwibWV0aG9kIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsIm5hdmlnYXRlVG8iLCJlZGl0eW91ZmFuZyIsImUiLCJlZGl0aGFpZ3VpIiwiZWRpdGdlbmRlciIsImRldGFpbCIsInZhbHVlIiwiZWRpdGNvbXBhbnl0eXBlIiwiZWRpdGluZHVzdHJ5IiwiZWRpdGhvbWV0b3duIiwiZWRpdG1ham9yIiwiZWRpdGNvbGxlZ2UiLCJlZGl0d2VpZ2h0IiwidGVtcCIsImlzTmFOIiwiZWRpdGhlaWdodCIsImVkaXRhZ2UiLCJlZGl0c2VsZmludHJvIiwiZWRpdG5pY2tuYW1lIiwiZWRpdFNhbGFyeSIsImRlZ3JlZUNob29zZSIsImVkaXRNYXJyaWFnZVN0YXR1cyIsImludml0ZUd1ZXN0IiwidmVyaWZ5aW52aXRlIiwiYXZhaWxhYmxlIiwiJGFwcGx5IiwiZWRpdGludml0ZSIsImJpbmRUZXh0QXJlYUJsdXIiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJkZWxldGVJbWFnZSIsImlkeCIsInNwbGljZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUDtBQUVMQywyQkFBcUIsQ0FGaEI7QUFHTEMsbUJBQWEsQ0FIUjtBQUlMQyxtQkFBYSxDQUpSO0FBS0xDLG1CQUFhLEVBTFI7QUFNTEMsa0JBQVksS0FOUDtBQU9MQyxpQkFBVyxFQVBOO0FBUUxDLFdBQUssQ0FSQTtBQVNMQyxjQUFRLENBVEg7QUFVTEMsY0FBUSxDQVZIO0FBV0xDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQVhIO0FBWUxDLGNBQVEsRUFaSDtBQWFMQyxnQkFBVSxFQWJMO0FBY0xDLGVBQVMsRUFkSjtBQWVMQyxhQUFPLEVBZkY7QUFnQkxDLGlCQUFXLEtBaEJOO0FBaUJMQyxlQUFTLEtBakJKO0FBa0JMQyxnQkFBVSxFQWxCTDtBQW1CTEMsZ0JBQVUsRUFuQkw7QUFvQkxDLG1CQUFhLEVBcEJSO0FBcUJMQywyQkFBcUIsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsQ0FyQmhCO0FBc0JMQyxtQkFBYSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsSUFBZCxFQUFv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QjtBQUNBLGFBQUtiLE1BQUw7QUFDRDtBQXJTTyxLOzs7O0VBOUJzQixlQUFLZSxJOztrQkFBbEIxRyxJIiwiZmlsZSI6ImVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+kSdcbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICBpbnZpdGVjb2RlOiAnJyxcbiAgICAgIG1hcnJpYWdlU3RhdHVzSW5kZXg6IDAsXG4gICAgICBkZWdyZWVJbmRleDogMCxcbiAgICAgIHNhbGFyeUluZGV4OiAwLFxuICAgICAgZ2VuZGVyVmFsdWU6ICcnLFxuICAgICAgYWNjZXNzaWJsZTogZmFsc2UsXG4gICAgICBzZWxmaW50cm86ICcnLFxuICAgICAgYWdlOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgd2VpZ2h0OiAwLFxuICAgICAgZ2VuZGVyOiBbJ+Wls+eUnycsICfnlLfnlJ8nXSxcbiAgICAgIGltYWdlczogW10sXG4gICAgICBuaWNrbmFtZTogJycsXG4gICAgICBjb2xsZWdlOiAnJyxcbiAgICAgIG1ham9yOiAnJyxcbiAgICAgIHNoaWhhaWd1aTogZmFsc2UsXG4gICAgICB5b3VmYW5nOiBmYWxzZSxcbiAgICAgIGhvbWV0b3duOiAnJyxcbiAgICAgIGluZHVzdHJ5OiAnJyxcbiAgICAgIGNvbXBhbnl0eXBlOiAnJyxcbiAgICAgIG1hcnJpYWdlU3RhdHVzUmFuZ2U6IFsn5pyq6YCJ5oupJywgJ+acquWpmicsICfnprvlvIInXSxcbiAgICAgIGRlZ3JlZVJhbmdlOiBbJ+acqumAieaLqScsICfmnKznp5EnLCAn56GV5aOrJywgJ+WNmuWjqyddLFxuICAgICAgaGFpZ3VpOiBmYWxzZSxcbiAgICAgIHNhbGFyeVJhbmdlOiBbJ+acqumAieaLqScsICflnKjor7snLCAnMiB+IDVLJywgJzUgfiAxMEsnLCAnMTAgfiAyMEsnLCAnMjAgfiA1MEsnLCAnNTBL5Lul5LiKJ11cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBzZW5kICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIC8vIOajgOafpeW/heWhq+mhuVxuICAgICAgICBpZiAoc2VsZi5uaWNrbmFtZS5sZW5ndGggPiAwICYmIHNlbGYuZ2VuZGVyLmxlbmd0aCA+IDAgJiYgc2VsZi5kZWdyZWVJbmRleCAhPT0gMCAmJiBzZWxmLmhlaWdodC5sZW5ndGggPiAwICYmIHNlbGYubWFycmlhZ2VTdGF0dXNJbmRleCAhPT0gMCAmJiBzZWxmLmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ehruWumuS4iuS8oOWQl++8n+WPquatpOS4gOasoeS4iuS8oOacuuS8mumine+8jOWboOS4uue+pOS4u+acieeCueW/me+8jOaaguaXtuayoeacieS/ruaUueeahOWKn+iDveeahOWRouOAguS/ruaUueaaguaXtuWPquiDveaJvuazvemTreS7juWQjuWPsOWujOaIkPCfmJzjgIInXG4gICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coc2VsZilcbiAgICAgICAgICAgICAgICAvLyBpbWdVcmxzOiBbXVxuXG4gICAgICAgICAgICAgIHZhciBpbWdVcmxzID0gW11cbiAgICAgICAgICAgICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICAgICAgICAgIGlmIChzZWxmLmltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLmltYWdlczogJyArIHNlbGYuaW1hZ2VzKVxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdiBvZiBzZWxmLmltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy50YWtlaXRlYXN5ZHVkZS5jb20vYXBpL3VwbG9hZC9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHYsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltYWdlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzYXZlZCBpbiBzZXJ2ZXIuIENvbmdyYXRzIScpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHIuZGF0YSA9IEpTT04ucGFyc2Uoci5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnci5kYXRhOiAnICsgci5kYXRhKVxuICAgICAgICAgICAgICAgICAgICBpZiAoci5kYXRhLmltZykge1xuICAgICAgICAgICAgICAgICAgICAgIGltZ1VybHMucHVzaChyLmRhdGEuaW1nKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+Vfu+8mu+8iScgKyByLmRhdGEuZXJybXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgIInICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIHVwZGF0ZSBwb3J0Zm9saW9cbiAgICAgICAgICAgICAgdmFyIHBhY2sgPSB7XG4gICAgICAgICAgICAgICAgaW52aXRlY29kZTogc2VsZi5pbnZpdGVjb2RlLFxuICAgICAgICAgICAgICAgIGltZ1VybHM6IGltZ1VybHMsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IHNlbGYubmlja25hbWUsXG4gICAgICAgICAgICAgICAgc2VsZmludHJvOiBzZWxmLnNlbGZpbnRybyxcbiAgICAgICAgICAgICAgICBnZW5kZXI6IHNlbGYuZ2VuZGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgYWdlOiBzZWxmLmFnZSxcbiAgICAgICAgICAgICAgICBtYXJyaWFnZXN0YXR1czogc2VsZi5tYXJyaWFnZVN0YXR1c1JhbmdlW3NlbGYubWFycmlhZ2VTdGF0dXNJbmRleF0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzZWxmLmhlaWdodCxcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IHNlbGYud2VpZ2h0LFxuICAgICAgICAgICAgICAgIGRlZ3JlZTogc2VsZi5kZWdyZWVSYW5nZVtzZWxmLmRlZ3JlZUluZGV4XSxcbiAgICAgICAgICAgICAgICBzaGloYWlndWk6IHNlbGYuc2hpaGFpZ3VpLFxuICAgICAgICAgICAgICAgIGNvbGxlZ2U6IHNlbGYuY29sbGVnZSxcbiAgICAgICAgICAgICAgICBtYWpvcjogc2VsZi5tYWpvcixcbiAgICAgICAgICAgICAgICBjaXR5OiAn5Y2X5LqsJyxcbiAgICAgICAgICAgICAgICBzYWxhcnk6IHNlbGYuc2FsYXJ5UmFuZ2Vbc2VsZi5zYWxhcnlJbmRleF0sXG4gICAgICAgICAgICAgICAgeW91ZmFuZzogc2VsZi55b3VmYW5nLFxuICAgICAgICAgICAgICAgIGhvbWV0b3duOiBzZWxmLmhvbWV0b3duLFxuICAgICAgICAgICAgICAgIGluZHVzdHJ5OiBzZWxmLmluZHVzdHJ5LFxuICAgICAgICAgICAgICAgIGNvbXBhbnl0eXBlOiBzZWxmLmNvbXBhbnl0eXBlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5uZXdwb3J0Zm9saW8oe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFjazogcGFja1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnZGF0YSBiYWNrIGZyb20gbmV3IGJsb2c6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgYXdhaXQgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKn++8gScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAvLyB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfdXBsb2FkZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aKseatie+8jOacjeWKoeWZqOWPkeeUn+W8guW4uO+8jOivt+iBlOezu+azvemTrTogdGFrZWl0ZWFzeWR1ZGUnLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnbWFpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmirHmrYnvvIzmnI3liqHlmajlj5HnlJ/lvILluLjvvIzor7fogZTns7vms73pk606IHRha2VpdGVhc3lkdWRl44CCJyxcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6K+35oqK57u/6Imy5o+Q56S65b+F5aGr55qE5YaF5a656KGl6b2Q6aKdXl9eLi4uJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlZGl0eW91ZmFuZyAoZSkge1xuICAgICAgICB0aGlzLnlvdWZhbmcgPSAhdGhpcy55b3VmYW5nXG4gICAgICB9LFxuICAgICAgZWRpdGhhaWd1aSAoZSkge1xuICAgICAgICB0aGlzLnNoaWhhaWd1aSA9ICF0aGlzLnNoaWhhaWd1aVxuICAgICAgfSxcbiAgICAgIGVkaXRnZW5kZXIgKGUpIHtcbiAgICAgICAgdGhpcy5nZW5kZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgZWRpdGNvbXBhbnl0eXBlIChlKSB7XG4gICAgICAgIHRoaXMuY29tcGFueXR5cGUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVkaXRpbmR1c3RyeSAoZSkge1xuICAgICAgICB0aGlzLmluZHVzdHJ5ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBlZGl0aG9tZXRvd24gKGUpIHtcbiAgICAgICAgdGhpcy5ob21ldG93biA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgZWRpdG1ham9yIChlKSB7XG4gICAgICAgIHRoaXMubWFqb3IgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVkaXRjb2xsZWdlIChlKSB7XG4gICAgICAgIHRoaXMuY29sbGVnZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgZWRpdHdlaWdodCAoZSkge1xuICAgICAgICB2YXIgdGVtcCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBraWRkaW5nIG1lLi4uIOWIq+S7peS4uuazvemTreS4jeefpemBk++8jOWTvO+8gSdcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc05hTih0ZW1wKSkge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmlbDlrZcuLi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndlaWdodCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWRpdGhlaWdodCAoZSkge1xuICAgICAgICB2YXIgdGVtcCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBraWRkaW5nIG1lLi4uIOWIq+S7peS4uuazvemTreS4jeefpemBk++8jOWTvO+8gSdcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc05hTih0ZW1wKSkge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmlbDlrZcuLi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWRpdGFnZSAoZSkge1xuICAgICAgICB2YXIgdGVtcCA9IGUuZGV0YWlsLnZhbHVlXG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID4gMikge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBcmUgeW91IGtpZGRpbmcgbWUuLi4g5Yir5Lul5Li65rO96ZOt5LiN55+l6YGT77yM5ZO877yBJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRlbXApKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+ivt+i+k+WFpeaVsOWtly4uLidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWdlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlZGl0c2VsZmludHJvIChlKSB7XG4gICAgICAgIGlmIChlLmRldGFpbC52YWx1ZS5sZW5ndGggPCAxMDAwKSB7XG4gICAgICAgICAgdGhpcy5zZWxmaW50cm8gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkvaDlt7LotoXlh7rlrZfmlbDojIPlm7QuLi4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXRuaWNrbmFtZSAoZSkge1xuICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5L2g5bey6LaF5Ye65a2X5pWw6IyD5Zu0Li4uJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlZGl0U2FsYXJ5IChlKSB7XG4gICAgICAgIHRoaXMuc2FsYXJ5SW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGRlZ3JlZUNob29zZSAoZSkge1xuICAgICAgICB0aGlzLmRlZ3JlZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBlZGl0TWFycmlhZ2VTdGF0dXMgKGUpIHtcbiAgICAgICAgdGhpcy5tYXJyaWFnZVN0YXR1c0luZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBpbnZpdGVHdWVzdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmludml0ZWNvZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+aKseatie+8jOmCgOivt+eggeS4jeiDveS4uuepuuOAgicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HkuK0uLi4nLFxuICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAwLFxuICAgICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHNlbGYuaW52aXRlY29kZSlcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkudmVyaWZ5aW52aXRlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGludml0ZWNvZGU6IHNlbGYuaW52aXRlY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5hdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+aKseatie+8jOmCgOivt+eggeaXoOazleivhuaIluiAheW3suWkseaViO+8jOivt+mHjeaWsOi+k+WFpeacieaViOmCgOivt+eggeOAgicsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXRpbnZpdGUgKGUpIHtcbiAgICAgICAgdGhpcy5pbnZpdGVjb2RlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBiaW5kVGV4dEFyZWFCbHVyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogMyAtIHRoaXMuaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVJbWFnZSAoaWR4KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnNwbGljZShpZHgsIDEpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==