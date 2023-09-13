let stringArray: string[] = ['a', 'b', 'c'];

//using indices to get data
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);

//Looping on array 

for(let index in stringArray){
    console.log(stringArray[index]);
}

//Multidimention Array

let numberArray: number[][];

numberArray =[[1, 2, 3, 4],[1, 2, 3, 4]];


console.log(numberArray);

//Passing array to a fucntion

function printEachElement(array: (string|number)[]){
    array.forEach(item =>{
        console.log(item)
    })
}


printEachElement(stringArray)

// Multi type array

let multiArray: (string|number)[];

multiArray = [2,"abc"];

printEachElement(multiArray);

// Adding two array;

let newArray: string[];

newArray = [...stringArray,...stringArray];
console.log(newArray)

let newMultiArray: (string|number)[];
newMultiArray = [...stringArray,...multiArray];
console.log(newMultiArray)
