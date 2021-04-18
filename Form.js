class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("1v1 Running Race");
    title.position(displayWidth/2-50,0 );

    this.input.position(displayWidth/2-50, 300);
    this.button.position(displayWidth/2+70, 340);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Please wait for the players.")
      this.greeting.position(displayWidth/2-80, 100);
    });

  }
}
