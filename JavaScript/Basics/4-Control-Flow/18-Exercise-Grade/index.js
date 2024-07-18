//Exercise - Grade

// Average
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [ 80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    
    let Average = calculateAverage(marks);

    if (Average < 60) return 'F';
    if (Average < 70) return 'D';
    if (Average < 80) return 'C';
    if (Average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;

    for ( let value of array)
        sum += value;

    return sum / array.length;
}