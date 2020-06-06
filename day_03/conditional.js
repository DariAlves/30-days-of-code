/*
    Task

    Given an integer, n, perform the following conditional actions:

    * If n is odd, print Weird
    * If n is even and in the inclusive range of 2 to 5, print Not Weird
    * f n is even and in the inclusive range of 6 to 20, print Weird
    * If n is even and greater than 20, print Not Weird
    
    Complete the stub code provided in your editor to print whether or not n is weird.
*/

function main() {
    const N = parseInt(readLine(), 10);

    let conditional = ((N%2 == 1) || (N > 5 && N < 21)) ? "Weird" : "Not Weird";
    console.log(conditional);
}
