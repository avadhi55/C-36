class Player {
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    //Reads the playercount from the db
    getCount(){
        db.ref("PlayerCount").on("value",(data)=>{
            PC = data.val();
        })
    }

    //Updates the playercount to the db
    updateCount(count){
        db.ref("/").update({
              PlayerCount : count
        });
    }
    
    
    //Updates player info into db
    update(){
        db.ref("Players/Player"+ this.index).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        db.ref("Players").on("value",(data)=>{
            allPlayers = data.val();
        })
    }

}

/*
Static Functions :
    - Common functions
    - They belong to the entire class & not to any specific object


PC = 1
    player 1
    player + PC

PC = 2
    player 2
    player + PC

String concatenation :
    concatenation --> putting things together
*/