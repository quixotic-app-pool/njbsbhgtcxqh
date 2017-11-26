'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      accessible: true,
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
                                  _context.next = 62;
                                  break;
                                }

                                console.log(self);
                                // imgUrls: []

                                imgUrls = [];
                                // upload images

                                if (!(self.images.length > 0)) {
                                  _context.next = 41;
                                  break;
                                }

                                _context.prev = 4;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context.prev = 8;
                                _iterator = self.images[Symbol.iterator]();

                              case 10:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                  _context.next = 20;
                                  break;
                                }

                                v = _step.value;
                                _context.next = 14;
                                return _wepy2.default.uploadFile({
                                  url: 'http://127.0.0.1:9000/api/upload/image',
                                  filePath: v,
                                  name: 'file',
                                  success: function success(res) {
                                    console.log('image has been successfully saved in server. Congrats!');
                                  }
                                });

                              case 14:
                                r = _context.sent;


                                r.data = JSON.parse(r.data);
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

                              case 17:
                                _iteratorNormalCompletion = true;
                                _context.next = 10;
                                break;

                              case 20:
                                _context.next = 26;
                                break;

                              case 22:
                                _context.prev = 22;
                                _context.t0 = _context['catch'](8);
                                _didIteratorError = true;
                                _iteratorError = _context.t0;

                              case 26:
                                _context.prev = 26;
                                _context.prev = 27;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                  _iterator.return();
                                }

                              case 29:
                                _context.prev = 29;

                                if (!_didIteratorError) {
                                  _context.next = 32;
                                  break;
                                }

                                throw _iteratorError;

                              case 32:
                                return _context.finish(29);

                              case 33:
                                return _context.finish(26);

                              case 34:
                                _context.next = 41;
                                break;

                              case 36:
                                _context.prev = 36;
                                _context.t1 = _context['catch'](4);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '服务器错误，上传图片失败。' + _context.t1.message,
                                  showCancel: false
                                });
                                return _context.abrupt('return');

                              case 41:

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
                                _context.prev = 42;
                                _context.next = 45;
                                return _api2.default.newportfolio({
                                  query: {
                                    pack: pack
                                  },
                                  method: 'POST'
                                });

                              case 45:
                                _res = _context.sent;

                                // console.log('data back from new blog: ' + JSON.stringify(res))
                                _wepy2.default.hideToast();

                                if (!_res.data.success) {
                                  _context.next = 53;
                                  break;
                                }

                                _context.next = 50;
                                return _wepy2.default.showToast({
                                  title: '发送成功！',
                                  icon: 'success',
                                  duration: 1500,
                                  mask: true
                                });

                              case 50:
                                _wepy2.default.setStorageSync('_uploaded', true);
                                _context.next = 54;
                                break;

                              case 53:
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '抱歉，服务器发生异常，请联系泽铭: takeiteasydude',
                                  showCancel: false
                                });

                              case 54:

                                _wepy2.default.navigateTo({
                                  url: 'main'
                                });
                                _context.next = 62;
                                break;

                              case 57:
                                _context.prev = 57;
                                _context.t2 = _context['catch'](42);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '抱歉，服务器发生异常，请联系泽铭: takeiteasydude。',
                                  showCancel: false
                                });
                                return _context.abrupt('return', _context.t2);

                              case 62:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, this, [[4, 36], [8, 22, 26, 34], [27,, 29, 33], [42, 57]]);
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
        if (e.detail.value.length < 120) {
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
                  _context3.next = 13;
                  break;

                case 4:
                  _wepy2.default.showToast({
                    title: '验证中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });
                  self = this;

                  console.log(_typeof(self.invitecode));
                  _context3.next = 9;
                  return _api2.default.verifyinvite({
                    query: {
                      invitecode: self.invitecode
                    },
                    method: 'POST'
                  });

                case 9:
                  res = _context3.sent;

                  console.log(res);
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

                case 13:
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
        console.log(e.detail.value);
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

exports.default = Edit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiRWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW52aXRlY29kZSIsIm1hcnJpYWdlU3RhdHVzSW5kZXgiLCJkZWdyZWVJbmRleCIsInNhbGFyeUluZGV4IiwiZ2VuZGVyVmFsdWUiLCJhY2Nlc3NpYmxlIiwic2VsZmludHJvIiwiYWdlIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiZ2VuZGVyIiwiaW1hZ2VzIiwibmlja25hbWUiLCJjb2xsZWdlIiwibWFqb3IiLCJzaGloYWlndWkiLCJ5b3VmYW5nIiwiaG9tZXRvd24iLCJpbmR1c3RyeSIsImNvbXBhbnl0eXBlIiwibWFycmlhZ2VTdGF0dXNSYW5nZSIsImRlZ3JlZVJhbmdlIiwiaGFpZ3VpIiwic2FsYXJ5UmFuZ2UiLCJtZXRob2RzIiwic2VuZCIsInNlbGYiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJpbWdVcmxzIiwidiIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJzdWNjZXNzIiwiciIsIkpTT04iLCJwYXJzZSIsImltZyIsInB1c2giLCJoaWRlVG9hc3QiLCJlcnJtc2ciLCJzaG93Q2FuY2VsIiwibWVzc2FnZSIsInBhY2siLCJtYXJyaWFnZXN0YXR1cyIsImRlZ3JlZSIsImNpdHkiLCJzYWxhcnkiLCJuZXdwb3J0Zm9saW8iLCJxdWVyeSIsIm1ldGhvZCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJlZGl0eW91ZmFuZyIsImUiLCJlZGl0aGFpZ3VpIiwiZWRpdGdlbmRlciIsImRldGFpbCIsInZhbHVlIiwiZWRpdGNvbXBhbnl0eXBlIiwiZWRpdGluZHVzdHJ5IiwiZWRpdGhvbWV0b3duIiwiZWRpdG1ham9yIiwiZWRpdGNvbGxlZ2UiLCJlZGl0d2VpZ2h0IiwidGVtcCIsImlzTmFOIiwiZWRpdGhlaWdodCIsImVkaXRhZ2UiLCJlZGl0c2VsZmludHJvIiwiZWRpdG5pY2tuYW1lIiwiZWRpdFNhbGFyeSIsImRlZ3JlZUNob29zZSIsImVkaXRNYXJyaWFnZVN0YXR1cyIsImludml0ZUd1ZXN0IiwidmVyaWZ5aW52aXRlIiwiYXZhaWxhYmxlIiwiJGFwcGx5IiwiZWRpdGludml0ZSIsImJpbmRUZXh0QXJlYUJsdXIiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJkZWxldGVJbWFnZSIsImlkeCIsInNwbGljZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUxDLDJCQUFxQixDQUZoQjtBQUdMQyxtQkFBYSxDQUhSO0FBSUxDLG1CQUFhLENBSlI7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxrQkFBWSxJQU5QO0FBT0xDLGlCQUFXLEVBUE47QUFRTEMsV0FBSyxDQVJBO0FBU0xDLGNBQVEsQ0FUSDtBQVVMQyxjQUFRLENBVkg7QUFXTEMsY0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLENBWEg7QUFZTEMsY0FBUSxFQVpIO0FBYUxDLGdCQUFVLEVBYkw7QUFjTEMsZUFBUyxFQWRKO0FBZUxDLGFBQU8sRUFmRjtBQWdCTEMsaUJBQVcsS0FoQk47QUFpQkxDLGVBQVMsS0FqQko7QUFrQkxDLGdCQUFVLEVBbEJMO0FBbUJMQyxnQkFBVSxFQW5CTDtBQW9CTEMsbUJBQWEsRUFwQlI7QUFxQkxDLDJCQUFxQixDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsSUFBZCxDQXJCaEI7QUFzQkxDLG1CQUFh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O0FBQUE7QUEwUlJPLGtCQTFSUSx3QkEwUk1DLEdBMVJOLEVBMFJXQyxTQTFSWCxFQTBSc0I7QUFDNUIsdUJBQUtGLFlBQUwsQ0FBa0I7QUFDaEJHLG1CQUFTRixHQURPO0FBRWhCRyxnQkFBTUY7QUFGVSxTQUFsQjtBQUlELE9BL1JPO0FBZ1NSRyxpQkFoU1EsdUJBZ1NLQyxHQWhTTCxFQWdTVTtBQUNoQixhQUFLNUYsTUFBTCxDQUFZNkYsTUFBWixDQUFtQkQsR0FBbkIsRUFBd0IsQ0FBeEI7QUFDQSxhQUFLYixNQUFMO0FBQ0Q7QUFuU08sSzs7OztFQTlCc0IsZUFBS2UsSTs7a0JBQWxCN0csSSIsImZpbGUiOiJlZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpEnXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgaW52aXRlY29kZTogJycsXG4gICAgICBtYXJyaWFnZVN0YXR1c0luZGV4OiAwLFxuICAgICAgZGVncmVlSW5kZXg6IDAsXG4gICAgICBzYWxhcnlJbmRleDogMCxcbiAgICAgIGdlbmRlclZhbHVlOiAnJyxcbiAgICAgIGFjY2Vzc2libGU6IHRydWUsXG4gICAgICBzZWxmaW50cm86ICcnLFxuICAgICAgYWdlOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgd2VpZ2h0OiAwLFxuICAgICAgZ2VuZGVyOiBbJ+Wls+eUnycsICfnlLfnlJ8nXSxcbiAgICAgIGltYWdlczogW10sXG4gICAgICBuaWNrbmFtZTogJycsXG4gICAgICBjb2xsZWdlOiAnJyxcbiAgICAgIG1ham9yOiAnJyxcbiAgICAgIHNoaWhhaWd1aTogZmFsc2UsXG4gICAgICB5b3VmYW5nOiBmYWxzZSxcbiAgICAgIGhvbWV0b3duOiAnJyxcbiAgICAgIGluZHVzdHJ5OiAnJyxcbiAgICAgIGNvbXBhbnl0eXBlOiAnJyxcbiAgICAgIG1hcnJpYWdlU3RhdHVzUmFuZ2U6IFsn5pyq6YCJ5oupJywgJ+acquWpmicsICfnprvlvIInXSxcbiAgICAgIGRlZ3JlZVJhbmdlOiBbJ+acqumAieaLqScsICfmnKznp5EnLCAn56GV5aOrJywgJ+WNmuWjqyddLFxuICAgICAgaGFpZ3VpOiBmYWxzZSxcbiAgICAgIHNhbGFyeVJhbmdlOiBbJ+acqumAieaLqScsICflnKjor7snLCAnMiB+IDVLJywgJzUgfiAxMEsnLCAnMTAgfiAyMEsnLCAnMjAgfiA1MEsnLCAnNTBL5Lul5LiKJ11cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBzZW5kICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIC8vIOajgOafpeW/heWhq+mhuVxuICAgICAgICBpZiAoc2VsZi5uaWNrbmFtZS5sZW5ndGggPiAwICYmIHNlbGYuZ2VuZGVyLmxlbmd0aCA+IDAgJiYgc2VsZi5kZWdyZWVJbmRleCAhPT0gMCAmJiBzZWxmLmhlaWdodC5sZW5ndGggPiAwICYmIHNlbGYubWFycmlhZ2VTdGF0dXNJbmRleCAhPT0gMCAmJiBzZWxmLmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ehruWumuS4iuS8oOWQl++8n+WPquatpOS4gOasoeS4iuS8oOacuuS8mumine+8jOWboOS4uue+pOS4u+acieeCueW/me+8jOaaguaXtuayoeacieS/ruaUueeahOWKn+iDveeahOWRouOAguS/ruaUueaaguaXtuWPquiDveaJvuazvemTreS7juWQjuWPsOWujOaIkPCfmJzjgIInXG4gICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZilcbiAgICAgICAgICAgICAgICAvLyBpbWdVcmxzOiBbXVxuXG4gICAgICAgICAgICAgIHZhciBpbWdVcmxzID0gW11cbiAgICAgICAgICAgICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICAgICAgICAgIGlmIChzZWxmLmltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYgb2Ygc2VsZi5pbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo5MDAwL2FwaS91cGxvYWQvaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB2LFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2F2ZWQgaW4gc2VydmVyLiBDb25ncmF0cyEnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICByLmRhdGEgPSBKU09OLnBhcnNlKHIuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuZGF0YS5pbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbWdVcmxzLnB1c2goci5kYXRhLmltZylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAguivt+mHjeivlX7vvJrvvIknICsgci5kYXRhLmVycm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CCJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyB1cGRhdGUgcG9ydGZvbGlvXG4gICAgICAgICAgICAgIHZhciBwYWNrID0ge1xuICAgICAgICAgICAgICAgIGludml0ZWNvZGU6IHNlbGYuaW52aXRlY29kZSxcbiAgICAgICAgICAgICAgICBpbWdVcmxzOiBpbWdVcmxzLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBzZWxmLm5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIHNlbGZpbnRybzogc2VsZi5zZWxmaW50cm8sXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiBzZWxmLmdlbmRlclZhbHVlLFxuICAgICAgICAgICAgICAgIGFnZTogc2VsZi5hZ2UsXG4gICAgICAgICAgICAgICAgbWFycmlhZ2VzdGF0dXM6IHNlbGYubWFycmlhZ2VTdGF0dXNSYW5nZVtzZWxmLm1hcnJpYWdlU3RhdHVzSW5kZXhdLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc2VsZi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiBzZWxmLndlaWdodCxcbiAgICAgICAgICAgICAgICBkZWdyZWU6IHNlbGYuZGVncmVlUmFuZ2Vbc2VsZi5kZWdyZWVJbmRleF0sXG4gICAgICAgICAgICAgICAgc2hpaGFpZ3VpOiBzZWxmLnNoaWhhaWd1aSxcbiAgICAgICAgICAgICAgICBjb2xsZWdlOiBzZWxmLmNvbGxlZ2UsXG4gICAgICAgICAgICAgICAgbWFqb3I6IHNlbGYubWFqb3IsXG4gICAgICAgICAgICAgICAgY2l0eTogJ+WNl+S6rCcsXG4gICAgICAgICAgICAgICAgc2FsYXJ5OiBzZWxmLnNhbGFyeVJhbmdlW3NlbGYuc2FsYXJ5SW5kZXhdLFxuICAgICAgICAgICAgICAgIHlvdWZhbmc6IHNlbGYueW91ZmFuZyxcbiAgICAgICAgICAgICAgICBob21ldG93bjogc2VsZi5ob21ldG93bixcbiAgICAgICAgICAgICAgICBpbmR1c3RyeTogc2VsZi5pbmR1c3RyeSxcbiAgICAgICAgICAgICAgICBjb21wYW55dHlwZTogc2VsZi5jb21wYW55dHlwZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkubmV3cG9ydGZvbGlvKHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHBhY2s6IHBhY2tcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEgYmFjayBmcm9tIG5ldyBibG9nOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcbiAgICAgICAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnX3VwbG9hZGVkJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmirHmrYnvvIzmnI3liqHlmajlj5HnlJ/lvILluLjvvIzor7fogZTns7vms73pk606IHRha2VpdGVhc3lkdWRlJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgIHVybDogJ21haW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5oqx5q2J77yM5pyN5Yqh5Zmo5Y+R55Sf5byC5bi477yM6K+36IGU57O75rO96ZOtOiB0YWtlaXRlYXN5ZHVkZeOAgicsXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+aKiue7v+iJsuaPkOekuuW/heWhq+eahOWGheWuueihpem9kOminV5fXi4uLidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWRpdHlvdWZhbmcgKGUpIHtcbiAgICAgICAgdGhpcy55b3VmYW5nID0gIXRoaXMueW91ZmFuZ1xuICAgICAgfSxcbiAgICAgIGVkaXRoYWlndWkgKGUpIHtcbiAgICAgICAgdGhpcy5zaGloYWlndWkgPSAhdGhpcy5zaGloYWlndWlcbiAgICAgIH0sXG4gICAgICBlZGl0Z2VuZGVyIChlKSB7XG4gICAgICAgIHRoaXMuZ2VuZGVyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVkaXRjb21wYW55dHlwZSAoZSkge1xuICAgICAgICB0aGlzLmNvbXBhbnl0eXBlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBlZGl0aW5kdXN0cnkgKGUpIHtcbiAgICAgICAgdGhpcy5pbmR1c3RyeSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgZWRpdGhvbWV0b3duIChlKSB7XG4gICAgICAgIHRoaXMuaG9tZXRvd24gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVkaXRtYWpvciAoZSkge1xuICAgICAgICB0aGlzLm1ham9yID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBlZGl0Y29sbGVnZSAoZSkge1xuICAgICAgICB0aGlzLmNvbGxlZ2UgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVkaXR3ZWlnaHQgKGUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ0FyZSB5b3Uga2lkZGluZyBtZS4uLiDliKvku6XkuLrms73pk63kuI3nn6XpgZPvvIzlk7zvvIEnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGVtcCkpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5pWw5a2XLi4uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53ZWlnaHQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXRoZWlnaHQgKGUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ0FyZSB5b3Uga2lkZGluZyBtZS4uLiDliKvku6XkuLrms73pk63kuI3nn6XpgZPvvIzlk7zvvIEnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGVtcCkpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5pWw5a2XLi4uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXRhZ2UgKGUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBlLmRldGFpbC52YWx1ZVxuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBraWRkaW5nIG1lLi4uIOWIq+S7peS4uuazvemTreS4jeefpemBk++8jOWTvO+8gSdcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc05hTih0ZW1wKSkge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmlbDlrZcuLi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFnZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWRpdHNlbGZpbnRybyAoZSkge1xuICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoIDwgMTIwKSB7XG4gICAgICAgICAgdGhpcy5zZWxmaW50cm8gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfkvaDlt7LotoXlh7rlrZfmlbDojIPlm7QuLi4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXRuaWNrbmFtZSAoZSkge1xuICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5L2g5bey6LaF5Ye65a2X5pWw6IyD5Zu0Li4uJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlZGl0U2FsYXJ5IChlKSB7XG4gICAgICAgIHRoaXMuc2FsYXJ5SW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGRlZ3JlZUNob29zZSAoZSkge1xuICAgICAgICB0aGlzLmRlZ3JlZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBlZGl0TWFycmlhZ2VTdGF0dXMgKGUpIHtcbiAgICAgICAgdGhpcy5tYXJyaWFnZVN0YXR1c0luZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBpbnZpdGVHdWVzdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmludml0ZWNvZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+aKseatie+8jOmCgOivt+eggeS4jeiDveS4uuepuuOAgicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HkuK0uLi4nLFxuICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAwLFxuICAgICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHNlbGYuaW52aXRlY29kZSlcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkudmVyaWZ5aW52aXRlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGludml0ZWNvZGU6IHNlbGYuaW52aXRlY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5hdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+aKseatie+8jOmCgOivt+eggeaXoOazleivhuaIluiAheW3suWkseaViO+8jOivt+mHjeaWsOi+k+WFpeacieaViOmCgOivt+eggeOAgicsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXRpbnZpdGUgKGUpIHtcbiAgICAgICAgdGhpcy5pbnZpdGVjb2RlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBiaW5kVGV4dEFyZWFCbHVyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogMyAtIHRoaXMuaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVJbWFnZSAoaWR4KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnNwbGljZShpZHgsIDEpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==