!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e){window.onYouTubeIframeAPIReady=function(){window.player=new YT.Player("player",{videoId:"m6KOg9leyJU",playerVars:{autoplay:1,controls:0,loop:1,cc_load_policy:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1},events:{onReady:initVideo}})},initVideo=t=>{t.target.setVolume(30),t.target.playVideo()}},function(t,e,n){"use strict";n.r(e);n.p,n(0),n(1),n(2),n(3);n(4);var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a=function(){function t(t,e,n){var a=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.5",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){a.startTime||(a.startTime=t);var e=t-a.startTime;a.remaining=a.duration-e,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(e,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(e,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(e/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(e/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Math.round(a.frameVal*a.decimalMult)/a.decimalMult,a.printValue(a.frameVal),e<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var e,n,i,s,r,o=t<0?"-":"";if(e=Math.abs(t).toFixed(a.options.decimalPlaces),i=(n=(e+="").split("."))[0],s=n.length>1?a.options.decimal+n[1]:"",a.options.useGrouping){r="";for(var l=0,u=i.length;l<u;++l)0!==l&&l%3==0&&(r=a.options.separator+r),r=i[u-l-1]+r;i=r}return a.options.numerals&&a.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),o+a.options.prefix+i+s+a.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),s=[2,138,240,5];window.onload=()=>{let t=document.querySelector("div.nav"),e=document.getElementById("nav"),n=document.getElementById("marker"),i=e.querySelectorAll("a");i.forEach(t=>t.addEventListener("click",()=>{n.style.width=`${t.offsetWidth}px`,n.style.left=`${t.offsetLeft}px`})),i[0].click();let r=[],o=document.getElementById("portfolio");o.querySelectorAll(".countup").forEach((t,e)=>{r.push(new a(t,s[e]))}),window.addEventListener("scroll",e=>{if(function(t,e=null){return(e=e||t.getBoundingClientRect()).top>=0&&e.bottom-2*e.height/3<=document.documentElement.clientHeight}(o.children[0])){r.forEach(t=>t.start())}(document.documentElement.scrollTop-50>t.clientHeight&&!t.classList.contains("bg-black")||document.documentElement.scrollTop-50<t.clientHeight&&t.classList.contains("bg-black"))&&(t.classList.toggle("bg-black"),t.classList.toggle("py-2"))}),function(t=6e3,e=0){let n,i,a,s,r,o,l,u;function c(t,e){return e=("<"==(t=t.trim())?--e:">"==t?++e:e)%i,n.scrollLeft=e*n.clientWidth,e>=0?e:0}function d(){a.children[e].classList.remove("button-active"),e=c(s,e),a.style.right=`-${100*e}%`,a.children[e].classList.add("button-active")}function h(n=!1){clearInterval(o),a.children[r].classList.remove("button-active"),e=n?c(s,e):e,a.style.right=`-${100*e}%`,a.children[e].classList.add("button-active"),s=">",n=!1,o=setInterval(d,t)}for(n=document.getElementsByClassName("slide")[0],i=n.children.length,a=document.createElement("div"),a.classList.add("buttons-wrapper"),n.appendChild(a),s="",r=0,o=0,u=0;u<i;u++)l=document.createElement("span"),l.id=u,l.classList.add("slide-button"),l.addEventListener("click",(function(t){r=e,e=t.target.id,s="",h(!0)})),a.appendChild(l),n.children[u].addEventListener("click",(function(t){t.stopPropagation(),clearInterval(o),r=e,s=t.target.getBoundingClientRect().left+t.target.clientWidth/2>t.clientX?"<":">",h(!0)})),n.children[u].addEventListener("mouseover",(function(t){t.stopPropagation(),clearInterval(o)})),n.children[u].addEventListener("mouseout",(function(t){t.stopPropagation(),clearInterval(o),h()}));a.children[e].classList.add("button-active"),h(!0)}()}}]);