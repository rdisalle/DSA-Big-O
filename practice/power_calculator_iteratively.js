//2. Power Calculator
//Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
//The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

//powerCalculator(10,2) should return 100
//powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, exponent) {
    let result = base
    for (let i = 1; i < exponent; i++) {
        result= result * base
    }
    return result;
};

powerCalculator(2, 5);

//Big O = linear O(n) because input value directly determines time value