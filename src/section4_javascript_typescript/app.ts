const addArrow = (a:number, b:number) => a+b;

console.log(addArrow(2,5));

const printOutput:  (output: string | number) => void = output => console.log('printOutput ' + output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event =>console.log(event));
}

printOutput(addArrow(5,2));