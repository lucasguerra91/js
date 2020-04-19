let username = 'JackOfAllTrades'
let userCheck = /[\ba-z]?[\d]?/ig
let result = userCheck.test(username)

console.log(result)

let str = 'one two three'
console.log(`Original string: ${str}`)
let fixRegex = /(\w+)\s(\w+)\s(\w+)/ // Change this line
let replaceText = '$3 $2 $1' // Change this line
let result2 = str.replace(fixRegex, replaceText)
console.log(`Modified string: ${result2}`)

console.log('hola como estas sorete')
// /^O(h{3,6}) no/
// Tiene que matchear Oh no pero que tenga entre 3 y 6 h
// (?=\w{5,})(?=^[\D])(?=^[a-zA-z]+\d{2,})

// /^\D(?=\w{5})(?=\w*\d{2})/
// Que no empiece con un digito, que tenga minimo 5 caracteres , y que tenga dos numerso consecutivamente en alguna parte de la cadena

/* Solution 1 (Click to Show/Hide)
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let result = userCheck.test(username);
Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9][0-9]+ - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
Solution 2 (Click to Show/Hide)
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input */

// /^\s+(\w+)(\D+)(\s$)/
