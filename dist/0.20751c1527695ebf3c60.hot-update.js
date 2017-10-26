webpackHotUpdate(0,{

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getPrototypeOf = __webpack_require__(77);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(82);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(83);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(87);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(113);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _reactDom = __webpack_require__(121);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(136);\n\n__webpack_require__(163);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Repos = function (_React$Component) {\n    (0, _inherits3.default)(Repos, _React$Component);\n\n    function Repos(props) {\n        (0, _classCallCheck3.default)(this, Repos);\n        return (0, _possibleConstructorReturn3.default)(this, (Repos.__proto__ || (0, _getPrototypeOf2.default)(Repos)).call(this, props));\n    }\n\n    (0, _createClass3.default)(Repos, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'Repos'\n            );\n        }\n    }]);\n    return Repos;\n}(_react2.default.Component);\n\n//\n\n\nvar About = function (_React$Component2) {\n    (0, _inherits3.default)(About, _React$Component2);\n\n    function About(props) {\n        (0, _classCallCheck3.default)(this, About);\n        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));\n    }\n\n    (0, _createClass3.default)(About, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'About'\n            );\n        }\n    }]);\n    return About;\n}(_react2.default.Component);\n\n//\n\n\nvar App = function (_React$Component3) {\n    (0, _inherits3.default)(App, _React$Component3);\n\n    function App(props) {\n        (0, _classCallCheck3.default)(this, App);\n        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));\n    }\n\n    (0, _createClass3.default)(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'React Router Tutorial'\n                ),\n                _react2.default.createElement(\n                    'ul',\n                    { role: 'nav' },\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            Link,\n                            { to: '/about' },\n                            'About'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            Link,\n                            { to: '/repos' },\n                            'Repos'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return App;\n}(_react2.default.Component);\n\n//\n// 增加2个新路由\n\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRouterDom.BrowserRouter,\n    null,\n    _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(\n                _reactRouterDom.Route,\n                { path: '/', component: App },\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/repos', component: Repos }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: About })\n            )\n        )\n    )\n), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6WyJSZXBvcyIsInByb3BzIiwiQ29tcG9uZW50IiwiQWJvdXQiLCJBcHAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVDOztBQUNEOzs7O0lBR09BLEs7OztBQUNILG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7QUFBQSxtSUFDVEEsS0FEUztBQUVsQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIOzs7RUFUZ0IsZ0JBQU1DLFM7O0FBWTNCOzs7SUFDT0MsSzs7O0FBQ0gsbUJBQVlGLEtBQVosRUFBbUI7QUFBQTtBQUFBLG1JQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0g7OztFQVRnQixnQkFBTUMsUzs7QUFZM0I7OztJQUNNRSxHOzs7QUFDRixpQkFBWUgsS0FBWixFQUFtQjtBQUFBO0FBQUEsK0hBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFJLE1BQUssS0FBVDtBQUNJO0FBQUE7QUFBQTtBQUFJO0FBQUMsZ0NBQUQ7QUFBQSw4QkFBTSxJQUFHLFFBQVQ7QUFBQTtBQUFBO0FBQUoscUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSTtBQUFDLGdDQUFEO0FBQUEsOEJBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQUFKO0FBRko7QUFGSixhQURKO0FBU0g7OztFQWZhLGdCQUFNQyxTOztBQWtCeEI7QUFDQTs7O0FBQ0EsbUJBQVNHLE1BQVQsQ0FDSztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsa0JBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVdELEdBQTNCO0FBQ0ksdUVBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVdKLEtBQWhDLEdBREo7QUFFSSx1RUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBV0csS0FBM0I7QUFGSjtBQUREO0FBREY7QUFERCxDQURMLEVBV0dHLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FYSCIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4gaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4vc3RhdGljL2Jhc2UuY3NzJztcclxuXHJcblxyXG4gY2xhc3MgUmVwb3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+UmVwb3M8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1xyXG4gY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+QWJvdXQ8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1xyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+UmVhY3QgUm91dGVyIFR1dG9yaWFsPC9oMT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvcmVwb3NcIj5SZXBvczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9cclxuLy8g5aKe5YqgMuS4quaWsOi3r+eUsVxyXG5SZWFjdERPTS5yZW5kZXIoKFxyXG4gICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgXHQ8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtBcHB9PlxyXG5cdCAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlcG9zXCIgY29tcG9uZW50PXtSZXBvc30gLz5cclxuXHQgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///76\n");

/***/ })

})