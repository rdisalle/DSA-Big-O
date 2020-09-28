//4. nth Triangular Number
//Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. 
//The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the 
//sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

 //                            *
 //              *           *    *
 //  *     |   *   *  |   *    *    *  |

 // 1st         2nd           3rd             nth?  

 function nthNumber(number) {
     let dots = 1
     for (let i = 2; i <= number; i++) {
         dots += i;
    }
    return dots;
 };

 nthNumber(10);

 //Big O = linear O(n) because input value directly determines time value