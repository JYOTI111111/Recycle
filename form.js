class Form {

    constructor() {
    
      this.input = createInput("");
      this.button = createButton('PLAY');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.title2 = createElement('h2');
      this.input2 = createInput("");
     
      
      //this.reset = createButton('Reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide();
        this.greeting.hide();
       
    }
  
    display(){
      
      this.title.html("Enter your Username: ");
      this.title.position(displayWidth/2 - 100, displayHeight/2 - 150);
      this.title.style('color', "white");

      this.title2.html("Enter your Password: ");
      this.title2.position(displayWidth/2 - 100, displayHeight/2 - 80);
      this.title2.style('color', "white");

      this.input2.position(displayWidth/2 - 100 , displayHeight/2 - 30);
  
      this.input.position(displayWidth/2 - 100 , displayHeight/2 - 100);

      this.button.position(displayWidth/2 -30, displayHeight/2+30);
      this.button.style('background-color', "lightgreen");

      
      fill("darkgreen");

      rect(displayWidth/2 - 200,displayHeight/2 - 250,400,400);

      this.button.mousePressed(()=>{
    
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide();
        this.greeting.hide();     
        name3 = this.input.value();
       

        sell=new seller();
        sell.display();
        
      });
  
    
  }
  }
  