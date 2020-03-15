// constructor_style.js의 코드를 개선

function Person(name) {
    this.name = name;

    Person.prototype.getName = function() {
        return this.name;
    }

    Person.prototype.setName = function(newName) {
        this.name = newName;
    }
}

var firstPerson = new Person("wonjin");
var secondPerson = new Person("claude");

document.write(firstPerson.getName() + "<br>");
document.write(secondPerson.getName() + "<br>");