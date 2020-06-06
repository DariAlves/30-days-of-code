/*
    Task
    
    Complete the code in the editor below. The variables i,d, and s are already declared and initialized for you. You must:

    * Declare 3 variables: one of type int, one of type double, and one of type String.
    * Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
    * Use the  operator to perform the following operations:
    * Print the sum of i plus your int variable on a new line.
    * Print the sum of d plus your double variable to a scale of one decimal place on a new line.
    * Concatenate s with the string you read as input and print the result on a new line.
*/


    var i = 12;
    var d = 4.0;
    var s = "HackerRank ";
    
    var a = Number(readLine());
    var b = Number(readLine());
    var c = readLine();

    console.log(i + a + "\n" + (Number(b) + d).toFixed(1) + "\n" + s + c);