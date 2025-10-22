function isAnagram(str1,str2){
    console.log('A')
    if(str1.length!==str2.length) return false;
    console.log("B")
    const forStr1=str1.split('').sort().join('');
    const forStr2=str2.split('').sort().join('');
    console.log("C")
    return forStr1===forStr2;
    console.log('D')
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "wold"));   // false