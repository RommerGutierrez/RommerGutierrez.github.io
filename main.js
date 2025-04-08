const btn = document.querySelector(".btn_ver")
const menu = document.querySelector(".menu-nav")

btn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
})