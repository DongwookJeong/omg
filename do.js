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
