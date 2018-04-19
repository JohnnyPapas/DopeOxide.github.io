var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var backgroundImage = new Image();
backgroundImage.src = "Images/sky.png";

var playerTop = new Image();
playerTop.src = "Images/Player_Top.png";

var playerBottom = new Image();
playerBottom.src = "Images/Player_Bottom.png";

var playerXPos = canvas.width / 2;
var playerYPos = screen.height;
var playerScaleX = 0.5;
var playerScaleY = 0.5;


var rotation = 0;
var rotationRightLimit = 1.2;
var rotationLeftLimit = -1.2;

var rotationRight = false;
var RotationLeft = false;


function Update()
{
    canvas.width = canvas.width;
}

function DrawBackground()
{
    context.drawImage(backgroundImage, 0, 0);
}

function DrawPlayer()
{
    
    context.save();
    context.scale(playerScaleX, playerScaleY)
    context.translate(playerXPos + playerTop.width, playerYPos + playerTop.height*3);
    context.rotate(rotation);

    context.drawImage(playerTop, -playerTop.width + 200, -playerTop.height+30)
    context.restore();

}


function Rotation()
{
    

    /*if (keyboard.isKeyDown(keyboard.KEY_A) == keyboard.isKeyDown(keyboard.KEY_D)){
        return rotation;
}

    if (keyboard.isKeyDown(keyboard.KEY_A)) {
        if (rotation > rotationLeftLimit) {
            return rotation -= 0.1;
        }
        else if (rotation = rotationLeftLimit) {
            return rotation = rotationLeftLimit;
        }
    }

    if (keyboard.isKeyDown(keyboard.KEY_D)) {
        if (rotation < rotationRightLimit) {
            return rotation += 0.1;
        }
        else if (rotation = rotationRightLimit) {
            return rotation = rotationRightLimit;
        }
    }
    else {
        return rotation;
    }
    */



    if (!keyboard.isKeyDown(keyboard.KEY_SPACE)) {

        if (rotation >= 0 && rotation <= rotationRightLimit && rotationRight == false && RotationLeft == false) {
            
            
            if (rotation < rotationRightLimit) {
                return rotation += 0.1;
            }

            if (rotation >= rotationRightLimit) {
                rotationRight = true;
                RotationLeft = true;
            }

            if
            (rotation >= rotationRightLimit && RotationLeft == true) {

                RotationLeft = false;
                rotationRight = false;
                return rotation -= 0.1;
            }

            
        }

        

        
    }                
}


function GameLoop()
{
    Update();
    DrawBackground()
    DrawPlayer()
    Rotation()

    requestAnimationFrame(GameLoop);
}

GameLoop();