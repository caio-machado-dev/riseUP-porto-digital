let html = document.querySelector("html");
let contrasteBtn = document.querySelector("#contraste-btn");

contrasteBtn.addEventListener("click", () => {
  html.classList.toggle("dark-mode");
})

if (navigator.userAgent.indexOf('iPhone') > -1 ) {
    document.querySelector("[name=viewport]").setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1");
}