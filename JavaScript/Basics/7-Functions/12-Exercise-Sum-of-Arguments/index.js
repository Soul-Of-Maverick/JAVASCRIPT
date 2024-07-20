//   Exercise 1- Sum of Arguments

function sum(...args) {
    if (args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]];

    return args.reduce((acc, cur) => acc + cur);
}

console.log(sum([1, 2, 3, 4, 5]));