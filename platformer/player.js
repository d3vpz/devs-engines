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