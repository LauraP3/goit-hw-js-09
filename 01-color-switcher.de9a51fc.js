const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",n),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.startBtn.addEventListener("click",n),t.stopBtn.disabled=!0}));let e=null;function n(){e=setInterval(a,1e3),t.stopBtn.disabled=!1,t.startBtn.disabled=!0,t.startBtn.removeEventListener("click",n)}function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.stopBtn.disabled=!0;
//# sourceMappingURL=01-color-switcher.de9a51fc.js.map
