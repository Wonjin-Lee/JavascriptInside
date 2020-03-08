/*
    apply() 메서드를 이용한 명시적인 this 바인딩
 */

// 생성자
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

// 빈 객체 생성
var newPerson = {};

// apply() 메서드 호출
Person.apply(newPerson, ['Wonjin', 27, 'male']);

document.write(newPerson.name + '<br>');
document.write(newPerson.age + '<br>');
document.write(newPerson.gender + '<br>');
