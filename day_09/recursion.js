/*
    Task

    * Write a factorial function that takes a positive integer, 
        N as a parameter and prints the result of N! (N factorial).

    Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial,
    you will get a score of 0.

*/


function factorial(n) {
    let a = 1;
    for(let i = 1; i <= n; i++) {
        a *= i;
    }
    return a;
}
