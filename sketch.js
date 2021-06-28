var db;
var form,player,game;
var GS = 0,PC;
var allPlayers;

function setup(){
    createCanvas(500,500);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if(PC === 4){
        game.update(1);
    }

    if(GS === 1){
        clear();
        game.play();
    }
}

/*
OBJECT ORIENTED PROGRAMMING
    1. create classes - properties & functions
    2. create objects with variable
    3. Use the functions

1. FORM
    - input box - NAME
    - submit button - TO START THE GAME
    - Save the name into db

2. PLAYER 
    - player's info - name, distance, rank...
    - Player count in the db

3. GAME
    - game states - START (0)
                  - PLAY (1)
                  - END (2)  
    - updating & reading game states from db
*/