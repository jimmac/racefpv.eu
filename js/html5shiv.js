!function(e,t){function i(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=g[e[u]];return t||(t={},f++,e[u]=f,g[f]=t),t}function n(e,i,n){return i||(i=t),l?i.createElement(e):(n||(n=a(i)),i=n.cache[e]?n.cache[e].cloneNode():c.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),i.canHaveChildren&&!d.test(e)?n.frag.appendChild(i):i)}function r(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(i){return m.shivMethods?n(i,e,t):t.createElem(i)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,t.frag)}function o(e){e||(e=t);var i=a(e);if(m.shivCSS&&!s&&!i.hasCSS){var n,o=e;n=o.createElement("p"),o=o.getElementsByTagName("head")[0]||o.documentElement,n.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",n=o.insertBefore(n.lastChild,o.firstChild),i.hasCSS=!!n}return l||r(e,i),e}var s,l,h=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,u="_html5shiv",f=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e;var i;if(!(i=1==e.childNodes.length)){t.createElement("a");var a=t.createDocumentFragment();i="undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}l=i}catch(n){l=s=!0}}();var m={elements:h.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==h.shivCSS,supportsUnknownElements:l,shivMethods:!1!==h.shivMethods,type:"default",shivDocument:o,createElement:n,createDocumentFragment:function(e,n){if(e||(e=t),l)return e.createDocumentFragment();for(var n=n||a(e),r=n.frag.cloneNode(),o=0,s=i(),h=s.length;h>o;o++)r.createElement(s[o]);return r}};e.html5=m,o(t)}(this,document);