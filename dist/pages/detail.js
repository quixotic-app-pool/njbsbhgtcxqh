'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      sysWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      box: { imgUrls: ['https://data.whicdn.com/images/117793175/superthumb.jpg', 'https://yt3.ggpht.com/-MSxM5hie6no/AAAAAAAAAAI/AAAAAAAAAAA/efXJTaAqvYk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', 'https://yt3.ggpht.com/-MSxM5hie6no/AAAAAAAAAAI/AAAAAAAAAAA/efXJTaAqvYk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'], name: '爱因斯坦', age: '25', seflintro: '每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置。 页面的配置比app.json全局配置简单得多，只是设置 app.json 中的 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。', marriage: '未婚', height: '175', weight: '68', degree: '本科', shihaigui: true, college: '东南大学', major: '传媒专业', salary: '10K', youfangzi: true, hometown: '南京', industry: '互联网', companytype: '机关' }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN5c1dpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsImJveCIsImltZ1VybHMiLCJuYW1lIiwiYWdlIiwic2VmbGludHJvIiwibWFycmlhZ2UiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJkZWdyZWUiLCJzaGloYWlndWkiLCJjb2xsZWdlIiwibWFqb3IiLCJzYWxhcnkiLCJ5b3VmYW5nemkiLCJob21ldG93biIsImluZHVzdHJ5IiwiY29tcGFueXR5cGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUQ5QjtBQUVMQyxXQUFLLEVBQUNDLFNBQVMsQ0FBQyx5REFBRCxFQUE0RCw4R0FBNUQsRUFBNEssOEdBQTVLLENBQVYsRUFBdVNDLE1BQU0sTUFBN1MsRUFBcVRDLEtBQUssSUFBMVQsRUFBZ1VDLFdBQVcsZ0lBQTNVLEVBQTZjQyxVQUFVLElBQXZkLEVBQTZkQyxRQUFRLEtBQXJlLEVBQTRlQyxRQUFRLElBQXBmLEVBQTBmQyxRQUFRLElBQWxnQixFQUF3Z0JDLFdBQVcsSUFBbmhCLEVBQXloQkMsU0FBUyxNQUFsaUIsRUFBMGlCQyxPQUFPLE1BQWpqQixFQUF5akJDLFFBQVEsS0FBamtCLEVBQXdrQkMsV0FBVyxJQUFubEIsRUFBeWxCQyxVQUFVLElBQW5tQixFQUF5bUJDLFVBQVUsS0FBbm5CLEVBQTBuQkMsYUFBYSxJQUF2b0I7QUFGQSxLOzs7O0VBSjJCLGVBQUtDLEk7O2tCQUFwQnhCLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LuL57uN6aG1J1xuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIHN5c1dpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBib3g6IHtpbWdVcmxzOiBbJ2h0dHBzOi8vZGF0YS53aGljZG4uY29tL2ltYWdlcy8xMTc3OTMxNzUvc3VwZXJ0aHVtYi5qcGcnLCAnaHR0cHM6Ly95dDMuZ2dwaHQuY29tLy1NU3hNNWhpZTZuby9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9lZlhKVGFBcXZZay9zOTAwLWMtay1uby1tby1yai1jMHhmZmZmZmYvcGhvdG8uanBnJywgJ2h0dHBzOi8veXQzLmdncGh0LmNvbS8tTVN4TTVoaWU2bm8vQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvZWZYSlRhQXF2WWsvczkwMC1jLWstbm8tbW8tcmotYzB4ZmZmZmZmL3Bob3RvLmpwZyddLCBuYW1lOiAn54ix5Zug5pav5Z2mJywgYWdlOiAnMjUnLCBzZWZsaW50cm86ICfmr4/kuIDkuKrlsI/nqIvluo/pobXpnaLkuZ/lj6/ku6Xkvb/nlKguanNvbuaWh+S7tuadpeWvueacrOmhtemdoueahOeql+WPo+ihqOeOsOi/m+ihjOmFjee9ruOAgiDpobXpnaLnmoTphY3nva7mr5RhcHAuanNvbuWFqOWxgOmFjee9rueugOWNleW+l+Wkmu+8jOWPquaYr+iuvue9riBhcHAuanNvbiDkuK3nmoQgd2luZG93IOmFjee9rumhueeahOWGheWuue+8jOmhtemdouS4remFjee9rumhueS8muimhuebliBhcHAuanNvbiDnmoQgd2luZG93IOS4reebuOWQjOeahOmFjee9rumhueOAgicsIG1hcnJpYWdlOiAn5pyq5amaJywgaGVpZ2h0OiAnMTc1Jywgd2VpZ2h0OiAnNjgnLCBkZWdyZWU6ICfmnKznp5EnLCBzaGloYWlndWk6IHRydWUsIGNvbGxlZ2U6ICfkuJzljZflpKflraYnLCBtYWpvcjogJ+S8oOWqkuS4k+S4micsIHNhbGFyeTogJzEwSycsIHlvdWZhbmd6aTogdHJ1ZSwgaG9tZXRvd246ICfljZfkuqwnLCBpbmR1c3RyeTogJ+S6kuiBlOe9kScsIGNvbXBhbnl0eXBlOiAn5py65YWzJ31cbiAgICB9XG4gIH1cbiJdfQ==