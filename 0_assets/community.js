webpackJsonp([6],{0:function(e,t,n){"use strict";function r(e,t){var n=a(".all-speak-kotlin_img");a("[data-svg-id='"+e+"'] > a").toggleClass("_hover",t),n.find("#"+e+" .hover").toggle(t),n.find("#"+e+" .default").toggle(!t)}function i(e){var t=document.querySelector('[data-svg-id="'+e+'"]'),n=document.getElementById(e);n||console.log(e),t&&(t.setAttribute("data-aos","animation"),t.setAttribute("data-aos-anchor",".all-speak-kotlin"),t.setAttribute("data-aos-anchor-placement","top-center")),n.setAttribute("data-aos","animation"),n.setAttribute("data-aos-anchor",".all-speak-kotlin"),n.setAttribute("data-aos-anchor-placement","top-center")}n(234);var o=n(130),a=n(1);n(256).polyfill(),a(document).ready(function(){a.ajax({url:"/assets/images/all_speak_kotlin.svg",dataType:"xml"}).success(function(e){var t=e.documentElement,n=a(".all-speak-kotlin_img");a(t).find("g").each(function(e,t){var n=t.getAttribute("id");null!=n&&(n.endsWith("_default")?(t.removeAttribute("id"),t.setAttribute("class","svg-link default")):n.endsWith("_hover")&&(t.removeAttribute("id"),t.setAttribute("class","svg-link hover"),t.setAttribute("display","none")))}),n.append(e.documentElement),n.find("g.hover").parent().on("click",function(){var e=a('[data-svg-id="'+this.getAttribute("id")+'"] > a').attr("href");window.open(e)}).on("mouseenter",function(){r(this.getAttribute("id"),!0)}).on("mouseleave",function(){r(this.getAttribute("id"),!1)}),a(".scroll-down-hint").on("click",function(){window.scroll({top:window.document.documentElement.offsetHeight,left:0,behavior:"smooth"})}),a(".all-speak-kotlin_link-button").on("mouseenter",function(){r(this.parentNode.getAttribute("data-svg-id"),!0)}).on("mouseleave",function(){r(this.parentNode.getAttribute("data-svg-id"),!1)}),["talking_kotlin","reddit","slack","linkedin","Layer_3","kotlin_talks","Layer_6","Layer_7","Layer_8","kotlin_forum","stackoverflow","twitter","google","youtrack"].forEach(i),o.init({duration:500})})})},130:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=(r(o),n(5)),s=r(a),l=n(6),u=r(l),c=n(7),f=r(c),d=n(8),p=r(d),h=n(9),m=r(h),v=n(10),g=r(v),y=n(13),b=r(y),w=[],x=!1,k=document.all&&!window.atob,C={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},S=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return e&&(x=!0),x?(w=g["default"](w,C),m["default"](w,C.once),w):void 0},T=function(){w=b["default"](),S()},E=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},L=function(e){return e===!0||"mobile"===e&&p["default"].mobile()||"phone"===e&&p["default"].phone()||"tablet"===e&&p["default"].tablet()||"function"==typeof e&&e()===!0},A=function(e){return C=i(C,e),w=b["default"](),L(C.disable)||k?E():(document.querySelector("body").setAttribute("data-aos-easing",C.easing),document.querySelector("body").setAttribute("data-aos-duration",C.duration),document.querySelector("body").setAttribute("data-aos-delay",C.delay),"DOMContentLoaded"===C.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?S(!0):"load"===C.startEvent?window.addEventListener(C.startEvent,function(){S(!0)}):document.addEventListener(C.startEvent,function(){S(!0)}),window.addEventListener("resize",u["default"](S,50,!0)),window.addEventListener("orientationchange",u["default"](S,50,!0)),window.addEventListener("scroll",s["default"](function(){m["default"](w,C.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&u["default"](T,50,!0)}),f["default"]("[data-aos]",T),w)};e.exports={init:A,refresh:S,refreshHard:T}},function(e,t){},,,,function(e,t,n){"use strict";function r(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(s);return i(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),a(e,t,{leading:r,maxWait:t,trailing:o})}function i(e){var t="undefined"==typeof e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=n(6),s="Expected a function";e.exports=r},function(e,t){"use strict";function n(e,t,n){function r(t){var n=m,r=v;return m=v=void 0,S=t,y=e.apply(r,n)}function o(e){return S=e,b=setTimeout(c,t),T?r(e):y}function a(e){var n=e-w,r=e-S,i=t-n;return E?k(i,g-r):i}function l(e){var n=e-w,r=e-S;return!w||n>=t||0>n||E&&r>=g}function c(){var e=C();return l(e)?f(e):void(b=setTimeout(c,a(e)))}function f(e){return clearTimeout(b),b=void 0,L&&m?r(e):(m=v=void 0,y)}function d(){void 0!==b&&clearTimeout(b),w=S=0,m=v=b=void 0}function p(){return void 0===b?y:f(C())}function h(){var e=C(),n=l(e);if(m=arguments,v=this,w=e,n){if(void 0===b)return o(w);if(E)return clearTimeout(b),b=setTimeout(c,t),r(w)}return void 0===b&&(b=setTimeout(c,t)),y}var m,v,g,y,b,w=0,S=0,T=!1,E=!1,L=!0;if("function"!=typeof e)throw new TypeError(u);return t=s(t)||0,i(n)&&(T=!!n.leading,E="maxWait"in n,g=E?x(s(n.maxWait)||0,t):g,L="trailing"in n?!!n.trailing:L),h.cancel=d,h.flush=p,h}function r(e){var t=i(e)?w.call(e):"";return t==f||t==d}function i(e){var t="undefined"==typeof e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":l(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":l(e))||o(e)&&w.call(e)==p}function s(e){if("number"==typeof e)return e;if(a(e))return c;if(i(e)){var t=r(e.valueOf)?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=v.test(e);return n||g.test(e)?y(e.slice(2),n?2:8):m.test(e)?c:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u="Expected a function",c=NaN,f="[object Function]",d="[object GeneratorFunction]",p="[object Symbol]",h=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,b=Object.prototype,w=b.toString,x=Math.max,k=Math.min,C=Date.now;e.exports=n},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!s&&o&&(s=new o(r),s.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),r()}function r(){for(var e,t,n=0,r=a.length;r>n;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var o,s=0,l=t.length;l>s;s++)o=t[s],o.ready||(o.ready=!0,e.fn.call(o,o))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,o=window.MutationObserver||window.WebKitMutationObserver,a=[],s=void 0;t["default"]=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){n(this,e)}return r(e,[{key:"phone",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"mobile",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t["default"]=new i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof r&&("false"===r||!n&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,o){n(e,i+r,t)})};t["default"]=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),o=r(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=o["default"](e.node,t.offset)}),e};t["default"]=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),o=r(i),a=function(e,t){var n=0,r=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=o["default"](e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(r=t),n+r};t["default"]=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t["default"]=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t["default"]=n}])})},234:function(e,t){},256:function(e,t,n){!function(t,n,r){"use strict";function i(){function e(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){return.5*(1-Math.cos(Math.PI*e))}function o(e){if("object"!=typeof e||null===e||e.behavior===r||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior not valid")}function a(e){var r,i,o;do e=e.parentNode,r=e===n.body,i=e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth,o="visible"===t.getComputedStyle(e,null).overflow;while(!r&&(!i||o));return r=i=o=null,e}function s(e){e.frame=t.requestAnimationFrame(s.bind(t,e));var n,r,o,a=d(),l=(a-e.startTime)/c;return l=l>1?1:l,n=i(l),r=e.startX+(e.x-e.startX)*n,o=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,r,o),r===e.x&&o===e.y?void t.cancelAnimationFrame(e.frame):void 0}function l(r,i,o){var a,l,u,c,p,h=d();r===n.body?(a=t,l=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,c=f.scroll):(a=r,l=r.scrollLeft,u=r.scrollTop,c=e),p&&t.cancelAnimationFrame(p),s({scrollable:a,method:c,startTime:h,startX:l,startY:u,x:i,y:o,frame:p})}if(!("scrollBehavior"in n.documentElement.style)){var u=t.HTMLElement||t.Element,c=468,f={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,scrollIntoView:u.prototype.scrollIntoView},d=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;t.scroll=t.scrollTo=function(){return o(arguments[0])?void f.scroll.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void l.call(t,n.body,~~arguments[0].left,~~arguments[0].top)},t.scrollBy=function(){return o(arguments[0])?void f.scrollBy.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void l.call(t,n.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))},u.prototype.scrollIntoView=function(){if(o(arguments[0]))return void f.scrollIntoView.call(this,arguments[0]||!0);var e=a(this),r=e.getBoundingClientRect(),i=this.getBoundingClientRect();e!==n.body?(l.call(this,e,e.scrollLeft+i.left-r.left,e.scrollTop+i.top-r.top),t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}}}e.exports={polyfill:i}}(window,document)}});