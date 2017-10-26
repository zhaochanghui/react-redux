webpackHotUpdate(0,{

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPrototypeOf = __webpack_require__(77);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(82);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(83);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(87);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(113);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _reactDom = __webpack_require__(121);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(136);\n\n__webpack_require__(163);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 页面\nvar Repos = function (_React$Component) {\n    (0, _inherits3.default)(Repos, _React$Component);\n\n    function Repos(props) {\n        (0, _classCallCheck3.default)(this, Repos);\n        return (0, _possibleConstructorReturn3.default)(this, (Repos.__proto__ || (0, _getPrototypeOf2.default)(Repos)).call(this, props));\n    }\n\n    (0, _createClass3.default)(Repos, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'Repos/page of repos \\u9875\\u9762'\n            );\n        }\n    }]);\n    return Repos;\n}(_react2.default.Component);\n\n//页面 //\n\n\nvar About = function (_React$Component2) {\n    (0, _inherits3.default)(About, _React$Component2);\n\n    function About(props) {\n        (0, _classCallCheck3.default)(this, About);\n        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));\n    }\n\n    (0, _createClass3.default)(About, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'About/\\u5173\\u4E8E\\u6211\\u9875\\u9762'\n            );\n        }\n    }]);\n    return About;\n}(_react2.default.Component);\n\n//\n\n\nvar Contact = function (_React$Component3) {\n    (0, _inherits3.default)(Contact, _React$Component3);\n\n    function Contact(props) {\n        (0, _classCallCheck3.default)(this, Contact);\n        return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call(this, props));\n    }\n\n    (0, _createClass3.default)(Contact, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                '\\u8054\\u7CFB\\u9875\\u9762'\n            );\n        }\n    }]);\n    return Contact;\n}(_react2.default.Component);\n\n//\n\n\nvar App = function (_React$Component4) {\n    (0, _inherits3.default)(App, _React$Component4);\n\n    function App(props) {\n        (0, _classCallCheck3.default)(this, App);\n        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));\n    }\n\n    (0, _createClass3.default)(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'React Router Tutorial'\n                ),\n                _react2.default.createElement(\n                    'ul',\n                    { role: 'nav' },\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/about' },\n                            'About'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/repos' },\n                            'Repos'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/contact' },\n                            'Contact'\n                        )\n                    )\n                ),\n                this.props.children\n            );\n        }\n    }]);\n    return App;\n}(_react2.default.Component);\n\n//\n// 增加2个新路由\n\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRouterDom.HashRouter,\n    null,\n    _react2.default.createElement(\n        App,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/repos', component: Repos }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: About }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: Contact })\n    )\n), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6WyJSZXBvcyIsInByb3BzIiwiQ29tcG9uZW50IiwiQWJvdXQiLCJDb250YWN0IiwiQXBwIiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVDOztBQUNEOzs7O0FBRUE7SUFDT0EsSzs7O0FBQ0gsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUFBLG1JQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0g7OztFQVRnQixnQkFBTUMsUzs7QUFZM0I7OztJQUNPQyxLOzs7QUFDSCxtQkFBWUYsS0FBWixFQUFtQjtBQUFBO0FBQUEsbUlBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSDs7O0VBVGdCLGdCQUFNQyxTOztBQVkzQjs7O0lBQ01FLE87OztBQUNMLHFCQUFZSCxLQUFaLEVBQW1CO0FBQUE7QUFBQSx1SUFDWkEsS0FEWTtBQUVsQjs7OztpQ0FFUTtBQUNSLG1CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBOzs7RUFQb0IsZ0JBQU1DLFM7O0FBVTVCOzs7SUFDTUcsRzs7O0FBQ0YsaUJBQVlKLEtBQVosRUFBbUI7QUFBQTtBQUFBLCtIQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBSSxNQUFLLEtBQVQ7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsOEJBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQUFKLHFCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDhCQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFBSixxQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSw4QkFBTSxJQUFHLFVBQVQ7QUFBQTtBQUFBO0FBQUo7QUFISixpQkFGSjtBQU9LLHFCQUFLQSxLQUFMLENBQVdLO0FBUGhCLGFBREo7QUFXSDs7O0VBakJhLGdCQUFNSixTOztBQW9CeEI7QUFDQTs7O0FBQ0EsbUJBQVNLLE1BQVQsQ0FDSztBQUFBO0FBQUE7QUFDQztBQUFDLFdBQUQ7QUFBQTtBQUNELCtEQUFPLE1BQUssUUFBWixFQUFxQixXQUFXUCxLQUFoQyxHQURDO0FBRUQsK0RBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVdHLEtBQWhDLEdBRkM7QUFHRCwrREFBTyxNQUFLLFVBQVosRUFBdUIsV0FBV0MsT0FBbEM7QUFIQztBQURELENBREwsRUFRR0ksU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQVJIIiwiZmlsZSI6Ijc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbiBpbXBvcnQgeyBIYXNoUm91dGVyLCBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi9zdGF0aWMvYmFzZS5jc3MnO1xyXG5cclxuLy8g6aG16Z2iXHJcbiBjbGFzcyBSZXBvcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5SZXBvcy9wYWdlIG9mIHJlcG9zIOmhtemdojwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6aG16Z2iIC8vXHJcbiBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5BYm91dC/lhbPkuo7miJHpobXpnaI8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1xyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIDxkaXY+6IGU57O76aG16Z2iPC9kaXY+XHJcblx0fVxyXG59XHJcblxyXG4vL1xyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+UmVhY3QgUm91dGVyIFR1dG9yaWFsPC9oMT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvcmVwb3NcIj5SZXBvczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1xyXG4vLyDlop7liqAy5Liq5paw6Lev55SxXHJcblJlYWN0RE9NLnJlbmRlcigoXHJcbiAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgIDxBcHA+XHJcblx0ICAgIDxSb3V0ZSBwYXRoPVwiL3JlcG9zXCIgY29tcG9uZW50PXtSZXBvc30gLz5cclxuXHQgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxyXG5cdCAgICA8Um91dGUgcGF0aD0nL2NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0gLz5cclxuICAgICAgPC9BcHA+XHJcbiAgICA8L0hhc2hSb3V0ZXI+XHJcbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///76\n");

/***/ })

})