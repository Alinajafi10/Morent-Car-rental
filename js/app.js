// for toggler
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

// for like icon
const icon = document.querySelector(".catalog__icon");
const likebtn = document.querySelector(".like-icon");
icon.addEventListener("click", (e) => {
  likebtn.classList.toggle("liked");
});
