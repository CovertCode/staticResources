!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t(e.bootstrap={},e.jQuery,e.Popper)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(e){var t=!1;function n(t){var n=this,i=!1;return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(t){return t="function"==typeof e.escapeSelector?e.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return e(document).find(n).length>0?n:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t.end)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var a=n[i],s=t[i],o=s&&r.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(a).test(o))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+a+'".')}var l}};return t=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},e.fn.emulateTransitionEnd=n,r.supportsTransitionEnd()&&(e.event.special[r.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),r}(t),o=function(e){var t="collapse",n="bs.collapse",r=e.fn[t],o={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},d={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u="show",h="collapse",f="collapsing",c="collapsed",g="width",p="height",_={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-ekit-toggle="collapse"]'},m=function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-ekit-toggle="collapse"][href="#'+t.id+'"],[data-ekit-toggle="collapse"][data-target="#'+t.id+'"]'));for(var r=e(_.DATA_TOGGLE),i=0;i<r.length;i++){var a=r[i],o=s.getSelectorFromElement(a);null!==o&&e(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var m=r.prototype;return m.toggle=function(){e(this._element).hasClass(u)?this.hide():this.show()},m.show=function(){var t,i,a=this;if(!this._isTransitioning&&!e(this._element).hasClass(u)&&(this._parent&&0===(t=e.makeArray(e(this._parent).find(_.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(i=e(t).not(this._selector).data(n))&&i._isTransitioning))){var o=e.Event(d.SHOW);if(e(this._element).trigger(o),!o.isDefaultPrevented()){t&&(r._jQueryInterface.call(e(t).not(this._selector),"hide"),i||e(t).data(n,null));var l=this._getDimension();e(this._element).removeClass(h).addClass(f),this._element.style[l]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(c).attr("aria-expanded",!0),this.setTransitioning(!0);var g=function(){e(a._element).removeClass(f).addClass(h).addClass(u),a._element.style[l]="",a.setTransitioning(!1),e(a._element).trigger(d.SHOWN)};if(s.supportsTransitionEnd()){var p="scroll"+(l[0].toUpperCase()+l.slice(1));e(this._element).one(s.TRANSITION_END,g).emulateTransitionEnd(600),this._element.style[l]=this._element[p]+"px"}else g()}}},m.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(u)){var n=e.Event(d.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension();if(this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",s.reflow(this._element),e(this._element).addClass(f).removeClass(h).removeClass(u),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var a=this._triggerArray[i],o=s.getSelectorFromElement(a);if(null!==o)e(o).hasClass(u)||e(a).addClass(c).attr("aria-expanded",!1)}this.setTransitioning(!0);var l=function(){t.setTransitioning(!1),e(t._element).removeClass(f).addClass(h).trigger(d.HIDDEN)};this._element.style[r]="",s.supportsTransitionEnd()?e(this._element).one(s.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},m.setTransitioning=function(e){this._isTransitioning=e},m.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},m._getConfig=function(e){return(e=a({},o,e)).toggle=Boolean(e.toggle),s.typeCheckConfig(t,e,l),e},m._getDimension=function(){return e(this._element).hasClass(g)?g:p},m._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var i='[data-ekit-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},m._addAriaAndCollapsedClass=function(t,n){if(t){var r=e(t).hasClass(u);n.length>0&&e(n).toggleClass(c,!r).attr("aria-expanded",r)}},r._getTargetFromElement=function(t){var n=s.getSelectorFromElement(t);return n?e(n)[0]:null},r._jQueryInterface=function(t){return this.each(function(){var i=e(this),s=i.data(n),l=a({},o,i.data(),"object"==typeof t&&t);if(!s&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),s||(s=new r(this,l),i.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new TypeError('No method named "'+t+'"');s[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return o}}]),r}();return e(document).on(d.CLICK_DATA_API,_.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var r=e(this),i=s.getSelectorFromElement(this);e(i).each(function(){var t=e(this),i=t.data(n)?"toggle":r.data();m._jQueryInterface.call(t,i)})}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=r,m._jQueryInterface},m}(t),l=function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r="dropdown-menu",a="active",o="disabled",l="fade",d="show",u=".dropdown",h=".nav, .list-group",f=".active",c="> li > .active",g='[data-ekit-toggle="tab"], [data-ekit-toggle="pill"], [data-ekit-toggle="list"]',p=".dropdown-toggle",_="> .dropdown-menu .active",m=function(){function t(e){this._element=e}var g=t.prototype;return g.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(a)||e(this._element).hasClass(o))){var r,i,l=e(this._element).closest(h)[0],d=s.getSelectorFromElement(this._element);if(l){var u="UL"===l.nodeName?c:f;i=(i=e.makeArray(e(l).find(u)))[i.length-1]}var g=e.Event(n.HIDE,{relatedTarget:this._element}),p=e.Event(n.SHOW,{relatedTarget:i});if(i&&e(i).trigger(g),e(this._element).trigger(p),!p.isDefaultPrevented()&&!g.isDefaultPrevented()){d&&(r=e(d)[0]),this._activate(this._element,l);var _=function(){var r=e.Event(n.HIDDEN,{relatedTarget:t._element}),a=e.Event(n.SHOWN,{relatedTarget:i});e(i).trigger(r),e(t._element).trigger(a)};r?this._activate(r,r.parentNode,_):_()}}},g.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},g._activate=function(t,n,r){var i=this,a=("UL"===n.nodeName?e(n).find(c):e(n).children(f))[0],o=r&&s.supportsTransitionEnd()&&a&&e(a).hasClass(l),d=function(){return i._transitionComplete(t,a,r)};a&&o?e(a).one(s.TRANSITION_END,d).emulateTransitionEnd(150):d()},g._transitionComplete=function(t,n,i){if(n){e(n).removeClass(d+" "+a);var o=e(n.parentNode).find(_)[0];o&&e(o).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(a),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),s.reflow(t),e(t).addClass(d),t.parentNode&&e(t.parentNode).hasClass(r)){var l=e(t).closest(u)[0];l&&e(l).find(p).addClass(a),t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab");if(i||(i=new t(this),r.data("bs.tab",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}();return e(document).on(n.CLICK_DATA_API,g,function(t){t.preventDefault(),m._jQueryInterface.call(e(this),"show")}),e.fn.tab=m._jQueryInterface,e.fn.tab.Constructor=m,e.fn.tab.noConflict=function(){return e.fn.tab=t,m._jQueryInterface},m}(t);!function(e){if(void 0===e)throw new TypeError("Ekit Prefixed Bootstrap's JavaScript requires jQuery. jQuery must be included before Ekit Prefixed Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Ekit Prefixed UI's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(t),e.Util=s,e.Collapse=o,e.Tab=l,Object.defineProperty(e,"__esModule",{value:!0})});
