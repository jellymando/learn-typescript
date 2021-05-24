interface Person {
    name: string;
    age: number | string;
}

interface Info extends Person {
    job: string;
}

type Person2 = {
    name: string;
    age: number | string;
}

type Info2 extends Person2 = {
    job: string;
}

// Person에 마우스 호버하면 Person이라는 interface를 이용했다고 나옴
var seho: Person = {
    name: '세호',
    age: '30'
}

// Person에 마우스 호버하면 Person type의 모습이 나온다.
// 특정 타입을 가리키는 별칭
var rinda: Person2 = {
    name: '린다',
    age: '30'
}

// 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능하다.
// 따라서, 가능한 type 보다는 interface로 선언해서 사용하는 것을 추천