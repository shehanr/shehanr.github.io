//Get context and screen size;
let canvas = document.querySelector("#stars");
var ctx = canvas.getContext("2d");
var W, H, sizeMultiplier;
const avgScreenSize = 1920 * 1080;

setSize(canvas, ctx, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "#ddd";


var animateSpeed = 4 * sizeMultiplier;
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
    animateSpeed = animateSpeed * 1.005;
    setTimeout(animate, animateSpeed);
}
animate();


function setSize(){
    W = $(document).width();
    H = $(document).height();
    sizeMultiplier =  1 / (W * H / avgScreenSize);

    canvas.width = W;
    canvas.height = H;
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, W, H);
}

$(window).resize(function(){
    setSize();
    // when resizing, we can speed up the show
    animateSpeed = 2 * sizeMultiplier;
});