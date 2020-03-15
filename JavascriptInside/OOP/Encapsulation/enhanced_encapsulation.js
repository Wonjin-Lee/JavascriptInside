var Person = function(arg) {
    var name = arg ? arg : "anonymous";

    return {
        getName : function() {
            return name;
        },
        setName : function(newName) {
            name = newName;
        }
    };
}

var newPerson = new Person("wonjin");
document.write(newPerson.getName() + "<br>");
document.write(newPerson.name + "<br>");