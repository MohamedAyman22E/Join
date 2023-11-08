// header in navbar
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

let btn_about = document.querySelectorAll(".btn-about span");
let btn_content_item = document.querySelectorAll(".btn-content-item");
btn_about.forEach((e, index) => {
  e.addEventListener("click", () => {
    btn_about.forEach(ele => {
      btn_content_item.forEach(content => (content.style.display = "none"));
      btn_content_item[index].style.display = "block";

      ele.classList.remove("active");
    });
    e.classList.add("active");
  });
});
// change links in navbar

let links = document.querySelectorAll("header .left  ul li a");
let section = document.querySelectorAll("section");
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      document
        .querySelector("header .left  ul li a[href*=" + id + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector("header .left  ul li a[href*=" + id + "]")
        .classList.remove("active-link");
    }
  });
};

// submit in contact

let buttonSu = document.querySelector(".button-contact input");
let headingSub = document.querySelector(".under-submit");
let correct = document.querySelector(".form-heading i");

buttonSu.addEventListener("click", () => {
  setInterval(() => {
    headingSub.innerHTML = " message sent";
    headingSub.classList.add("active");
    correct.classList.add("activeI");
  }, 2000);
});

let menuIcon = document.querySelector(".menu-icon");
let menuIconI = document.querySelector(".menu-icon i");
let navList = document.querySelector(" header .left ul");
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (menuIconI.classList.contains("fa-bars")) {
    menuIconI.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIconI.classList.replace("fa-xmark", "fa-bars");
  }
});
