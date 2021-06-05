class Person {
    // 타입스크립트 class의 최상단에 type을 정의해야 한다.
    private name: string;
    public age: number;
    readonly log: string;
    // class 안에서만 사용하는 타입은 private
    // readonly는 읽기만 가능

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}