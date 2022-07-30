//ninja class
class Ninja {
    //constructor function 
    constructor(name,health,speed,strength)
      {
      this.name = name;
      this.health = health;
      this.speed = 3; 
      this.strength=3;
    }
    //methods
    //sayName
    sayName(){
      console.log(`Ninja name: ${this.name}`)
    }
    //showStats
    showStats(){
      console.log(`Name:${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`)
    }
    //drinkSake add +10 to health
    drinkSake(){
      this.health += 10;
    }
    }

const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats(); 
// ninja1.drinkSake();
// ninja1.drinkSake();
// ninja1.drinkSake();
// ninja1.showStats(); 



class Sensei extends Ninja {
    constructor(name){
          //name,health,speed, strength
      super(name,200,10,10);
      this.wisdom = 10;
      this.msg = "What one programmer can do in one month, two programmers can do in two months.";
      //methods
      }
      speakWisdom() {
        this.drinkSake();
        console.log(this.msg);
    }
  }

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
