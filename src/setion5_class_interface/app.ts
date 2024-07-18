//interface : 객체의 구조를 정의
//여러 클래스에서 기능을 공유하기 위해 인터페이스 사용.

//고정된 값을 할당하진 않음.

type AddFn = (a:number, b:number) => number; 
//interface를 익명함수 처럼 사용 
// interface AddFn {
//     (a: number,b:number): number;
// }

let section5Add: AddFn;
section5Add = (n1: number, n2: number) => {
    return n1  + n2;
}

interface Named {
    readonly name?: string;
    outputName? : string
}

interface Greetable extends Named{

  greet(phrase: string):void;  
  
}

class Person implements Greetable, Named{
    name?: string;
    age = 30;
    

    constructor(n: string){
        this.name = n;
    }

    greet(phrase: string): void {

      if (this.name) {
        console.log(phrase + ' ' + this.name);
      } else {
        console.log('Hi!');
        
      }
    }

}

//타입으로 지정하는 방법.
type Person2 = {
    name: string;
    age: number;

   greet(phrase: string):void;  
}

//차이점 1. 객체의 구조를 정의하는데 인터페이스와 타입을 모두 사용할 수 있고 커스텀타입으로 지정하명 유니언타입으로 사용할 수 있음. 
// 하지만 interface가 좀 더 명확 >> 객체의 구조를 정의하고자 한다는 것을 명확하게 할 수 있음. 
//차이점 2. 클래스 안에 인터페이스 구현할 수 있음. 
//1. 객체 타입 확인 가능
let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am');

console.log(user1);
