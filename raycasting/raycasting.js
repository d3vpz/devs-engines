const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');

canvas.width=640;
canvas.height=480;

let x=50;let y=50;

window.addEventListener('load',()=>{
    setInterval(loop,10);
});

function loop(){
    fill_screen('#151515')
    ctx.fillStyle='white';
    ctx.fillRect(x-4,y-4,8,8);
    if(keys['ArrowLeft']){x-=1;}
    if(keys['ArrowRight']){x+=1;}
    if(keys['ArrowUp']){y-=1;}
    if(keys['ArrowDown']){y+=1;}
}

function blit(x,y){
    ctx.fillRect(x,y,1,1);
}

function fill_screen(color){
    ctx.fillStyle=color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

document.addEventListener('keydown',(e)=>{
    keys[e.key]=1;
});

document.addEventListener('keyup',(e)=>{
    keys[e.key]=0;
});