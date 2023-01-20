/*
let basis = {
    city: 'Arzamas',
}

let user = {
    __proto__: basis,
    name: 'Nikita',
}

let me = {
    __proto__: user,
    age: 23,
    surname: 'Mikheev'
}

console.log(me.city);

*/
/*
let head = {
    glasses: 1
  };
  
  let table = {
    __proto__:head,
    pen: 3
  };
  
  let bed = {
    __proto__:table,
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    __proto__:bed,
    money: 2000
  };

  console.log(bed.glasses);
  */

/*
  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log(speedy.stomach); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log(lazy.stomach); // apple
  */
  /*
  let user = {
    name: 'Nikita',
  }

  console.log(user);

  let Max = new Object({age:13});
  Max.__proto__ = user;

  console.log(Max.name);
  console.log(Max);
  */
/*
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  const ta = new User("Jack");

  
  console.log(ta);

  */
/*
  function CreateUser(name, age) {
    this.name = name;
    this.age = age;
  }

  CreateUser.prototype.sayHi = function() {
    console.log("Меня зовут " + this.name);
  }

  let nik = new CreateUser('Nikita', 23);
  let alex = new CreateUser('Alex', 22)

  nik.sayHi();
  alex.sayHi();
*/
/*
function CardCreator(from, to) {
  this.from = from;
  this.to = to;
  this.show = function() {
    console.log(`От: ${this.from} \nКому: ${this.to}`);
  }
}

CardCreator.prototype.change = function(from) {
  this.from = from;
}


let firstCard = new CardCreator('Никиты', 'Даше');
firstCard.show();

firstCard.change('Димы');
firstCard.show();
*/


// ОДИНАКОВОЕ!!!!
/*
class Parent {
  constructor(surname) {
    this.surname = surname;
  };

  sayHi() {
    console.log("Моя фамилия " + this.surname);
  }
} 


function Par(name) {
  this.name = name;
}

Par.prototype.SayHi = function() {
  console.log('Меня зовут ' + this.name);
}

class Child extends Parent {
  constructor(surname,name) {
    super(surname);
    this.name = name;
  }
}

const me = new Child('Михеев', 'Никита');
console.log(me.surname);
console.log(me.name);
me.sayHi();
*/
//

class Animal {
  constructor(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
  }

  say() {
    console.log(`${this.name} издает звуки: ${this.sound}`);
  }
}

class Dog extends Animal{
  constructor(name, color, weight, breed) {
    super(name, color, weight);
    this.breed = breed;
  }
  
  say() {
    console.log(`${this.name} лает`);
  }
}

class Cat extends Animal {
  constructor(name, color, weight, breed) {
    super(name, color, weight);
    this.breed = breed;
  }

  say() {
    console.log(`${this.name} мяукает`);
  }
}

class Lion extends Cat {
  constructor(name, color, weight, breed) {
    super(name, color, weight, breed);
  }

  growl() {
    console.log(`${this.name} рычит`);
  }
}

const myDog = new Dog('Бобик','Черный','10кг','Пудель');
console.log(myDog);
myDog.say();

const myCat = new Cat('Рыжик', 'рыжий','4кг','Дворовый')
console.log(myCat);
myCat.say();

const myLion = new Lion('Пушок', 'рыжий','500кг','Африканский')
console.log(myLion);
myLion.say();
myLion.growl();