let maps={
    scale:10,
    map1:[
        [1,1,1,1,1,1,1,1,1,1],
        [1,0,0,1,0,0,0,0,0,1],
        [1,0,0,1,0,0,0,0,0,1],
        [1,0,0,1,0,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1],
    ],
};

function draw_map_2d(context,map){
    let x=0;
    let y=0;
    for(row in map){
        for(col in map[row]){
            if(map[row][col]){
                context.fillRect(x,y,maps.scale,maps.scale);
            }
            x+=maps.scale;
        }
        x=0;
        y+=maps.scale;
    }
}