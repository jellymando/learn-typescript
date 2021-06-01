// 유니온 타입: 하나 이상의 타입을 사용하는 것
// 파이프(|) 연산자 사용
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    // 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);
logMessage([1,2,3]);

interface Developer {
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person3) {
    // Developer와 Person3의 공통 속성에만 접근 가능
    someone.name;
    someone.skill;
}

// 인터섹션 
// 앤드(&) 연산자 사용
var capt: string & number & boolean;
// caps: never, string이면서 number이면서 boolean은 불가능

function askSomeone2(someone: Developer & Person3) {
    // Developer와 Person3를 포함한 속성에 접근 가능
    someone.name;
    someone.skill;
}

// 인터섹션을 사용하면 Developer와 Person3의 타입까지 합한 객체를 넘겨야 한다.
askSomeone2({ name: '디벨로퍼', skill: '웹 개발'});
