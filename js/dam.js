const toggleBtn = document.querySelector(".filter-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const cortina = document.querySelector(".curtain");

toggleBtn.addEventListener("click", ()=>{
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
        cortina.classList.remove("show-curtain");
    } else {
        sidebar.classList.add("show-sidebar");
        cortina.classList.add("show-curtain");
    }
})

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
    cortina.classList.remove("show-curtain");
})

cortina.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
    cortina.classList.remove("show-curtain");
})