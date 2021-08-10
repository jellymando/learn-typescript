// 타입 추론 기본
// 변수에 할당된 값에 따라 타입을 추론
var a = "a";
function getB(b = 10) {
  var c = "hi";
  return b + c;
}

// 인터페이스와 제네릭을 이용한 타입 추론 방식
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};

// 복잡한 구조에서의 타입 추론 방식
// DetailedDropdown에 넘긴 타입 파라미터가 Dropdown에도 넘어가서, tag, value 모두 string 타입이 된다.
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};

// Best Common Type(가장 적절한 타입) 추론 방식
// arr에 마우스 갖다대면 모든 타입들을 유니온으로 묶음
var arr = [1, 2, true, "a"];
