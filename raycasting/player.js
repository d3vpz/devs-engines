let player={
    'x':50,
    'y':50,
    'a':0,
    'speed':0.25,
    'turn_speed':0.025,
};

function collide(map){
    let row=Math.floor(player.y/maps.scale);
    let col=Math.floor(player.x/maps.scale);
    if(map[row][col]){return true;}
    else{return false;}
}