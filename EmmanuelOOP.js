// Assignment: 
// Create Seven classes with a minimum of seven properties
// with at least two methods, 
// with at least three instances deadline 2pm sharp
// Add comments in your work.

// 01:
function HDD (Brand, Type, Capacity, color, connection, weight, insulation){
    this.Brand = Brand;
    this.Type = Type;
    this.Capacity = Capacity;
    this.color = color;
    this.connection = connection;
    this.weight = weight;
    this.insulation = insulation;
    this.storage = (a) => {
        return this.Brand + ' ' + 'In My Passport' + ' ' + a; 
    }
    this.retrieve = (b) => {
        return this.Brand + ' ' + b; 
    }
}

let HDD1 = new HDD ('Western Digital', 'External HDD', '500GB', 'Red', 'SATA', '50grams', 'Rubber Case');
console.log(HDD1.storage('store data in FAT32 Format'));
console.log(HDD1.retrieve('retrieves data at 32Mbps'));
let HDD2 = new HDD ('Seagate', 'Internal HDD', '1TB', 'Green', 'SATA', '45grams', 'no casing');
console.log(HDD2.storage('store data in  Format'));
console.log(HDD2.retrieve('retrieves data at 50Mbps'));
let HDD3 = new HDD ('Samsung', 'Internal HDD', '250GB', 'Black', 'IDE', '500grams', 'no casing');
console.log(HDD3.storage('store data in NTFS Format'));
console.log(HDD3.retrieve('retrieves data at 40Mbps'));



// // 02:
// function foot_ware (Brand, color, size, type, sole, material, style,){
//     this.Brand = Brand;
//     this.color = color;
//     this.size = size;
//     this.material = material;
//     this.type = type;
//     this.sole = sole;
//     this.style = style;
//     // Methods
//     this.adjustable = function(a){
//         return this.Brand + ' ' + a;
//     }
//     // this. = function(b){
//     //     return this.Brand + ' ' + b + ' ' + 'when it is' + ' ' + this.color;
//     // }
    
// }   // An abstract class
//     // Inheritance 
//     // Creating actual objects/instances
// let foot_ware1 = new foot_ware ('Gucci', 'Gray', 40, 'Leather', 'Push Ins', 'Rubber', 'Unisex' ); 
// console.log(foot_ware1);
// console.log(foot_ware1.adjustable('Adjusts using laces'));
// let foot_ware2 = new foot_ware ('Nike', 'Black', 39, 'Clothe', 'laced', 'used', 'Male');
// let foot_ware3 = new foot_ware  ('Puma', 'Brown', 41, 'Leather Plastic', 'Mocacines', 'Male');

// // 03:
// function Cup (Brand, color, Capacity, type,    ){
//     this.Brand = Brand;
//     this.color = color;
//     this.Capacity = Capacity;
//     this.type = type;
//     // Methods
//     this.ceramic = function(a){
//         return this.Brand + ' ' + a;
//     }
//     this.cry = function(b){
//         return this.Brand + ' ' + b + ' ' + 'and is' + ' ' + this.color;
//     }
    
// }  
// let cup1 = new Cup ('Slook_cup', 'Transparent', '400ml', 'Glass' ); 
// let cup2 = new Cup ('EOS - BUILDING', 'Brown', '300ml', 'Paper' );
// let cup3 = new Cup ('MARINERS CREATION', 'White', '100ml', 'Ceramics' )

// // 04:
// // function computer (Brand, Type, Capacity, color, operating_system, weight, screen_size) {
// //     this.Brand = Brand;
// //     this.Type = Type;
// //     this.Capacity = Capacity;
// //     this.color = color;
// //     this.operating_system = operating_system;
// //     this.weight = weight;
// //     this.screen_size = screen_size;
// //     this.power = (a) => {
// //         return this.Brand + ' ' + 'is scratch-free in' + a; 
// //     }
// //     this.base = (b) => {
// //         return this.Brand + ' ' + b; 
// //     }
// // }
// // let HHD1 = new HDD ('DELL', 'Desktop', '500GB', 'Red', 'Windows 10', '3kilograms', '27inch');
// // let HDD2 = new HDD ('HP', 'Laptop', '1TB', 'Gray', 'PCIe', 'Windows 11', '17inch');
// // let HDD3 = new HDD ('Samsung', 'Chromebook', '250GB', 'Black', 'PCIe', 'Chrome', '13inch');

// // 05:
// function television (Brand, color, type, display_size, inputs, voltage, display_pixels){
//     this.Brand = Brand;
//     this.color = color;
//     this.type = type;
//     this.display_size = display_size;
//     this.inputs = inputs;
//     this.voltage = voltage;
//     this.display_pixels = display_pixels;
//     // Methods
//     this.LED = function(a){
//         return this.Brand + ' ' + a;
//     }
//     this.cry = function(b){
//         return this.Brand + ' ' + b + ' ' + 'in' + ' ' + this.color;
//     }
    
// }  
// let television1 = new television ('Samsung', 'White', 'Smart', '4K UHD', 'HDMI, VGA and Screencast', '240V', 'OLED' ); 
// let television2 = new television ('Hisense', 'Black', 'Digital', '50Inch', 'HDMI and RCA', '220V', 'LED' );
// let television3 = new television ('LG', 'Gray', 'Smart', '40Inch', 'HDMI and Screencast', '240V', 'LED');