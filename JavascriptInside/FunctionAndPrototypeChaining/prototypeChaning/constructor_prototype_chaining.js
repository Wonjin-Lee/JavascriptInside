/*
    생성자 함수 방식에서의 프로토타입 체이닝
 */

function Person(name, age, gender) {

    if(!(this instanceof Person))
        return new Person(name, age, gender);

    this.name = name;
    this.age = age;
    this.gender = gender;
}

var newPerson = new Person('Wonjin', 27, 'male');

// newPerson -> Person -> Object 순서로 hasOwnProperty() 메서드를 검색
document.write(newPerson.hasOwnProperty('name'));