gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
})
gsap.to(".img-bg1", {
  rotation: 360,
  scrollTrigger: {
    trigger: ".img-bg1",
    start: "top top",
    pinSpacing: false,
    scrub: 2,
  },
})
