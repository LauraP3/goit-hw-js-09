!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",e),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,t.startBtn.addEventListener("click",e),t.stopBtn.disabled=!0}));var n=null;function e(){n=setInterval(a,1e3),t.stopBtn.disabled=!1,t.startBtn.disabled=!0,t.startBtn.removeEventListener("click",e)}function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.c3ca3449.js.map