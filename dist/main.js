(()=>{"use strict";class e{constructor(e,t){this.goblin=e,this.field=t}getZone(){this.field[Math.floor(Math.random()*this.field.length)].appendChild(this.goblin)}getNextzone(){document.querySelector(".img").closest(".zone")!==this.field[Math.floor(Math.random()*this.field.length)]?setInterval((()=>{this.getZone()}),1e3):this.getNextzone()}}document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.createElement("div");t.className="field";const n=document.createElement("section");t.appendChild(n);for(let e=0;e<16;e++){const e=document.createElement("div");e.className="zone",n.appendChild(e)}const o=document.createElement("img");o.alt="goblin",o.className="img",o.src="/src/img/goblin.png",document.body.appendChild(o),document.body.appendChild(t);const d=new e(document.querySelector(".img"),document.querySelectorAll(".zone"));d.getZone(),d.getNextzone()}()}))})();