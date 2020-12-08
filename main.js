var old_positon_x, old_positon_y;

color = "black"
line_width = 2;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var width = screen.width;

var new_width = screen.width - 300;
var new_height = screen.height - 300;

if (992 < width) {
    document.getElementById('myCanvas').width=new_width;
    document.getElementById('myCanvas').height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_TouchStart");
    old_positon_x = e.touches[0].clientX - canvas.offsetLeft;
    old_positon_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log("my_TouchMove");

    new_position_x = e.touches[0].clientX - canvas.offsetLeft;
    new_position_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;

    console.log("Last coordinates of positions X and Y - ");
    console.log("X - ", old_positon_x, "Y - ", old_positon_y);
    ctx.moveTo(old_positon_x, old_positon_y);

    console.log("Current coordinates of positions X and Y - ");
    console.log("X - ", new_position_x, "Y - ", new_position_y);
    ctx.lineTo(new_position_x, new_position_y);

    ctx.stroke();

    old_positon_x = new_position_x;
    old_positon_y = new_position_y;
}