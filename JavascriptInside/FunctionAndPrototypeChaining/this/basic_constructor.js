// 생성자로 사용할 함수는 이름의 첫 문자를 대문자로 기입하는 습관
var Person = function (name) {
    this.name = name;
};

var newPerson = new Person('Wonjin');

document.write(newPerson.name);

