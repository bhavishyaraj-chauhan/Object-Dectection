img = "";
status = "";
object= [] ;
function preload() {
    img = loadImage("dog_cat.jpg");
}


function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    objectdectector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects.";

}


function modelLoaded () {
    console.log("modelLoaded");
    status = true ;
    objectdectector.detect(img,gotResult);
}

function gotResult(error,results) {
    if(error){
        console.log(error);
    } else{

    console.log(results);
    }
}

function draw (){

    image(img,0,0,600,400);
    fill("#FF0000");
    text("dog" , 45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,300);

    fill("cyan");
    text("cat",320,120);
    noFill();
    stroke("cyan");
    rect(300,90,270,320);
}