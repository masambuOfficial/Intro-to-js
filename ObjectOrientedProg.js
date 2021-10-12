 const food = {
    name : "posho", 
    taste : "sweet",
    price : 500,
    color : "white",
    foodvalue : "carbs" 
}
console.log(food.name);


var car = {
    name:"janguar",
    color: "black",
    transmission : "automatic",
    model : 2020, 
  sound : function (){
        console.log("When a Janguar is new it Shiiiis"); 
    }
    
}
 console.log(Object.keys(car)); 

 // Storing more instances
 const phone = {
     name : 'tecno',
     price : 2000,
     color : 'black',
     sound : function(){
         console.log('tinatine');
     }
 }
 phone.model = 'PoP 2' ;
 phone.popularity = function(){
     console.log('Tecno PoP 2 are most popular in Uganda');
  }
 console.log(phone.model);
 phone.sound();
 phone.popularity();
 console.log(Object.keys(phone)); 
 

 // adding properties after defining an object
//  Functions are first class objects:
//  Object literal
 const  president = {
     name = 'Paul',
     country = 'Rwanda',
 }
 // Tell a computer the properties of an object using keyword "this."
 // Constructor Function
 // Defining the Constructor
function Animal (name, color, type, gender ){
    this.name = name;
    this.color = color;
    this.type = type;
    this.gender = gender;
    // Methods
    this.cry = function(a){
        return this.name + ' ' + a;
    }
    this.cry = function(b){
        return this.name + ' ' + b + ' ' + 'and is' + ' ' + this.color;
    }
    
}   // An abstract class
    // Inheritance 
    // Creating actual objects/instances
let animal1 = new Animal('Elephant', 'Gray', 'Wild', 'Rather not Say' ); // new - keyword (Instantiating a new object ) 
let animal2 = new Animal('Goat', 'Black', 'Domestic', 'Male');
console.log(animal1.cry("It Mooos"));
console.log(animal2.cry("Trumpets"));

// Arrow Functions more efficient and latest js style of referring to objects and functions
const woman = (name, height, color, tribe, style) => {
    this.name = name;
    this.height = height;
    this.color = color;
    this.tribe = tribe;
    this.style = style;
    this.cry = (a) => {
        return this.name + ' ' + 'cries' + a; 
    }
}






