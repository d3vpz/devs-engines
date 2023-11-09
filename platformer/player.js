let player={
    x:150,
    y:50,
    vx:0,
    vy:0,
};

function collision(x,y,map){
    let row=Math.floor(y/maps.scale);
    let col=Math.floor(x/maps.scale);
    return map[row][col]==1;
}

function box_collision(x,y,w,h,map){
    if(collision(x,y,map)){return true;}
    if(collision(x+(w-1),y,map)){return true;}
    if(collision(x,y+h,map)){return true;}
    if(collision(x+(w-1),y+h,map)){return true;}
    return false;
}