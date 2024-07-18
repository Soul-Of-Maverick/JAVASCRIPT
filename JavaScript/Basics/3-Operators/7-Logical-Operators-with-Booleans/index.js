//Logical Operators

// Logical AND ( && )
// Return TRUE if both operands are TRUE.
console.log(true && true);


// Logical OR ( || )
// Return TRUE if one of the operands is TRUE
console.log(true || true);

let highIncome = ture;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT ( ! )
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
