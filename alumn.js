const Person = require('./person')

class Alumn extends Person{

    constructor(name, age, classNumber){
        super (name, age)
        this.classNumber = classNumber
    }
}

module.exports = Alumn