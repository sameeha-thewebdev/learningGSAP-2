tl = gsap.timeline();

function timer() {
  var a = 0;
  setInterval(() => {
    if (a < 101) {
      a += Math.floor(Math.random() * 20);
      if (a < 101) {
        document.querySelector(".count").innerHTML = `${a}%`;
      } else {
        a = 100;
        document.querySelector(".count").innerHTML = `${a}%`;
      }
    }
  }, 150);
}

tl.to(".count", {
  delay: 0.5,
  duration: 1,
  onStart: timer(),
});

tl.to("#loader", {
  transform: "translateY(-100%)",
  delay: 0.8,
  duration: 1,
});

gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: "body",
    scroller: "body",
    start: "top 0",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});
