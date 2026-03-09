function flattenArray(array) {
    let result = [];
    for (let item of array) {
        if(Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item)
        }
    }
    return result;
}

console.log(flattenArray([1,[2,3],[5,[4,6]]]))