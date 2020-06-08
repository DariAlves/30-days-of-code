/*
    Task

    * Given an integer, n, print its first 10 multiples. 
    Each multiple n x i (where 1 <= i <= 10) should be printed on a new line in the form: n x i = result.

*/

function firstTenMultiples(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}


