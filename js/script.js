removeElement = function(array,item) {
    let a = 5;
    for (a in array) {
        if (array[a] === item) {
            array.splice(a, 1);
            break;
            }
        }
        return array;
    };
   
    const array = [1, 2, 3, 4, 5, 6, 7];
    removeElement(array, 5);
    console.log(array.join())