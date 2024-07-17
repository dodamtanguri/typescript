class Department {
    // name: string;
    //접근제어자 private : 클래스 내에서만 접근 가능.
    //private employees: string [] = [];
    //접근제어자 protected : private와 유사, 상속받은 클래스에서도 접근 가능 
    protected employees: string [] = [];
    //생성하는 객체의 초기화 작업
    //기존 필드를 정의한 다음 값을 할당했던 두차례의 초기화 코드 대신에 
    //생성자를 간단하게 정의 할 수 있음. >> 한번에 정의하고 할당하는게 가능함. 

    //readonly >> 읽기 전용 변경되면 안됨. 한 번 설정되면 변경되지 않아야할 프로퍼티를 안전하게 보호 (자바스크립트 지원 X)
    constructor( private readonly id: string, public name: string) {
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

class ITDepartment extends Department{
    admins : string[];
    constructor(id: string,  admins: string[]) {
        //다른 클래스를 상속받는 클래스의 생성자를 정의할 때 
        //super가 기본 클래스의 생성자를 호출. 
        //서브클래스 안에서 기본 클래스의 생성자를 호출. 
        super(id, 'IT');
        this.admins = admins;
    }

}

class AccountingDepartment extends Department {

    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, "AccountingDepartment");
        this.lastReport = reports[0];
    }
    //외부에서 프로퍼티를 수정할 수 없도록 유지하면서 엑세스 권한을 부여하려면 protected로 바꾸기
    addEmployee(name: string): void {
        if(name === 'MAX') {
            return;
        }
        //기본클래스의 employees의 접근제어자를 protected로 변경.
        this.employees.push(name);
    }
    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport(){
        console.log(this.reports);
        
    }
}

const accounting = new Department( 'id1', 'Accounting');


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

console.log('-------------------------------------------------');


const it = new ITDepartment('d1', ['MAX']);

it.addEmployee('MAX');
it.addEmployee('MAUN');

it.describe();

it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

console.log('-------------------------------------------------');

const account = new AccountingDepartment('d2',[]);

// console.log(account.mostRecentReport);
//>> Expect : Error: No report found.

account.mostRecentReport = 'setter를 배워봅시다';
account.addEmployee('MAX');
account.addEmployee('회계직원1');
account.addEmployee('회계직원2');

account.describe();

account.addReport('리포트 제출합니다');

console.log(account.mostRecentReport);

account.printReport();
account.printEmployeeInformation();

console.log(account);
