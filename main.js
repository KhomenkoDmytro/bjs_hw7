let myArr=['coбака', 1, 55, null, undefined, NaN, true, false];
console.log(filterBy(myArr, 'number'));
function filterBy(arr, removeType){
    let newArr=[];
    arr.forEach(element => {
        if(typeof element!==removeType){
            newArr.push(element);
        }
    });
    return newArr;
}
