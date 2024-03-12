AOS.init({
  // Global settings:
  disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of data-aos as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by data-aos-* attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const burger = document.querySelector(".burgerBox");
const burgerLine1 = document.querySelector("#burgerLine1");
const burgerLine2 = document.querySelector("#burgerLine2");
const burgerLine3 = document.querySelector("#burgerLine3");

const mob_nav_bg = document.querySelector(".mob_nav_bg");
const mob_nav_content = document.querySelector(".mob_nav_content");

// const mob_navLi = document.querySelectorAll("#mob_navLi");
// const mob_nav_btn = document.querySelector(".mob_nav_btn");

const logoBox = document.querySelector(".logoBox");

logoBox.onclick = () => {
  location.href = "index.html";
};

burger.onclick = () => {
  burger.classList.toggle("active");
  burgerLine1.classList.toggle("active");
  burgerLine2.classList.toggle("active");
  burgerLine3.classList.toggle("active");

  mob_nav_bg.classList.toggle("active");
  mob_nav_content.classList.toggle("active");
};

// for (let i = 0; i < mob_navLi.length; i++) {
//   const mob_navLink = mob_navLi[i];
//   mob_navLink.addEventListener("click", () => {
//     burger.classList.remove("active");
//     burgerLine1.classList.remove("active");
//     burgerLine2.classList.remove("active");
//     burgerLine3.classList.remove("active");

//     mob_nav_bg.classList.remove("active");
//     mob_nav_content.classList.remove("active");
//   });
// }

// mob_nav_btn.onclick = () => {
//   burger.classList.remove("active");
//   burgerLine1.classList.remove("active");
//   burgerLine2.classList.remove("active");
//   burgerLine3.classList.remove("active");

//   mob_nav_bg.classList.remove("active");
//   mob_nav_content.classList.remove("active");
// };

window.addEventListener("scroll", function closedMobNav() {
  if (window.pageYOffset > 3) {
    burger.classList.remove("active");
    burgerLine1.classList.remove("active");
    burgerLine2.classList.remove("active");
    burgerLine3.classList.remove("active");

    mob_nav_bg.classList.remove("active");
    mob_nav_content.classList.remove("active");
  }
});

var number = document.querySelector(".number"),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML,
  end = +number.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", onScroll);
    var interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
        number.innerHTML = "31 000+";
      }
    }, 2);
  }
});

var number1 = document.querySelector(".number1"),
  number1Top = number1.getBoundingClientRect().top,
  start1 = +number1.innerHTML,
  end1 = +number1.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number1Top - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", onScroll);
    var interval1 = setInterval(function () {
      number1.innerHTML = ++start1;
      if (start1 == end1) {
        clearInterval(interval1);
        number1.innerHTML = "25+";
      }
    }, 100);
  }
});

var number2 = document.querySelector(".number2"),
  number2Top = number2.getBoundingClientRect().top,
  start2 = +number2.innerHTML,
  end2 = +number2.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number2Top - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", onScroll);
    var interval2 = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval2);
        number2.innerHTML = "45 320+";
      }
    }, 5);
  }
});

// FORM
const companyName = document.getElementById("companyName");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const from = document.getElementById("from");
const to = document.getElementById("to");
const about = document.getElementById("about");
const comment = document.getElementById("comment");
const checkbox = document.getElementById("checkbox");

let companyNameInput = "";
let emailInput = "";
let telInput = "";
let fromInput = "";
let toInput = "";
let aboutInput = "";
let commentInput = "";
let checkboxInput = "";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
});

// const form = $("#form");
// form.on("submit", function (e) {
//   e.preventDefault();

//   alert("Whooo!");

//   $.ajax({
//     type: "POST",
//     url: "/sendmail.php",
//     data: $("#form").serialize(),
//     success: function (data) {
//       companyNameInput = companyName.value;
//       emailInput = email.value;
//       telInput = tel.value;
//       fromInput = from.value;
//       toInput = to.value;
//       aboutInput = about.value;
//       commentInput = comment.value;
//       checkboxInput = checkbox.value;
//     },
//     error: function (data) {
//       console.log(data);
//     },
//     dataType: "json",
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("#form");
//   form.addEventListener("submit", formSend);
// });

const btn_submit = document.querySelector(".btn_submit");

function formSend(e) {
  e.preventDefault();

  blackBack.classList.add("active");
  body.style = "overflow: hidden;";

  $.ajax({
    type: "POST",
    url: "/sendmail.php",
    data: $("#form").serialize(),
    success: function (data) {
      companyNameInput = companyName.value;
      emailInput = email.value;
      telInput = tel.value;
      fromInput = from.value;
      toInput = to.value;
      aboutInput = about.value;
      commentInput = comment.value;
      checkboxInput = checkbox.value;

      console.log(data);
    },
    error: function (data) {
      console.log(data);
    },
    dataType: "json",
  });
}

// THANKS FORM
let langLinkCZ = document.querySelector(".langLinkCZ");
let langLinkCZMob = document.querySelector(".langLinkCZMob");
let blackBack = document.querySelector(".blackBack");
let thanksX = document.querySelector(".thanksX");
let body = document.querySelector("body");

langLinkCZ.onclick = () => {
  location.href = "/cz.html";
};
langLinkCZMob.onclick = () => {
  location.href = "/cz.html";
};
thanksX.onclick = () => {
  blackBack.classList.remove("active");
  body.style = "overflow: scroll;";
};
