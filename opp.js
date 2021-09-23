//create seven classes with a minimum of seven properties
// with atleast two methods
//with atleast three instances deadline 2pm sharp!

/*
Class bird with some bird properties
*/
function bird (name, color, beakSize, habitat, food, wildOrTame, bodySize)
{
    this.name = name;
    this.color = color;
    this.beakSize = beakSize;
    this.habitat = habitat;
    this.food = food;
    this.wildOrTame = wildOrTame;
    this.bodySize = bodySize;
    this.motion = function(birdMotion){
        return this.name + ' ' + birdMotion;
    }
    this.sound = function(birdSound){
        return this.name + ' ' + birdSound;
    }
}
//with atleast three instances 
const bird1 = new bird('ostrich', 'grey', 'bigbeak', 'desert', 'insects', 'wild', 'big');
console.log(bird1.motion('moves by leaping'));
console.log(bird1.sound('quacks'));

const bird2 = new bird('hen', 'white', 'small', 'home', 'insects', 'domestic', 'small');
console.log(bird1.motion('moves by walking'));
console.log(bird1.sound('quacks'));

const bird3 = new bird('duck', 'grey', 'bigbeak', 'water', 'insects', 'domestic', 'big');
console.log(bird1.motion('moves by walking'));
console.log(bird1.sound('quacks'));

/*
Class called school with 7 properties
*/
function school (name, foundedWhen, population, headmaster, location, ownership, level)
{
    this.foundedWhen = foundedWhen;
    this.population = population;
    this.name = name;
    this.headmaster = headmaster;
    this.location = location;
    this.ownership = ownership;
    this.level = level;
    this.performance = function(schoolPerfomance){
        return this.name + ' ' + schoolPerfomance;
    }
    this.reputation = function(schoolReputation){
        return this.name + ' ' + schoolReputation;
    }
}
//with atleast three instances 
const newSchool = new school('St Marys', '1992', 2000, 'Mr Amanya', 'Mbarara', 'Private', 'High School');
console.log(newSchool.performance(' performs very well.'));
console.log(newSchool.reputation(' known for behaving very well.'));

const newSchoo2 = new school('St Johns', '1982', 675, 'Mr John', 'Mbarara', 'Private', 'High School');
console.log(newSchoo2.performance(' performs very well.'));
console.log(newSchoo2.reputation(' known for behaving very well.'));

const newSchoo3 = new school('Jinja SS', '1889', 45, 'Mr Amanya', 'Jinja', 'Private', 'High School');
console.log(newSchoo3.performance(' performs very well.'));
console.log(newSchoo3.reputation(' known for behaving very well.'));



/*
Class called baby with 7 properties
*/
function baby (name, birthday, gender, parents, homeArea, hobby, age)
{
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.parents = parents;
    this.homeArea = homeArea;
    this.hobby = hobby;
    this.age = age;
    this.character = function(babyCharacter){
        return this.name + ' ' + babyCharacter;
    }
    this.personality = function(babyPersonality){
        return this.name + ' ' + babyPersonality;
    }
}

//with atleast three instances 
const newBaby = new baby('Helen', '2016', 'female', 'Mr Onya', 'Mbarara', 'Travelling', 5);
console.log(newBaby.character(' is a shy baby.'));
console.log(newBaby.personality(' is a reserved baby.'));

const newBaby1 = new baby('Albert', '2016', 'Male', 'Mr Onya', 'Mbarara', 'Travelling', 5);
console.log(newBaby1.character(' is a shy baby.'));
console.log(newBaby1.personality(' is a reserved baby.'));

const newBaby2 = new baby('Clare', '2016', 'female', 'Mr Onya', 'Mbarara', 'Travelling', 5);
console.log(newBaby2.character(' is a shy baby.'));
console.log(newBaby2.personality(' is a reserved baby.'));

/*
Class called user with 7 properties
*/
function user (name, username, email, password, profileLink, picture, status)
{
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.profileLink = profileLink;
    this.picture = picture;
    this.status = status;
    this.subscription = function(isSub){
        return this.name + ' ' + isSub;
    }
    this.regularity = function(isRegular){
        return this.name + ' ' + isRegular;
    }
}

//with atleast three instances 
const newUser = new user('Ziyal Amanya', 'ziyalogy', 'ziyalogy@gmail.com', 'bigpipe92', 'ziyalogy', 'pic', 'active');
console.log(newUser.subscription(' is a subscriber.'));
console.log(newUser.regularity(' is a not very regular.'));

