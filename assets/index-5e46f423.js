(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let a=null;function l(){const i=window.matchMedia("(max-width: 767px)");a!==null&&a.destroy(),a=new Swiper(".swiper",{direction:"horizontal",loop:!0,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:18,autoplay:!0,autoplaySpeed:4e3,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0,slidesPerView:"auto",speed:400,effect:i.matches?"cube":"slide",cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:10,shadowScale:.7},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}}),a.init()}window.addEventListener("DOMContentLoaded",l);window.addEventListener("resize",l);new Swiper(".swiper-loved",{direction:"horizontal",loop:!1,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0,autoplaySpeed:7500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,spaceBetween:20,slidesPerView:"auto",breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}}});(function(i){typeof i.matches!="function"&&(i.matches=i.msMatchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||function(o){for(var n=this,r=(n.document||n.ownerDocument).querySelectorAll(o),e=0;r[e]&&r[e]!==n;)++e;return Boolean(r[e])}),typeof i.closest!="function"&&(i.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var i=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");i.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+t+'"]');s.classList.add("active"),o.classList.add("active")})}),n.forEach(function(r){r.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{const i=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),i.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(i.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();var d=document.getElementById("made_video"),c=document.getElementById("button-play-video");function u(){d.classList.toggle("hidden"),c.classList.toggle("hidden")}c.addEventListener("click",u);
