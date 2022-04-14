class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greentings(){
        console.log(`Hi my name is ${this.name}, and I'm ${this.age} years old`)
    }
}

module.exports = Person