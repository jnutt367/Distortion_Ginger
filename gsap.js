const square = document.querySelector('div');

document.addEventListener('mousemove', (e) => {
    square.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
})