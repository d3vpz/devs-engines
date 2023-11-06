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

function input(){
    let delta_x=Math.sin(player.a);
    let delta_y=Math.cos(player.a);
    if(keys['ArrowLeft']){player.a-=player.turn_speed;}
    if(keys['ArrowRight']){player.a+=player.turn_speed;}
    if(keys['ArrowUp']){player.a_z+=3;}
    if(keys['ArrowDown']){player.a_z-=3;}
    if(player.a_z>100){player.a_z=100;}
    if(player.a_z<-100){player.a_z=-100;}
    if(keys['w']){
        player.x+=delta_x*player.speed;
        if(collide(maps.map1)){player.x-=delta_x*player.speed;}
        player.y+=delta_y*player.speed;
        if(collide(maps.map1)){player.y-=delta_y*player.speed;}
    }
    if(keys['s']){
        player.x-=delta_x*player.speed;
        if(collide(maps.map1)){player.x+=delta_x*player.speed;}
        player.y-=delta_y*player.speed;
        if(collide(maps.map1)){player.y+=delta_y*player.speed;}
    }
    if(keys['a']){
        player.a-=Math.PI/2;
        delta_x=Math.sin(player.a)*0.8;
        delta_y=Math.cos(player.a)*0.8;
        player.x+=delta_x*player.speed;
        if(collide(maps.map1)){player.x-=delta_x*player.speed;}
        player.y+=delta_y*player.speed;
        if(collide(maps.map1)){player.y-=delta_y*player.speed;}
        player.a+=Math.PI/2;
    }
    if(keys['d']){
        player.a+=Math.PI/2;
        delta_x=Math.sin(player.a)*0.8;
        delta_y=Math.cos(player.a)*0.8;
        player.x+=delta_x*player.speed;
        if(collide(maps.map1)){player.x-=delta_x*player.speed;}
        player.y+=delta_y*player.speed;
        if(collide(maps.map1)){player.y-=delta_y*player.speed;}
        player.a-=Math.PI/2;
    }
}

function loop(){
    clear_screen();
    input();
    draw_background();
    raycast(player.a,ctx,player.a_z,[0,0],0);
}

function draw_background(){
    ctx.filter=`brightness(${100}%)`;
    ctx.fillStyle='#707070';
    ctx.fillRect(0,120+player.a_z,320,240);
    ctx.fillStyle='#303030';
    ctx.fillRect(0,-120+player.a_z,320,240);
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