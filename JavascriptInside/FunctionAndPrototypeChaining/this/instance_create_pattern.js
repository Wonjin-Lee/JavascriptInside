// 강제로 인스턴스 생성하기
function Constructor(argument) {
    // new로 호출된 것이 아니라면 new로 새롭게 생성자 함수를 호출한다
    if(!(this instanceof Constructor))
        return new Constructor(argument);
    this.value = argument ? argument : 0;
}