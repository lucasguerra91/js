var printNumTwo
for (var i = 0; i < 3; i++) {
  console.log('i entra valiendo: ' + i)
  if (i === 2) {
    printNumTwo = function () {
      return i
    }
  }
}

console.log(printNumTwo())

/* 'use strict'
let printNumTwo
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i
    }
  }
} */

/* console.log(printNumTwo())
 */// returns 2
// console.log(i)
// returns "i is not defined"
