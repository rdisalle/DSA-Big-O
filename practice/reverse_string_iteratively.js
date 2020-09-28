//3. Reverse String
//Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
    let reverse = "";
    for (let i = str.length-1; i >=0; i--) {
        reverse += str[i]
    }
    return reverse;
};

let str = 'Hello'

reverseString(str);

//Big O = linear O(n) because input value directly determines time value