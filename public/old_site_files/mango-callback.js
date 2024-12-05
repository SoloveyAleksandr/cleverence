function MangoWidget(e){function t(e){var t=e.styles.fastCallback||{},a=!e.styles.copyright;t.flags=R.flags,t.policy=e.styles.policy,"fast-callback"===e.workMode&&R.element.find(".widget-wrapper").first().hide(),j().done(function(){if(Mango.Callback.FastCallbackWidget.isFastCallbackAvailable()||"fast-callback"===e.workMode){R.fastCallback=new Mango.Callback.FastCallbackWidget(jQuery.parseJSON(e.fast_callback),t,e.translate,R.element),R.fastCallback.splitText=w,R.fastCallback.init(e.styles,a);var n=R.element;R.element=R.fastCallback.element,C(),(R.element.hasClass("dark-cerulean-color")||R.element.hasClass("graphite-black-color"))&&R.element.find(".widget-wrapper").hasClass("selected-button")&&R.element.find(".currentCountry>.selectedCountry .triangle").addClass("dark"),R.element=n,"fast-callback"===e.workMode&&R.fastCallback.showWidget()}})}function a(e){var t=R.element.find(".widget-wrapper");t.addClass("common-window"),R.element.hasClass("selected-label")&&R.element.css({right:"-545px"}),R.element.find(".widget-callfromsite").hide();var a=R.element.find(".widget-callfromsite-not-work");switch(e){case 1:case 2:a.find(".title-widget").text(""),a.find(".text-widget").text(N.translate.widget_call_error+" ("+e+")");break;case 3:a.find(".title-widget").text(""),a.find(".text-widget").text(N.translate.widget_not_supported);break;case 4:a.find(".title-widget").text(""),a.find(".text-widget").text(N.translate.widget_not_supported_flash)}R.widget_show_error=!0,a.show()}function n(e){try{if(!Mango||!Mango.SEO||!Mango.SEO.sendEvent)return;Mango.SEO.sendEvent(e)}catch(t){console.error("Exception in MangoWidget::sendSeoEvent",t)}}function o(e,t){T(e.widgetStatus)&&(E(),setTimeout(function(){f(e),t()},200)),H(document).on("click",function(e){var t=R.element.find(".changeCountry"),a=R.element.find(".currentCountry>.selectedCountry");0===R.element.find(".selectedCountry").has(e.target).length&&(t.css("display","none"),a.removeClass("showCountriesList"))}),R.element.on("click",".currentCountry .selectCountryList > .selectCountry",x),R.element.on("click",".button-call",function(e){var t=H(e.target),a=t.prev().find(".call-input"),n=a.parent().attr("data-content").split("(")[0].replace(/\+/g,"")+a.val();c(n,t)}),R.element.on("click",".button-widget-open",function(){R.element.find(".widget-wrapper:not(.fast-callback)").hasClass("widget-show")?R.setStatus("close"):R.setStatus("open",e)}),R.element.on("change",".select-day-week",function(){H(".widget-start-time").html(h(H(this).val(),p(N.days))),H(".widget-end-time").html(h(H(this).val(),p(N.days)))}),R.element.on("click",".close-popup",function(e){var t=H(e.target),a=t.parents(".widget-wrapper");a.hasClass("fast-callback")?R.fastCallback.closeWidget():R.setStatus("close")})}function i(e,t){var a;switch(t){case 2:a=30;break;case 3:a=40;break;case 4:a=50;break;case 5:a=60;break;case 6:a=70}return e.animate({"padding-left":a+"px"},100).attr("data-padding",a),a}function r(e,t,a,n){var o=i(e,n),r=a.replace(/[\(\)\s\-]/g,"").length*t,l=null!==a.match(/[\(\)\s\-]/g)?a.match(/[\(\)\s\-]/g).length:0,s=0==l?0:r/(l*t)+5,c=r+l*s,d=parseInt(e.css("width"))+o+"px",u=o+c+"px";d!==u&&e.animate({width:u},100)}function l(){return"selected-dynamic"==N.styles.formatCall}function s(){var e=R.element.find(".call-input"),t=R.element.attr("data-number");!e.val()&&t&&(t=t.replace(/[()\-\+\s]/g,""),t.length>10&&(t=t.substr(t.length-10)),e.val(t),P&&P.maskPattern(P.opts.pattern))}function c(e,t){var a=t.parents(".widget-wrapper"),n=a.hasClass("fast-callback"),o=a.find(".currentCountry>.selectedCountry"),i=o.attr("data-index"),r=R.allowedCountries[i].phone_code.length;e=e.replace(/[()\-\s]/g,""),!R.type&&e.length-r>=R.allowedCountries[i].min&&R.allowedCountries[i].max>=e.length-r&&(l()&&"not-work"==N.workMode?A(g.bind(null,e,t)):g(e,t),n&&R.fastCallback.timerStage(),R.fastCallback&&R.fastCallback.orderComplete())}function d(e){if(N.useGaEvents){var t=window.GoogleAnalyticsObject;if(t){var a=window[t];if(a){var n="not-work"!=N.workMode?"call order work":"call order not work",o=a.getAll()||[];o.forEach(function(e){e.send("event","callback button","call order",""),e.send("event","callback button",n,"")})}}}}function u(e){if(void 0===window.atob)return"";if(!Mango||!Mango.modules||!Mango.modules.getModule)return"";var t=[],a=Mango.modules.getModule("calltracking");if(!a||!a.widgets)return"";t=a.widgets;var n=Object.keys(t);if(0===n.length)return"";var o=+atob(e),i=n.filter(function(e){var a=t[e];return a&&a.numbers&&a.numbers.length&&a.settings&&a.settings.callbacks&&a.settings.callbacks.some(function(e){return e===o})}).map(function(e){return{id:e,number:t[e].numbers[0].number}});if(0===i.length)return"";var r={uid:Mango.session.getUserId(),sid:Mango.session.getSessionId(),widgets:i};return JSON.stringify(r)}function g(e,t){var a=t.parents(".widget-wrapper").find(".widget-start-time").val()||0;R.setStatus("waiting");var o={number:encodeURIComponent(e),dateStart:parseInt(a)},i=u(R.callbackButtonId);i&&(o.calltracking=i);var r=R.host+"widget/order-call/"+R.callbackButtonId+"?callback=?";return H.getJSON(r,o,function(a){R.setStatus("success");var o=t.hasClass("js-fast-callback");return d(e),o?void n(Mango.SEO.events.widget_leadgen_created):void n(Mango.SEO.events.widget_callback_created)})}function h(e,t){var a="";return H.each(t,function(t,n){n.date==e&&H.each(n.times,function(e,t){var n=new Date(1e3*t),o=new Date(1e3*t+18e5),i=("0"+n.getHours()).substr(-2),r=("0"+n.getMinutes()).substr(-2),l=("0"+o.getHours()).substr(-2),s=("0"+o.getMinutes()).substr(-2);a+='<option value="'+t+'">'+i+":"+r+" - "+l+":"+s+"</option>"})}),a}function p(e){var t=[],a=new Date;return H.each(e,function(e,n){var o=[],i=new Date(1e3*n.date+6e4*a.getTimezoneOffset());H.each(n.times,function(e,t){var n=new Date(1e3*t+18e5);i.setHours(n.getHours()),i.setMinutes(n.getMinutes()),i>=a&&o.push(t)}),o.length>0&&t.push({date:n.date,times:o})}),t}function m(e){function t(e,t){var a=new Date(1e3*t.date+6e4*i.getTimezoneOffset());o+='<option value="'+t.date+'">'+a.getDate()+" "+N.translate["month_"+(a.getMonth()+1)]+"</option>"}function a(e){var t,a=new Date,n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];return a.setDate(i.getDate()+1),e.toDateString()==i.toDateString()?N.translate.today:a.toDateString()==e.toDateString()?N.translate.tomorrow:(t=n[e.getDay()],t="in_"+t.toLowerCase().trim(),N.translate[t])}function n(e,t){var n=new Date(1e3*t.date+6e4*i.getTimezoneOffset()),r=a(n);o+='<option value="'+t.date+'">'+r}var o="",i=new Date;return"work"==N.workMode?H.each(e,t):H.each(e,n),o}function f(e){function t(){if(!a.formatView){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;S.css("top",Math.max(0,(e-H(S).outerHeight())/2)+"px")}if(!a.formatLocation){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;S.css("left",Math.max(0,(t-H(S).outerWidth())/2)+"px")}}var a=H.extend({},e.styles),n=p(e.days);if(window.location.search)for(var o=window.location.search.substring(1).split("&"),i=0;i<o.length;i++){var r=o[i].split("=");if("type"===r[0]){a.workMode=r[1];break}}var s="",c=m(n);n[0]&&(s=h(n[0].date,n)),void 0===a.pattern&&(a.pattern={}),"string"==typeof a.pattern?a.pattern={pattern:a.pattern}:"object"==typeof a.pattern&&void 0===a.pattern.pattern&&(a.pattern.pattern=""),l()&&(a.formatCall="selected-label",a.formatLocation||(a.formatLocation="right-x"));var d={basicColor:a.colorScheme.basic+"-color",additionalColor:a.colorScheme.additional+"-additional-color ",opacity:a.colorScheme.opacity},u=["widget-wrapper","mng-wgt","common-window","mng-wgt-index",a.copyright||"",a.formatView||"",a.formatLocation||"",d.basicColor||"",d.additionalColor||"",d.opacity||"",a.formWidget||"",a.pattern.pattern||"",a.formatCall||""].join(" "),g='<div class="'+u+'" style="position:fixed;"><div class="widget-wrapper__center"><div class="widget-content">',f=R.currentCountry,w="",y='<ul class="currentCountry">';f["default"]?R.allowedCountries.length>0?(y+='<li class="selectedCountry" data-country="'+R.allowedCountries[0].country_code+'" data-index="'+(f.ind||0)+'"><div class="triangle"></div><img class="flag flag-'+R.allowedCountries[0].country_code+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></li>',w+='<span class="box-phone-span-input '+R.allowedCountries[0].country_code+'-box-phone-span-input" data-content="+'+R.allowedCountries[0].phone_code+'"><input placeholder="'+R.allowedCountries[0].placeholder+'" class="call-input" mask="'+R.allowedCountries[0].mask+'" restrict="reject" clean="true"/></span>'):(y+='<li class="selectedCountry" data-country="'+e.locale+'" data-index="0"><img class="flag flag-'+e.locale+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></li>',w+='<span class="box-phone-span-input '+e.locale+'-box-phone-span-input" data-content="+'+f.phone_code+'"><input placeholder="'+f.placeholder+'" class="call-input" mask="'+f.mask+'" restrict="reject" clean="true"/></span>'):(y+='<li class="selectedCountry" data-country="'+e.locale+'" data-index="'+(f.ind||0)+'">'+(R.allowedCountries.length>0?'<div class="triangle"></div>':"")+'<img class="flag flag-'+e.locale+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></li>',w+='<span class="box-phone-span-input '+e.locale+'-box-phone-span-input" data-content="+'+f.phone_code+'"><input placeholder="'+f.placeholder+'" class="call-input" mask="'+f.mask+'" restrict="reject" clean="true"/></span>'),y+='<li class="changeCountry"><ul class="selectCountryList">',f["default"]||(y+='<li class="selectCountry userCountry" data-country="'+f.country_code+'" data-code="+'+f.phone_code+'" data-mask="'+f.mask+'" data-placeholder="'+f.placeholder+'" data-index="'+f.ind+'"><div class="selectCountryTable"><div class="selectCountryTableCell"><img class="flag flag-'+f.country_code+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></div><div class="countryName">'+("de"===e.locale?f.country_de:"ru"===e.locale?f.country_ru:f.country_en)+'</div><div class="countryCode">+'+f.phone_code+"</div></div></li>");for(var v=0;v<R.allowedCountries.length;v++){var b=R.allowedCountries[v].country_code,k=R.allowedCountries[v].phone_code,A=R.allowedCountries[v].mask,x=R.allowedCountries[v].placeholder;y+='<li class="selectCountry" data-country="'+b+'" data-code="+'+k+'" data-mask="'+A+'" data-placeholder="'+x+'" data-index="'+v+'"><div class="selectCountryTable"><div class="selectCountryTableCell"><img class="flag flag-'+b+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></div><div class="countryName">'+("de"===e.locale?R.allowedCountries[v].country_de:"ru"===e.locale?R.allowedCountries[v].country_ru:R.allowedCountries[v].country_en)+'</div><div class="countryCode">+'+k+"</div></div></li>"}y+="</ul></li></ul>",y+=w,a.workMode&&"not-work"===a.workMode||!a.workMode&&"not-work"===e.workMode?(g+='<h5 class="title-widget">'+a.textWidget.firstText+'</h5><p class="text-widget">'+a.textWidget.secondText+'</p><div class="box-select-group"><div class="select-list"><div class="select-item"><select class="select-day-week">'+c+'</select></div><div class="select-item"><select class="select-time widget-start-time">'+s+'</select></div></div></div><div class="box-phone-number">'+y+'<div class="button-call button-widget"></div></div>',""===a.policy&&(g+='<div class="'+("selected-dynamic"!==N.styles.formatCall?"text-policy":"text-policy-dynamic")+'">'+a.textWidget.policyText+"</div>")):(g+='<h5 class="title-widget">'+a.textWidget.workTitle+'</h5><p class="text-widget">'+a.textWidget.workText+'</p><div class="box-phone-number">'+y+'<div class="button-call button-widget"></div></div>',""===a.policy&&(g+='<div class="'+("selected-dynamic"!==N.styles.formatCall?"text-policy":"text-policy-dynamic")+'">'+a.textWidget.policyText+"</div>")),R.flags=y,g+="</div>",g+='<div class="thanks-content"><h5 class="title-widget">'+e.translate.thanks+'</h5><p class="text-widget">'+e.translate.order_complete+'</p></div><div class="wait-content"><div class="clock"></div><h5 class="title-widget">'+e.translate.wait+'</h5><p class="text-widget">'+e.translate.order_waiting+"</p></div>",g+='</div><div class="close-popup"></div><button class="button-widget-open">'+a.textButtonWidget.firstText+'</button><a href="'+e.translate.widget_link_url+'" class="technology" target="_blank">'+e.translate.widget_link_text+"</a></div>";var M=R.element.find(".mng-overlay");if(0==M.length&&(g+='<div class="mng-overlay"></div>'),R.element.find(".widget-wrapper").remove(),R.element.append(g),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1){var S=H("#mango-widget").find(".widget-wrapper");H(function(){H(window).resize(function(){t()}),setTimeout(function(){S.css("-webkit-transform","translate(0,0)"),t()},300)})}switch(e.workMode){case"work":R.element.find(".widget-callfromsite").show();break;default:R.element.find(".widget-wrapper").addClass("common-window"),R.element.find(".widget-callback-not-work").show()}C(e),l()&&_(e)}function w(e,t){void 0===t&&(t=5);var a,n=e.length,o=13;return n<o?e:(e=e.replace("<br>"," "),a=e.indexOf(" ",Math.ceil(n/2)-t),e.substring(0,a)+"<br>"+e.substring(a+1,n))}function y(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,a=e.match(t);return!(!a||11!=a[7].length)&&a[7]}function v(e){function t(e,t){"undefined"!=typeof YT&&(U[e]=new YT.Player(e,{videoId:t,playerVars:{loop:1,autoplay:1,autohide:1,controls:0,showinfo:0,disablekb:1,modestbranding:1,rel:0,cc_load_policy:1,iv_load_policy:3},events:{onReady:function(t){t.target.mute(),R.element.find(".widget-show").length&&b(U[e]),t.target.playVideo()},onStateChange:function(e){e.data==YT.PlayerState.ENDED&&e.target.playVideo()}}}))}function a(){Object.keys(U).length?Object.keys(U).forEach(function(t){U[t].loadVideoById(e)}):(t("mango-video-container",e),t("mango-video-thanks-container",e),t("mango-video-wait-container",e))}var n=document.createElement("script"),o=document.getElementsByTagName("script")[0];R.element.find(".widget-wrapper");n.id="youtube-api",n.src="https://www.youtube.com/player_api",e&&(document.getElementById(n.id)||o.parentNode.insertBefore(n,o),Y=function(e){setTimeout(function(){Object.keys(U).forEach(function(e){b(U[e])})},e||100)},H(window).resize(Y),window.onYouTubeIframeAPIReady!=a?window.onYouTubeIframeAPIReady=a:a())}function b(e){var t=e.getIframe();if(t){var a=t.parentNode,n=a.offsetWidth,o=a.offsetHeight,i=16/9,r=Math.round(n/i),l=Math.round(o*i),s=-Math.round(r/2-o/2);o>n&&(t.style.width=l+"px",t.style.height=o+"px",s=-Math.round(l/2-n/2),t.style.marginLeft=s+"px",t.style.marginTop="0px"),o<=n&&s>=0&&(t.style.height=o+"px",t.style.width=n+"px",t.style.marginTop="0px",t.style.marginLeft="0px"),o<=n&&s<0&&(t.style.width=n+"px",t.style.height=r+"px",t.style.marginTop=s+"px",t.style.marginLeft="0px")}}function k(){return"not-work"!=N.workMode}function _(e){function t(){var e=A.date,t=A.time.split("-"),a=t[0].trim(),n=t[1].trim(),o=N.translate.dynamic_button_thank_you_not_work;return o.replace("{timeStart}",a).replace("{timeEnd}",n).replace("{date}",e)}function a(){var e=H("body");if(!i.hasClass("widget-show")||e.width()>650)return void i.css("top","auto");var t=H(window).height()>window.screen.height?window.screen.height:H(window).height(),a=Math.round(t/2);i.css("top",a+"px")}function n(){N.styles.pattern.useVideo&&0===Object.keys(U).length?v(y(N.styles.pattern.linkVideo)):N.styles.pattern.useVideo&&Object.keys(U).length&&Object.keys(U).forEach(function(e){U[e].playVideo()})}function o(){Object.keys(U).forEach(function(e){U[e].stopVideo()})}var i=R.element.find(".widget-wrapper"),r=H.extend({},e.styles),s=i.find(".widget-content"),c=i.find(".thanks-content"),d=i.find(".wait-content"),u=0===location.pathname.indexOf("/widget/callback/");u&&"?type=work"==location.search?N.workMode="work":u&&"?type=not-work"==location.search&&(N.workMode="not-work"),void 0===r.textDynamicWidget&&(r.textDynamicWidget={}),void 0===r.textNotWorkingDynamicWidget&&(r.textNotWorkingDynamicWidget={});var g=r.textDynamicWidget.firstText||"",h=r.textNotWorkingDynamicWidget.firstText||"",p=r.textDynamicWidget.secondText||"",m=r.textDynamicWidget.thirdText||N.translate.dynamic_button_header;i.removeClass("selected-label").addClass("selected-dynamic"),i.find(".button-widget-open").text(""),s.find(".title-widget").text(m),s.find(".text-widget").html(w(k()?g:h)),s.find(".box-select-group").hide(),c.find(".text-widget").text(e.translate.dynamic_button_thank_you),i.find(".button-call").text(p),R.element.find(".mng-overlay").hide(),i.find(".call-input").height(35),r.pattern&&r.pattern.linkVideo&&r.pattern.useVideo&&(s.prepend('<div class="background-video"><div id="mango-video-container"></div></div>'),c.prepend('<div class="background-video"><div id="mango-video-thanks-container"></div></div>'),d.prepend('<div class="background-video"><div id="mango-video-wait-container"></div></div>')),H(window).resize(a),R.element.on("statusChange",function(e,r){l()&&(Y(),a(),i.hasClass("thanks")&&"close"==r&&i.removeClass("thanks"),"success"!=r||k()||c.find(".text-widget").text(t()),"open"==r&&n(),"close"==r&&o())})}function A(e){var t=R.element.find(".widget-wrapper:not(fast-callback) .button-call"),a=R.element.find(".box-select-group"),n=R.element.find(".box-phone-number");return a.is(":visible")?void e():(t.text(N.translate.dynamic_button_not_work_button),a.css("display","inline-block"),R.element.find(".widget-content .widget-text").text(N.translate.dynamic_button_not_work_text),n.find(".box-phone-span-input").hide(),n.find(".currentCountry").hide(),Y(),void t.off().on("click",function(){var t=R.element.find(".select-day-week option:selected").text(),a=R.element.find(".select-time option:selected").text();A.date=t,A.time=a,e()}))}function C(e){var t,a;R.currentCountry["default"]&&R.allowedCountries.length>0?(t={mask:R.allowedCountries[0].mask.replace(/\?/g,""),placeHolder:R.allowedCountries[0].placeholder},a=R.allowedCountries[0].phone_code.length+1):(t={mask:R.currentCountry.mask.replace(/\?/g,""),placeHolder:R.currentCountry.placeholder},a=R.currentCountry.phone_code.length+1);var n=R.element.find(".call-input"),o=11.2;P=VMasker(n[0]),P.maskPattern(t.mask),n.attr("placeholder",t.placeHolder),r(n,o,t.placeHolder,a),(R.element.find(".widget-wrapper").hasClass("dark-cerulean-color")||R.element.find(".widget-wrapper").hasClass("graphite-black-color"))&&R.element.find(".widget-wrapper").hasClass("selected-button")&&R.element.find(".currentCountry>.selectedCountry .triangle").addClass("dark"),R.allowedCountries.length>1?R.element.find(".selectedCountry").on("click",function(e){var t=e.currentTarget;t.classList.toggle("showCountriesList");var a=t.parentElement.getElementsByClassName("changeCountry")[0].style;t.classList.contains("showCountriesList")?(a.display="block",R.allowedCountries.length<5&&(a.height=31*R.allowedCountries.length+"px")):a.display="none"}):R.element.find(".currentCountry>.selectedCountry>.triangle").css("display","none")}function x(e){var t=11.2,a=H(e.target),n=a.parents(".widget-wrapper"),o=a.hasClass("selectCountry")?a:a.parents(".selectCountry"),i=o.parents(".box-phone-number"),l=i.find(".call-input"),s=i.find(".selectedCountry"),c=s.find("img"),d=o.parents(".changeCountry"),u=o.attr("data-code"),g=o.attr("data-placeholder"),h=o.attr("data-index"),p=o.attr("data-country");r(l,t,g,u.length),c.removeClass("flag-"+s.attr("data-country")),s.attr("data-country",p),s.attr("data-index",h),c.addClass("flag-"+p),n.find(".box-phone-span-input").attr("data-content",u),l.val(""),l.attr("mask",o.attr("data-mask"));var m={mask:o.attr("data-mask").replace(/\?/g,""),placeHolder:o.attr("data-placeholder")};P=VMasker(l[0]),P.maskPattern(m.mask),l.attr("placeholder",m.placeHolder),d.css("display","none"),s.removeClass("showCountriesList"),Y(200)}function M(e){var t=new Date,a=t.toISOString().substring(0,10),n=e.nonWorkingDaysException||[];if(-1!==n.indexOf(a))return!1;var o=new Date(e.workInterval.start),i=new Date(e.workInterval.finish),r=e.workInterval.lunchStart?new Date(e.workInterval.lunchStart):null,l=e.workInterval.lunchFinish?new Date(e.workInterval.lunchFinish):null;return r&&l?o<=t&&t<i&&!(r<=t&&t<l):o<=t&&t<i}function S(e){var t=M(e);return"work"!==e.workMode||t?!("not-work"!==e.workMode||!t)&&(e.workMode="work",!0):(e.workMode="not-work",!0)}function E(){H("<link>",{rel:"stylesheet",type:"text/css",href:R.host+"css/widget.css"}).appendTo("head"),H("<link>",{rel:"stylesheet",type:"text/css",href:R.host+"css/flags.css"}).appendTo("head")}function T(e){switch(e){case 1:case 2:return R.element.find("#mango-widget-btn").attr("onclick",'alert("'+N.translate.widget_unavailable+'"); false;'),!1;case 3:return B(),!1}return!0}function O(e){void 0===window.VMasker?W("js/vanilla-masker.js",function(){e()}):e()}function j(e){var e=e||"widgets/mango-fast-callback.js",t=document.createElement("script"),a=H.Deferred();return t.setAttribute("type","text/javascript"),t.setAttribute("src",R.host+e),t.onerror=a.reject.bind(a),t.onload=a.resolve.bind(a),(document.getElementById(R.id)||document.documentElement).appendChild(t),a=a.promise(),a.fail(function(){B()}),a}function I(e){function t(e,t){if(e==t)return 0;for(var a=e.split("."),n=t.split("."),o=Math.min(a.length,n.length),i=0;i<o;i++){if(parseInt(a[i])>parseInt(n[i]))return 1;if(parseInt(a[i])<parseInt(n[i]))return-1}return a.length>n.length?1:a.length<n.length?-1:0}function a(e){var a;return"function"==typeof e&&(a=e(),"object"==typeof a&&void 0!==a.jquery&&t(a.jquery,z)>=0)}if(void 0===window.jQuery){var n=window.$;W("js/jquery-1.7.2.js",function(){H=window.jQuery.noConflict(),window.$=n,(window.Mango=window.Mango||{}).jQuery=H,e()})}else if(a(window.jQuery))H=window.jQuery,(window.Mango=window.Mango||{}).jQuery=H,e();else{var o=window.jQuery.noConflict();W("js/jquery-1.7.2.js",function(){H=window.jQuery.noConflict(),window.jQuery=window.$=o,(window.Mango=window.Mango||{}).jQuery=H,e()})}}function D(e){void 0===H.Storage?W("js/jquery.storage.js",function(){H.Storage=window.jQuery.Storage,e()}):e()}function W(e,t){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src",R.host+e),a.readyState?a.onreadystatechange=function(){"complete"!==this.readyState&&"loaded"!==this.readyState||t()}:(a.onload=t,a.onerror=B),(document.getElementById(R.id)||document.documentElement).appendChild(a)}function B(e){e=!(!e&&"object"==typeof e)&&e;var t="";e&&(t="("+e+")"),R.element?R.element.find(".button-widget-open").attr("onclick",'alert("'+R.errorMessage+t+'"); false;'):R.elem.querySelector(".button-widget-open").setAttribute("onclick",'alert("'+R.errorMessage+t+'"); false;')}function L(){return window.location.href.indexOf("autoOpen=1")>0}this.host=e.host,this.id=e.id,this.elem=e.elem,this.errorMessage=e.message,this.callbackButtonId=!1,this.type="",this.allowedCountries=[],this.currentCountry=[],this.fastCallback=null,this.closeTimeout=null,this.autoCloseTimeout=null,this.widget_show_error=!1,this.connection=!1;var H,N,P,R=this,V=!1,Q=6e4,G=5e3,z="1.7.2",U={};this.initWidget=function(){I(function(){O(function(){D(function(){R.elem?R.element=H(R.elem):R.element=H("#"+R.id);var e=R.element.data("settings");R.callbackButtonId=e.id;var a=new Date,n=R.host+"widget/get-callback-widget/"+e.id+"?callback=?&timeOffset="+a.getTimezoneOffset()+"&type="+e.type+"&serv="+e.srv;H.support.cors=!0,H.getJSON(n,e,function(a){N=a,a.widget_id=e.id;var n=R.element.attr("data-optionsView");n&&(a.styles=jQuery.parseJSON(n)),R.currentCountry=a.currentCountry,R.allowedCountries=a.allowedCountries,o(a,function(){V=!0,(e.type||L())&&R.setStatus("open",a),R.type=e.type||null,(a.use_tracking||"fast-callback"==a.workMode)&&t(a)})})})})})},this.setStatus=function(e,t){if(!R.type&&V){var n=R.element.find(".widget-wrapper:not(.fast-callback)"),o=R.element.find(".widget-wrapper.fast-callback.widget-show");switch(e){case"open":!n.hasClass("widget-show")&&S(t)&&(f(t),n=R.element.find(".widget-wrapper")),setTimeout(function(){n.toggleClass("widget-show"),n.removeClass("thanks"),n.removeClass("wait"),n.hasClass("widget-show")&&n.hasClass("selected-button")&&R.element.find(".mng-overlay").show().animate({opacity:"0.5"},500)},0),R.autoCloseTimeout=setTimeout(function(){R.setStatus("close")},Q),s();break;case"success":n.addClass("thanks"),n.removeClass("wait"),R.closeTimeout=setTimeout(function(){R.setStatus("close"),o||R.element.find(".mng-overlay").animate({opacity:"0"},500).hide(1)},G);break;case"close":n.removeClass("widget-show"),clearTimeout(R.closeTimeout),clearTimeout(R.autoCloseTimeout),R.element.find(".mng-overlay").animate({opacity:"0"},500).hide(1);break;case"waiting":n.addClass("wait"),n.removeClass("thanks");break;case"connection-failed":a(1),R.element.find(".mng-overlay").animate({opacity:"0"},500).hide(1)}setTimeout(function(){R.element.trigger("statusChange",[e])},0)}};var Y=function(){}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}!function(e,t,a){"use strict";a.$,a._,a.Promise;a.SEO=a.SEO||{},a.SEO.events={mch_chat_established:"mch_chat_established",mch_chat_created:"mch_chat_created",mch_chat_propose:"mch_chat_propose",mch_proactivechat_shown:"mch_proactivechat_shown",mch_proactivechat_created:"mch_proactivechat_created",mch_proactivechat_established:"mch_proactivechat_established",mch_callback_created:"mch_callback_created",mch_callback_established:"mch_callback_established",mch_callback_lead:"mch_callback_lead",mch_leadgen_shown:"mch_leadgen_shown",mch_leadgen_created:"mch_leadgen_created",mch_leadgen_established:"mch_leadgen_established",widget_callback_created:"widget_callback_created",widget_callback_established:"widget_callback_established",widget_leadgen_shown:"widget_leadgen_shown",widget_leadgen_created:"widget_leadgen_created"},a.SEO.Yandex=function(){function t(t){try{var a=e.ym;if(!a||!a.a)return;var n=a.a.map(function(e){return e[0]}),o=_toConsumableArray(new Set(n));o.forEach(function(e){return a(e,"reachGoal",t)})}catch(i){console.error("Error in Yandex.Metrica")}}return{reachGoal:t}}(),a.SEO.Google=function(){function t(t){try{console.log("Mango.SEO.Google::sendEvent name: "+t);var n=a[t];if(!n)return;var o=n.action,i=n.category,r=e.GoogleAnalyticsObject;if(!r)return;var l=e[r];if(!l||!l.getAll)return;var s=l.getAll()||[];s.forEach(function(e){e.send({hitType:"event",eventCategory:i,eventAction:o})})}catch(c){console.error("Error in Google Analytics")}}var a={mch_chat_established:{category:"mch_chat",action:"established"},mch_chat_created:{category:"mch_chat",action:"created"},mch_chat_propose:{category:"mch_chat",action:"propose"},mch_callback_created:{category:"mch_callback",action:"created"},mch_callback_established:{category:"mch_callback",action:"established"},mch_callback_lead:{category:"mch_callback",action:"lead"},mch_leadgen_shown:{category:"mch_leadgen",action:"shown"},mch_leadgen_created:{category:"mch_leadgen",action:"created"},mch_leadgen_established:{category:"mch_leadgen",action:"established"},mch_proactivechat_shown:{category:"mch_proactivechat",action:"shown"},mch_proactivechat_created:{category:"mch_proactivechat",action:"created"},mch_proactivechat_established:{category:"mch_proactivechat",action:"established"},widget_callback_created:{category:"widget_callback",action:"created"},widget_callback_established:{category:"widget_callback",action:"established"},widget_leadgen_shown:{category:"widget_leadgen",action:"shown"},widget_leadgen_created:{category:"widget_leadgen",action:"created"}};return{sendEvent:t}}(),a.SEO.sendEvent=function(e){a.SEO.Yandex&&a.SEO.Yandex.reachGoal(e),a.SEO.Google&&a.SEO.Google.sendEvent(e)}}(window,document,window.Mango=window.Mango||{}),function(e,t){e.VMasker=t()}(this,function(){var e="9",t="A",a="S",n=[9,16,17,18,36,37,38,39,40,91,92,93],o=function(e){for(var t=0,a=n.length;t<a;t++)if(e==n[t])return!1;return!0},i=function(e){return e=e||{},e={precision:e.hasOwnProperty("precision")?e.precision:2,separator:e.separator||",",delimiter:e.delimiter||".",unit:e.unit&&e.unit.replace(/[\s]/g,"")+" "||"",suffixUnit:e.suffixUnit&&" "+e.suffixUnit.replace(/[\s]/g,"")||"",zeroCents:e.zeroCents,lastOutput:e.lastOutput},e.moneyPrecision=e.zeroCents?0:e.precision,e},r=function(n,o,i){for(;o<n.length;o++)n[o]!==e&&n[o]!==t&&n[o]!==a||(n[o]=i);return n},l=function(e){this.elements=e};l.prototype.unbindElementToMask=function(){for(var e=0,t=this.elements.length;e<t;e++)this.elements[e].lastOutput="",this.elements[e].onkeyup=!1,this.elements[e].onkeydown=!1,this.elements[e].value.length&&(this.elements[e].value=this.elements[e].value.replace(/\D/g,""))},l.prototype.bindElementToMask=function(e){for(var t=this,a=function(a){a=a||window.event;var n=a.target||a.srcElement;o(a.keyCode)&&setTimeout(function(){t.opts.lastOutput=n.lastOutput,n.value=s[e](n.value,t.opts),n.lastOutput=n.value,n.setSelectionRange&&t.opts.suffixUnit&&n.setSelectionRange(n.value.length,n.value.length-t.opts.suffixUnit.length)},0)},n=0,i=this.elements.length;n<i;n++)this.elements[n].lastOutput="",this.elements[n].onkeyup=a,this.elements[n].value.length&&(this.elements[n].value=s[e](this.elements[n].value,this.opts))},l.prototype.maskMoney=function(e){this.opts=i(e),this.bindElementToMask("toMoney")},l.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},l.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},l.prototype.maskPattern=function(e){this.opts={pattern:e},this.bindElementToMask("toPattern")},l.prototype.unMask=function(){this.unbindElementToMask()};var s=function(e){if(!e)throw new Error("VanillaMasker: There is no element to bind.");var t="length"in e?e.length?e:[]:[e];return new l(t)};return s.toMoney=function(e,t){if(t=i(t),t.zeroCents){t.lastOutput=t.lastOutput||"";var a="("+t.separator+"[0]{0,"+t.precision+"})",n=new RegExp(a,"g"),o=e.toString().replace(/[\D]/g,"").length||0,r=t.lastOutput.toString().replace(/[\D]/g,"").length||0;e=e.toString().replace(n,""),o<r&&(e=e.slice(0,e.length-1))}var l=e.toString().replace(/[\D]/g,""),s=new RegExp("^(0|\\"+t.delimiter+")"),c=new RegExp("(\\"+t.separator+")$"),d=l.substr(0,l.length-t.moneyPrecision),u=d.substr(0,d.length%3),g=new Array(t.precision+1).join("0");d=d.substr(d.length%3,d.length);for(var h=0,p=d.length;h<p;h++)h%3===0&&(u+=t.delimiter),u+=d[h];if(u=u.replace(s,""),u=u.length?u:"0",!t.zeroCents){var m=l.length-t.precision,f=l.substr(m,t.precision),w=f.length,y=t.precision>w?t.precision:w;g=(g+f).slice(-y)}var v=t.unit+u+t.separator+g+t.suffixUnit;return v.replace(c,"")},s.toPattern=function(n,o){var i,l="object"==typeof o?o.pattern:o,s=l.replace(/\W/g,""),c=l.split(""),d=n.toString().replace(/\W/g,""),u=d.replace(/\W/g,""),g=0,h=c.length,p="object"==typeof o?o.placeholder:void 0;for(i=0;i<h;i++){if(g>=d.length){if(s.length==u.length)return c.join("");
if(void 0!==p&&s.length>u.length)return r(c,i,p).join("");break}if(c[i]===e&&d[g].match(/[0-9]/)||c[i]===t&&d[g].match(/[a-zA-Z]/)||c[i]===a&&d[g].match(/[0-9a-zA-Z]/))c[i]=d[g++];else if(c[i]===e||c[i]===t||c[i]===a)return void 0!==p?r(c,i,p).join(""):c.slice(0,i).join("")}return c.join("").substr(0,i)},s.toNumber=function(e){return e.toString().replace(/(?!^-)[^0-9]/g,"")},s.toAlphaNumeric=function(e){return e.toString().replace(/[^a-z0-9 ]+/i,"")},s});