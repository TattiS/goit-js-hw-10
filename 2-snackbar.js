import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-Dov3POoy.js";const o=document.querySelector("form"),u=document.querySelector('[name="delay"]');document.querySelector("fieldset");let r=document.querySelector('[name="state"]:checked');const c=(e,t)=>new Promise((n,m)=>{setTimeout(()=>{t==="fulfilled"?n(e):m(e)},e)});o.addEventListener("submit",e=>{e.preventDefault(),r=document.querySelector('[name="state"]:checked'),r!=null?(c(Number.parseInt(u.value),r.value).then(t=>{s.success({message:`Fulfilled promise in ${t}ms`})}).catch(t=>{s.error({message:`Rejected promise in ${t}ms`})}),o.reset()):console.log("Error: stateInput is null")});
//# sourceMappingURL=2-snackbar.js.map
