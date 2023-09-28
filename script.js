gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "body",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 1,
        pin: true
    }
})