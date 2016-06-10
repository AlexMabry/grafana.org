!function(t,e,n,i){"use strict";function r(t){var e=/fade/i.test(t),n=/pop/i.test(t);return{animate:e||n,pop:n,fade:e}}Foundation.libs.reveal={name:"reveal",version:"5.4.7",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:t(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(e,n,i){t.extend(!0,this.settings,n,i),this.bindings(n,i)},events:function(t){var e=this,i=e.S;return i(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(t){if(t.preventDefault(),!e.locked){var n=i(this),r=n.data(e.data_attr("reveal-ajax"));if(e.locked=!0,"undefined"==typeof r)e.open.call(e,n);else{var o=r===!0?n.attr("href"):r;e.open.call(e,n,{url:o})}}}),i(n).on("click.fndtn.reveal",this.close_targets(),function(t){if(t.preventDefault(),!e.locked){var n=i("["+e.attr_name()+"].open").data(e.attr_name(!0)+"-init")||e.settings,r=i(t.target)[0]===i("."+n.bg_class)[0];if(r){if(!n.close_on_background_click)return;t.stopPropagation()}e.locked=!0,e.close.call(e,r?i("["+e.attr_name()+"].open"):i(this).closest("["+e.attr_name()+"]"))}}),i("["+e.attr_name()+"]",this.scope).length>0?i(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):i(this.scope).on("open.fndtn.reveal","["+e.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+e.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+e.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+e.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+e.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+e.attr_name()+"]",this.close_video),!0},key_up_on:function(t){var e=this;return e.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(t){var n=e.S("["+e.attr_name()+"].open"),i=n.data(e.attr_name(!0)+"-init")||e.settings;i&&27===t.which&&i.close_on_esc&&!e.locked&&e.close.call(e,n)}),!0},key_up_off:function(t){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(n,i){var r,o=this;n?"undefined"!=typeof n.selector?r=o.S("#"+n.data(o.data_attr("reveal-id"))).first():(r=o.S(this.scope),i=n):r=o.S(this.scope);var a=r.data(o.attr_name(!0)+"-init");if(a=a||this.settings,r.hasClass("open")&&n.attr("data-reveal-id")==r.attr("id"))return o.close(r);if(!r.hasClass("open")){var s=o.S("["+o.attr_name()+"].open");if("undefined"==typeof r.data("css-top")&&r.data("css-top",parseInt(r.css("top"),10)).data("offset",this.cache_offset(r)),this.key_up_on(r),r.trigger("open").trigger("open.fndtn.reveal"),s.length<1&&this.toggle_bg(r,!0),"string"==typeof i&&(i={url:i}),"undefined"!=typeof i&&i.url){var l="undefined"!=typeof i.success?i.success:null;t.extend(i,{success:function(e,n,i){t.isFunction(l)&&l(e,n,i),r.html(e),o.S(r).foundation("section","reflow"),o.S(r).children().foundation(),s.length>0&&o.hide(s,a.css.close),o.show(r,a.css.open)}}),t.ajax(i)}else s.length>0&&this.hide(s,a.css.close),this.show(r,a.css.open)}o.S(e).trigger("resize")},close:function(t){var t=t&&t.length?t:this.S(this.scope),e=this.S("["+this.attr_name()+"].open"),n=t.data(this.attr_name(!0)+"-init")||this.settings;e.length>0&&(this.locked=!0,this.key_up_off(t),t.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(t,!1),this.hide(e,n.css.close,n))},close_targets:function(){var t="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?t+", ."+this.settings.bg_class:t},toggle_bg:function(e,n){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=t("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var r=this.settings.bg.filter(":visible").length>0;n!=r&&((n==i?r:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,i){if(i){var o=n.data(this.attr_name(!0)+"-init")||this.settings,a=o.root_element;if(0===n.parent(a).length){var s=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(s),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(a)}var l=r(o.animation);if(l.animate||(this.locked=!1),l.pop){i.top=t(e).scrollTop()-n.data("offset")+"px";var u={top:t(e).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(i).animate(u,o.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),o.animation_speed/2)}if(l.fade){i.top=t(e).scrollTop()+n.data("css-top")+"px";var u={opacity:1};return setTimeout(function(){return n.css(i).animate(u,o.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),o.animation_speed/2)}return n.css(i).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}var o=this.settings;return r(o.animation).fade?n.fadeIn(o.animation_speed/2):(this.locked=!1,n.show())},hide:function(n,i){if(i){var o=n.data(this.attr_name(!0)+"-init");o=o||this.settings;var a=r(o.animation);if(a.animate||(this.locked=!1),a.pop){var s={top:-t(e).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(s,o.animation_speed,"linear",function(){this.locked=!1,n.css(i).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),o.animation_speed/2)}if(a.fade){var s={opacity:0};return setTimeout(function(){return n.animate(s,o.animation_speed,"linear",function(){this.locked=!1,n.css(i).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),o.animation_speed/2)}return n.hide().css(i).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")}var o=this.settings;return r(o.animation).fade?n.fadeOut(o.animation_speed/2):n.hide()},close_video:function(e){var n=t(".flex-video",e.target),i=t("iframe",n);i.length>0&&(i.attr("data-src",i[0].src),i.attr("src",i.attr("src")),n.hide())},open_video:function(e){var n=t(".flex-video",e.target),r=n.find("iframe");if(r.length>0){var o=r.attr("data-src");if("string"==typeof o)r[0].src=r.attr("data-src");else{var a=r[0].src;r[0].src=i,r[0].src=a}n.show()}},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},cache_offset:function(t){var e=t.show().height()+parseInt(t.css("top"),10);return t.hide(),e},off:function(){t(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document);