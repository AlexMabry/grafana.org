define(["./core","./var/pnum","./css/var/cssExpand","./css/var/isHidden","./css/defaultDisplay","./data/var/data_priv","./core/init","./effects/Tween","./queue","./css","./deferred","./traversing"],function(e,t,n,r,i,o){function u(){return setTimeout(function(){d=void 0}),d=e.now()}function a(e,t){var r,i=0,o={height:e};for(t=t?1:0;4>i;i+=2-t)r=n[i],o["margin"+r]=o["padding"+r]=e;return t&&(o.opacity=o.width=e),o}function c(e,t,n){for(var r,i=(y[t]||[]).concat(y["*"]),o=0,u=i.length;u>o;o++)if(r=i[o].call(n,t,e))return r}function l(t,n,u){var a,l,s,f,d,p,v,g,m=this,y={},_=t.style,b=t.nodeType&&r(t),w=o.get(t,"fxshow");u.queue||(d=e._queueHooks(t,"fx"),null==d.unqueued&&(d.unqueued=0,p=d.empty.fire,d.empty.fire=function(){d.unqueued||p()}),d.unqueued++,m.always(function(){m.always(function(){d.unqueued--,e.queue(t,"fx").length||d.empty.fire()})})),1===t.nodeType&&("height"in n||"width"in n)&&(u.overflow=[_.overflow,_.overflowX,_.overflowY],v=e.css(t,"display"),g="none"===v?o.get(t,"olddisplay")||i(t.nodeName):v,"inline"===g&&"none"===e.css(t,"float")&&(_.display="inline-block")),u.overflow&&(_.overflow="hidden",m.always(function(){_.overflow=u.overflow[0],_.overflowX=u.overflow[1],_.overflowY=u.overflow[2]}));for(a in n)if(l=n[a],h.exec(l)){if(delete n[a],s=s||"toggle"===l,l===(b?"hide":"show")){if("show"!==l||!w||void 0===w[a])continue;b=!0}y[a]=w&&w[a]||e.style(t,a)}else v=void 0;if(e.isEmptyObject(y))"inline"===("none"===v?i(t.nodeName):v)&&(_.display=v);else{w?"hidden"in w&&(b=w.hidden):w=o.access(t,"fxshow",{}),s&&(w.hidden=!b),b?e(t).show():m.done(function(){e(t).hide()}),m.done(function(){var n;o.remove(t,"fxshow");for(n in y)e.style(t,n,y[n])});for(a in y)f=c(b?w[a]:0,a,m),a in w||(w[a]=f.start,b&&(f.end=f.start,f.start="width"===a||"height"===a?1:0))}}function s(t,n){var r,i,o,u,a;for(r in t)if(i=e.camelCase(r),o=n[i],u=t[r],e.isArray(u)&&(o=u[1],u=t[r]=u[0]),r!==i&&(t[i]=u,delete t[r]),a=e.cssHooks[i],a&&"expand"in a){u=a.expand(u),delete t[i];for(r in u)r in t||(t[r]=u[r],n[r]=o)}else n[i]=o}function f(t,n,r){var i,o,a=0,l=m.length,f=e.Deferred().always(function(){delete p.elem}),p=function(){if(o)return!1;for(var e=d||u(),n=Math.max(0,h.startTime+h.duration-e),r=n/h.duration||0,i=1-r,a=0,c=h.tweens.length;c>a;a++)h.tweens[a].run(i);return f.notifyWith(t,[h,i,n]),1>i&&c?n:(f.resolveWith(t,[h]),!1)},h=f.promise({elem:t,props:e.extend({},n),opts:e.extend(!0,{specialEasing:{}},r),originalProperties:n,originalOptions:r,startTime:d||u(),duration:r.duration,tweens:[],createTween:function(n,r){var i=e.Tween(t,h.opts,n,r,h.opts.specialEasing[n]||h.opts.easing);return h.tweens.push(i),i},stop:function(e){var n=0,r=e?h.tweens.length:0;if(o)return this;for(o=!0;r>n;n++)h.tweens[n].run(1);return e?f.resolveWith(t,[h,e]):f.rejectWith(t,[h,e]),this}}),v=h.props;for(s(v,h.opts.specialEasing);l>a;a++)if(i=m[a].call(h,t,v,h.opts))return i;return e.map(v,c,h),e.isFunction(h.opts.start)&&h.opts.start.call(t,h),e.fx.timer(e.extend(p,{elem:t,anim:h,queue:h.opts.queue})),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always)}var d,p,h=/^(?:toggle|show|hide)$/,v=new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i"),g=/queueHooks$/,m=[l],y={"*":[function(t,n){var r=this.createTween(t,n),i=r.cur(),o=v.exec(n),u=o&&o[3]||(e.cssNumber[t]?"":"px"),a=(e.cssNumber[t]||"px"!==u&&+i)&&v.exec(e.css(r.elem,t)),c=1,l=20;if(a&&a[3]!==u){u=u||a[3],o=o||[],a=+i||1;do c=c||".5",a/=c,e.style(r.elem,t,a+u);while(c!==(c=r.cur()/i)&&1!==c&&--l)}return o&&(a=r.start=+a||+i||0,r.unit=u,r.end=o[1]?a+(o[1]+1)*o[2]:+o[2]),r}]};return e.Animation=e.extend(f,{tweener:function(t,n){e.isFunction(t)?(n=t,t=["*"]):t=t.split(" ");for(var r,i=0,o=t.length;o>i;i++)r=t[i],y[r]=y[r]||[],y[r].unshift(n)},prefilter:function(e,t){t?m.unshift(e):m.push(e)}}),e.speed=function(t,n,r){var i=t&&"object"==typeof t?e.extend({},t):{complete:r||!r&&n||e.isFunction(t)&&t,duration:t,easing:r&&n||n&&!e.isFunction(n)&&n};return i.duration=e.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in e.fx.speeds?e.fx.speeds[i.duration]:e.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){e.isFunction(i.old)&&i.old.call(this),i.queue&&e.dequeue(this,i.queue)},i},e.fn.extend({fadeTo:function(e,t,n,i){return this.filter(r).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,n,r,i){var u=e.isEmptyObject(t),a=e.speed(n,r,i),c=function(){var n=f(this,e.extend({},t),a);(u||o.get(this,"finish"))&&n.stop(!0)};return c.finish=c,u||a.queue===!1?this.each(c):this.queue(a.queue,c)},stop:function(t,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof t&&(r=n,n=t,t=void 0),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var n=!0,u=null!=t&&t+"queueHooks",a=e.timers,c=o.get(this);if(u)c[u]&&c[u].stop&&i(c[u]);else for(u in c)c[u]&&c[u].stop&&g.test(u)&&i(c[u]);for(u=a.length;u--;)a[u].elem!==this||null!=t&&a[u].queue!==t||(a[u].anim.stop(r),n=!1,a.splice(u,1));(n||!r)&&e.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,r=o.get(this),i=r[t+"queue"],u=r[t+"queueHooks"],a=e.timers,c=i?i.length:0;for(r.finish=!0,e.queue(this,t,[]),u&&u.stop&&u.stop.call(this,!0),n=a.length;n--;)a[n].elem===this&&a[n].queue===t&&(a[n].anim.stop(!0),a.splice(n,1));for(n=0;c>n;n++)i[n]&&i[n].finish&&i[n].finish.call(this);delete r.finish})}}),e.each(["toggle","show","hide"],function(t,n){var r=e.fn[n];e.fn[n]=function(e,t,i){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(a(n,!0),e,t,i)}}),e.each({slideDown:a("show"),slideUp:a("hide"),slideToggle:a("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){e.fn[t]=function(e,t,r){return this.animate(n,e,t,r)}}),e.timers=[],e.fx.tick=function(){var t,n=0,r=e.timers;for(d=e.now();n<r.length;n++)t=r[n],t()||r[n]!==t||r.splice(n--,1);r.length||e.fx.stop(),d=void 0},e.fx.timer=function(t){e.timers.push(t),t()?e.fx.start():e.timers.pop()},e.fx.interval=13,e.fx.start=function(){p||(p=setInterval(e.fx.tick,e.fx.interval))},e.fx.stop=function(){clearInterval(p),p=null},e.fx.speeds={slow:600,fast:200,_default:400},e});