/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
//(JS) 어떤 매개변수를 받고, 어떤 결과값을 변환하는지 이야기하는 것
//(TS) 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기하는 것
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = '이정환', tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce('이정환', 175);

introduce('이정환', 27);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
