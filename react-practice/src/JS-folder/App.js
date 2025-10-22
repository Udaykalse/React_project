let arr=['a', 'b', 'a', 'c', 'b'];
function removeDuplicateStr(arr){
    const uni=[];
    for(let ch of arr){
        if(!uni.includes(ch)){
            uni.push(ch);
        };
    };
    return uni;
};

console.log(removeDuplicateStr(arr));