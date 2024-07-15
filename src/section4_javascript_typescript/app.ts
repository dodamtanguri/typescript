// const addArrow = (a:number, b:number = 1) => a+b;

// console.log(addArrow(2,5));

// const printOutput:  (output: string | number) => void = output => console.log('printOutput ' + output);

// const button = document.querySelector('button');

// if(button) {
//     button.addEventListener('click', event =>console.log(event));
// }

// printOutput(addArrow(5));


const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person2 = {
    name : 'Max',
    age : 30,
}

const copiedPerson = {...person2 };

console.log(copiedPerson);
//튜플과 함께 사용할 수 있음. 
 const addArrow = (...numbers: [number, number,number]) => {
   return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
 };

 const addedNumbers = addArrow(5,10,2);
 console.log(addedNumbers);
 