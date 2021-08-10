// 기존 타입 정의 방식의 단점
// 같은 함수지만 인자의 type이 다르면 인자의 타입별로 함수를 만들어야 한다. (함수 중복 선언)
function logText(text: string) {
  return text;
}

function logNumber(num: number) {
  return num;
}

// 유니온 타입을 이용한 선언 방식의 문제점
function logTextOrNumber(text: string | number) {
  console.log(text);
  return text;
}
const a = logTextOrNumber("a");
a.split("");
// a에 대한 값이 여전히 string | number
// 문자열을 인자로 넣어서 return해도 split이 되지 않는다.

// 제네릭: 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 문법. 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.
// any라는 타입은 타입 검사를 하지 않기 때문에 인자로 어느 타입이 들어갔고 어떤 타입이 반환되는지 알 수 없다.
// 제네릭은 함수 이름 뒤에 <T>를 추가하고 인자와 반환 값에 모두 T라는 타입을 추가한다.
// 이렇게 하면 함수를 호출할 때 넘긴 타입에 대해 타입스크립트가 추정할 수 있다.
// 즉, 함수의 입력과 출력 값에 대한 타입이 동일한지 검증할 수 있다.

// 제네릭의 장점과 타입 추론에서의 이점
function logText2<T>(text: T): T {
  console.log(text);
  return text;
}
// **호출하는 시점에 타입을 넘겨주는 것이 제네릭.
logText2("하이");
// 혹은
logText2<string>("하이");
// logText2에 마우스를 댔을 때와 실행하는 코드에 마우스를 댔을 때 다르게 뜸

const str2 = logText2<string>("abc");
str2.split("");
const login = logText2<boolean>(true);

// 제네릭의 타입 제한
function logTextLength<T>(text: T): T {
  console.log(text.length);
  return text;
}
// 'T' 형식에 'length' 속성이 없습니다.
// 어떤 타입이 들어올지 알 수 없으므로 타입에 대한 제한(힌트)를 준다.
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}
logTextLength2("a");

// keyof로 제네릭의 타입 제한하기
interface ShoppingItem {
  name: string;
  price: number;
  stoct: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption("name");
