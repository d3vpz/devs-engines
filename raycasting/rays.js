const FOV_DEG=rad_to_deg(FOV);

function cast_ray(x,y,angle,map){
    let dx=Math.sin(angle);
    let dy=Math.cos(angle);
    let ray_pos={
        x:x,
        y:y,
    };
    for(let r=0;r<150;r++){
        let ray_row=Math.floor(ray_pos.y/maps.scale);
        let ray_col=Math.floor(ray_pos.x/maps.scale);
        if(map[ray_row][ray_col]){return ray_pos;}
        ray_pos.x+=dx*0.5;
        ray_pos.y+=dy*0.5;
    }
    return ray_pos;
}

function raycast(player_angle,context,angle_z,texture_coords,y_off){
    let wall_x=0;
    let y_offset=120+angle_z;
    let texture_offset=0;
    for(let a=player.a-HALF_FOV;a<player.a+HALF_FOV;a+=DEG_ONE){
        let angle_deg=rad_to_deg(a);
        let ray_pos=cast_ray(player.x,player.y,a,maps.map1);
        let distance=(ray_pos.x-player.x)**2+(ray_pos.y-player.y)**2;
        distance=Math.sqrt(distance);
        distance*=Math.cos(a-player.a);
        let wall_height=Math.min(Math.floor(maps.scale*40/distance+0.0001),50000);
        let brightness=wall_height*10;
        if(brightness>150){brightness=150;}
        ctx.stroke();
        ctx.beginPath();
        ctx.filter=`brightness(${brightness}%)`;
        ctx.drawImage(document.getElementById('walls'),
            texture_coords[0],texture_coords[1],
            1,64,
            wall_x,-wall_height*3+y_offset-y_off,
            5,wall_height*6+y_off
        );
        wall_x+=320/FOV_DEG;
        texture_offset+=1;
    }
}