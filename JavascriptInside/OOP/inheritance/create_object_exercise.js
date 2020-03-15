// create_object() 함수를 이용한 상속 구현 예제

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

var newStudent = create_object(person);
document.write(newStudent.getName() + "<br>");

newStudent.setName("claude");
document.write(newStudent.getName() + "<br>");