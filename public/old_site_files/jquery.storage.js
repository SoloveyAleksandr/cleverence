!function(e){function t(e,t){var n;if("string"==typeof e&&"string"==typeof t)return localStorage[e]=t,!0;if("object"==typeof e&&"undefined"==typeof t){for(n in e)e.hasOwnProperty(n)&&(localStorage[n]=e[n]);return!0}return!1}function n(e,t){var n,r,o;if(n=new Date,n.setTime(n.getTime()+31536e6),r="; expires="+n.toGMTString(),"string"==typeof e&&"string"==typeof t)return document.cookie=e+"="+t+r+"; path=/",!0;if("object"==typeof e&&"undefined"==typeof t){for(o in e)e.hasOwnProperty(o)&&(document.cookie=o+"="+e[o]+r+"; path=/");return!0}return!1}function r(e){return localStorage[e]}function o(e){var t,n,r,o;for(t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(o=n[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null}function i(e){return delete localStorage[e]}function f(e){return n(e,"",-1)}var u="undefined"!=typeof window.localStorage;e.extend({Storage:{set:u?t:n,get:u?r:o,remove:u?i:f}})}(jQuery);