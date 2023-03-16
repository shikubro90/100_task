// Active Menu Switcher

const navList = document.querySelector(".nav-list");

console.log(navList.classList)
navList.addEventListener("click", (e) => {
    console.log(e.target)
    const navLink = e.target.parentElement;
    console.log(navLink)
  if (navLink.classList.contains("link")) {
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});