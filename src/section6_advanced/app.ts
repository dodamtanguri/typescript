type Admin = {
    name : string;
    privileges : string[];
};


type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name : 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;



//function over road

function section6Add(a: number, b: number): number;
function section6Add(a: string, b: string): string;
function section6Add(a: number, b: string): string;
function section6Add(a: Combinable2, b: Combinable2) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = section6Add('Max', 'Schwarz' );
result.split(' ');

const fetchedUserData = {
    id :'u1',
    name: 'Max',
     job: {title: 'CEO', description : 'My own company'}
}

console.log(fetchedUserData?.job?.title);
const userInput2 = undefined;
const storedData = userInput2 ?? 'DEFAULT';

console.log(storedData);


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name : ' + emp.name);
//     if('privileges' in emp) {
//         console.log('Privileges: ' +emp.privileges);
        
//     }
//     if('startDate' in emp) {
//         console.log('Start Date : ' + emp.startDate);
        
//     }
// }

// printEmployeeInformation({name: 'Manu', startDate : new Date()});


// class Car {
//     drive() {
//         console.log('Driving.....');
        
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a Truck....');
        
//     }
//     loadCargo(amount: number ) {
//         console.log('Loading cargo.... ' + amount);
        
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle : Vehicle) {
//     vehicle.drive();
//     if(vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);


// interface Bird {
//     type : 'bird';
//     flyingSpeed : number;
// }
// interface Horse { 
//     type : 'horse';
//     runningSpeed : number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal : Animal) {
//     let speed;
//     switch(animal.type) {
//         case "bird": speed =  animal.flyingSpeed;
//         break;
//         case "horse": speed =  animal.runningSpeed;
//     }
//     console.log('Moving at speed : ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // const paragraph = document.querySelector('p');
// //const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// userInputElement.value = '여기가 바뀌는거구나!';

// //인덱스타입 : 객체 생성시, 객체의 속성 관련해서 보다 유연한 객체를 만들때 사용 


// interface ErrorContainer{
//     //인덱스 타입
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username : 'Must start with a capital character'

// }