/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: string
  ) {}
}

  // Testing
const student1 = new Student("Alice", 20, "A");
console.log(student1.name); // "Alice"
console.log(student1.age);  // 20
console.log(student1.grade); // "A"

export { };