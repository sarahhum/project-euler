// Project Euler - Question 2
// Even Fibonacci numbers

var previous = 1;
var current = 2;
var next = 0;
var sum = 2;

while (next < 4000000) {
    next = previous + current;

    if (next%2==0) {
        sum += next;
    }

    previous = current;
    current = next;
}

console.log(sum);