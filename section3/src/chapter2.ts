/**
 * Unknown 타입
 */

function unknownExam() {
  //unknown은 전체집합, 슈퍼타입이라
  //모든 타입이 unknown 타입으로의
  //업캐스팅이 가능함
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

//unknown 타입으로
//다운캐스팅은 불가능함
let unknownVar: unknown;
//let num: number = unknownVar; (다운캐스팅시 오류발생)

/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  //never는 모든 타입의 서브타입(부분집합)
  //업 캐스팅 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운 캐스팅 불가능
  //   let never1: never = 10;
  //   let never2: never = 'hello';
  //   let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc() {
    console.log('hi');
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;
}
