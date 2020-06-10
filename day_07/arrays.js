/* 
    Task 

    * Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

*/

function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    // ============My code================= //
    console.log(arr.reverse().join(' '));
}