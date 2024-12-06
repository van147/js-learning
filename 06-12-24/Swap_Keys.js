function swapKeysAndValues(obj) {
    const swapped = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapped[obj[key]] = key;
        }
    }
    return swapped;
}

const obj = { a: "1", b: "2", c: "3" };
const swapped = swapKeysAndValues(obj);

console.log(swapped);