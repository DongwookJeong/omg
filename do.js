// ! 배열 메소드 숙달부터 다시 시작

// ? pop 배열 끝 값 제거
let arrPop = [1, 2, 3, 4];
arrPop.pop();
console.log(arrPop); //[1, 2, 3]

// ? push 배열 끝 값 추가
let arrPush = [1, 2, 3, 4];
arrPush.push(7);
console.log(arrPush); //[1, 2, 3, 4, 7]

// ? unshift 배열 첫 값 추가
let arrUnshift = [1, 2, 3, 4];
arrUnshift.unshift(0);
console.log(arrUnshift); //[ 0, 1, 2, 3, 4 ]

// ? shift 배열 첫 값 삭제
let arrShift = [1, 2, 3, 4];
arrShift.shift();
console.log(arrShift); //[ 2, 3, 4 ]

// ? splice 특정 배열 위치에 값을 추가하거나 삭제
let arrSplice = [1, 2, 3, 4, 5, 6, 7];
arrSplice.splice(2, 3);
console.log(arrSplice); //[ 1, 2, 6, 7 ] 2번째 이후 부터 3개의 값 삭제

arrSplice.splice(3, 1, "im", "pm");
console.log(arrSplice); //[ 1, 2, 6, 'im', 'pm'] -> [ 1, 2, 6, 7 ]에서 7을 제거 후 문자 추가

// ? slice 시작 index에서 끝 index까지 얕은 복사 배열 생성
let arrSlice = [1, 2, 3, 4, 5, 6, 7];
let newArr = arrSlice.slice(3,6);
console.log(newArr); //[ 4, 5, 6 ] 3은 포함되지 않고 6은 포함

// ? concat 배열 합치고 얕은 복사 배열 생성
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); //[ 1, 2, 3, 4, 5, 6 ]

// ? forEach 배열의 각 원소별로 지정 함수를 실행
let arrForeach = [1, 2, 3];
arrForeach.forEach(function(value){
    console.log(value+1) // 2 3 4
});

// ? map 배열의 각 원소별 함수를 실행하고 그 값들을 새로운 배열로 반환
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrMap = function(value){
    return value % 2 === 0;
};
let newArray = arr.map(arrMap);
console.log(newArray) 
/*
 [
    false, true,  false,
    true,  false, true,
    false, true,  false,
    true
  ]
*/

// ? filter 배열의 각 원소별 함수를 실행하고 그 값이 true인 값으로 구성된 배열로 반환
let arrFilter = arr.filter(arrMap);
console.log(arrFilter); //[ 2, 4, 6, 8, 10 ]

// ? reduce 누적된 값을 반환
let value = arr.reduce(function(previousValue, currentValue, index){
    return previousValue + currentValue;
})
console.log(value) //55

// ? reverse 원소 순서 거꾸로 바꾸기
arr.reverse();
console.log(arr);
/*
[
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1
]
*/

// ? sort 알파벳 순으로 정렬 혹은 지정된 함수에 따른 순서로 정렬, 모든 원소를 문자열로 취급
let yam = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
yam.sort();
console.log(yam);
/*
10, 11, 12, 13은 앞에 1이 있어서 먼저 위치됨
[
  1, 10, 11, 12, 13, 2,
  3,  4,  5,  6,  7, 8,
  9
]
*/
yam.sort(function(a, b){
    return a - b;
})
console.log(yam);
/*
[
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
]
*/

// ? toString 배열을 문자열로 반환
let one = [1, 2, 3, 4];
console.log(one.toString()); // 1,2,3,4

// ? valueOf toString과 비슷하지만 배열로 반환
console.log(one.valueOf()) // [ 1, 2, 3, 4 ]

// ? join 배열 원소 전부를 하나로 합친다
console.log(one.join()) // 1,2,3,4
console.log(one.join('-'))