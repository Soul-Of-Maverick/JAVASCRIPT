//Exercise - Even and Odd Numbers

showNumber(10);

function showNumber(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i, 'ODD');
        else 
            console.log(i, 'EVEN');
    }
}

