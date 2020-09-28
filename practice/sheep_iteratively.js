//1. Counting Sheep
//Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. 
//That number should be the number of sheep you have. The function should display the number along with the message 
//"Another sheep jumps over the fence" until no more sheep are left.

//Input: 3
//Output:
//3: Another sheep jumps over the fence
//2: Another sheep jumps over the fence
//1: Another sheep jumps over the fence
//All sheep jumped over the fence

function countingSheep(sheep) {
    for (let i = 0; i < sheep; i++) {
        console.log( i + ': Another sheep jumps over the fence');
    }
        console.log( 'All sheep jumped over the fence');
};

countingSheep(3);

//Big O = linear O(n) because input value directly determines time value