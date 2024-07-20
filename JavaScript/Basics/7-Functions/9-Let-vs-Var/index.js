//  Let vs Var

// when we decalre avariable with var. it's scope is not limited to the block in which it's defined.
// it's limited to the function in which it'sdefined
function start() {
    for (var i = 0; i < 5; i++)
        console.log(i);

    console.log(i);
}

start();        // o/p - 0  1  2   3   4   5

// var => function scoped
// ES6(ES2015) : let , const => bloack scoped 