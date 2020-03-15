var Person = function(arg) {
    var name = arg ? arg : "anonymous";

    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }
};

var newPerson = new Person();
document.write(newPerson.getName() + "<br>");
newPerson.setName("claude");
document.write(newPerson.getName() + "<br>");
document.write(newPerson.name + "<br>");