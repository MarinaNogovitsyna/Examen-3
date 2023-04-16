// Создайте функцию-конструктор Animal, которая будет иметь свойства name и type. 
// Добавьте метод speak, который будет возвращать строку "I am a {type} named {name}". 
// Создайте функцию-конструктор Dog, которая будет наследовать свойства и методы от Animal. 
// Добавьте метод bark в Dog, который будет выводить в консоль сообщение "Woof!". 
// оздайте объект dog1 с помощью Dog, задайте ему имя "Rex" и тип "dog", и вызовите методы speak и bark

class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    speak(){
        console.log(`I am a ${this.type} named ${this.name}`)
    }
}

class Dog extends Animal{
        bark(){
            console.log("Woof!")
    }
}

let dog1 = new Dog ("Rex", "dog");
dog1.speak();
dog1.bark();



//Создайте функцию-конструктор Student, которая будет иметь свойства name, age и grades (массив). 
//Добавьте метод averageGrade, который будет вычислять и возвращать средний балл студента. 
//Создайте функцию-конструктор CollegeStudent, которая будет наследовать свойства и методы от Student. 
//Добавьте свойство major в CollegeStudent. Переопределите метод averageGrade в CollegeStudent, чтобы он 
//возвращал сообщение "The average grade of {name} is {average}", где {name} - имя студента, 
//а {average} - средний балл. Создайте объект student1 с помощью Student, задайте ему имя "John", 
//возраст 20 и оценки [5, 4, 3, 5, 5]. Создайте объект student2 с помощью CollegeStudent, задайте ему 
//имя "Jane", возраст 22, оценки [4, 4, 4, 5, 5] и специальность "Computer Science". Вызовите метод averageGrade 
//у объектов student1 и student2.


class Student{
    constructor(name, age, grades){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    averageGrade(){
        let result = this.grades.reduce((sum, current) => sum + current, 0)/this.grades.length;
        return result;
    }
}

class CollegeStudent extends Student{
    constructor(name, age, grades, major){
        super(name, age, grades)
        this.major = major
    }
  
    averageGrade(){
      let result = this.grades.reduce((sum, current) => sum + current, 0)/this.grades.length;
      console.log(`The average grade of ${this.name} is ${result}`)
    }
}

let student1 = new Student("John", 20, [5, 4, 3, 5, 5]);
console.log(student1);

let student2 = new CollegeStudent("Jane", 22, [4, 4, 4, 5, 5], "Computer Science");
console.log(student2);

console.log(student1.averageGrade());
student2.averageGrade();