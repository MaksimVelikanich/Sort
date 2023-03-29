const arr = [1, 1, 2, 3, 2, 4, 5, 6, 2, 4, 3];

function getArrOfUniqueField(arr) {
    const out = arr.filter((value, index, self) => self.indexOf(value) === index);
return out;
}

const output = getArrOfUniqueField(arr);
console.log(output);
