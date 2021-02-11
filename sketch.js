var loginbgimg;
var titleimage;
var aboutme;
var instructions;
var login;
var logout;
var aboutmeImg, instrImg, loginImg, LogoutImg;
var aboutbg;
var value = aboutme;
var MENU = 0;
var input, button, greeting;
var pick,objform,sell;
var name3,uname,uemail, umobile, ulocation, uaddress;
function preload()
{
loginbgimg = loadImage("images/imageerror.jpg");
titleimage = loadImage("images/Ttileimage1.PNG");
aboutmeImg = loadImage("images/aboutme.Png");
instrImg = loadImage("images/instrImg.Png");
loginImg = loadImage("images/Loginimg.PNG");
LogoutImg = loadImage("images/LogoutImg.PNG");
aboutbg = loadImage("images/greenBg.jpg")

collection = loadImage("images/collection_process.JPG");
gogreen = loadImage("images/quote-earth.jpg")
price = loadImage("images/pricelist.jpg")
gif_createImg = createImg("images/giphy.gif");
loginbgimg_menu2 = loadImage("images/Paper_recycling_in_Ponte_a_Serraglio.JPG");
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  objform = new Form()
}

function draw() 
{
   background(loginbgimg);  
 // loginbgimg_createImg.position(0, 20);
 // loginbgimg_createImg.size(windowWidth, windowHeight);
  image(titleimage, windowWidth/2-350, windowHeight/2-300, 650, 200);

  gif_createImg.position(windowWidth-350, 20);
  gif_createImg.size(300, 300);

 

  //Menubar
  fill("green");
  rect(50, 30, 200, 75);
  rect(50, 120, 200, 75);
  rect(50, 210, 200, 75);
  fill("yellow");
  textSize(20)
  text('About Me', 90, 80);
  text('Login', 90, 170);
  text('Instructions', 90, 255);
  
  
  
  drawSprites();
  textSize(20);
  fill("green");
 // strokeWeight(3);
  stroke("yellow")
  text("The Raddiwala app is doorstep free service. ", windowWidth/2-280, 380)
  text("We provide the service to collect junk/scrap material from your location. ", windowWidth/2-280, 410)
  text("We made selling to much fun, sell your raddi earn money and awards.", windowWidth/2-280, 440);
  text("Sell more earn more and recycle more.", windowWidth/2-280, 470)

  if(MENU==1)
  {
    createCanvas(windowWidth, windowHeight);
      background(aboutbg);
      textSize(30);
      fill("LightBlue");
      text("I am the developer of this app, and my teachers even helped me to create it!", 20, 100) ;
      text("I am a small boy living in Pune, India.", 20,130 );
      text("I love to play basketball and code nice games, and even websites. ",20, 160);
      text("Dont forget to star my repositories on GitHub.", 20, 190);
      text("I hope you like this application.", 20, 220);

      text('Right Click to return to HomePage', 525, 30)
    if (mouseButton == RIGHT)
     {
      MENU = 0
    }

      //createA("https://github.com/BATHILLS/", 'GitHub')
  }

  // Login
  else if (MENU == 2) 
  {
    
    
    background(loginbgimg);

    textSize(30)
    text('Welcome to our Login Page!', 490, 120)
    
   // pick=new Pickup();
    
    textSize(20)
    text('Right Click to return to HomePage', 525, 30)
    if (mouseButton == RIGHT)
     {
      
      MENU = 0
     }

     objform.display();


  }
 
  else if(MENU == 3)
  {
    createCanvas(windowWidth, windowHeight);
      background(aboutbg);
      textSize(30);
      fill("LightBlue");
      text("●Click on the login button to login, then enter your contact details,", 20, 100) ;
      text("and an username to create your account.", 20, 130)
      text("●Click on the logout button after you login to exit your current account.", 20,180 );
      text("●Search for sellers, and click on one after you decide",20, 230);
      text(" to send a message to him/her... ", 20, 260)
      text("●[Only for sellers] You can rate an user, or even cancel the Registration.", 20, 310);
      text("●[Only for moderators] You can send warning to a seller or an user account.", 20, 360);
      text(" After 15 such warnings, the account gets blocked.", 20, 390)

      text('Right Click to return to HomePage', 525, 30)
      if (mouseButton == RIGHT)
       {
        MENU = 0
       }
    
  }
  else if(MENU==4)
  {
      createCanvas(windowWidth, windowHeight);
      background(gogreen);
      textSize(30);
     // pick_createImg.hide();
      text('With our thoughts, we make the world. ', 430, 30)
      
      text('Thanks for making our earth safe!! ', 450, 70)
      text('Right Click to check the price list and collection process', 560,  windowHeight-50)

      fill("green")
      rect(50, windowHeight-150, 250, 40);
      fill("green")
      rect(50, windowHeight-100, 250, 40);
      fill("yellow");
      textSize(20)
      text('Confirm pickup request', 90, windowHeight-120);
      text('Submit Feedback', 90, windowHeight-80);
      
      if (mouseButton == RIGHT)
       {
        
        image(collection, windowWidth/2-350, windowHeight/2-300, 650, 300);
        image(price, windowWidth/2-350, windowHeight/2, 650, 300);
       }
     
  }
  else if(MENU==5)
  {
        createCanvas(windowWidth, windowHeight);
        background(loginbgimg);
        fill("green")
        text("Your request has been recieved successfully.Our delivery person will pickup the raddi on mentioned date and time",50,100);
  }
  else if(MENU==6)
  {
        createCanvas(windowWidth, windowHeight);
        background(loginbgimg);
        fill("darkgreen");
        textSize(20);
        text("Dear Customer,",50,100);
        text("Thank you for using our services. We would like to know how we performed.",50,130);
        text("Please spare some moments to give us your valuable feedback as it will help us in improving our service",50,160);
        text("Please rate your service experience:",50,190);
        fill("green");
        stroke("yellow");
        ellipse(80, 230, 40, 40);
        text("5",82,234);
        fill("green")
        stroke("yellow");
        ellipse(130, 230, 40, 40);
        text("4",132,234);
        fill("green")
        stroke("yellow");
        ellipse(180, 230, 40, 40);
        text("3",182,234);
        fill("green")
        stroke("yellow");
        ellipse(230, 230, 40, 40);
        text("2",232,234);
        fill("green")
        stroke("yellow");
        ellipse(280, 230, 40, 40);
        text("1",282,234);
     
  }
}

function mouseClicked() 
{
  if (MENU == 0)
   {
    if (mouseX < 200 && mouseX > 50)
     {
      if (mouseY < 105 && mouseY > 33)
      {
        MENU = 1
      }
      if (mouseY < 195 && mouseY > 120) 
      {
        MENU = 2
      }
      if (mouseY < 280 && mouseY > 205) 
      {
        MENU = 3
      }
    }
  }else if(MENU==4)
  {
    if (mouseX < 250 && mouseX > 50)
    {
     if (mouseY < windowHeight-100  && mouseY > windowHeight-200)
     {
      MENU=5 
     }else if(mouseY < windowHeight-70  && mouseY > windowHeight-120)
     {
      MENU=6
     }
    }
  }
}
