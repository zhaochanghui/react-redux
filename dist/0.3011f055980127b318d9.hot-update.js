webpackHotUpdate(0,{

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPrototypeOf = __webpack_require__(66);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(71);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(72);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(76);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(102);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(34);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(128);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _redux = __webpack_require__(110);\n\nvar _reactRedux = __webpack_require__(147);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\nvar Counter = function (_Component) {\n\t(0, _inherits3.default)(Counter, _Component);\n\n\tfunction Counter() {\n\t\t(0, _classCallCheck3.default)(this, Counter);\n\t\treturn (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));\n\t}\n\n\t(0, _createClass3.default)(Counter, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    value = _props.value,\n\t\t\t    reducerHandler = _props.reducerHandler,\n\t\t\t    addHandler = _props.addHandler;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tvalue,\n\t\t\t\t\t' '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: reducerHandler },\n\t\t\t\t\t'-'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: addHandler },\n\t\t\t\t\t'+'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\treturn Counter;\n}(_react.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJ2YWx1ZSIsInJlZHVjZXJIYW5kbGVyIiwiYWRkSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBO0lBQ01BLE87Ozs7Ozs7Ozs7MkJBQ0k7QUFBQSxnQkFDcUMsS0FBS0MsS0FEMUM7QUFBQSxPQUNBQyxLQURBLFVBQ0FBLEtBREE7QUFBQSxPQUNNQyxjQUROLFVBQ01BLGNBRE47QUFBQSxPQUNzQkMsVUFEdEIsVUFDc0JBLFVBRHRCOztBQUVSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUlGLFVBQUo7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUEsT0FBUSxTQUFTQyxjQUFqQjtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFRLFNBQVNDLFVBQWpCO0FBQUE7QUFBQTtBQUhELElBREQ7QUFPQSIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9cclxuY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHZhbHVlLHJlZHVjZXJIYW5kbGVyLCBhZGRIYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8cD57dmFsdWV9IDwvcD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3JlZHVjZXJIYW5kbGVyfT4tPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXthZGRIYW5kbGVyfT4rPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///62\n");

/***/ })

})