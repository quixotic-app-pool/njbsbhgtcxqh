'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: MichaelChen <mymac>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2017-10-24T14:13:34+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Email:  teacherincafe@163.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Project: one_server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Filename: wxRequest.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last modified by:   mymac
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last modified time: 2017-11-26T15:40:19+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

// import util from './util';
// import md5 from './md5';

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:

                        _wepy2.default.showToast({
                            title: '加载中',
                            icon: 'loading'
                        });
                        data = params.query || {};
                        _context.next = 4;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        }).then(function (err, respond) {
                            if (err) {
                                return err;
                            }
                            return respond;
                        });

                    case 4:
                        res = _context.sent;

                        _wepy2.default.hideToast();
                        return _context.abrupt('return', res);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkYXRhIiwicXVlcnkiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwidGhlbiIsImVyciIsInJlc3BvbmQiLCJyZXMiLCJoaWRlVG9hc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQVVBOzs7Ozs7MmNBVkE7Ozs7Ozs7Ozs7QUFXQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQTtBQUFBLHVFQUFZO0FBQUEsWUFBT0MsTUFBUCx1RUFBZ0IsRUFBaEI7QUFBQSxZQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVkLHVDQUFLQyxTQUFMLENBQWU7QUFDWEMsbUNBQU8sS0FESTtBQUVYQyxrQ0FBTTtBQUZLLHlCQUFmO0FBSUlDLDRCQU5VLEdBTUhMLE9BQU9NLEtBQVAsSUFBZ0IsRUFOYjtBQUFBO0FBQUEsK0JBT0ksZUFBS0MsT0FBTCxDQUFhO0FBQzNCTixpQ0FBS0EsR0FEc0I7QUFFM0JPLG9DQUFRUixPQUFPUSxNQUFQLElBQWlCLEtBRkU7QUFHM0JILGtDQUFNQSxJQUhxQjtBQUkzQkksb0NBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCO0FBSm1CLHlCQUFiLEVBS2ZDLElBTGUsQ0FLVixVQUFTQyxHQUFULEVBQWNDLE9BQWQsRUFBc0I7QUFDNUIsZ0NBQUdELEdBQUgsRUFBUTtBQUNOLHVDQUFPQSxHQUFQO0FBQ0Q7QUFDRCxtQ0FBT0MsT0FBUDtBQUNELHlCQVZpQixDQVBKOztBQUFBO0FBT1JDLDJCQVBROztBQWtCZCx1Q0FBS0MsU0FBTDtBQWxCYyx5REFtQlBELEdBbkJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUF1QkFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDYmpCO0FBRGEsQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAQXV0aG9yOiBNaWNoYWVsQ2hlbiA8bXltYWM+XG4gKiBARGF0ZTogICAyMDE3LTEwLTI0VDE0OjEzOjM0KzA4OjAwXG4gKiBARW1haWw6ICB0ZWFjaGVyaW5jYWZlQDE2My5jb21cbiAqIEBQcm9qZWN0OiBvbmVfc2VydmVyXG4gKiBARmlsZW5hbWU6IHd4UmVxdWVzdC5qc1xuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgbXltYWNcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTctMTEtMjZUMTU6NDA6MTkrMDg6MDBcbiAqL1xuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5Jztcbi8vIGltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG4vLyBpbXBvcnQgbWQ1IGZyb20gJy4vbWQ1JztcblxuLy8gY29uc3QgQVBJX1NFQ1JFVF9LRVkgPSAnd3d3Lm1hbGwuY3ljbGUuY29tJ1xuLy8gY29uc3QgVElNRVNUQU1QID0gdXRpbC5nZXRDdXJyZW50VGltZSgpXG4vLyBjb25zdCBTSUdOID0gbWQ1LmhleF9tZDUoKFRJTUVTVEFNUCArIEFQSV9TRUNSRVRfS0VZKS50b0xvd2VyQ2FzZSgpKVxuXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyAocGFyYW1zID0ge30sIHVybCkgPT4ge1xuXG4gICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICAgIGljb246ICdsb2FkaW5nJ1xuICAgIH0pO1xuICAgIHZhciBkYXRhID0gcGFyYW1zLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uKGVyciwgcmVzcG9uZCl7XG4gICAgICBpZihlcnIpIHtcbiAgICAgICAgcmV0dXJuIGVyclxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbmQ7XG4gICAgfSk7XG4gICAgd2VweS5oaWRlVG9hc3QoKTtcbiAgICByZXR1cm4gcmVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB3eFJlcXVlc3Rcbn1cbiJdfQ==