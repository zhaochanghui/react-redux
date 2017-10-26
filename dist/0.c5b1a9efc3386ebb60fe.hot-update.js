webpackHotUpdate(0,{

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPrototypeOf = __webpack_require__(70);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(75);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(76);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(80);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(106);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(15);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(116);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _redux = __webpack_require__(59);\n\nvar _reactRedux = __webpack_require__(144);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//定义单纯用来展示UI的展示组件\nvar Counter = function (_Component) {\n\t(0, _inherits3.default)(Counter, _Component);\n\n\tfunction Counter() {\n\t\t(0, _classCallCheck3.default)(this, Counter);\n\t\treturn (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));\n\t}\n\n\t(0, _createClass3.default)(Counter, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tconsole.log('展示组件');\n\t\t\tvar _props = this.props,\n\t\t\t    value = _props.value,\n\t\t\t    jian = _props.jian,\n\t\t\t    jia = _props.jia;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t' ',\n\t\t\t\t\tvalue,\n\t\t\t\t\t' '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: jian },\n\t\t\t\t\t'\\u51CF\\u4E00\\u4E2A'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: jia },\n\t\t\t\t\t'\\u52A0\\u4E00\\u4E2A'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\treturn Counter;\n}(_react.Component);\n\n//定义映射函数，生成容器组件\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n\tconsole.log('mapStateToProps', state);\n\treturn {\n\t\tvalue: state.cnt\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\tconsole.log('mapDispatchToProps', dispatch);\n\treturn {\n\t\tjian: function jian() {\n\t\t\tdispatch({ type: 'jian' });\n\t\t},\n\t\tjia: function jia() {\n\t\t\tdispatch({ type: 'jia' });\n\t\t}\n\t};\n};\n\nvar APP = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);\n\n//reducer稍微修改一下\nvar reducer = function reducer() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cnt: 0 };\n\tvar action = arguments[1];\n\n\tconsole.log('reducer', action.type);\n\tswitch (action.type) {\n\t\tcase 'jia':\n\t\t\treturn { cnt: state.cnt + 1 };\n\t\tcase 'jian':\n\t\t\treturn { cnt: state.cnt - 1 };\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\nvar store = (0, _redux.createStore)(reducer);\n\n//渲染函数中的结构外部嵌套Provier并添加store\n_reactDom2.default.render(_react2.default.createElement(\n\t_reactRedux.Provider,\n\t{ store: store },\n\t_react2.default.createElement(APP, null)\n), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6WyJDb3VudGVyIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidmFsdWUiLCJqaWFuIiwiamlhIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJBUFAiLCJyZWR1Y2VyIiwiYWN0aW9uIiwic3RvcmUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBR0E7SUFDTUEsTzs7Ozs7Ozs7OzsyQkFDSTtBQUNSQyxXQUFRQyxHQUFSLENBQVksTUFBWjtBQURRLGdCQUVvQixLQUFLQyxLQUZ6QjtBQUFBLE9BRUFDLEtBRkEsVUFFQUEsS0FGQTtBQUFBLE9BRU1DLElBRk4sVUFFTUEsSUFGTjtBQUFBLE9BRVlDLEdBRlosVUFFWUEsR0FGWjs7QUFHUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUtGLFVBQUw7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUEsT0FBUSxTQUFTQyxJQUFqQjtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFRLFNBQVNDLEdBQWpCO0FBQUE7QUFBQTtBQUhELElBREQ7QUFPQTs7Ozs7QUFJRjs7O0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDbENQLFNBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUE4Qk0sS0FBOUI7QUFDQSxRQUFPO0FBQ05KLFNBQU9JLE1BQU1DO0FBRFAsRUFBUDtBQUdBLENBTEQ7O0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3hDVixTQUFRQyxHQUFSLENBQVksb0JBQVosRUFBaUNTLFFBQWpDO0FBQ0EsUUFBUTtBQUNQTixRQUFNLGdCQUFJO0FBQ1RNLFlBQVMsRUFBQ0MsTUFBTSxNQUFQLEVBQVQ7QUFDQSxHQUhNO0FBSVBOLE9BQUksZUFBSTtBQUNQSyxZQUFTLEVBQUNDLE1BQUssS0FBTixFQUFUO0FBQ0E7QUFOTSxFQUFSO0FBUUEsQ0FWRDs7QUFZQSxJQUFNQyxNQUFNLHlCQUFRTixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNWLE9BQTdDLENBQVo7O0FBRUE7QUFDQSxJQUFNYyxVQUFVLFNBQVZBLE9BQVUsR0FBMEI7QUFBQSxLQUF6Qk4sS0FBeUIsdUVBQWxCLEVBQUNDLEtBQUksQ0FBTCxFQUFrQjtBQUFBLEtBQVRNLE1BQVM7O0FBQ3pDZCxTQUFRQyxHQUFSLENBQVksU0FBWixFQUFzQmEsT0FBT0gsSUFBN0I7QUFDQSxTQUFPRyxPQUFPSCxJQUFkO0FBQ0MsT0FBSyxLQUFMO0FBQ0MsVUFBTyxFQUFDSCxLQUFLRCxNQUFNQyxHQUFOLEdBQVUsQ0FBaEIsRUFBUDtBQUNELE9BQUssTUFBTDtBQUNDLFVBQU8sRUFBQ0EsS0FBS0QsTUFBTUMsR0FBTixHQUFVLENBQWhCLEVBQVA7QUFDRDtBQUNDLFVBQU9ELEtBQVA7QUFORjtBQVFBLENBVkQ7QUFXQSxJQUFNUSxRQUFRLHdCQUFZRixPQUFaLENBQWQ7O0FBR0E7QUFDQSxtQkFBU0csTUFBVCxDQUNDO0FBQUE7QUFBQSxHQUFVLE9BQU9ELEtBQWpCO0FBQ0MsK0JBQUMsR0FBRDtBQURELENBREQsRUFJQ0UsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpEIiwiZmlsZSI6IjY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG4vL+WumuS5ieWNlee6r+eUqOadpeWxleekulVJ55qE5bGV56S657uE5Lu2XHJcbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKCflsZXnpLrnu4Tku7YnKTtcclxuXHRcdGNvbnN0IHsgdmFsdWUsamlhbiwgamlhIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8cD4ge3ZhbHVlfSA8L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtqaWFufT7lh4/kuIDkuKo8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2ppYX0+5Yqg5LiA5LiqPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8v5a6a5LmJ5pig5bCE5Ye95pWw77yM55Sf5oiQ5a655Zmo57uE5Lu2XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdtYXBTdGF0ZVRvUHJvcHMnLHN0YXRlKVxyXG5cdHJldHVybiB7XHJcblx0XHR2YWx1ZTogc3RhdGUuY250XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdtYXBEaXNwYXRjaFRvUHJvcHMnLGRpc3BhdGNoKTtcclxuXHRyZXR1cm4gKHtcclxuXHRcdGppYW46ICgpPT57XHJcblx0XHRcdGRpc3BhdGNoKHt0eXBlOiAnamlhbid9KTtcclxuXHRcdH0sXHJcblx0XHRqaWE6KCk9PntcclxuXHRcdFx0ZGlzcGF0Y2goe3R5cGU6J2ppYSd9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuY29uc3QgQVBQID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcik7XHJcblxyXG4vL3JlZHVjZXLnqI3lvq7kv67mlLnkuIDkuItcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9e2NudDowfSwgYWN0aW9uKT0+e1xyXG5cdGNvbnNvbGUubG9nKCdyZWR1Y2VyJyxhY3Rpb24udHlwZSlcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ2ppYSc6XHJcblx0XHRcdHJldHVybiB7Y250OiBzdGF0ZS5jbnQrMX07XHJcblx0XHRjYXNlICdqaWFuJzpcclxuXHRcdFx0cmV0dXJuIHtjbnQ6IHN0YXRlLmNudC0xfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcdFx0XHJcblx0fVxyXG59O1xyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5cclxuXHJcbi8v5riy5p+T5Ye95pWw5Lit55qE57uT5p6E5aSW6YOo5bWM5aWXUHJvdmllcuW5tua3u+WKoHN0b3JlXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHRcdDxBUFAgLz5cclxuXHQ8L1Byb3ZpZGVyPixcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcblx0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///69\n");

/***/ })

})