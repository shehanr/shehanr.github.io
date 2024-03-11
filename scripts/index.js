//Get context and screen size;
let canvas = document.querySelector("#stars");
var ctx = canvas.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
canvas.width = W;
canvas.height = H;
ctx.fillStyle = "transparent";
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "#ddd";
var animateSpeed = 1;
function animate() {
    // Random position and size
    let x = W * Math.random();
    let y = H * Math.random();
    let r = 2.5 * Math.random();

    // Draw
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    
    //Slow animate speed
    animateSpeed = animateSpeed * 1.01;
    setTimeout(animate, animateSpeed);
}
animate();
