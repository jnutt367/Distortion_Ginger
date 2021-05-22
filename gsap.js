gsap.fromTo("body", { scale: 0 }, { duration: 3, scale: 2, x: 0, backgroundColor: "black" })
gsap.to("body", { duration: 5, x: -100, scale: 0.5, opacity: 1, position: "relative", Zindex: 2 }, 2)
gsap.to("p", { float: "left", marginRight: "500", color: "orange" })

const square = document.querySelector('div');

document.addEventListener('mousemove', (e) => {
    square.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
})