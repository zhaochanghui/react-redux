webpackHotUpdate(0,{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPrototypeOf = __webpack_require__(71);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(76);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(77);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(81);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(107);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _reactDom = __webpack_require__(115);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(130);\n\n__webpack_require__(147);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function (_React$Component) {\n\t(0, _inherits3.default)(App, _React$Component);\n\n\tfunction App() {\n\t\t(0, _classCallCheck3.default)(this, App);\n\t\treturn (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));\n\t}\n\n\t(0, _createClass3.default)(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(Nav, null),\n\t\t\t\tthis.props.children\n\t\t\t);\n\t\t}\n\t}]);\n\treturn App;\n}(_react2.default.Component);\n\n//\n\n\nReactDom.render(_react2.default.createElement(\n\t_reactRouter.Router,\n\t{ history: _reactRouter.hashHistory },\n\t_react2.default.createElement(\n\t\t_reactRouter.Route,\n\t\t{ path: '/', component: App },\n\t\t_react2.default.createElement(_reactRouter.IndexRoute, { Component: Home }),\n\t\t_react2.default.createElement(_reactRouter.Route, { path: '/Story', component: Story })\n\t)\n), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUmVhY3REb20iLCJyZW5kZXIiLCJIb21lIiwiU3RvcnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0lBR01BLEc7Ozs7Ozs7Ozs7MkJBQ0k7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDLGtDQUFDLEdBQUQsT0FERDtBQUVFLFNBQUtDLEtBQUwsQ0FBV0M7QUFGYixJQUREO0FBTUE7OztFQVJnQixnQkFBTUMsUzs7QUFheEI7OztBQUNBQyxTQUFTQyxNQUFULENBRUU7QUFBQTtBQUFBLEdBQVEsaUNBQVI7QUFDQztBQUFBO0FBQUEsSUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBV0wsR0FBM0I7QUFDQywyREFBWSxXQUFXTSxJQUF2QixHQUREO0FBRUMsc0RBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVdDLEtBQWhDO0FBRkQ7QUFERCxDQUZGLEVBU0NDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FURCIsImZpbGUiOiI3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCAnLi9zdGF0aWMvYmFzZS5jc3MnO1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8TmF2IC8+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vL1xyXG5SZWFjdERvbS5yZW5kZXIoXHJcblx0KFxyXG5cdFx0PFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0+XHJcblx0XHRcdFx0PEluZGV4Um91dGUgQ29tcG9uZW50PXtIb21lfSAvPlxyXG5cdFx0XHRcdDxSb3V0ZSBwYXRoPScvU3RvcnknIGNvbXBvbmVudD17U3Rvcnl9IC8+XHJcblx0XHRcdDwvUm91dGU+XHJcblx0XHQ8L1JvdXRlcj5cclxuXHRcdCksXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///70\n");

/***/ })

})