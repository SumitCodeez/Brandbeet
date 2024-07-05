function loadingAnimation() {
  var tl = gsap.timeline();
  var h1 = document.querySelectorAll("#loader h1");

  h1.forEach(function (elem) {
    tl.from(elem, {
      opacity: 0,
      // duration: 0.6,
    });
    tl.to(elem, {
      opacity: 0,
      duration: 0.05,
    });
  });
  tl.to("#loader", {
    y: -1000,
    ease: "Power4.inOut",
    duration: 1,
  });
}
loadingAnimation();

function navAnim() {
  var heading1 = document.querySelector("#left");
  var head1 = document.querySelector(".head1-1");
  var head2 = document.querySelector(".head1-2");

  heading1.addEventListener("mouseenter", function () {
    gsap.to(head1, {
      y: -100,
      duration: 0.5,
    });
    gsap.to(head2, {
      y: -22,
      duration: 0.5,
    });
  });

  heading1.addEventListener("mouseleave", function () {
    gsap.to(head1, {
      y: 0,
      duration: 0.5,
    });
    gsap.to(head2, {
      y: 120,
      duration: 0.5,
    });
  });
  var heading2 = document.querySelector("#right");
  var head3 = document.querySelector(".head2-1");
  var head4 = document.querySelector(".head2-2");

  heading2.addEventListener("mouseenter", function () {
    gsap.to(head3, {
      y: -100,
      duration: 0.5,
    });
    gsap.to(head4, {
      y: -24,
      duration: 0.5,
    });
  });

  heading2.addEventListener("mouseleave", function () {
    gsap.to(head3, {
      y: 0,
      duration: 0.5,
    });
    gsap.to(head4, {
      y: 120,
      duration: 0.5,
    });
  });
}
navAnim();

function scrollAnimation() {
  var startTrigger = "50% 50%";
  var endTrigger = "220% 50%";

  if (window.innerWidth <= 600) {
    startTrigger = "top top";
    endTrigger = "bottom top";
  }

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-1",
      start: startTrigger,
      end: endTrigger,
      scrub: true,
      pin: true,
    },
  });

  tl.to(
    ".rotate-part",
    {
      rotate: -15,
      scale: 0.8,
    },
    "a"
  );
  tl.to(
    "#col-2",
    {
      marginTop: "2%",
    },
    "a"
  );
  tl.to(
    "#col-3",
    {
      marginTop: "-3%",
    },
    "a"
  );
  tl.to(
    "#col-4",
    {
      marginTop: "-4%",
    },
    "a"
  );
  tl.to(
    "#col-5",
    {
      marginTop: "-13%",
    },
    "a"
  );
  tl.to(
    ".overlay-div h1",
    {
      opacity: 1,
      delay: 0.2,
    },
    "a"
  );
  tl.to(
    ".overlay-div",
    {
      backgroundColor: "#000000b4",
    },
    "a"
  );
  tl.to(
    ".scrolling",
    {
      width: "100%",
    },
    "a"
  );
}
scrollAnimation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-2",
      start: "10% 80%",
      end: "100% 90%",
      scrub: true,
    },
  });

  tl2.to(".rounded-div-wrapper", {
    height: 0,
    marginTop: 0,
    delay: 0.1,
  });
}
page2Animation();

function revealingAnimation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-2",
      start: "40% 50%",
      end: "100% 50%",
      scrub: true,
    },
  });

  tl3.to(
    "#text-content-over .left1",
    {
      width: "100%",
    },
    "b"
  );
  tl3.to(
    "#text-content-over .right1",
    {
      width: "100%",
      delay: 0.2,
    },
    "b"
  );
}
revealingAnimation();

function rightpinAnimation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-4",
      start: "50% 50%",
      end: "200% 50%",
      scrub: true,
      pin: true,
    },
  });
  tl4.to(
    ".c-one",
    {
      marginTop: "-25%",
      opacity: 1,
    },
    "one"
  );
  tl4.to(
    ".c-two",
    {
      opacity: 1,
    },
    "two"
  );
  tl4.to(
    ".c-one",
    {
      opacity: 0,
      marginTop: "-100%",
    },
    "two"
  );
  tl4.to(
    ".c-three",
    {
      opacity: 1,
    },
    "three"
  );
  tl4.to(
    ".c-two",
    {
      opacity: 0,
    },
    "three"
  );
  tl4.to(
    ".c-one",
    {
      marginTop: "-180%",
    },
    "three"
  );
  tl4.to(
    ".c-four",
    {
      opacity: 1,
    },
    "four"
  );
  tl4.to(
    ".c-three",
    {
      opacity: 0,
    },
    "four"
  );
  tl4.to(
    ".c-one",
    {
      marginTop: "-240%",
    },
    "four"
  );
  tl4.to(
    ".c-five",
    {
      opacity: 1,
    },
    "five"
  );
  tl4.to(
    ".c-four",
    {
      opacity: 0,
    },
    "five"
  );
  tl4.to(
    ".c-one",
    {
      marginTop: "-300%",
    },
    "five"
  );
  tl4.to(
    ".c-six",
    {
      opacity: 1,
    },
    "six"
  );
  tl4.to(
    ".c-five",
    {
      opacity: 0,
    },
    "six"
  );
  tl4.to(
    ".c-one",
    {
      marginTop: "-390%",
    },
    "six"
  );
  tl4.to(
    ".c-one",
    {
      marginTop: "-440%",
    },
    "seven"
  );
  tl4.to(
    ".c-six",
    {
      opacity: 0,
    },
    "seven"
  );
  tl4.to(
    ".circle-div",
    {
      marginLeft: "88%",
      rotate: 360,
      ease: "Power4inOut",
    },
    "seven"
  );
}
rightpinAnimation();

