// Break and continue keywods

// Break
let i = 0;
while ( i <= 10) {
    if (i === 5) break;     // after 5th itiration execution will stop.
    
    console.log(i);
    i++;
}

// continue
let y = 0;
while ( y <= 10) {
if (y % 2 === 0) {
    i++;
    continue;
};     // it will jump to the begining of the loop.
    
    console.log(i);
    i++;
}       
// o/p - 
// 1
// 3
// 5
// 7
// 9