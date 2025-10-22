function add(a,b,c){
    return a+b+c;
}
console.log(add(1, 2, 3));
console.log("----------------------------------------------------------")
function curryAdd(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
};


console.log(curryAdd(1)(2)(3));