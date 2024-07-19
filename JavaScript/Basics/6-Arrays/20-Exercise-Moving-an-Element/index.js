// Exercise - Moving an Element

const number = [1, 2, 3, 4];

const output = move(number, 1, 1);
console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length){
        console.error(' Invalid offset');
        return;
    }

    const output = [...array];
    const val = output.splice(index, 1)[0];
    const  res = output.splice(position, 0, val);
    return output;
}