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
        console.log("When a Janguar is new is Shiiiis"); 
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
 // Functions are first class objects:
 const  president = {
     name = 'Paul',
     country = 'Rwanda',
 }
 // Tell a computer the properties of an object using keyword "this."
function animal (name, color, type, gender ){
    this.name = name;
    this.color = color;
    this.type = type;
    this.gender = gender;
} 
// 
let animal1 = new animal('Elephant', 'Gray', 'Wild', 'Rather not Say' );
let animal2 = new animal('Goat', 'Black', 'Domestic', 'Male');
