function outerFunc() {
    var x = 10;
    var innerFunc = function() {
        document.write(x);
    }
    return innerFunc;
}

var inner = outerFunc();
inner();