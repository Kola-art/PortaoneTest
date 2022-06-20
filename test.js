let max = -99999999999999999;
for(let i=0; i < testArr.length; i++){
    if(Number(testArr[i]) > max){
        max = testArr[i]
    }
}
console.log('max' + ' ' + max);

let min = 99999999999999999;
for(let i=0; i < testArr.length; i++){
    if(Number(testArr[i]) < min ){
        min =  testArr[i]
    }
}
console.log('min' + ' ' + min);

let sortedArr = testArr.sort((a,b) => a - b);
let mediana = Math.ceil((testArr.length)/2);
let medianaRes = sortedArr[mediana];
console.log('median' + ' ' + medianaRes);

let summ = testArr.reduce((accum, item) => {
    accum += Number(item);
    return accum
},0);
let average = summ/testArr.length;
console.log('average' + ' ' + average);