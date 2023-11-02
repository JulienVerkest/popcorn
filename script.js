const canvas = document.getElementById('popcorn-canvas');
const ctx = canvas.getContext('2d');

/*
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    windowResize();
});

window.addEventListener('load', () => {
    windowResize();
});

function windowResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
*/

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();