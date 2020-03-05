class Parents{
    constructor(){
        this.FathersName = "Mohoshin ali pk";
        this.FatherAge = 60;
    }
}



class Child extends Parents{

    constructor(name, age, birthdate){
        super();
        this.name = name;
        this.age = age;
        this.birthdate = birthdate;
    }

    getFullName(){
        return this.name +" "+this.FathersName+" "+this.FatherAge;
    }
}


const childProperty = new Child("Shakil", 22, "22-08-98");
console.log(childProperty);
console.log(childProperty.getFullName());