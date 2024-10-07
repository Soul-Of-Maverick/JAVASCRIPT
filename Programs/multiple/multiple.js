/* multiplying numbers
 *a , b, c : Numbers
 */
function mul(a) {
  return (b) => (c) => a * b * c;
}
console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));
