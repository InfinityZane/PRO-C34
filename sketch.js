const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, monster1,pig3;
var backgroundImg,platform;
var hero, slingshot;

var gameState = "onSling";
var bg = "images/GamingBackground.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 350, 1800, 120);

    box1 = new Box(500,0,30,30);
    box2 = new Box(500,50,30,30);
    box3 = new Box(500,100,30,30);
    box4 = new Box(500,150,30,30);
    box5 = new Box(500,200,30,30);
    box6 = new Box(500,250,30,30);
    box7 = new Box(500,300,30,30);
    box8 = new Box(500,350,30,30);
    box9 = new Box(500,100,30,30);
    box10 = new Box(500,100,30,30);
    monster1 = new Monster(810, 100);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(500,240,50,50);
    //box4 = new Box(920,240,50,50);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,50,50);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(850,120,150, -PI/7);

    hero = new Bird(200,120);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:120});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    //ground.display();
    pig1.display();
    pig1.score();
    //log1.display();

    //box3.display();
    //box4.display();
    //pig3.display();
    //pig3.score();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  
    
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "images/GamingBackground.png";
    }
    else{
        bg = "images/GamingBackground.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}