canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_array = ["NASA_1.jpg","NASA_2.jpg","NASA_3.jpg","NASA_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

backgroundImg = nasa_mars_array[random_number];
console.log("background image = " + backgroundImg);

roverwidth = 100;
roverheight = 90;

roverX = 10;
roverY = 10;

roverImg = "rover.png";

function add(){

    backgroundNewImg = new Image();
    backgroundNewImg.onload = uploadBackground;
    backgroundNewImg.src = backgroundImg;

    roverNewImg = new Image();
    roverNewImg.onload = uploadRover;
    roverNewImg.src = roverImg;

}

function uploadBackground(){

    ctx.drawImage(backgroundNewImg , 0 , 0 , canvas.width , canvas.height);

}

function uploadRover(){

    ctx.drawImage(roverNewImg , roverX , roverY , roverwidth , roverheight);

}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){

        up();
        console.log("up");

    }
    if(keypressed == '40'){

        down();
        console.log("down");
        
    }
    if(keypressed == '37'){

        left();
        console.log("left");
        
    }
    if(keypressed == '39'){

        right();
        console.log("right");
        
    }
}

function up(){

if(roverY >=700){

    roverY = roverY - 10;
    console.log("when up arrow key is pressed, X = " + roverX + "and Y =" + roverY);
    uploadBackground();
    uploadRover();

} 

}

function down(){

    if(roverY <=500){

        roverY = roverY + 10;
        console.log("when down arrow key is pressed, X = " + roverX + "and Y =" + roverY);
        uploadBackground();
        uploadRover();

    }
}
function left(){

    if(roverX >=0){

        roverX = roverX - 10;
        console.log("when left arrow key is pressed, X = " + roverX + "and Y =" + roverY);
        uploadBackground();
        uploadRover();

    }
}
function right(){

    if(roverX <=700){

        roverX = roverX + 10;
        console.log("when right arrow key is pressed, X = " + roverX + "and Y =" + roverY);
        uploadBackground();
        uploadRover();

    }
}
