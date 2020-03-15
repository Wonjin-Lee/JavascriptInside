var person = {
    name : "wonjin",
    getName : function() {
        return this.name;
    },
    setName : function(newName) {
        this.name = newName;
    }
};

function create_object(object) {
    function Student() {

    }
    Student.prototype = object;
    return new Student();
}

function extend(obj, prop) {
    if(!prop) {
        prop = obj;
        obj = this;
    }
    for(var i in prop) obj[i] = prop[i];
    return obj;
};

var newStudent = create_object(person);

var added = {
    setAge : function(age) {
        this.age = age;
    },
    getAge : function() {
        return this.age;
    }
};

extend(newStudent, added);

newStudent.setAge(27);
document.write(newStudent.getAge() + "<br>");