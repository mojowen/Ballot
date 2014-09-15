!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){for(var r=0;r<n.length;r++){for(var i=e,o=n[r],a=o.split(/[.\/]/),l=0;l<a.length-1;++l)i[a[l]]===t&&(i[a[l]]={}),i=i[a[l]];i[a[a.length-1]]=s[o]}}var s={},l="tinymce/tableplugin/TableGrid",c="tinymce/util/Tools",u="tinymce/Env",d="tinymce/tableplugin/Quirks",f="tinymce/util/VK",p="tinymce/tableplugin/CellSelection",m="tinymce/dom/TreeWalker",h="tinymce/tableplugin/Dialogs",g="tinymce/tableplugin/Plugin",v="tinymce/PluginManager";r(l,[c,u],function(e,n){function r(e,t){return parseInt(e.getAttribute(t)||1,10)}var i=e.each;return function(o,a){function s(){var e=0;B=[],D=0,i(["thead","tbody","tfoot"],function(t){var n=O.select("> "+t+" tr",a);i(n,function(n,o){o+=e,i(O.select("> td, > th",n),function(e,n){var i,a,s,l;if(B[o])for(;B[o][n];)n++;for(s=r(e,"rowspan"),l=r(e,"colspan"),a=o;o+s>a;a++)for(B[a]||(B[a]=[]),i=n;n+l>i;i++)B[a][i]={part:t,real:a==o&&i==n,elm:e,rowspan:s,colspan:l};D=Math.max(D,n+1)})}),e+=n.length})}function l(e,t){return e=e.cloneNode(t),e.removeAttribute("id"),e}function c(e,t){var n;return n=B[t],n?n[e]:void 0}function u(e,t,n){e&&(n=parseInt(n,10),1===n?e.removeAttribute(t,1):e.setAttribute(t,n,1))}function d(e){return e&&(O.hasClass(e.elm,"mce-item-selected")||e==H)}function f(){var e=[];return i(a.rows,function(t){i(t.cells,function(n){return O.hasClass(n,"mce-item-selected")||H&&n==H.elm?(e.push(t),!1):void 0})}),e}function p(){var e=O.createRng();e.setStartAfter(a),e.setEndAfter(a),L.setRng(e),O.remove(a)}function m(t){var r,a={};return o.settings.table_clone_elements!==!1&&(a=e.makeMap((o.settings.table_clone_elements||"strong em b i span font h1 h2 h3 h4 h5 h6 p div").toUpperCase(),/[ ,]/)),e.walk(t,function(e){var o;return 3==e.nodeType?(i(O.getParents(e.parentNode,null,t).reverse(),function(e){a[e.nodeName]&&(e=l(e,!1),r?o&&o.appendChild(e):r=o=e,o=e)}),o&&(o.innerHTML=n.ie?"&nbsp;":'<br data-mce-bogus="1" />'),!1):void 0},"childNodes"),t=l(t,!1),u(t,"rowSpan",1),u(t,"colSpan",1),r?t.appendChild(r):(!n.ie||n.ie>10)&&(t.innerHTML='<br data-mce-bogus="1" />'),t}function h(){var e=O.createRng(),t;return i(O.select("tr",a),function(e){0===e.cells.length&&O.remove(e)}),0===O.select("tr",a).length?(e.setStartBefore(a),e.setEndBefore(a),L.setRng(e),void O.remove(a)):(i(O.select("thead,tbody,tfoot",a),function(e){0===e.rows.length&&O.remove(e)}),s(),void(P&&(t=B[Math.min(B.length-1,P.y)],t&&(L.select(t[Math.min(t.length-1,P.x)].elm,!0),L.collapse(!0)))))}function g(e,t,n,r){var i,o,a,s,l;for(i=B[t][e].elm.parentNode,a=1;n>=a;a++)if(i=O.getNext(i,"tr")){for(o=e;o>=0;o--)if(l=B[t+a][o].elm,l.parentNode==i){for(s=1;r>=s;s++)O.insertAfter(m(l),l);break}if(-1==o)for(s=1;r>=s;s++)i.insertBefore(m(i.cells[0]),i.cells[0])}}function v(){i(B,function(e,t){i(e,function(e,n){var i,o,a;if(d(e)&&(e=e.elm,i=r(e,"colspan"),o=r(e,"rowspan"),i>1||o>1)){for(u(e,"rowSpan",1),u(e,"colSpan",1),a=0;i-1>a;a++)O.insertAfter(m(e),e);g(n,t,o-1,i)}})})}function y(t,n,r){var o,a,l,f,p,m,g,y,b,C,x;if(t?(o=k(t),a=o.x,l=o.y,f=a+(n-1),p=l+(r-1)):(P=M=null,i(B,function(e,t){i(e,function(e,n){d(e)&&(P||(P={x:n,y:t}),M={x:n,y:t})})}),P&&(a=P.x,l=P.y,f=M.x,p=M.y)),y=c(a,l),b=c(f,p),y&&b&&y.part==b.part){for(v(),s(),y=c(a,l).elm,u(y,"colSpan",f-a+1),u(y,"rowSpan",p-l+1),g=l;p>=g;g++)for(m=a;f>=m;m++)B[g]&&B[g][m]&&(t=B[g][m].elm,t!=y&&(C=e.grep(t.childNodes),i(C,function(e){y.appendChild(e)}),C.length&&(C=e.grep(y.childNodes),x=0,i(C,function(e){"BR"==e.nodeName&&O.getAttrib(e,"data-mce-bogus")&&x++<C.length-1&&y.removeChild(e)})),O.remove(t)));h()}}function b(e){var n,o,a,s,c,f,p,h,g;if(i(B,function(t,r){return i(t,function(t){return d(t)&&(t=t.elm,c=t.parentNode,f=l(c,!1),n=r,e)?!1:void 0}),e?!n:void 0}),n!==t){for(s=0;s<B[0].length;s++)if(B[n][s]&&(o=B[n][s].elm,o!=a)){if(e){if(n>0&&B[n-1][s]&&(h=B[n-1][s].elm,g=r(h,"rowSpan"),g>1)){u(h,"rowSpan",g+1);continue}}else if(g=r(o,"rowspan"),g>1){u(o,"rowSpan",g+1);continue}p=m(o),u(p,"colSpan",o.colSpan),f.appendChild(p),a=o}f.hasChildNodes()&&(e?c.parentNode.insertBefore(f,c):O.insertAfter(f,c))}}function C(e){var t,n;i(B,function(n){return i(n,function(n,r){return d(n)&&(t=r,e)?!1:void 0}),e?!t:void 0}),i(B,function(i,o){var a,s,l;i[t]&&(a=i[t].elm,a!=n&&(l=r(a,"colspan"),s=r(a,"rowspan"),1==l?e?(a.parentNode.insertBefore(m(a),a),g(t,o,s-1,l)):(O.insertAfter(m(a),a),g(t,o,s-1,l)):u(a,"colSpan",a.colSpan+1),n=a))})}function x(){var t=[];i(B,function(n){i(n,function(n,o){d(n)&&-1===e.inArray(t,o)&&(i(B,function(e){var t=e[o].elm,n;n=r(t,"colSpan"),n>1?u(t,"colSpan",n-1):O.remove(t)}),t.push(o))})}),h()}function w(){function e(e){var t,n;i(e.cells,function(e){var n=r(e,"rowSpan");n>1&&(u(e,"rowSpan",n-1),t=k(e),g(t.x,t.y,1,1))}),t=k(e.cells[0]),i(B[t.y],function(e){var t;e=e.elm,e!=n&&(t=r(e,"rowSpan"),1>=t?O.remove(e):u(e,"rowSpan",t-1),n=e)})}var t;t=f(),i(t.reverse(),function(t){e(t)}),h()}function _(){var e=f();return O.remove(e),h(),e}function E(){var e=f();return i(e,function(t,n){e[n]=l(t,!0)}),e}function N(e,t){var n=f(),r=n[t?0:n.length-1],o=r.cells.length;e&&(i(B,function(e){var t;return o=0,i(e,function(e){e.real&&(o+=e.colspan),e.elm.parentNode==r&&(t=1)}),t?!1:void 0}),t||e.reverse(),i(e,function(e){var n,i=e.cells.length,a;for(n=0;i>n;n++)a=e.cells[n],u(a,"colSpan",1),u(a,"rowSpan",1);for(n=i;o>n;n++)e.appendChild(m(e.cells[i-1]));for(n=o;i>n;n++)O.remove(e.cells[n]);t?r.parentNode.insertBefore(e,r):O.insertAfter(e,r)}),O.removeClass(O.select("td.mce-item-selected,th.mce-item-selected"),"mce-item-selected"))}function k(e){var t;return i(B,function(n,r){return i(n,function(n,i){return n.elm==e?(t={x:i,y:r},!1):void 0}),!t}),t}function S(e){P=k(e)}function T(){var e,t;return e=t=0,i(B,function(n,r){i(n,function(n,i){var o,a;d(n)&&(n=B[r][i],i>e&&(e=i),r>t&&(t=r),n.real&&(o=n.colspan-1,a=n.rowspan-1,o&&i+o>e&&(e=i+o),a&&r+a>t&&(t=r+a)))})}),{x:e,y:t}}function R(e){var t,n,r,i,o,a,s,l,c,u;if(M=k(e),P&&M){for(t=Math.min(P.x,M.x),n=Math.min(P.y,M.y),r=Math.max(P.x,M.x),i=Math.max(P.y,M.y),o=r,a=i,u=n;a>=u;u++)e=B[u][t],e.real||t-(e.colspan-1)<t&&(t-=e.colspan-1);for(c=t;o>=c;c++)e=B[n][c],e.real||n-(e.rowspan-1)<n&&(n-=e.rowspan-1);for(u=n;i>=u;u++)for(c=t;r>=c;c++)e=B[u][c],e.real&&(s=e.colspan-1,l=e.rowspan-1,s&&c+s>o&&(o=c+s),l&&u+l>a&&(a=u+l));for(O.removeClass(O.select("td.mce-item-selected,th.mce-item-selected"),"mce-item-selected"),u=n;a>=u;u++)for(c=t;o>=c;c++)B[u][c]&&O.addClass(B[u][c].elm,"mce-item-selected")}}function A(e,t){var n,r,i;n=k(e),r=n.y*D+n.x;do{if(r+=t,i=c(r%D,Math.floor(r/D)),!i)break;if(i.elm!=e)return L.select(i.elm,!0),O.isEmpty(i.elm)&&L.collapse(!0),!0}while(i.elm==e);return!1}var B,D,P,M,H,L=o.selection,O=L.dom;a=a||O.getParent(L.getStart(),"table"),s(),H=O.getParent(L.getStart(),"th,td"),H&&(P=k(H),M=T(),H=c(P.x,P.y)),e.extend(this,{deleteTable:p,split:v,merge:y,insertRow:b,insertCol:C,deleteCols:x,deleteRows:w,cutRows:_,copyRows:E,pasteRows:N,getPos:k,setStartCell:S,setEndCell:R,moveRelIdx:A,refresh:s})}}),r(d,[f,u,c],function(e,t,n){function r(e,t){return parseInt(e.getAttribute(t)||1,10)}var i=n.each;return function(n){function o(){function t(t){function o(e,r){var i=e?"previousSibling":"nextSibling",o=n.dom.getParent(r,"tr"),s=o[i];if(s)return g(n,r,s,e),t.preventDefault(),!0;var u=n.dom.getParent(o,"table"),d=o.parentNode,f=d.nodeName.toLowerCase();if("tbody"===f||f===(e?"tfoot":"thead")){var p=a(e,u,d,"tbody");if(null!==p)return l(e,p,r)}return c(e,o,i,u)}function a(e,t,r,i){var o=n.dom.select(">"+i,t),a=o.indexOf(r);if(e&&0===a||!e&&a===o.length-1)return s(e,t);if(-1===a){var l="thead"===r.tagName.toLowerCase()?0:o.length-1;return o[l]}return o[a+(e?-1:1)]}function s(e,t){var r=e?"thead":"tfoot",i=n.dom.select(">"+r,t);return 0!==i.length?i[0]:null}function l(e,r,i){var o=u(r,e);return o&&g(n,i,o,e),t.preventDefault(),!0}function c(e,r,i,a){var s=a[i];if(s)return d(s),!0;var l=n.dom.getParent(a,"td,th");if(l)return o(e,l,t);var c=u(r,!e);return d(c),t.preventDefault(),!1}function u(e,t){var r=e&&e[t?"lastChild":"firstChild"];return r&&"BR"===r.nodeName?n.dom.getParent(r,"td,th"):r}function d(e){n.selection.setCursorLocation(e,0)}function f(){return b==e.UP||b==e.DOWN}function p(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"tr");return null!==n}function m(e){for(var t=0,n=e;n.previousSibling;)n=n.previousSibling,t+=r(n,"colspan");return t}function h(e,t){var n=0,o=0;return i(e.children,function(e,i){return n+=r(e,"colspan"),o=i,n>t?!1:void 0}),o}function g(e,t,r,i){var o=m(n.dom.getParent(t,"td,th")),a=h(r,o),s=r.childNodes[a],l=u(s,i);d(l||s)}function v(e){var t=n.selection.getNode(),r=n.dom.getParent(t,"td,th"),i=n.dom.getParent(e,"td,th");return r&&r!==i&&y(r,i)}function y(e,t){return n.dom.getParent(e,"TABLE")===n.dom.getParent(t,"TABLE")}var b=t.keyCode;if(f()&&p(n)){var C=n.selection.getNode();setTimeout(function(){v(C)&&o(!t.shiftKey&&b===e.UP,C,t)},0)}}n.on("KeyDown",function(e){t(e)})}function a(){function e(e,t){var n=t.ownerDocument,r=n.createRange(),i;return r.setStartBefore(t),r.setEnd(e.endContainer,e.endOffset),i=n.createElement("body"),i.appendChild(r.cloneContents()),0===i.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi,"-").replace(/<[^>]+>/g,"").length}n.on("KeyDown",function(t){var r,i,o=n.dom;(37==t.keyCode||38==t.keyCode)&&(r=n.selection.getRng(),i=o.getParent(r.startContainer,"table"),i&&n.getBody().firstChild==i&&e(r,i)&&(r=o.createRng(),r.setStartBefore(i),r.setEndBefore(i),n.selection.setRng(r),t.preventDefault()))})}function s(){n.on("KeyDown SetContent VisualAid",function(){var e;for(e=n.getBody().lastChild;e;e=e.previousSibling)if(3==e.nodeType){if(e.nodeValue.length>0)break}else if(1==e.nodeType&&("BR"==e.tagName||!e.getAttribute("data-mce-bogus")))break;e&&"TABLE"==e.nodeName&&(n.settings.forced_root_block?n.dom.add(n.getBody(),n.settings.forced_root_block,n.settings.forced_root_block_attrs,t.ie&&t.ie<11?"&nbsp;":'<br data-mce-bogus="1" />'):n.dom.add(n.getBody(),"br",{"data-mce-bogus":"1"}))}),n.on("PreProcess",function(e){var t=e.node.lastChild;t&&("BR"==t.nodeName||1==t.childNodes.length&&("BR"==t.firstChild.nodeName||"\xa0"==t.firstChild.nodeValue))&&t.previousSibling&&"TABLE"==t.previousSibling.nodeName&&n.dom.remove(t)})}function l(){function e(e,t,n,r){var i=3,o=e.dom.getParent(t.startContainer,"TABLE"),a,s,l;return o&&(a=o.parentNode),s=t.startContainer.nodeType==i&&0===t.startOffset&&0===t.endOffset&&r&&("TR"==n.nodeName||n==a),l=("TD"==n.nodeName||"TH"==n.nodeName)&&!r,s||l}function t(){var t=n.selection.getRng(),r=n.selection.getNode(),i=n.dom.getParent(t.startContainer,"TD,TH");if(e(n,t,r,i)){i||(i=r);for(var o=i.lastChild;o.lastChild;)o=o.lastChild;3==o.nodeType&&(t.setEnd(o,o.data.length),n.selection.setRng(t))}}n.on("KeyDown",function(){t()}),n.on("MouseDown",function(e){2!=e.button&&t()})}function c(){n.on("keydown",function(t){if((t.keyCode==e.DELETE||t.keyCode==e.BACKSPACE)&&!t.isDefaultPrevented()){var r=n.dom.getParent(n.selection.getStart(),"table");if(r){for(var i=n.dom.select("td,th",r),o=i.length;o--;)if(!n.dom.hasClass(i[o],"mce-item-selected"))return;t.preventDefault(),n.execCommand("mceTableDelete")}}})}c(),t.webkit&&(o(),l()),t.gecko&&(a(),s()),t.ie>10&&(a(),s())}}),r(p,[l,m,c],function(e,t,n){return function(r){function i(e){r.getBody().style.webkitUserSelect="",(e||u)&&(r.dom.removeClass(r.dom.select("td.mce-item-selected,th.mce-item-selected"),"mce-item-selected"),u=!1)}function o(t){var n,i,o=t.target;if(!d&&l&&(s||o!=l)&&("TD"==o.nodeName||"TH"==o.nodeName)){i=a.getParent(o,"table"),i==c&&(s||(s=new e(r,i),s.setStartCell(l),r.getBody().style.webkitUserSelect="none"),s.setEndCell(o),u=!0),n=r.selection.getSel();try{n.removeAllRanges?n.removeAllRanges():n.empty()}catch(f){}t.preventDefault()}}var a=r.dom,s,l,c,u=!0,d;return r.on("MouseDown",function(e){2==e.button||d||(i(),l=a.getParent(e.target,"td,th"),c=a.getParent(l,"table"))}),r.on("mouseover",o),r.on("remove",function(){a.unbind(r.getDoc(),"mouseover",o)}),r.on("MouseUp",function(){function e(e,r){var o=new t(e,e);do{if(3==e.nodeType&&0!==n.trim(e.nodeValue).length)return void(r?i.setStart(e,0):i.setEnd(e,e.nodeValue.length));if("BR"==e.nodeName)return void(r?i.setStartBefore(e):i.setEndBefore(e))}while(e=r?o.next():o.prev())}var i,o=r.selection,u,d,f,p;if(l){if(s&&(r.getBody().style.webkitUserSelect=""),u=a.select("td.mce-item-selected,th.mce-item-selected"),u.length>0){i=a.createRng(),f=u[0],i.setStartBefore(f),i.setEndAfter(f),e(f,1),d=new t(f,a.getParent(u[0],"table"));do if("TD"==f.nodeName||"TH"==f.nodeName){if(!a.hasClass(f,"mce-item-selected"))break;p=f}while(f=d.next());e(p),o.setRng(i)}r.nodeChanged(),l=s=c=null}}),r.on("KeyUp Drop SetContent",function(e){i("setcontent"==e.type),l=s=c=null,d=!1}),r.on("ObjectResizeStart ObjectResized",function(e){d="objectresized"!=e.type}),{clear:i}}}),r(h,[c,u],function(e,t){var n=e.each;return function(r){function i(){var e=r.settings.color_picker_callback;return e?function(){var t=this;e.call(r,function(e){t.value(e).fire("change")},t.value())}:void 0}function o(e){return{title:"Advanced",type:"form",defaults:{onchange:function(){d(e,this.parents().reverse()[0],"style"==this.name())}},items:[{label:"Style",name:"style",type:"textbox"},{type:"form",padding:0,formItemDefaults:{layout:"grid",alignH:["start","right"]},defaults:{size:7},items:[{label:"Border color",type:"colorbox",name:"borderColor",onaction:i()},{label:"Background color",type:"colorbox",name:"backgroundColor",onaction:i()}]}]}}function a(e){return e?e.replace(/px$/,""):""}function s(e){return/^[0-9]+$/.test(e)&&(e+="px"),e}function l(e){n("left center right".split(" "),function(t){r.formatter.remove("align"+t,{},e)})}function c(e){n("top middle bottom".split(" "),function(t){r.formatter.remove("valign"+t,{},e)})}function u(t,n,r){function i(t,r){return r=r||[],e.each(t,function(e){var t={text:e.text||e.title};e.menu?t.menu=i(e.menu):(t.value=e.value,n&&n(t)),r.push(t)}),r}return i(t,r||[])}function d(e,t,n){var r=t.toJSON(),i=e.parseStyle(r.style);n?(t.find("#borderColor").value(i["border-color"]||"")[0].fire("change"),t.find("#backgroundColor").value(i["background-color"]||"")[0].fire("change")):(i["border-color"]=r.borderColor,i["background-color"]=r.backgroundColor),t.find("#style").value(e.serializeStyle(e.parseStyle(e.serializeStyle(i))))}function f(e,t,n){var r=e.parseStyle(e.getAttrib(n,"style"));r["border-color"]&&(t.borderColor=r["border-color"]),r["background-color"]&&(t.backgroundColor=r["background-color"]),t.style=e.serializeStyle(r)}var p=this;p.tableProps=function(){p.table(!0)},p.table=function(i){function c(){var n;d(p,this),y=e.extend(y,this.toJSON()),e.each("backgroundColor borderColor".split(" "),function(e){delete y[e]}),y["class"]===!1&&delete y["class"],r.undoManager.transact(function(){m||(m=r.plugins.table.insertTable(y.cols||1,y.rows||1)),r.dom.setAttribs(m,{cellspacing:y.cellspacing,cellpadding:y.cellpadding,border:y.border,style:y.style,"class":y["class"]}),p.getAttrib(m,"width")?p.setAttrib(m,"width",a(y.width)):p.setStyle(m,"width",s(y.width)),p.setStyle(m,"height",s(y.height)),n=p.select("caption",m)[0],n&&!y.caption&&p.remove(n),!n&&y.caption&&(n=p.create("caption"),n.innerHTML=t.ie?"\xa0":'<br data-mce-bogus="1"/>',m.insertBefore(n,m.firstChild)),l(m),y.align&&r.formatter.apply("align"+y.align,{},m),r.focus(),r.addVisual()})}var p=r.dom,m,h,g,v,y={},b;i===!0?(m=p.getParent(r.selection.getStart(),"table"),m&&(y={width:a(p.getStyle(m,"width")||p.getAttrib(m,"width")),height:a(p.getStyle(m,"height")||p.getAttrib(m,"height")),cellspacing:m?p.getAttrib(m,"cellspacing"):"",cellpadding:m?p.getAttrib(m,"cellpadding"):"",border:m?p.getAttrib(m,"border"):"",caption:!!p.select("caption",m)[0],"class":p.getAttrib(m,"class")},n("left center right".split(" "),function(e){r.formatter.matchNode(m,"align"+e)&&(y.align=e)}))):(h={label:"Cols",name:"cols"},g={label:"Rows",name:"rows"}),r.settings.table_class_list&&(y["class"]&&(y["class"]=y["class"].replace(/\s*mce\-item\-table\s*/g,"")),v={name:"class",type:"listbox",label:"Class",values:u(r.settings.table_class_list,function(e){e.value&&(e.textStyle=function(){return r.formatter.getCssText({block:"table",classes:[e.value]})})})}),b={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",labelGapCalc:!1,padding:0,layout:"grid",columns:2,defaults:{type:"textbox",maxWidth:50},items:[h,g,{label:"Width",name:"width"},{label:"Height",name:"height"},{label:"Cell spacing",name:"cellspacing"},{label:"Cell padding",name:"cellpadding"},{label:"Border",name:"border"},{label:"Caption",name:"caption",type:"checkbox"}]},{label:"Alignment",name:"align",type:"listbox",text:"None",values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},v]},r.settings.table_advtab!==!1?(f(p,y,m),r.windowManager.open({title:"Table properties",data:y,bodyType:"tabpanel",body:[{title:"General",type:"form",items:b},o(p)],onsubmit:c})):r.windowManager.open({title:"Table properties",data:y,body:b,onsubmit:c})},p.merge=function(e,t){r.windowManager.open({title:"Merge cells",body:[{label:"Cols",name:"cols",type:"textbox",value:"1",size:10},{label:"Rows",name:"rows",type:"textbox",value:"1",size:10}],onsubmit:function(){var n=this.toJSON();r.undoManager.transact(function(){e.merge(t,n.cols,n.rows)})}})},p.cell=function(){function t(){d(i,this),m=e.extend(m,this.toJSON()),r.undoManager.transact(function(){n(g,function(e){r.dom.setAttribs(e,{scope:m.scope,style:m.style,"class":m["class"]}),r.dom.setStyles(e,{width:s(m.width),height:s(m.height)}),m.type&&e.nodeName.toLowerCase()!=m.type&&(e=i.rename(e,m.type)),l(e),m.align&&r.formatter.apply("align"+m.align,{},e),c(e),m.valign&&r.formatter.apply("valign"+m.valign,{},e)}),r.focus()})}var i=r.dom,p,m,h,g=[];if(g=r.dom.select("td.mce-item-selected,th.mce-item-selected"),p=r.dom.getParent(r.selection.getStart(),"td,th"),!g.length&&p&&g.push(p),p=p||g[0]){m={width:a(i.getStyle(p,"width")||i.getAttrib(p,"width")),height:a(i.getStyle(p,"height")||i.getAttrib(p,"height")),scope:i.getAttrib(p,"scope"),"class":i.getAttrib(p,"class")},m.type=p.nodeName.toLowerCase(),n("left center right".split(" "),function(e){r.formatter.matchNode(p,"align"+e)&&(m.align=e)}),n("top middle bottom".split(" "),function(e){r.formatter.matchNode(p,"valign"+e)&&(m.valign=e)}),r.settings.table_cell_class_list&&(h={name:"class",type:"listbox",label:"Class",values:u(r.settings.table_cell_class_list,function(e){e.value&&(e.textStyle=function(){return r.formatter.getCssText({block:"td",classes:[e.value]})})})});var v={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",layout:"grid",columns:2,labelGapCalc:!1,padding:0,defaults:{type:"textbox",maxWidth:50},items:[{label:"Width",name:"width"},{label:"Height",name:"height"},{label:"Cell type",name:"type",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{label:"Scope",name:"scope",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{label:"H Align",name:"align",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"V Align",name:"valign",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}]},h]};r.settings.table_cell_advtab!==!1?(f(i,m,p),r.windowManager.open({title:"Cell properties",bodyType:"tabpanel",data:m,body:[{title:"General",type:"form",items:v},o(i)],onsubmit:t})):r.windowManager.open({title:"Cell properties",data:m,body:v,onsubmit:t})}},p.row=function(){function t(){var t,o,a;d(i,this),g=e.extend(g,this.toJSON()),r.undoManager.transact(function(){var e=g.type;n(v,function(n){r.dom.setAttribs(n,{scope:g.scope,style:g.style,"class":g["class"]}),r.dom.setStyles(n,{height:s(g.height)}),e!=n.parentNode.nodeName.toLowerCase()&&(t=i.getParent(n,"table"),o=n.parentNode,a=i.select(e,t)[0],a||(a=i.create(e),t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a)),a.appendChild(n),o.hasChildNodes()||i.remove(o)),l(n),g.align&&r.formatter.apply("align"+g.align,{},n)}),r.focus()})}var i=r.dom,c,p,m,h,g,v=[],y;c=r.dom.getParent(r.selection.getStart(),"table"),p=r.dom.getParent(r.selection.getStart(),"td,th"),n(c.rows,function(e){n(e.cells,function(t){return i.hasClass(t,"mce-item-selected")||t==p?(v.push(e),!1):void 0})}),m=v[0],m&&(g={height:a(i.getStyle(m,"height")||i.getAttrib(m,"height")),scope:i.getAttrib(m,"scope"),"class":i.getAttrib(m,"class")},g.type=m.parentNode.nodeName.toLowerCase(),n("left center right".split(" "),function(e){r.formatter.matchNode(m,"align"+e)&&(g.align=e)}),r.settings.table_row_class_list&&(h={name:"class",type:"listbox",label:"Class",values:u(r.settings.table_row_class_list,function(e){e.value&&(e.textStyle=function(){return r.formatter.getCssText({block:"tr",classes:[e.value]})})})}),y={type:"form",columns:2,padding:0,defaults:{type:"textbox"},items:[{type:"listbox",name:"type",label:"Row type",text:"None",maxWidth:null,values:[{text:"Header",value:"thead"},{text:"Body",value:"tbody"},{text:"Footer",value:"tfoot"}]},{type:"listbox",name:"align",label:"Alignment",text:"None",maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height"},h]},r.settings.table_row_advtab!==!1?(f(i,g,m),r.windowManager.open({title:"Row properties",data:g,bodyType:"tabpanel",body:[{title:"General",type:"form",items:y},o(i)],onsubmit:t})):r.windowManager.open({title:"Row properties",data:g,body:y,onsubmit:t}))}}}),r(g,[l,d,p,h,c,m,u,v],function(e,t,n,r,i,o,a,s){function l(i){function o(e){return function(){i.execCommand(e)}}function s(e,t){var n,r,o,s;for(o='<table id="__mce"><tbody>',n=0;t>n;n++){for(o+="<tr>",r=0;e>r;r++)o+="<td>"+(a.ie?" ":"<br>")+"</td>";o+="</tr>"}return o+="</tbody></table>",i.undoManager.transact(function(){i.insertContent(o),s=i.dom.get("__mce"),i.dom.setAttrib(s,"id",null),i.dom.setAttribs(s,i.settings.table_default_attributes||{}),i.dom.setStyles(s,i.settings.table_default_styles||{})}),s}function l(e,t){function n(){e.disabled(!i.dom.getParent(i.selection.getStart(),t)),i.selection.selectorChanged(t,function(t){e.disabled(!t)})}i.initialized?n():i.on("init",n)}function u(){l(this,"table")}function d(){l(this,"td,th")}function f(){var e="";e='<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';for(var t=0;10>t;t++){e+="<tr>";for(var n=0;10>n;n++)e+='<td role="gridcell" tabindex="-1"><a id="mcegrid'+(10*t+n)+'" href="#" data-mce-x="'+n+'" data-mce-y="'+t+'"></a></td>';e+="</tr>"}return e+="</table>",e+='<div class="mce-text-center" role="presentation">1 x 1</div>'}function p(e,t,n){var r=n.getEl().getElementsByTagName("table")[0],o,a,s,l,c,u=n.isRtl()||"tl-tr"==n.parent().rel;for(r.nextSibling.innerHTML=e+1+" x "+(t+1),u&&(e=9-e),a=0;10>a;a++)for(o=0;10>o;o++)l=r.rows[a].childNodes[o].firstChild,c=(u?o>=e:e>=o)&&t>=a,i.dom.toggleClass(l,"mce-active",c),c&&(s=l);return s.parentNode}var m,h=this,g=new r(i);i.settings.table_grid===!1?i.addMenuItem("inserttable",{text:"Insert table",icon:"table",context:"table",onclick:g.table}):i.addMenuItem("inserttable",{text:"Insert table",icon:"table",context:"table",ariaHideMenu:!0,onclick:function(e){e.aria&&(this.parent().hideAll(),e.stopImmediatePropagation(),g.table())},onshow:function(){p(0,0,this.menu.items()[0])},onhide:function(){var e=this.menu.items()[0].getEl().getElementsByTagName("a");i.dom.removeClass(e,"mce-active"),i.dom.addClass(e[0],"mce-active")},menu:[{type:"container",html:f(),onPostRender:function(){this.lastX=this.lastY=0},onmousemove:function(e){var t=e.target,n,r;"A"==t.tagName.toUpperCase()&&(n=parseInt(t.getAttribute("data-mce-x"),10),r=parseInt(t.getAttribute("data-mce-y"),10),(this.isRtl()||"tl-tr"==this.parent().rel)&&(n=9-n),(n!==this.lastX||r!==this.lastY)&&(p(n,r,e.control),this.lastX=n,this.lastY=r))},onclick:function(e){var t=this;"A"==e.target.tagName.toUpperCase()&&(e.preventDefault(),e.stopPropagation(),t.parent().cancel(),i.undoManager.transact(function(){s(t.lastX+1,t.lastY+1)}),i.addVisual())}}]}),i.addMenuItem("tableprops",{text:"Table properties",context:"table",onPostRender:u,onclick:g.tableProps}),i.addMenuItem("deletetable",{text:"Delete table",context:"table",onPostRender:u,cmd:"mceTableDelete"}),i.addMenuItem("cell",{separator:"before",text:"Cell",context:"table",menu:[{text:"Cell properties",onclick:o("mceTableCellProps"),onPostRender:d},{text:"Merge cells",onclick:o("mceTableMergeCells"),onPostRender:d},{text:"Split cell",onclick:o("mceTableSplitCells"),onPostRender:d}]}),i.addMenuItem("row",{text:"Row",context:"table",menu:[{text:"Insert row before",onclick:o("mceTableInsertRowBefore"),onPostRender:d},{text:"Insert row after",onclick:o("mceTableInsertRowAfter"),onPostRender:d},{text:"Delete row",onclick:o("mceTableDeleteRow"),onPostRender:d},{text:"Row properties",onclick:o("mceTableRowProps"),onPostRender:d},{text:"-"},{text:"Cut row",onclick:o("mceTableCutRow"),onPostRender:d},{text:"Copy row",onclick:o("mceTableCopyRow"),onPostRender:d},{text:"Paste row before",onclick:o("mceTablePasteRowBefore"),onPostRender:d},{text:"Paste row after",onclick:o("mceTablePasteRowAfter"),onPostRender:d}]}),i.addMenuItem("column",{text:"Column",context:"table",menu:[{text:"Insert column before",onclick:o("mceTableInsertColBefore"),onPostRender:d},{text:"Insert column after",onclick:o("mceTableInsertColAfter"),onPostRender:d},{text:"Delete column",onclick:o("mceTableDeleteCol"),onPostRender:d}]});var v=[];c("inserttable tableprops deletetable | cell row column".split(" "),function(e){v.push("|"==e?{text:"-"}:i.menuItems[e])}),i.addButton("table",{type:"menubutton",title:"Table",menu:v}),a.isIE||i.on("click",function(e){e=e.target,"TABLE"===e.nodeName&&(i.selection.select(e),i.nodeChanged())}),h.quirks=new t(i),i.on("Init",function(){h.cellSelection=new n(i)}),c({mceTableSplitCells:function(e){e.split()},mceTableMergeCells:function(e){var t;t=i.dom.getParent(i.selection.getStart(),"th,td"),i.dom.select("td.mce-item-selected,th.mce-item-selected").length?e.merge():g.merge(e,t)},mceTableInsertRowBefore:function(e){e.insertRow(!0)},mceTableInsertRowAfter:function(e){e.insertRow()},mceTableInsertColBefore:function(e){e.insertCol(!0)},mceTableInsertColAfter:function(e){e.insertCol()},mceTableDeleteCol:function(e){e.deleteCols()},mceTableDeleteRow:function(e){e.deleteRows()},mceTableCutRow:function(e){m=e.cutRows()},mceTableCopyRow:function(e){m=e.copyRows()},mceTablePasteRowBefore:function(e){e.pasteRows(m,!0)},mceTablePasteRowAfter:function(e){e.pasteRows(m)},mceTableDelete:function(e){e.deleteTable()}},function(t,n){i.addCommand(n,function(){var n=new e(i);n&&(t(n),i.execCommand("mceRepaint"),h.cellSelection.clear())})}),c({mceInsertTable:g.table,mceTableProps:function(){g.table(!0)},mceTableRowProps:g.row,mceTableCellProps:g.cell},function(e,t){i.addCommand(t,function(t,n){e(n)})}),i.settings.table_tab_navigation!==!1&&i.on("keydown",function(t){var n,r,o;9==t.keyCode&&(n=i.dom.getParent(i.selection.getStart(),"th,td"),n&&(t.preventDefault(),r=new e(i),o=t.shiftKey?-1:1,i.undoManager.transact(function(){!r.moveRelIdx(n,o)&&o>0&&(r.insertRow(),r.refresh(),r.moveRelIdx(n,o))})))}),h.insertTable=s}var c=i.each;s.add("table",l)}),a([])}(this);