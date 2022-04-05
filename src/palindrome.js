const interface = require('readline-sync') 
let response = "";
function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  response = interface.question("escribe la palabra que deseas conocer si es palindromo:   ");
  console.log(response,palindromeChecker(response)); 
