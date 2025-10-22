const arr = [10, 25, 5, 40, 30];
// const maxNum=Math.max(...arr);
// console.log(maxNum);

function findMax(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max) max=arr[i];
    };
    return max;
};

console.log(findMax(arr));
