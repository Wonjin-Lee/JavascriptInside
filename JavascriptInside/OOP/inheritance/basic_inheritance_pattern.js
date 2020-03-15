// 기본적인 상속 패턴

function create_object(object) {
    function Person() {

    }

    Person.prototype = object;
    return new Person();
}