/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
define(["Modernizr","prefixed","is"],function(e,n,t){var r,i=n("crypto",window);if(i&&"getRandomValues"in i&&"Uint32Array"in window){var o=new Uint32Array(10),a=i.getRandomValues(o);r=a&&t(a[0],"number")}e.addTest("getrandomvalues",!!r)});