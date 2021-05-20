interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
// 파라미터에 인터페이스를 정의하고 함수를 호출할 때 인자가 인터페이스의 규칙을 잘 따르는지 확인
function getUser(user: User) {
    console.log(user);
}
const capt = {
    age: 100,
    name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
// 함수의 전체적인 모습까지 인터페이스로 정의할 수 있다.
interface SumFunction {
    (a: number, b: number): number;
}
var sumFunc: SumFunction;
sumFunc = function(a: number, b: number) {
    return a + b;
}

// 인덱싱
// 배열의 index 타입을 정의
interface StringArray {
    [index: number]: string;
}
var arr2: StringArray = ['a', 'b', 'c'];
arr2[0] = 10;

// 딕셔너리 패턴
// 객체의 index 타입을 정의
interface StringRegexDictionary {
    [key: string]: RegExp // 정규표현식 생성자
}
var obj2: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile:  /\.js$/,
}

// Object의 key들만 모아서 forEach를 하면 값들에 대한 정의가 정의된다.
// typescript가 자동으로 추론해서 타입을 미리 정의해준다.
Object.keys(obj).forEach(function(value){

})

// 인터페이스 확장
// 인터페이스에서 확장(상속)을 받을 수 있다.
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {
    language: string;
}
var capt2: Developer = {
    name: '캡틴',
    age: 100,
    language: 'ts'
}