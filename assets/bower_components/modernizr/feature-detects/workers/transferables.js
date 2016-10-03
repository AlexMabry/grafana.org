/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,t){e.addAsyncTest(function(){function n(){t("transferables",!1),i()}function i(){u&&URL.revokeObjectURL(u),l&&l.terminate(),s&&clearTimeout(s)}var r=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!r)return t("transferables",!1);try{var o,s,a='var hello = "world"',c=new Blob([a],{type:"text/javascript"}),u=URL.createObjectURL(c),l=new Worker(u);l.onerror=n,s=setTimeout(n,200),o=new ArrayBuffer(1),l.postMessage(o,[o]),t("transferables",0===o.byteLength),i()}catch(d){n()}})});