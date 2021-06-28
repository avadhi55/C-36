class Game{
    constructor(){}

    //Reads the gamestate from db
    getState(){
        db.ref("GameState").on("value", function(data){
            GS = data.val();
        });
    }

    //Updates the gamestate to db
    update(state){
        db.ref("/").update({
            GameState : state
        });
    }

    async start(){
        if(GS === 0){
            //New form object
            form = new Form();
            form.display();
            //New Player object
            player = new Player();
            var playerCountRef = await db.ref('PlayerCount').once("value");
            if(playerCountRef.exists()){
                PC = playerCountRef.val();
                player.getCount();
            }
            
        }
    }

    play(){
       form.hide();
       textSize(30);
       text("Game has started", 120, 100);
       Player.getPlayerInfo();

       //Game Starts Here
       if(allPlayers !== undefined){
           var yPos = 130;
           for(var i in allPlayers){
               yPos = yPos + 20;
               textSize(15);
               text(allPlayers[i].name + " = " + allPlayers[i].distance,120,yPos);
               
           }

       }

       if(keyDown(UP_ARROW)&& player.index !== null){
          player.distance = player.distance+20;
          player.update();
          
       }
    }

    end(){}
}

/*
LOCAL FUNCTION
    function(){}

    normal --> function name(){}


"/" --> refers to the entire database
*/