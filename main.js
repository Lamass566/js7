let arr = ['hello', 'world', 23, '23', null];
let arr2 = [];
let type = 'string';



function filterBy(array){
    return typeof(array) != type;
}
arr2.push(arr.filter(filterBy));
console.log(arr2);