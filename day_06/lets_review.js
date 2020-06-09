/*
    Task

    * Given a string, S, of length N that is indexed from 0 to N - 1,
        print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.

    * Note: 0 is considered to be an even index.

*/

function processData(input) {
    // .split() = Separar string e retorna um array
    let newArray =  input.split('\n');

    // parseInt = converte uma string em um Integer
    let count = parseInt(newArray.length);

    for(let i = 1; i < count; i++) {
        let stringArray = newArray[i];
        
        let even = [];
        let odd = [];
    
        for (let i = 0; i < stringArray.length; i++ ) {
            if(i % 2 == 0) {
                even.push(stringArray[i]);
            } else {
                odd.push(stringArray[i]);
            }
        }

        // join = junta os elementos de um array e retorna uma string
        console.log(even.join('') + ' ' + odd.join(''));
    }
} 
