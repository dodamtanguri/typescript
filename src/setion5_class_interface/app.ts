class Department {
    // name: string;
    //접근제어자 private : 클래스 내에서만 접근 가능.
    private employees: string [] = [];
    //생성하는 객체의 초기화 작업
    //기존 필드를 정의한 다음 값을 할당했던 두차례의 초기화 코드 대신에 
    //생성자를 간단하게 정의 할 수 있음. >> 한번에 정의하고 할당하는게 가능함. 
    constructor( private id: string, public name: string) {
        // this.name = n;
    }
//this 키워드가 항상 Department 클래스의 객체를 참조하게 됨. 
    describe(this: Department) {
        console.log(`Department : [${this.id}] : ${this.name}`);
        
        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
        
        
    }
}

const accounting = new   Department( 'id1', 'Accounting');

accounting.addEmployee('sohee');
accounting.addEmployee('dodam');

accounting.name = 'public 접근제어자';

//private 프로퍼티인 employees를 Department 클래스 안에서만 액세스할 수 있음. 
//accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInformation();

console.log(accounting);

accounting.describe();
//객체 리터럴로 생성되는 객체에 describe 프로퍼티를 추가했기 때문. 
//미리 정의된 클래스를 기반으로 생성되는 객체 ❌ >> 더미객체일뿐 
//describe 프로퍼티가 accounting 객체 describe 메서드를 참조하는 포인터 
// const accountingCopy = {name : 'sohee', describe: accounting.describe};
// accountingCopy.describe();



