define(["./core","./var/indexOf","./traversing/var/rneedsContext","./core/init","./traversing/findFilter","./selector"],function(t,e,n){function r(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}var i=/^(?:parents|prev(?:Until|All))/,o={children:!0,contents:!0,next:!0,prev:!0};return t.extend({dir:function(e,n,r){for(var i=[],o=void 0!==r;(e=e[n])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&t(e).is(r))break;i.push(e)}return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),t.fn.extend({has:function(e){var n=t(e,this),r=n.length;return this.filter(function(){for(var e=0;r>e;e++)if(t.contains(this,n[e]))return!0})},closest:function(e,r){for(var i,o=0,a=this.length,s=[],u=n.test(e)||"string"!=typeof e?t(e,r||this.context):0;a>o;o++)for(i=this[o];i&&i!==r;i=i.parentNode)if(i.nodeType<11&&(u?u.index(i)>-1:1===i.nodeType&&t.find.matchesSelector(i,e))){s.push(i);break}return this.pushStack(s.length>1?t.unique(s):s)},index:function(n){return n?"string"==typeof n?e.call(t(n),this[0]):e.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(t.unique(t.merge(this.get(),t(e,n))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),t.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return t.dir(e,"parentNode")},parentsUntil:function(e,n,r){return t.dir(e,"parentNode",r)},next:function(t){return r(t,"nextSibling")},prev:function(t){return r(t,"previousSibling")},nextAll:function(e){return t.dir(e,"nextSibling")},prevAll:function(e){return t.dir(e,"previousSibling")},nextUntil:function(e,n,r){return t.dir(e,"nextSibling",r)},prevUntil:function(e,n,r){return t.dir(e,"previousSibling",r)},siblings:function(e){return t.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return t.sibling(e.firstChild)},contents:function(e){return e.contentDocument||t.merge([],e.childNodes)}},function(e,n){t.fn[e]=function(r,a){var s=t.map(this,n,r);return"Until"!==e.slice(-5)&&(a=r),a&&"string"==typeof a&&(s=t.filter(a,s)),this.length>1&&(o[e]||t.unique(s),i.test(e)&&s.reverse()),this.pushStack(s)}}),t});