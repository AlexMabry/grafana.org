/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
define(["Modernizr","createElement","prefixed"],function(e,t,r){e.addTest("requestautocomplete",!!r("requestAutocomplete",t("form")))});