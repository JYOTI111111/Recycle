class Pickup
 {
    constructor()
     {

      this.title = createElement('h1');
      this.location = createInput("Enter Your Location");
      this.name = createInput("Name");
      this.email = createInput("Email");
      this.mobile = createInput("Mobile");
      this.address = createInput("Address");

      this.submit = createButton('SUBMIT');
      this.greeting = createElement('h2');

      // now the weight and all
      this.inputKg = createInput("Kg");
      this.inputLive = createInput("place");
      this.inputDate = createInput("Date");
      this.inputTime = createInput("Time");
      this.titleKg = createElement('h3');
      this.titlePlace = createElement('h3');
      this.titleDate = createElement('h3');
      this.titleTime = createElement('h3');
      this.submit1= createButton('SUBMIT');
     // this.pick_createImg = createImg("images/collect.gif");
     
    }

    hide(){
        this.name.hide();
        this.email.hide();
        this.mobile.hide();
        this.location.hide();
        this.address.hide();
        this.greeting.hide();
        this.submit.hide();

         //now the weight and all
         this.inputKg.hide();
         this.inputLive.hide();
         this.inputDate.hide();
         this.inputTime.hide();
         this.titleKg.hide();
         this.titlePlace.hide();
         this.titleDate.hide();
         this.titleTime.hide();
    }
  
    display()
    {
    //  //image(this.img,1200,600);
    //  //this.title.html("SELECT SELLER OF YOUR CHOICE AND REQUEST PICKUP ");
    //  //this.title.position(displayWidth/2 - 50, displayHeight/2 - 50);
    //  this.pick_createImg.position(windowWidth-350, windowHeight/2);
    //  this.pick_createImg.size(300, 300);

      this.location.position(displayWidth/2 - 90 , displayHeight/2 - 200);
      this.name.position(displayWidth/2 - 90 , displayHeight/2 - 170);
      this.email.position(displayWidth/2 - 90 , displayHeight/2 - 140);
      this.mobile.position(displayWidth/2 - 90 , displayHeight/2 - 110);   
      this.address.position(displayWidth/2 - 90 , displayHeight/2 - 70);
      this.submit.position(displayWidth/2 - 50, displayHeight/2-10);
  
      this.submit.mousePressed(()=>
      {
        this.name.hide();
        this.email.hide();
        this.mobile.hide();
        this.location.hide();
        this.address.hide();
        this.greeting.hide();
        this.submit.hide();

        uname = this.name.value();
        uemail = this.email.value();
        umobile = this.mobile.value();
        ulocation = this.location.value();
        uaddress = this.address.value();

        this.titleKg.html("What is the approx. weight of your raddi?")
        this.titleKg.position(displayWidth/2 - 150, displayHeight/4-30);

        this.inputKg.position(displayWidth/2-150, displayHeight/4+20);

        this.titlePlace.html("Where do you live?")
        this.titlePlace.position(displayWidth/2 - 150, displayHeight/4+50);

        this.inputLive.position(displayWidth/2 - 150, displayHeight/4+100);

        this.titleDate.html("Till what date should we reach you?")
        this.titleDate.position(displayWidth/2 - 150, displayHeight/4+150);

        this.inputDate.position(displayWidth/2 - 150, displayHeight/4+200);

        this.titleTime.html("Around what time should we reach you?")
        this.titleTime.position(displayWidth/2 - 150, displayHeight/4+250);

        this.inputTime.position(displayWidth/2 - 150, displayHeight/4+300);

        this.submit1.position(displayWidth/2 + 80, displayHeight/4+300);

        this.greeting.html("Hello " + uname)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
       
        this.submit1.mousePressed(()=>
        {
          this.inputKg.hide();
          this.inputLive.hide();
          this.inputDate.hide();
          this.inputTime.hide();
          this.titleKg.hide();
          this.titlePlace.hide();
          this.titleDate.hide();
          this.titleTime.hide();
         
          this.submit1.hide();
         
          MENU=4;
        });
            
      });
  
    }
  }
  