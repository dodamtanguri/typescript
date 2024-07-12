// const person: {
//     name : string,
//     age : number
// } = {
 const person :{
    name : string,
    age: number,
    hobbies : string[],
    //Tuple : 타입스크립트에 정확히 두 개의 요소가 있는 특별한 배열
    role : [number,string] 
 } ={
    name : "sohee",
    age :30,
    hobbies : ['Sports', 'Cooking'],
    role :[2, 'author'],
};
//Tuple에서 허용되는 일종의 예외, 타입스크립트가 이 오류를 잡지 못함. 
//person.role.push('admin');
//person.role[1] = 10;

//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];

favoriteActivities = ["Sports"];


console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    
}