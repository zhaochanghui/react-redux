webpackHotUpdate(0,{

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPrototypeOf = __webpack_require__(70);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(75);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(76);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(80);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(106);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(15);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(116);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _redux = __webpack_require__(59);\n\nvar _reactRedux = __webpack_require__(144);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//定义单纯用来展示UI的展示组件\nvar Counter = function (_Component) {\n\t(0, _inherits3.default)(Counter, _Component);\n\n\tfunction Counter() {\n\t\t(0, _classCallCheck3.default)(this, Counter);\n\t\treturn (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));\n\t}\n\n\t(0, _createClass3.default)(Counter, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    value = _props.value,\n\t\t\t    jian = _props.jian,\n\t\t\t    jia = _props.jia;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t' ',\n\t\t\t\t\tvalue,\n\t\t\t\t\t' '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: jian },\n\t\t\t\t\t'\\u51CF\\u4E00\\u4E2A'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: jia },\n\t\t\t\t\t'\\u52A0\\u4E00\\u4E2A'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\treturn Counter;\n}(_react.Component);\n\n//定义映射函数，生成容器组件\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tvalue: state.cnt\n\t};\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJ2YWx1ZSIsImppYW4iLCJqaWEiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUdBO0lBQ01BLE87Ozs7Ozs7Ozs7MkJBQ0k7QUFBQSxnQkFDb0IsS0FBS0MsS0FEekI7QUFBQSxPQUNBQyxLQURBLFVBQ0FBLEtBREE7QUFBQSxPQUNNQyxJQUROLFVBQ01BLElBRE47QUFBQSxPQUNZQyxHQURaLFVBQ1lBLEdBRFo7O0FBRVIsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFLRixVQUFMO0FBQUE7QUFBQSxLQUREO0FBRUM7QUFBQTtBQUFBLE9BQVEsU0FBU0MsSUFBakI7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFBO0FBQUEsT0FBUSxTQUFTQyxHQUFqQjtBQUFBO0FBQUE7QUFIRCxJQUREO0FBT0E7Ozs7O0FBSUY7OztBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU87QUFDTkosU0FBT0ksTUFBTUM7QUFEUCxFQUFQO0FBR0EsQ0FKRCIsImZpbGUiOiI2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCwgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuLy/lrprkuYnljZXnuq/nlKjmnaXlsZXnpLpVSeeahOWxleekuue7hOS7tlxyXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHZhbHVlLGppYW4sIGppYSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PHA+IHt2YWx1ZX0gPC9wPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17amlhbn0+5YeP5LiA5LiqPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtqaWF9PuWKoOS4gOS4qjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vL+WumuS5ieaYoOWwhOWHveaVsO+8jOeUn+aIkOWuueWZqOe7hOS7tlxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dmFsdWU6IHN0YXRlLmNudFxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///69\n");

/***/ })

})