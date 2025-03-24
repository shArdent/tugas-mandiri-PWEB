const burgerMenu = document.getElementById("burger");
const sideMenu = document.getElementById("sidenav")
const closeBtn = document.getElementById("close-btn")
burgerMenu.addEventListener("click", (e) => {
    e.preventDefault()
    sideMenu.classList.toggle("active");
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    sideMenu.classList.toggle("active")
})

