/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
define(["Modernizr"],function(t){t.addTest("cookies",function(){try{document.cookie="cookietest=1";var t=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(e){return!1}})});