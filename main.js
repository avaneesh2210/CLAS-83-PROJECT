var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = document.getElementById("color");
    width_of_line = document.getElementById("line").value;
    var width = screen.width;
    new_width = screen.width - 80;
    new_height = screen.height - 400;
    if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my touchstart");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("line").value;
        //Addictonal Activity ends

        last_position_of_x = e.toches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.toches[0].clientY - canvas.offsetTop;
    }
function clear_area()
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}

    
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("my touchmove");
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

