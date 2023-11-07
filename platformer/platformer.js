const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');

canvas.width=320;canvas.height=240;

let current_map=maps.map1;

function init(){
    console.log('loaded.');
    setInterval(loop,10);
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_map(ctx,0,0,current_map);
    player_tick();
    ctx.fillStyle='red';
    ctx.fillRect(player.x,player.y-5,5,5);
}

function player_tick(){
    player.vx=0;
    if(keys['ArrowRight']){player.vx+=1;}
    if(keys['ArrowLeft']){player.vx-=1;}
    player.vy+=0.05;
    player.x+=player.vx;
    if(collision(player.x,player.y,current_map)){
        player.x-=player.vx;
        player.vx=0;
    }
    player.y+=player.vy;
    if(collision(player.x,player.y,current_map)){
        if(player.vy<0){
            player.y-=player.vy;
            player.vy=1;
        }else{
            player.y-=player.vy;
            player.vy=0;
            if(keys['ArrowUp']){
                player.vy=-2;
            }
        }
    }
}

function input(){
}

window.addEventListener('load',init);

document.addEventListener('keydown',(e)=>{
    keys[e.key]=1;
});
document.addEventListener('keyup',(e)=>{
    keys[e.key]=0;
});
