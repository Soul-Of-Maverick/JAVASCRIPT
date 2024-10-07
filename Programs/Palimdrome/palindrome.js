/*checking num palindrome or Not
 *num : Number or String
 */
const num = String(prompt("Enter number to check palindrome"));
let checkPalindrome = num.split("");
checkPalindrome = checkPalindrome.reverse().join("");
alert(
  checkPalindrome === num ? `${num} is palindrome` : `${num} is not palindrome`
);
