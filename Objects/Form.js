class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createInput("Play");
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);
        
        this.input.position(130,160);
        this.button.position(130,200);
        
        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                PC = PC + 1;
                player.index = PC;
                player.update();
                player.updateCount(PC);
                this.greeting.html("Hello, "+ player.name);
                this.greeting.position(130,160);   
            }   
        )
                   
        
    }

}

/*
ARROW FUNCTION - Binds the function to the original object that called it
    ()=>{}

Library --> p5.dom 
dom --> Document Object Model

HTML 
1. Head -- info about the page
2. Body -- visible content

Components of the Body:
    1. Input box
    2. Play Button
    3. Title of the page

Title:
    1. h2 element
    2. html content
    3. position
*/
