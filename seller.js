class seller
{

    constructor() 
    {
    
      //call for pickup things...
      this.text1 = createElement('h1');
      this.text2 = createElement('h2');
      this.text3 = createElement('h2');
      this.text4 = createElement('h2');
      this.text5 = createElement('h2');
      this.text6 = createElement('h2');
      this.button2=createButton('Call for pickup');
      this.image=loadImage("images/userb.png")
      
    }
    hide()
    {
       
          this.text2.hide();
          this.text3.hide();
          this.text1.hide();
          this.text4.hide();
          this.text5.hide();
          this.text6.hide();
          this.button2.hide();
       
    }
  
    display()
    {

     
      fill("darkgreen")
      
      rect(displayWidth/2 - 200,displayHeight/2 - 250,400,400);
      this.button2.position(displayWidth/2-50, displayHeight/2+80);
      this.button2.style('background-color', "lightgreen");


      this.text1.html("List of pickers");
      this.text1.position(displayWidth/2-100, displayHeight/2-250);

      this.text2.html("Seller1");
      this.text2.position(displayWidth/2-50, displayHeight/2-150);

      this.text3.html("Seller2");
      this.text3.position(displayWidth/2-50, displayHeight/2-100);

      this.text4.html("Seller3");
      this.text4.position(displayWidth/2-50, displayHeight/2-50);

      this.text5.html("Seller4");
      this.text5.position(displayWidth/2-50, displayHeight/2-0);


      

      this.button2.mousePressed(()=>{
    
         this.text2.hide();
            this.text3.hide();
            this.text1.hide();
            this.text4.hide();
            this.text5.hide();
            this.text6.hide();
            this.button2.hide();
       
      
            pick=new Pickup;
            pick.display();
        
    });   
    

  
    
  }
  }
  