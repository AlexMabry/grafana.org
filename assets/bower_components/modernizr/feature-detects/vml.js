/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "https://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
  }]
}
!*/
define(["Modernizr","createElement","isSVG"],function(e,n,t){e.addTest("vml",function(){var e,r=n("div"),o=!1;return t||(r.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=r.firstChild,e.style.behavior="url(#default#VML)",o=e?"object"==typeof e.adj:!0),o})});