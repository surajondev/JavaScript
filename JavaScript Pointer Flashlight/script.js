const pointer = document.querySelector("#pointer");

window.addEventListener("mousemove", (e) => {
  pointer.style = `
    transform: translate(${e.clientX - 50}px, ${e.clientY - 50}px);
  `;
});

window.addEventListener("load", () => {
  pointer.style = `
    transform: translate(-50px, -50px);
    top: 50%; left: 50%;
  `;
});
