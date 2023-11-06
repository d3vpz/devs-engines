const FOV_DEG=rad_to_deg(FOV);

function cast_ray(x,y,angle,map){
    let dx=Math.sin(angle);
    let dy=Math.cos(angle);
    let ray_pos={
        x:x,
        y:y,
    };
    for(let r=0;r<200;r++){
        let ray_row=Math.floor(ray_pos.y/maps.scale);
        let ray_col=Math.floor(ray_pos.x/maps.scale);
        if(map[ray_row][ray_col]){return ray_pos;}
        ray_pos.x+=dx*0.25;
        ray_pos.y+=dy*0.25;
    }
    return ray_pos;
}

function raycast(player_angle,context){
    let wall_x=0;
    let y_offset=120;
    let texture_offset=0;
    for(let a=player.a-HALF_FOV;a<player.a+HALF_FOV;a+=DEG_ONE){
        let angle_deg=rad_to_deg(a);
        let ray_pos=cast_ray(player.x,player.y,a,maps.map1);
        let distance=(ray_pos.x-player.x)**2+(ray_pos.y-player.y)**2;
        distance=Math.sqrt(distance);
        distance*=Math.cos(a-player.a);
        let wall_height=Math.min(Math.floor(maps.scale*20/distance+0.0001),50000);
        let brightness=255;
        // ctx.beginPath();
        // ctx.strokeStyle='red'
        // ctx.moveTo(player.x,player.y);
        // ctx.lineTo(ray_pos.x,ray_pos.y);
        ctx.stroke();
        ctx.beginPath();
        // ctx.fillStyle=`rgb(${brightness},${brightness},${brightness})`;
        // ctx.fillRect(wall_x,-wall_height*3+y_offset,10,wall_height*6);
        ctx.drawImage(document.getElementById('blue_stone'),0,0,1,64,wall_x,-wall_height*3+y_offset,5,wall_height*6);
        wall_x+=320/FOV_DEG;
        texture_offset+=1;
    }
}