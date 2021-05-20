// 함수의 파라미터에 타입을 정의하는 방식
// vscode 자체에서 숫자+숫자이기 때문에 반환값이 숫자가 될 것이라고 타입추론을 한다.
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
// 반환 값이 없으면 에러가 난다.
function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}

// 파라미터를 제한하는 특성
function sum3(a: number, b: number): number {
    return a + b;
}
// 2개의 인수가 필요한데 4개를 가져왔습니다.
sum3(10, 20, 30, 40);

// 함수의 옵셔널 파라미터
// 특정 파라미터를 선택적으로 사용한다.
function log(a: string, b?: string, c?: string) {
    
}
log('hello world');
log('hello ts', 'abc');
