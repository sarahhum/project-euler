// Project Euler - Question 1
// Multiples of 3 & 5

var i = 3;
var sum = 0;

for (i; i<=1000; i++) {
    if (i%3==0 || i%5==0) {
        sum += i;
    }
}

console.log(sum);
