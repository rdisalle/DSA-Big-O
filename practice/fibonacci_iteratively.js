//6. Fibonacci
//Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which 
//each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks 
//as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci(number) {
    let num1 = 1;
    let num2 = 0;
    let fib = null;
    while (number > 0) {
        fib = num1;
        num1 = num1 + num2;
        num2 = fib;
        number--;
    }
    return num2;
};

fibonacci(7);

//Big O = linear O(n) because input value directly determines time value