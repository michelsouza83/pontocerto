var startLang,lang;function pegandoLinguagem(){startLang=localStorage.getItem("languagePref")}function verificarEmail(t){return!!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.val())}function validarNullVazio(t,e){return pegandoLinguagem(),""!=t.val()&&null!=t.val()||(iziToast.error({title:lang[startLang].Erros.lgErro,message:lang[startLang].Erros[e],theme:"dark",backgroundColor:"#dc3545"}),"select"==t[0].localName?t.parent().addClass("is-danger"):t.addClass("is-danger"),t.focus(),!1)}function validarSenhas(t,e,n){return pegandoLinguagem(),t.val()==e.val()||(iziToast.error({title:lang[startLang].Erros.lgErro,message:lang[startLang].Erros[n],theme:"dark",backgroundColor:"#dc3545"}),t.addClass("is-danger"),e.addClass("is-danger"),t.focus(),!1)}!function(){for(var t,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],o=n.length,i=window.console=window.console||{};o--;)i[t=n[o]]||(i[t]=e)}(),lang=JSON.parse(localStorage.getItem("language")),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.iziToast=e(t)}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var r={},l="iziToast",d=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),s=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),a="undefined"!=typeof InstallTrigger,c="ontouchstart"in document.documentElement,n=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],u=568,p={},m={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!(r.children={}),close:!0,closeOnEscape:!1,closeOnClick:!1,rtl:!1,position:"bottomRight",target:"",targetFirst:!0,toastOnce:!1,timeout:5e3,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var e=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};e.prototype=window.Event.prototype,window.CustomEvent=e}var g=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else if(t)for(var i=0,s=t.length;i<s;i++)e.call(n,t[i],i,t)},f=function(n,o){var i={};return g(n,function(t,e){i[e]=n[e]}),g(o,function(t,e){i[e]=o[e]}),i},v=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},h={move:function(t,e,n,o){var i;0!==o&&(t.classList.add(l+"-dragged"),t.style.transform="translateX("+o+"px)",0<o?(i=(180-o)/180)<.3&&e.hide(f(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):(i=(180+o)/180)<.3&&e.hide(f(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),(t.style.opacity=i)<.3&&((s||a)&&(t.style.left=o+"px"),t.parentNode.style.opacity=.3,this.stopMoving(t,null)))},startMoving:function(n,o,i,t){t=t||window.event;var e=c?t.touches[0].clientX:t.clientX,s=n.style.transform.replace("px)",""),a=e-(s=s.replace("translateX(",""));n.classList.remove(i.transitionIn),n.classList.remove(i.transitionInMobile),n.style.transition="",c?document.ontouchmove=function(t){t.preventDefault();var e=(t=t||window.event).touches[0].clientX-a;h.move(n,o,i,e)}:document.onmousemove=function(t){t.preventDefault();var e=(t=t||window.event).clientX-a;h.move(n,o,i,e)}},stopMoving:function(t,e){c?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(l+"-dragged")&&(t.classList.remove(l+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}};return r.setSetting=function(t,e,n){r.children[t][e]=n},r.getSetting=function(t,e){return r.children[t][e]},r.destroy=function(){g(document.querySelectorAll("."+l+"-wrapper"),function(t,e){t.remove()}),g(document.querySelectorAll("."+l),function(t,e){t.remove()}),document.removeEventListener(l+"-opened",{},!1),document.removeEventListener(l+"-opening",{},!1),document.removeEventListener(l+"-closing",{},!1),document.removeEventListener(l+"-closed",{},!1),document.removeEventListener("keyup",{},!1),p={}},r.settings=function(t){r.destroy(),m=f(m,(p=t)||{})},g({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},function(n,t){r[t]=function(t){var e=f(p,t||{});e=f(n,e||{}),this.show(e)}}),r.progress=function(t,e,n){var o=this,i=e.getAttribute("data-iziToast-ref"),s=f(this.children[i],t||{}),a=e.querySelector("."+l+"-progressbar div");return{start:function(){void 0===s.time.REMAINING&&(e.classList.remove(l+"-reseted"),null!==a&&(a.style.transition="width "+s.timeout+"ms "+s.progressBarEasing,a.style.width="0%"),s.time.START=(new Date).getTime(),s.time.END=s.time.START+s.timeout,s.time.TIMER=setTimeout(function(){clearTimeout(s.time.TIMER),e.classList.contains(l+"-closing")||(o.hide(s,e,"timeout"),"function"==typeof n&&n.apply(o))},s.timeout),o.setSetting(i,"time",s.time))},pause:function(){if(void 0!==s.time.START&&!e.classList.contains(l+"-paused")&&!e.classList.contains(l+"-reseted")){if(e.classList.add(l+"-paused"),s.time.REMAINING=s.time.END-(new Date).getTime(),clearTimeout(s.time.TIMER),o.setSetting(i,"time",s.time),null!==a){var t=window.getComputedStyle(a).getPropertyValue("width");a.style.transition="none",a.style.width=t}"function"==typeof n&&setTimeout(function(){n.apply(o)},10)}},resume:function(){void 0!==s.time.REMAINING?(e.classList.remove(l+"-paused"),null!==a&&(a.style.transition="width "+s.time.REMAINING+"ms "+s.progressBarEasing,a.style.width="0%"),s.time.END=(new Date).getTime()+s.time.REMAINING,s.time.TIMER=setTimeout(function(){clearTimeout(s.time.TIMER),e.classList.contains(l+"-closing")||(o.hide(s,e,"timeout"),"function"==typeof n&&n.apply(o))},s.time.REMAINING),o.setSetting(i,"time",s.time)):this.start()},reset:function(){clearTimeout(s.time.TIMER),delete s.time.REMAINING,o.setSetting(i,"time",s.time),e.classList.add(l+"-reseted"),e.classList.remove(l+"-paused"),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof n&&setTimeout(function(){n.apply(o)},10)}}},r.hide=function(t,e,n){var o=this,i=f(this.children[e.getAttribute("data-iziToast-ref")],t||{});i.closedBy=n||null,delete i.time.REMAINING,"object"!=typeof e&&(e=document.querySelector(e)),e.classList.add(l+"-closing"),function(){var t=document.querySelector("."+l+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),n=(e=e.split(",")).indexOf(String(i.ref));-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),(i.transitionIn||i.transitionInMobile)&&(e.classList.remove(i.transitionIn),e.classList.remove(i.transitionInMobile)),d||window.innerWidth<=u?i.transitionOutMobile&&e.classList.add(i.transitionOutMobile):i.transitionOut&&e.classList.add(i.transitionOut);var s=e.parentNode.offsetHeight;e.parentNode.style.height=s+"px",e.style.pointerEvents="none",(!d||window.innerWidth>u)&&(e.parentNode.style.transitionDelay="0.2s");try{var a=new CustomEvent(l+"-closing",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(a)}catch(t){console.warn(t)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout(function(){delete o.children[i.ref],e.parentNode.remove();try{var t=new CustomEvent(l+"-closed",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}void 0!==i.onClosed&&i.onClosed.apply(null,[i,e,n])},1e3)},200),void 0!==i.onClosing&&i.onClosing.apply(null,[i,e,n])},r.show=function(t){var i=this,s=f(p,t||{});if((s=f(m,s)).time={},s.toastOnce&&s.id&&0<document.querySelectorAll("."+l+"#"+s.id).length)return!1;s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),r.children[s.ref]=s;var o,a={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),icon:document.createElement("i"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),wrapper:null};a.toast.setAttribute("data-iziToast-ref",s.ref),a.toast.appendChild(a.toastBody),a.toastCapsule.appendChild(a.toast),function(){if(a.toast.classList.add(l),a.toast.classList.add(l+"-opening"),a.toastCapsule.classList.add(l+"-capsule"),a.toastBody.classList.add(l+"-body"),a.toastTexts.classList.add(l+"-texts"),d||window.innerWidth<=u?s.transitionInMobile&&a.toast.classList.add(s.transitionInMobile):s.transitionIn&&a.toast.classList.add(s.transitionIn),s.class){var t=s.class.split(" ");g(t,function(t,e){a.toast.classList.add(t)})}var e;s.id&&(a.toast.id=s.id),s.rtl&&(a.toast.classList.add(l+"-rtl"),a.toast.setAttribute("dir","rtl")),1<s.layout&&a.toast.classList.add(l+"-layout"+s.layout),s.balloon&&a.toast.classList.add(l+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?a.toast.style.maxWidth=s.maxWidth:a.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||a.toast.classList.add(l+"-theme-"+s.theme),s.color&&("#"==(e=s.color).substring(0,1)||"rgb"==e.substring(0,3)||"hsl"==e.substring(0,3)?a.toast.style.background=s.color:a.toast.classList.add(l+"-color-"+s.color)),s.backgroundColor&&(a.toast.style.background=s.backgroundColor,s.balloon&&(a.toast.style.borderColor=s.backgroundColor))}(),s.image&&(a.cover.classList.add(l+"-cover"),a.cover.style.width=s.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(s.image.replace(/ /g,""))?a.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":a.cover.style.backgroundImage="url("+s.image+")",s.rtl?a.toastBody.style.marginRight=s.imageWidth+10+"px":a.toastBody.style.marginLeft=s.imageWidth+10+"px",a.toast.appendChild(a.cover)),s.close?(a.buttonClose=document.createElement("button"),a.buttonClose.classList.add(l+"-close"),a.buttonClose.addEventListener("click",function(t){t.target,i.hide(s,a.toast,"button")}),a.toast.appendChild(a.buttonClose)):s.rtl?a.toast.style.paddingLeft="18px":a.toast.style.paddingRight="18px",s.progressBar&&(a.progressBar=document.createElement("div"),a.progressBarDiv=document.createElement("div"),a.progressBar.classList.add(l+"-progressbar"),a.progressBarDiv.style.background=s.progressBarColor,a.progressBar.appendChild(a.progressBarDiv),a.toast.appendChild(a.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(a.toast.addEventListener("mouseenter",function(t){i.progress(s,a.toast).pause()}),a.toast.addEventListener("mouseleave",function(t){i.progress(s,a.toast).resume()})),s.resetOnHover&&(a.toast.addEventListener("mouseenter",function(t){i.progress(s,a.toast).reset()}),a.toast.addEventListener("mouseleave",function(t){i.progress(s,a.toast).start()}))),s.icon&&(a.icon.setAttribute("class",l+"-icon "+s.icon),s.iconText&&a.icon.appendChild(document.createTextNode(s.iconText)),s.rtl?a.toastBody.style.paddingRight="33px":a.toastBody.style.paddingLeft="33px",s.iconColor&&(a.icon.style.color=s.iconColor),a.toastBody.appendChild(a.icon)),0<s.title.length&&(a.strong=document.createElement("strong"),a.strong.classList.add(l+"-title"),a.strong.appendChild(v(s.title)),a.toastTexts.appendChild(a.strong),s.titleColor&&(a.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?a.strong.style.fontSize=s.titleSize:a.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?a.strong.style.lineHeight=s.titleLineHeight:a.strong.style.lineHeight=s.titleLineHeight+"px")),0<s.message.length&&(a.p=document.createElement("p"),a.p.classList.add(l+"-message"),a.p.appendChild(v(s.message)),a.toastTexts.appendChild(a.p),s.messageColor&&(a.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?a.p.style.fontSize=s.messageSize:a.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?a.p.style.lineHeight=s.messageLineHeight:a.p.style.lineHeight=s.messageLineHeight+"px")),0<s.title.length&&0<s.message.length&&(s.rtl?a.strong.style.marginLeft="10px":2===s.layout||s.rtl||(a.strong.style.marginRight="10px")),a.toastBody.appendChild(a.toastTexts),0<s.inputs.length&&(a.inputs.classList.add(l+"-inputs"),g(s.inputs,function(e,t){a.inputs.appendChild(v(e[0])),(o=a.inputs.childNodes)[t].classList.add(l+"-inputs-child"),e[3]&&setTimeout(function(){o[t].focus()},300),o[t].addEventListener(e[1],function(t){return(0,e[2])(i,a.toast,this,t)})}),a.toastBody.appendChild(a.inputs)),0<s.buttons.length&&(a.buttons.classList.add(l+"-buttons"),g(s.buttons,function(e,t){a.buttons.appendChild(v(e[0]));var n=a.buttons.childNodes;n[t].classList.add(l+"-buttons-child"),e[2]&&setTimeout(function(){n[t].focus()},300),n[t].addEventListener("click",function(t){return t.preventDefault(),(0,e[1])(i,a.toast,this,t,o)})})),a.toastBody.appendChild(a.buttons),0<s.message.length&&(0<s.inputs.length||0<s.buttons.length)&&(a.p.style.marginBottom="0"),(0<s.inputs.length||0<s.buttons.length)&&(s.rtl?a.toastTexts.style.marginLeft="10px":a.toastTexts.style.marginRight="10px",0<s.inputs.length&&0<s.buttons.length&&(s.rtl?a.inputs.style.marginLeft="8px":a.inputs.style.marginRight="8px")),a.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=a.toast.offsetHeight,e=a.toast.currentStyle||window.getComputedStyle(a.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var o=e.marginBottom;o=o.split("px"),o=parseInt(o[0]),a.toastCapsule.style.visibility="",a.toastCapsule.style.height=t+o+n+"px",setTimeout(function(){a.toastCapsule.style.height="auto",s.target&&(a.toastCapsule.style.overflow="visible")},500),s.timeout&&i.progress(s,a.toast).start()},100),function(){var t=s.position;if(s.target)a.wrapper=document.querySelector(s.target),a.wrapper.classList.add(l+"-target"),s.targetFirst?a.wrapper.insertBefore(a.toastCapsule,a.wrapper.firstChild):a.wrapper.appendChild(a.toastCapsule);else{if(-1==n.indexOf(s.position))return console.warn("["+l+"] Incorrect position.\nIt can be › "+n);t=d||window.innerWidth<=u?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?l+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?l+"-wrapper-topCenter":l+"-wrapper-center":l+"-wrapper-"+t,a.wrapper=document.querySelector("."+l+"-wrapper."+t),a.wrapper||(a.wrapper=document.createElement("div"),a.wrapper.classList.add(l+"-wrapper"),a.wrapper.classList.add(t),document.body.appendChild(a.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?a.wrapper.insertBefore(a.toastCapsule,a.wrapper.firstChild):a.wrapper.appendChild(a.toastCapsule)}isNaN(s.zindex)?console.warn("["+l+"] Invalid zIndex."):a.wrapper.style.zIndex=s.zindex}(),s.overlay&&(null!==document.querySelector("."+l+"-overlay.fadeIn")?(a.overlay=document.querySelector("."+l+"-overlay"),a.overlay.setAttribute("data-iziToast-ref",a.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(a.overlay.style.zIndex=s.zindex-1)):(a.overlay.classList.add(l+"-overlay"),a.overlay.classList.add("fadeIn"),a.overlay.style.background=s.overlayColor,a.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(a.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(a.overlay)),s.overlayClose?(a.overlay.removeEventListener("click",{}),a.overlay.addEventListener("click",function(t){i.hide(s,a.toast,"overlay")})):a.overlay.removeEventListener("click",{})),function(){if(s.animateInside){a.toast.classList.add(l+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),0<s.title.length&&setTimeout(function(){a.strong.classList.add("slideIn")},t[0]),0<s.message.length&&setTimeout(function(){a.p.classList.add("slideIn")},t[1]),s.icon&&setTimeout(function(){a.icon.classList.add("revealIn")},t[2]);var n=150;0<s.buttons.length&&a.buttons&&setTimeout(function(){g(a.buttons.childNodes,function(t,e){setTimeout(function(){t.classList.add("revealIn")},n),n+=150})},0<s.inputs.length?150:0),0<s.inputs.length&&a.inputs&&(n=150,g(a.inputs.childNodes,function(t,e){setTimeout(function(){t.classList.add("revealIn")},n),n+=150}))}}(),s.onOpening.apply(null,[s,a.toast]);try{var e=new CustomEvent(l+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(e)}catch(t){console.warn(t)}setTimeout(function(){a.toast.classList.remove(l+"-opening"),a.toast.classList.add(l+"-opened");try{var t=new CustomEvent(l+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}s.onOpened.apply(null,[s,a.toast])},1e3),s.drag&&(c?(a.toast.addEventListener("touchstart",function(t){h.startMoving(this,i,s,t)},!1),a.toast.addEventListener("touchend",function(t){h.stopMoving(this,t)},!1)):(a.toast.addEventListener("mousedown",function(t){t.preventDefault(),h.startMoving(this,i,s,t)},!1),a.toast.addEventListener("mouseup",function(t){t.preventDefault(),h.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){27==(t=t||window.event).keyCode&&i.hide(s,a.toast,"esc")}),s.closeOnClick&&a.toast.addEventListener("click",function(t){i.hide(s,a.toast,"toast")}),i.toast=a.toast},r}),$(document).ready(function(){var t=!1;$(".burger").click(function(){t?($(".navbar-menu").removeClass("is-active"),$(this).removeClass("is-active"),$(".exitInfo").hide()):($(this).addClass("is-active"),$(".navbar-menu").addClass("is-active"),$(".exitInfo").show()),t=!t}),$(".collapsible-head").click(function(){var t=$(this).parent(".collapsible").children(".collapsible-body");"none"==t.css("display")?(t.slideDown(),$(this).children(".card-header-icon").children(".icon").fadeOut("slow",function(){$(this).html('<i class="fas fa-angle-up"></i>').fadeIn()})):(t.slideUp(),$(this).children(".card-header-icon").children(".icon").fadeOut("slow",function(){$(this).html('<i class="fas fa-angle-down"></i>').fadeIn()}))})});