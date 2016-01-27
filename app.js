webpackJsonp([1],{0:function(e,t,r){r(336),e.exports=r(457)},42:function(e,t,r){"use strict";var n=r(6),a=n.createClass({displayName:"Gliff",propTypes:{gliff:n.PropTypes.string.isRequired},render:function(){return n.createElement("span",{className:"glyphicon glyphicon-"+this.props.gliff,"aria-hidden":"true"})}});e.exports=a},59:function(e,t,r){"use strict";e.exports={Button:r(323),Column:r(137),DateFormat:r(324),DeleteButton:r(325),EditButton:r(326),FluidContainer:r(327),Gliff:r(42),HomeLink:r(138),NavigationBar:r(329),NavigationLink:r(139),NewButton:r(330),Row:r(331),Select:r(332),FormGroup:r(328)}},137:function(e,t,r){"use strict";var n=r(6),a=n.createClass({displayName:"Column",propTypes:{s:n.PropTypes.number.isRequired,m:n.PropTypes.number,l:n.PropTypes.number},generateClassName:function(){var e="col-xs-"+this.props.s;return this.props.m&&(e=e+" col-md-"+this.props.m),this.props.l&&(e=e+" col-lg-"+this.props.l),e},render:function(){return n.createElement("div",{className:this.generateClassName()},this.props.children)}});e.exports=a},138:function(e,t,r){"use strict";var n=r(6),a=r(57).Link,s=r(42),i=n.createClass({displayName:"HomeLink",propTypes:{gliff:n.PropTypes.string.isRequired,name:n.PropTypes.string.isRequired},render:function(){return n.createElement(a,{to:"./"},n.createElement("h3",null,n.createElement(s,{gliff:this.props.gliff})," ",this.props.name))}});e.exports=i},139:function(e,t,r){"use strict";var n=r(6),a=r(57).Link,s=r(42),i=n.createClass({displayName:"NavigationLink",propTypes:{to:n.PropTypes.string.isRequired,gliff:n.PropTypes.string.isRequired,name:n.PropTypes.string.isRequired},render:function(){return n.createElement("li",null,n.createElement(a,{to:this.props.to},n.createElement(s,{gliff:this.props.gliff}),"  "+this.props.name))}});e.exports=i},323:function(e,t,r){"use strict";var n=r(6),a=r(42),s=n.createClass({displayName:"SaveButton",propTypes:{click:n.PropTypes.func.isRequired,gliff:n.PropTypes.string.isRequired},render:function(){return n.createElement("button",{type:"button",onClick:this.props.click,className:"btn btn-primary btn-block"},n.createElement(a,{gliff:this.props.gliff}))}});e.exports=s},324:function(e,t,r){"use strict";var n=r(6),a=r(1),s="MMM D YY [at] HH:mm",i=n.createClass({displayName:"DateFormat",propTypes:{date:n.PropTypes.string.isRequired,format:n.PropTypes.string},formatDate:function(){return a(this.props.date).format(this.props.format||s)},render:function(){return n.createElement("span",null,this.formatDate())}});e.exports=i},325:function(e,t,r){"use strict";var n=r(6),a=r(42),s=n.createClass({displayName:"DeleteButton",propTypes:{"delete":n.PropTypes.func.isRequired},render:function(){return n.createElement("forum",null,n.createElement("div",{className:"col-xs-12 form-group"},n.createElement("button",{type:"button",onClick:this.props["delete"],className:"btn btn-danger btn-block"},n.createElement(a,{gliff:"trash"}))))}});e.exports=s},326:function(e,t,r){"use strict";var n=r(6),a=r(42),s=r(57).Link,i=n.createClass({displayName:"EditButton",propTypes:{to:n.PropTypes.string.isRequired},render:function(){return n.createElement("forum",null,n.createElement("div",{className:"col-xs-12 form-group"},n.createElement(s,{to:this.props.to},n.createElement("button",{className:"btn btn-warning btn-block"},n.createElement(a,{gliff:"pencil"})))))}});e.exports=i},327:function(e,t,r){"use strict";var n=r(6),a=n.createClass({displayName:"FluidContainer",render:function(){return n.createElement("div",{className:"container-fluid"},this.props.children)}});e.exports=a},328:function(e,t,r){"use strict";var n=r(6),a=r(137),s=n.createClass({displayName:"FormGroup",propTypes:{"for":n.PropTypes.string.isRequired,label:n.PropTypes.string.isRequired},render:function(){return n.createElement("div",{className:"form-group"},n.createElement(a,{s:2},n.createElement("label",{"for":this.props["for"],className:"control-label"},this.props.label)),n.createElement(a,{s:10},this.props.children))}});e.exports=s},329:function(e,t,r){"use strict";var n=r(6),a=r(138),s=r(139),i=n.createClass({displayName:"NavBarContainer",propTypes:{appName:n.PropTypes.string.isRequired,appGliff:n.PropTypes.string.isRequired,navLinks:n.PropTypes.arrayOf(n.PropTypes.shape({to:n.PropTypes.string.isRequired,gliff:n.PropTypes.string.isRequired,name:n.PropTypes.string.isRequired})).isRequired},render:function(){return n.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"navbar-header"},n.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},n.createElement("span",{className:"sr-only"},"Toggle navigation"),n.createElement("span",{className:"icon-bar"}),n.createElement("span",{className:"icon-bar"}),n.createElement("span",{className:"icon-bar"})),n.createElement(a,{name:this.props.appName,gliff:this.props.appGliff})),n.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},n.createElement("ul",{className:"nav navbar-nav"},this.props.navLinks.map(this.renderNavLink)))))},renderNavLink:function(e){return n.createElement(s,{to:e.to,gliff:e.gliff,name:e.gliff})}});e.exports=i},330:function(e,t,r){"use strict";var n=r(6),a=r(42),s=r(57).Link,i=n.createClass({displayName:"NewButton",propTypes:{to:n.PropTypes.string.isRequired},render:function(){return n.createElement("forum",null,n.createElement("div",{className:"col-xs-12 form-group"},n.createElement(s,{to:this.props.to},n.createElement("button",{className:"btn btn-primary btn-block"},n.createElement(a,{gliff:"plus"})))))}});e.exports=i},331:function(e,t,r){"use strict";var n=r(6),a=n.createClass({displayName:"Row",render:function(){return n.createElement("div",{className:"row"},this.props.children)}});e.exports=a},332:function(e,t,r){"use strict";var n=r(6),a=n.createClass({displayName:"Select",propTypes:{options:n.PropTypes.array.isRequired,onChange:n.PropTypes.func.isRequired,value:n.PropTypes.string},renderOption:function(e){return n.createElement("option",{key:e.value,value:e.value},e.name)},onChange:function(e){var t=e.target.value;this.props.onChange(t,e)},render:function(){return n.createElement("select",{value:this.props.value,onChange:this.onChange},this.props.options.map(this.renderOption))}});e.exports=a},333:function(e,t,r){"use strict";var n=r(6),a=r(59).FluidContainer,s=r(59).Column,i=r(59).Row,o=r(546)["default"],l=r(59).FormGroup;console.log(o);var p=n.createClass({displayName:"App",getInitialState:function(){return{addUrl:"/48773563/MX_Web_Preview"}},newAddUrl:function(e){var t=e.target.value;this.setState({addUrl:t})},render:function(){return n.createElement("div",{className:"app"},n.createElement(a,null,n.createElement(i,null,n.createElement(s,{s:12},n.createElement(o,{path:this.state.addUrl}))),n.createElement(i,null,n.createElement(s,{s:8,m:10,l:11},n.createElement("div",{className:"mainContent"},n.createElement("h3",null,"Sample App With Testing Out GPT"),n.createElement("hr",null),n.createElement("p",null,"current add: "+this.state.addUrl),n.createElement(l,{"for":"add",label:"/channel/id"},n.createElement("input",{onChange:this.newAddUrl,type:"text",id:"add",placeholder:"/48773563/MX_Web_Preview"})))),n.createElement(s,{s:4,m:2,l:1},n.createElement("div",{className:"rightBar"},n.createElement(o,{path:this.state.addUrl,format:"VERTICAL"})))),n.createElement(i,null,n.createElement(s,{s:12},n.createElement(o,{path:this.state.addUrl})))))}});e.exports=p},334:function(e,t,r){"use strict";var n=r(6),a=r(59).NavigationBar,s=n.createClass({displayName:"Layout",render:function(){return n.createElement("div",null,n.createElement(a,{appName:"Google Adverts React Hack",appGliff:"fire",navLinks:[]}),this.props.children)}});e.exports=s},335:function(e,t,r){"use strict";var n=r(179).createHistory();e.exports=n},336:function(e,t,r){"use strict";var n=r(6),a=r(57),s=a.Router,i=a.Route,o=a.IndexRoute,l=r(115),p=r(334),c=r(333),u=r(335);l.render(n.createElement(s,{history:u},n.createElement(i,{path:"/",component:p},n.createElement(o,{component:c}),n.createElement(i,{path:"*",component:c}))),document.getElementById("app"))},457:function(e,t){},484:function(e,t){"use strict";var r=function(e){var t,r={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(r[t]=t);return r};e.exports=r},546:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){var t=arguments.length<=1||void 0===arguments[1]?g.HORIZONTAL:arguments[1],r=arguments.length<=2||void 0===arguments[2]?!0:arguments[2];if(!e||!e.length)return E[t]||[];if(1===e.length&&r){var n=e[0],a=n[0]+"x"+n[1];if(E[a])return E[a]||[]}return e}function p(){return"rgpt-"+b++}function c(){N||(N=window.googletag=window.googletag||{},N.cmd=N.cmd||[],N.cmd.push(function(){N.pubads().enableAsyncRendering(),N.pubads().collapseEmptyDivs(),N.pubads().disableInitialLoad(),N.enableServices()}),function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//www.googletagservices.com/tag/js/gpt.js";var t=document.getElementsByTagName("head")[0];t.appendChild(e)}())}var u,d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Dimensions=t.Format=void 0;var m=r(6),f=n(m),h=r(115),v=r(484),y=n(v),g=t.Format=(0,y["default"])({HORIZONTAL:null,RECTANGLE:null,VERTICAL:null,MOBILE:null}),E=t.Dimensions=(u={},o(u,g.HORIZONTAL,[[970,90],[728,90],[468,60],[234,60]]),o(u,g.RECTANGLE,[[336,280],[300,250],[250,250],[200,200],[180,150],[125,125]]),o(u,g.VERTICAL,[[300,600],[160,600],[120,600],[120,240]]),o(u,g.MOBILE,[[320,50]]),o(u,"300x600",[[300,600],[160,600]]),o(u,"336x280",[[336,280],[300,250]]),o(u,"728x90",[[728,90],[468,60]]),o(u,"970x90",[[970,90],[728,90],[468,60]]),u),b=1,N=null,T=function(e){function t(){var e,r,n,i;a(this,t);for(var o=arguments.length,l=Array(o),p=0;o>p;p++)l[p]=arguments[p];return r=n=s(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.handleResize=function(){n.update(n.props)},i=r,s(n,i)}return i(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this;c(),this.props.responsive&&window.addEventListener("resize",this.handleResize),N.cmd.push(function(){e.initialized=!0,e.update(e.props)})}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentWillUnmount",value:function(){this.props.responsive&&window.removeEventListener("resize",this.handleResize),this.removeSlot()}},{key:"update",value:function(e){if(this.initialized){var t=(0,h.findDOMNode)(this);if(t){var r=t.offsetWidth,n=l(e.dimensions,e.format,e.canBeLower),a=e.responsive?n.filter(function(e){return e[0]<=r}):n,s=window.innerWidth,i=e.minWindowWidth,o=e.maxWindowWidth;if(-1!==i&&s>i?a=[]:-1!==o&&o>s&&(a=[]),JSON.stringify(a)!==JSON.stringify(this.currentDimensions)&&(this.currentDimensions=a,this.slot&&this.removeSlot(),a&&a.length)){if(!this.refs.holder)return void console.log("RGPT holder is undefined");var c=p();this.refs.holder.innerHTML='<div id="'+c+'"></div>';var u=this.slot=N.defineSlot(e.path,a,c);u.addService(N.pubads()),N.display(c),N.pubads().refresh([u])}}}}},{key:"removeSlot",value:function(){this.slot&&(N.pubads().clear([this.slot]),this.slot=null,this.refs.holder&&(this.refs.holder.innerHTML=null))}},{key:"refreshSlot",value:function(){this.slot&&N.pubads().refresh([this.slot])}},{key:"render",value:function(){return f["default"].createElement("div",{className:this.props.className,ref:"holder"})}}]),t}(m.Component);T.propTypes={className:f["default"].PropTypes.string,path:f["default"].PropTypes.string.isRequired,format:f["default"].PropTypes.string.isRequired,responsive:f["default"].PropTypes.bool.isRequired,canBeLower:f["default"].PropTypes.bool.isRequired,dimensions:f["default"].PropTypes.array,minWindowWidth:f["default"].PropTypes.number.isRequired,maxWindowWidth:f["default"].PropTypes.number.isRequired},T.defaultProps={format:g.HORIZONTAL,responsive:!0,canBeLower:!0,dimensions:null,minWindowWidth:-1,maxWindowWidth:-1},t["default"]=T}});
//# sourceMappingURL=app.js.map