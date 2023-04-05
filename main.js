let arr = ['hello', 'world', 23, '23', null];
let arr2 = [];
let type = 'string';

function filterBy(array, dataType){
  array.forEach(function(item){
    if(typeof(item) != typeof(dataType))
    arr2.push(item)
  })
}

filterBy(arr, type);
console.log(arr2);