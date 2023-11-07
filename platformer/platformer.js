const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');

canvas.width=320;canvas.height=240;

let current_map=maps.map1;

function init(){
    console.log('loaded.');
    loop();
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_map(ctx,0,0,current_map);
    player_tick();
    ctx.fillStyle='red';
    ctx.fillRect(player.x,player.y,5,5);
}

function player_tick(){
    player.vx=5;
    player.x+=player.vx;
}

window.addEventListener('load',init);
