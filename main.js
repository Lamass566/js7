let arr = ['hello', 'world', 23, '23', null];
let arr2 = [];
let type = 'string';

function filterBy(array, type){
    return array.filter(item => (typeof(item) !== type))
}
arr2.push(filterBy(arr, type));
console.log(arr2);