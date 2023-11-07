let maps={
    scale:10,
    map1:[
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    ],
};

function draw_map(ctx,x,y,map){
    let map_x=x;let map_y=y;
    let scale=maps.scale;
    for(row in map){
        for(col in map[row]){
            let square=map[row][col];
            if(square==1){
                ctx.beginPath();
                ctx.fillStyle='white';
                ctx.fillRect(map_x,map_y,scale-1,scale-1);
            }
            map_x+=scale;
        }
        map_x=x;
        map_y+=scale;
    }
}