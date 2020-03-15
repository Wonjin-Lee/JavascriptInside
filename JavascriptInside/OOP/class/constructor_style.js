// 공통적으로 사용할 수 있는 setName() 함수와 getName() 함수를 불필요하게 생성한다는 문제점 존재

function Person(name) {
    this.name = name;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(newName) {
        this.name = newName;
    }
}

var firstPerson = new Person("wonjin");
document.write(firstPerson.getName() + "<br>");

firstPerson.setName("claude");
document.write(firstPerson.getName() + "<br>");