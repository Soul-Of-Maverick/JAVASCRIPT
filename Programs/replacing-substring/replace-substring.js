/*
 * replacing substring inside string
 * str : Orginal string,
 * subStr : String want to replace,
 * addSubStr : new adding SubString
 */
let str = prompt("Enter a string");
let subStr = prompt("Enter substring you want to replace");
let addSubStr = prompt("Enter substring you want to add to");
alert(str.replaceAll(subStr, addSubStr));
