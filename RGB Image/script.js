const content = document.querySelector('body');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const rekt = content.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    home.style.filter = `hue-rotate(${angleDeg}deg)`;
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}
