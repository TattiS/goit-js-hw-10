import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as y}from"./assets/vendor-Dov3POoy.js";const i=document.querySelector("input#datetime-picker"),t=document.querySelector("[data-start]"),b=document.querySelectorAll(".field .value");let n=null,r=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,closeOnSelect:!0,onClose(e){try{e[0]-new Date<=0?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",color:"#fff"}),t.disabled=!0,n=null):(n=e[0],t.disabled=!1)}catch(o){console.log(o)}}};function v(e){const c=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:f,minutes:m,seconds:h}}function S(e){return String(e).padStart(2,"0")}function d(e={days:0,hours:0,minutes:0,seconds:0}){Object.keys(e).forEach(o=>{const a=[...b].find(s=>s.dataset[o]!==void 0);a.textContent=S(e[o])})}function l(){r&&clearInterval(r),d(),t.disabled=!0,i.disabled=!1}function u(){const e=n-new Date;if(e<=0){l();return}d(v(e))}t.disabled=!0;p(i,g);l();t.addEventListener("click",()=>{n&&(r=setInterval(u,1e3),u(),t.disabled=!0,i.disabled=!0)});
//# sourceMappingURL=1-timer.js.map
