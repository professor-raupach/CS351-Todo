"use strict"

// objects
const car = {
    brand:"Nissan", 
    model:"leaf", 
    year:2013, 
    color:"white", 
    stereo: {
        brand: "pioneer", 
        model:"DMH-C5500NEX"
    }, 
    passengers: ["Fen", "Bob", "Zoe"],
    name() {
        return this.brand + " " + this.model;
    }, 
    square: (x)=> {
        return x*x;
    }
};

console.log(car);

console.log(car["brand"]);
console.log(car.brand);

console.log(car["stereo"]["brand"]);
console.log(car.stereo.model);

console.log(car.passengers[0]);
console.log(car["passengers"][0]);


console.log(car.name());
console.log(car.square(5));


car.miles = 30000;

console.log(car);

car.addMiles = function(newMiles) {
    this.miles += newMiles;
}

car.addMiles(1000);
console.log(car.miles);

delete car.color

console.log(car)


const person = new Object();
person.firstname = "paul";
person.lastname = "raupach";
person.fullName = function() {
    return this.firstname + " " + this.lastname;
}

console.log(person.fullName());

for (let key in person) {
    console.log(key + ": " + person[key])
}

//JSON

const car_json = JSON.stringify(car)

console.log(car_json);
// notice there are no functions


// getters and setters
const student = {
    first_name:"Robert",
    last_name: "Todd",
    _gpa: 3.4,
    get gpa(){ return this._gpa},
    set gpa(grade){ this._gpa = grade }
}

console.log(student.gpa);
student.gpa = 3.8;
console.log(student.gpa);

// constructors 

function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.best_friend = true;
    this.fetch = function(obj) {
        return this.name + " returns with a " + obj;
    }
}

const ivan = new Dog('Ivan', 'Shepard', 13)

console.log(ivan)
console.log(ivan.fetch("stick"))

// prototype inheritance
Dog.prototype.bark = function() {return "woof woof this is " + this.name}

console.log(ivan.bark())
console.log(ivan)