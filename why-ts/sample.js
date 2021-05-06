// @ts-check
// @param 으로 타입을 지정해도 ts 에러가 뜨지 않는다. // @ts-check 를 추가해야 에러가 뜬다.

// /** 띄어쓰기 + 엔터
/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns
 */

function sum(a, b) {
  return a + b;
}
sum("1", "2");
