class Department {
    name: string;
    //생성하는 객체의 초기화 작업
    constructor(n: string) {
        this.name = n;
    }
//this 키워드가 항상 Department 클래스의 객체를 참조하게 됨. 
    describe(this: Department) {
        console.log('Department : ' + this.name);
        
    }
}

const accounting = new   Department('Accounting');

console.log(accounting);

accounting.describe();
//객체 리터럴로 생성되는 객체에 describe 프로퍼티를 추가했기 때문. 
//미리 정의된 클래스를 기반으로 생성되는 객체 ❌ >> 더미객체일뿐 
//describe 프로퍼티가 accounting 객체 describe 메서드를 참조하는 포인터 
const accountingCopy = {name : 'sohee', describe: accounting.describe};
accountingCopy.describe();



