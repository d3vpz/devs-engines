const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');

canvas.width=320;
canvas.height=240;

window.addEventListener('load',()=>{
    init();
    setInterval(loop,10);
});

function init(){
    ctx.imageSmoothingEnabled=false;
    console.log('loaded.');
}

function loop(){
    let delta_x=Math.sin(player.a);
    let delta_y=Math.cos(player.a);
    if(keys['ArrowLeft']){player.a-=player.turn_speed;}
    if(keys['ArrowRight']){player.a+=player.turn_speed;}
    if(keys['ArrowUp']){
        player.x+=delta_x*player.speed;
        player.y+=delta_y*player.speed;
        if(collide(maps.map1)){player.x-=delta_x*player.speed;}
        if(collide(maps.map1)){player.y-=delta_y*player.speed;}
    }
    if(keys['ArrowDown']){
        player.x-=delta_x*player.speed;
        player.y-=delta_y*player.speed;
        if(collide(maps.map1)){player.x+=delta_x*player.speed;}
        if(collide(maps.map1)){player.y+=delta_y*player.speed;}
    }
    clear_screen();
    ctx.fillStyle='#707070';
    ctx.fillRect(0,120,320,120);
    ctx.fillStyle='#303030';
    ctx.fillRect(0,0,320,120);
    raycast(player.a,ctx);
    ctx.beginPath();
    ctx.fillStyle='white';
    // draw_map_2d(ctx,maps.map1);
    // ctx.beginPath();
    // ctx.fillStyle='yellow';
    // ctx.fillRect(player.x-4,player.y-4,8,8);
}

function blit(x,y){
    ctx.fillRect(x,y,1,1);
}

function clear_screen(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

document.addEventListener('keydown',(e)=>{
    keys[e.key]=1;
});

document.addEventListener('keyup',(e)=>{
    keys[e.key]=0;
});