function imgRotate() {
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-4",
      start: "50% 50%",
      end: "220% 50%",
      scrub: true,
    },
  });

  tl5.to(".circle-div img", {
    rotate: 720,
  });
}
imgRotate();

function revealingAnimation5() {
  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-5",
      start: "30% 50%",
      end: "100% 50%",
      scrub: true,
    },
  });

  tl6.to(
    "#text-content-over-1 .left-6",
    {
      width: "100%",
    },
    "z"
  );
  tl6.to(
    "#text-content-over-1 .right-6",
    {
      width: "100%",
      delay: 0.2,
    },
    "z"
  );
}
revealingAnimation5();

function page5Animation() {
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-5",
      start: "160% 80%",
      end: "240% 80%",
      scrub: true,
    },
  });

  tl7.to(".inner-div", {
    height: 0,
    marginTop: 0,
  });
}
page5Animation();

function revealingAnimation6() {
  var tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-6",
      start: "30% 50%",
      end: "100% 50%",
      scrub: true,
    },
  });

  tl8.to(
    "#text-content-over-2 .one-2",
    {
      width: "100%",
    },
    "r"
  );
  tl8.to(
    "#text-content-over-2 .two-2",
    {
      width: "100%",
      delay: 0.2,
    },
    "r"
  );
}
revealingAnimation6();

function workAnimation() {
  var tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-8",
      start: "50% 50%",
      end: "200% 50%",
      scrub: true,
      pin: true,
    },
  });
  tl9.to(".demo", {
    top: "80%",
  });
  tl9.to(
    "#page-8 .up",
    {
      top: "15%",
      left: "19%",
    },
    "s+=0.01"
  );
  tl9.to(
    "#page-8 .low",
    {
      top: "60%",
      left: "71%",
    },
    "s+=0.01"
  );
  tl9.to(
    ".center-scroll-div",
    {
      height: "48%",
    },
    "s+=0.01"
  );
  tl9.to(".center-scroll-div img", {
    y: -2490,
  });
}
workAnimation();

function buttonAnimation() {
  let heading = document.querySelector(".first-btn");
  let head1 = document.querySelector(".head-1-1");
  let head2 = document.querySelector(".head-2-1");

  heading.addEventListener("mouseenter", function () {
    gsap.to(head1, {
      y: -140,
      duration: 0.6,
    });
    gsap.to(head2, {
      y: -25,
      duration: 0.8,
      opacity: 1,
    });
  });

  heading.addEventListener("mouseleave", function () {
    gsap.to(head1, {
      y: -5,
      duration: 0.6,
    });
    gsap.to(head2, {
      y: 140,
      duration: 0.8,
    });
  });
  let head = document.querySelector(".second-btn");
  let head3 = document.querySelector(".head-1-2");
  let head4 = document.querySelector(".head-2-2");

  head.addEventListener("mouseenter", function () {
    gsap.to(head3, {
      y: -140,
      duration: 0.6,
    });
    gsap.to(head4, {
      y: -25,
      duration: 0.8,
      opacity: 1,
    });
  });

  head.addEventListener("mouseleave", function () {
    gsap.to(head3, {
      y: -5,
      duration: 0.6,
    });
    gsap.to(head4, {
      y: 140,
      duration: 0.8,
    });
  });
}
buttonAnimation();

function buttonAnimation2() {
  let heading1 = document.querySelectorAll(".hover");
  let firsth1 = document.querySelectorAll(".firsth1");
  let secondh1 = document.querySelectorAll(".secondh1");

  heading1.forEach(function (e, index) {
    let currentFirstH1 = firsth1[index];
    let currentSecondH1 = secondh1[index];
    e.addEventListener("mouseenter", function () {
      gsap.to(currentFirstH1, {
        y: -140,
        duration: 0.6,
      });
      gsap.to(currentSecondH1, {
        y: -28,
        duration: 0.8,
        opacity: 1,
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to(currentFirstH1, {
        y: -8,
        duration: 0.6,
      });
      gsap.to(currentSecondH1, {
        y: 140,
        duration: 0.8,
      });
    });
  });
}
buttonAnimation2();

function bookAnimation() {
  let header = document.querySelector(".demo-2");
  let uph1 = document.querySelector(".uph1");
  let lowh1 = document.querySelector(".lowh1");

  header.addEventListener("mouseenter", function () {
    gsap.to(uph1, {
      y: -140,
      duration: 0.6,
    });
    gsap.to(lowh1, {
      y: -25,
      duration: 0.8,
      opacity: 1,
    });
  });

  header.addEventListener("mouseleave", function () {
    gsap.to(uph1, {
      y: -5,
      duration: 0.6,
    });
    gsap.to(lowh1, {
      y: 140,
      duration: 0.8,
    });
  });
}
bookAnimation();
function footerButton() {
  let header2 = document.querySelector(".demo-3");
  let uph3 = document.querySelector(".uph3");
  let lowh3 = document.querySelector(".lowh3");

  header2.addEventListener("mouseenter", function () {
    gsap.to(uph3, {
      y: -140,
      duration: 0.6,
    });
    gsap.to(lowh3, {
      y: -25,
      duration: 0.8,
      opacity: 1,
    });
  });

  header2.addEventListener("mouseleave", function () {
    gsap.to(uph3, {
      y: -5,
      duration: 0.6,
    });
    gsap.to(lowh3, {
      y: 140,
      duration: 0.8,
    });
  });
}
footerButton();

function sheryAnimation() {
  Shery.makeMagnet(".first-btn");
  Shery.makeMagnet(".second-btn");
  Shery.makeMagnet(".hover");
  Shery.makeMagnet(".demo-2");
  Shery.makeMagnet(".demo-3");
}
sheryAnimation();
