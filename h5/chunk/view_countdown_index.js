(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"132":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),r=_interopRequireDefault(o(1)),a=_interopRequireDefault(o(4)),i=_interopRequireDefault(o(131)),u=o(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(133);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.default.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(u.View,{"className":"doc-header"},r.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":i.default.string}},"133":function(e,t,o){},"476":function(e,t,o){},"92":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),r=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0},a=_interopRequireDefault(o(1)),i=o(4),u=_interopRequireDefault(i),l=o(130),c=o(137),s=_interopRequireDefault(o(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(476);var p=function(e){function CountDownPage(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CountDownPage);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=o=_possibleConstructorReturn(this,(e=CountDownPage.__proto__||Object.getPrototypeOf(CountDownPage)).call.apply(e,[this].concat(r))),o.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CountDownPage,u.default.Component),n(CountDownPage,[{"key":"onTimeUp","value":function onTimeUp(){(0,i.showToast)({"title":"时间到","icon":"success","duration":2e3})}},{"key":"render","value":function render(){return a.default.createElement(l.View,{"className":"page"},a.default.createElement(s.default,{"title":"CountDown 倒计时"}),a.default.createElement(l.View,{"className":"doc-body"},a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"一般用法"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtCountdown,{"minutes":1,"seconds":10})),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtCountdown,{"isShowDay":!0,"hours":1,"minutes":1,"seconds":10}))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"自定义格式化"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtCountdown,{"format":{"hours":":","minutes":":","seconds":""},"minutes":1,"seconds":10}))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"卡片式"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtCountdown,{"isCard":!0,"minutes":1,"seconds":10})),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtCountdown,{"isCard":!0,"isShowDay":!0,"day":1,"minutes":1,"seconds":10,"format":{"day":"天","hours":":","minutes":":","seconds":""}}))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"自定义倒计时回调事件"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtCountdown,{"format":{"hours":":","minutes":":","seconds":""},"seconds":10,"onTimeUp":this.onTimeUp.bind(this)})))))}},{"key":"componentDidMount","value":function componentDidMount(){r(CountDownPage.prototype.__proto__||Object.getPrototypeOf(CountDownPage.prototype),"componentDidMount",this)&&r(CountDownPage.prototype.__proto__||Object.getPrototypeOf(CountDownPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){r(CountDownPage.prototype.__proto__||Object.getPrototypeOf(CountDownPage.prototype),"componentDidShow",this)&&r(CountDownPage.prototype.__proto__||Object.getPrototypeOf(CountDownPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){r(CountDownPage.prototype.__proto__||Object.getPrototypeOf(CountDownPage.prototype),"componentDidHide",this)&&r(CountDownPage.prototype.__proto__||Object.getPrototypeOf(CountDownPage.prototype),"componentDidHide",this).call(this)}}]),CountDownPage}();t.default=p}}]);