//7. Factorial
//Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by 
//multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
        let newFactor = 1
    for (let i = 1; i <= number; i++) {
        newFactor *= i;
    }
    return newFactor;
};

factorial(5);

//Big O = linear O(n) because input value directly determines time value