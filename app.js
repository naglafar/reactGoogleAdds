webpackJsonp([1],{0:function(e,n,t){t(322),e.exports=t(443)},72:function(e,n,t){e.exports={Button:t(!function(){var e=new Error('Cannot find module "./components/Button.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),Column:t(!function(){var e=new Error('Cannot find module "./components/Column.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),DateFormat:t(!function(){var e=new Error('Cannot find module "./components/DateFormat.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),DeleteButton:t(!function(){var e=new Error('Cannot find module "./components/DeleteButton.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),EditButton:t(!function(){var e=new Error('Cannot find module "./components/EditButton.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),FluidContainer:t(!function(){var e=new Error('Cannot find module "./components/FluidContainer.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),Gliff:t(!function(){var e=new Error('Cannot find module "./components/Gliff.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),HomeLink:t(!function(){var e=new Error('Cannot find module "./components/HomeLink.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),NavigationBar:t(!function(){var e=new Error('Cannot find module "./components/NavigationBar.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),NavigationLink:t(!function(){var e=new Error('Cannot find module "./components/NavigationLink.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),NewButton:t(!function(){var e=new Error('Cannot find module "./components/NewButton.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),Row:t(!function(){var e=new Error('Cannot find module "./components/Row.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),Select:t(!function(){var e=new Error('Cannot find module "./components/Select.jsx"');throw e.code="MODULE_NOT_FOUND",e}()),FormGroup:t(!function(){var e=new Error('Cannot find module "./components/FormGroup.jsx"');throw e.code="MODULE_NOT_FOUND",e}())}},319:function(e,n,t){"use strict";var o=t(13),r=t(72).FluidContainer,i=t(72).Column,a=t(72).Row,s=t(532)["default"];console.log(s);var u=o.createClass({displayName:"App",render:function(){return o.createElement("div",{className:"app"},o.createElement(r,null,o.createElement(a,null,o.createElement(i,{s:12},o.createElement(s,{path:"/48773563/MX_Web_Preview"}))),o.createElement(a,null,o.createElement(i,{s:8,m:10,l:11},o.createElement("div",{className:"mainContent"},o.createElement("h3",null,"Sample App With Testing Out GPT"))),o.createElement(i,{s:4,m:2,l:1},o.createElement("div",{className:"rightBar"},o.createElement(s,{path:"/48773563/MX_Web_Preview",format:"VERTICAL"})))),o.createElement(a,null,o.createElement(i,{s:12},o.createElement(s,{path:"/48773563/MX_Web_Preview"})))))}});e.exports=u},320:function(e,n,t){"use strict";var o=t(13),r=t(72).NavigationBar,i=o.createClass({displayName:"Layout",render:function(){return o.createElement("div",null,o.createElement(r,{appName:"Google Adverts React Hack",appGliff:"fire",navLinks:[]}),this.props.children)}});e.exports=i},321:function(e,n,t){"use strict";var o=t(174).createHistory();e.exports=o},322:function(e,n,t){"use strict";var o=t(13),r=t(289),i=r.Router,a=r.Route,s=r.IndexRoute,u=t(113),l=t(320),c=t(319),d=t(321);u.render(o.createElement(i,{history:d},o.createElement(a,{path:"/",component:l},o.createElement(s,{component:c}),o.createElement(a,{path:"*",component:c}))),document.getElementById("app"))},443:function(e,n){},470:function(e,n){"use strict";var t=function(e){var n,t={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(n in e)e.hasOwnProperty(n)&&(t[n]=n);return t};e.exports=t},532:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){var n=arguments.length<=1||void 0===arguments[1]?E.HORIZONTAL:arguments[1],t=arguments.length<=2||void 0===arguments[2]?!0:arguments[2];if(!e||!e.length)return O[n]||[];if(1===e.length&&t){var o=e[0],r=o[0]+"x"+o[1];if(O[r])return O[r]||[]}return e}function l(){return"rgpt-"+N++}function c(){y||(y=window.googletag=window.googletag||{},y.cmd=y.cmd||[],y.cmd.push(function(){y.pubads().enableAsyncRendering(),y.pubads().collapseEmptyDivs(),y.pubads().disableInitialLoad(),y.enableServices()}),function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//www.googletagservices.com/tag/js/gpt.js";var n=document.getElementsByTagName("head")[0];n.appendChild(e)}())}var d,f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Dimensions=n.Format=void 0;var p=t(13),m=o(p),h=t(113),v=t(470),w=o(v),E=n.Format=(0,w["default"])({HORIZONTAL:null,RECTANGLE:null,VERTICAL:null,MOBILE:null}),O=n.Dimensions=(d={},s(d,E.HORIZONTAL,[[970,90],[728,90],[468,60],[234,60]]),s(d,E.RECTANGLE,[[336,280],[300,250],[250,250],[200,200],[180,150],[125,125]]),s(d,E.VERTICAL,[[300,600],[160,600],[120,600],[120,240]]),s(d,E.MOBILE,[[320,50]]),s(d,"300x600",[[300,600],[160,600]]),s(d,"336x280",[[336,280],[300,250]]),s(d,"728x90",[[728,90],[468,60]]),s(d,"970x90",[[970,90],[728,90],[468,60]]),d),N=1,y=null,g=function(e){function n(){var e,t,o,a;r(this,n);for(var s=arguments.length,u=Array(s),l=0;s>l;l++)u[l]=arguments[l];return t=o=i(this,(e=Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),o.handleResize=function(){o.update(o.props)},a=t,i(o,a)}return a(n,e),f(n,[{key:"componentDidMount",value:function(){var e=this;c(),this.props.responsive&&window.addEventListener("resize",this.handleResize),y.cmd.push(function(){e.initialized=!0,e.update(e.props)})}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentWillUnmount",value:function(){this.props.responsive&&window.removeEventListener("resize",this.handleResize),this.removeSlot()}},{key:"update",value:function(e){if(this.initialized){var n=(0,h.findDOMNode)(this);if(n){var t=n.offsetWidth,o=u(e.dimensions,e.format,e.canBeLower),r=e.responsive?o.filter(function(e){return e[0]<=t}):o,i=window.innerWidth,a=e.minWindowWidth,s=e.maxWindowWidth;if(-1!==a&&i>a?r=[]:-1!==s&&s>i&&(r=[]),JSON.stringify(r)!==JSON.stringify(this.currentDimensions)&&(this.currentDimensions=r,this.slot&&this.removeSlot(),r&&r.length)){if(!this.refs.holder)return void console.log("RGPT holder is undefined");var c=l();this.refs.holder.innerHTML='<div id="'+c+'"></div>';var d=this.slot=y.defineSlot(e.path,r,c);d.addService(y.pubads()),y.display(c),y.pubads().refresh([d])}}}}},{key:"removeSlot",value:function(){this.slot&&(y.pubads().clear([this.slot]),this.slot=null,this.refs.holder&&(this.refs.holder.innerHTML=null))}},{key:"refreshSlot",value:function(){this.slot&&y.pubads().refresh([this.slot])}},{key:"render",value:function(){return m["default"].createElement("div",{className:this.props.className,ref:"holder"})}}]),n}(p.Component);g.propTypes={className:m["default"].PropTypes.string,path:m["default"].PropTypes.string.isRequired,format:m["default"].PropTypes.string.isRequired,responsive:m["default"].PropTypes.bool.isRequired,canBeLower:m["default"].PropTypes.bool.isRequired,dimensions:m["default"].PropTypes.array,minWindowWidth:m["default"].PropTypes.number.isRequired,maxWindowWidth:m["default"].PropTypes.number.isRequired},g.defaultProps={format:E.HORIZONTAL,responsive:!0,canBeLower:!0,dimensions:null,minWindowWidth:-1,maxWindowWidth:-1},n["default"]=g}});
//# sourceMappingURL=app.js.map