!function(){var t=document.getElementById("btn-prev"),e=document.getElementById("btn-next"),n=document.querySelectorAll(".slide"),l=document.querySelectorAll(".dot"),r=0,i=function(t){!function(t){var e=!0,l=!1,r=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done);e=!0)slide=i.value,slide.classList.remove("active")}catch(t){l=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(l)throw r}}n[t].classList.add("active")}(t),function(t){var e=!0,n=!1,r=void 0;try{for(var i,c=l[Symbol.iterator]();!(e=(i=c.next()).done);e=!0)dot=i.value,dot.classList.remove("active")}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}l[t].classList.add("active")}(t)},c=function(){r==n.length-1?i(r=0):(r++,i(r))};l.forEach((function(t,e){t.addEventListener("click",(function(){i(r=e)}))})),setInterval(c,2500),e.addEventListener("click",c),t.addEventListener("click",(function(){0==r?(n.length,i(r)):(r--,i(r))}))}();
//# sourceMappingURL=index.999ce139.js.map