const newUser1 = new user('John Amanya', 'john', 'john@gmail.com', 'bigpipe92', 'john', 'pic', 'active');
console.log(newUser1.subscription(' is a subscriber.'));
console.log(newUser1.regularity(' is a not very regular.'));

const newUser2 = new user('Peter Amanya', 'peter', 'peter@gmail.com', 'bigpipe92', 'peter', 'pic', 'active');
console.log(newUser2.subscription(' is a subscriber.'));
console.log(newUser2.regularity(' is a not very regular.'));

/*
Class called fruit with 7 properties
*/
function fruit (name, texture, taste, size, shape, color, origin ){
    this.name = name;
    this.texture = texture;
    this.taste = taste;
    this.size = size;
    this.shape = shape;
    this.color = color;
    this.origin = origin;
    this.howRipens = function(ripensBy){
        return this.name + ' ' + ripensBy;
    }
    this.expiresHow = function(expiresBy){
        return this.name + ' ' + expiresBy;
    }
}

//with atleast three instances 
const newFruit = new fruit('Mango', 'Smooth', 'Sweet', 'Small', 'Oval', 'Green/Yellow/red', 'Tropics');
console.log(newFruit.expiresHow('expires by rotting'));
console.log(newFruit.howRipens('ripens by turning yellow'));

const newFruit2 = new fruit('Apple', 'Hard', 'Sweet', 'Small', 'Round', 'Green/Yellow/red', 'Tropics');
console.log(newFruit2.expiresHow('expires by rotting'));
console.log(newFruit2.howRipens('ripens by turning yellow'));

const newFruit3 = new fruit('PineApple', 'Rough', 'Sweet', 'Big', 'Oval', 'Green/Yellow/red', 'Tropics');
console.log(newFruit3.expiresHow('expires by rotting'));
console.log(newFruit3.howRipens('ripens by turning yellow'));

/*
Class called classmate with 7 properties
*/
function classmate (name, profession, age, gender, interests, location, almamater ){
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.location = location;
    this.almamater = almamater;
    this.behaviour = function(behaves){
        return this.name + ' ' + behaves;
    }
    this.voiceTone = function(tone){
        return this.name + ' ' + tone;
    }
}
//with atleast three instances 
const newClassmate = new classmate('Ozzy', 'Software Dev', '29', 'Male', 'Coding', 'Kampala', 'Makerere');
console.log(newClassmate.behaviour(' behaves professionally'));
console.log(newClassmate.voiceTone('has a heavy tone'));

const newClassmate1 = new classmate('Grace', 'Software Dev', '29', 'Female', 'Coding', 'Kampala', 'Makerere');
console.log(newClassmate1.behaviour(' behaves professionally'));
console.log(newClassmate1.voiceTone('has a high pitched tone'));

const newClassmate2 = new classmate('Jovia', 'Software Dev', '29', 'Female', 'Coding', 'Kampala', 'Makerere');
console.log(newClassmate2.behaviour(' behaves professionally'));
console.log(newClassmate2.voiceTone('has a high tone'));


/*
Class called shoe with 7  properties
*/
function shoe (name, color, material, price, brand, manufacturer, dealer ){
    this.name = name;
    this.color = color;
    this.material = material;
    this.price = price;
    this.brand = brand;
    this.manufacturer = manufacturer;
    this.dealer = dealer;
    this.lookAndfeel = function(feelsHow){
        return this.name + ' ' + feelsHow;
    }
    this.durability = function(lasting){
        return this.name + ' ' + lasting;
    }
}
//with atleast three instances 
const newShoe = new shoe('Bata', 'Black', 'Leather', 30000, 'Bata', 'Bata', 'Downtown');
console.log(newShoe.lookAndfeel(' Feels clasy'));
console.log(newShoe.durability(' last long'));

const newShoe1 = new shoe('Mocasin', 'Brown', 'Leather', 30000, 'Mocasin', 'Mocasin', 'Jumia');
console.log(newShoe1.lookAndfeel(' Feels clasy'));
console.log(newShoe1.durability(' last long'));

const newShoe3 = new shoe('Bata', 'Black', 'Leather', 30000, 'Bata', 'Bata', 'Kamala Road');
console.log(newShoe3.lookAndfeel(' Feels clasy'));
console.log(newShoe3.durability(' last long'));