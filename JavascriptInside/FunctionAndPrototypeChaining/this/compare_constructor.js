var person = {
    name: 'Wonjin',
    age: 27,
    gender: 'male'
};

var Person = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

document.write(person.name + '<br>');
document.write(person.age + '<br>');
document.write(person.gender + '<br>');

var newPerson = new Person('Claude', 28, 'Female');

document.write(newPerson.name + '<br>');
document.write(newPerson.age + '<br>');
document.write(newPerson.gender + '<br>');
