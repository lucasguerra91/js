function largestOfFour (arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    let subArrayMax = arr[i][0]
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > subArrayMax) subArrayMax = arr[i][j]
    }
    newArray.push(subArrayMax)
  }
  return newArray
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

// verificar si la ultima letra de una cadena es la que se nos pasa por parametro
function confirmEnding (str, target) {
  let segment = str.slice((-1) * target.length, str.length)
  if (segment === target) return true
  return false
}

console.log(confirmEnding('Bastian', 'n'))
console.log(confirmEnding('He has to give me a new name', 'name'))

// Repetir una cadena num veces siempre y cuando num > 0

function repeatStringNumTimes (str, num) {
  let nStr = ''
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      nStr += str
    }
  }
  return nStr
}

console.log(repeatStringNumTimes('abc', 3))
console.log(repeatStringNumTimes('abc', 0))
console.log(repeatStringNumTimes('abc', -1))
console.log(repeatStringNumTimes('*', 30))

// Truncar una cadena si supera la longitud del parametro 2
function truncateString (str, num) {
  let extra = '...'
  let truncStr = ''

  num >= str.length ? truncStr = str : truncStr = str.slice(0, num) + extra
  console.log(truncStr)
  return truncStr
}

truncateString('A-tisket a-tasket A green and yellow basket', 8)
truncateString('A', 10)
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2)

// Devolver el primer elemento del array que cumpla con la funcion pasada por parametro
function findElement (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i]
  }
  return undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
console.log(findElement([1, 5, 3, 7], num => num % 2 === 0))

// VERIFICA BOOLEANO
console.log('\nDevuelve true si el parametro que se le paso es un bool')
function booWho (bool) {
  console.log(`${bool} es de tipo ${typeof (bool)}`)
  return typeof (bool) === 'boolean'
}

console.log(booWho(null))
console.log(booWho(true))

// Convierte en mayusculas las primeras letras
console.log('Convertir a mayusculas todas las primeras letras')
function titleCase (str) {
  let lower = str.toLowerCase()
  let array = lower.split(' ')
  let nStr = ''

  for (let i = 0; i < array.length; i++) {
    let aux = array[i][0].toUpperCase()
    nStr += aux
    for (let j = 1; j < array[i].length; j++) {
      nStr += array[i][j]
    }
    if (i < array.length - 1) nStr += ' '
  }

  // console.log(typeof (nStr))
  return nStr
}

console.log(titleCase("I'm a little tea pot"))
console.log(titleCase('sHoRt AnD sToUt'))

/* Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */
console.log('\nSlice and Splice')
function frankenSplice (arr1, arr2, n) {
  let arr3 = []
  arr3 = arr2.slice(0, n)

  for (let i = 0; i < arr1.length; i++) {
    arr3.splice(n + i, 0, arr1[i])
  }

  for (let j = n; j < arr2.length; j++) {
    arr3.splice(arr3.length, 0, arr2[j])
  }

  return arr3
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
console.log(frankenSplice([1, 2], ['a', 'b'], 1))
console.log(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2))


console.log('\nEncontrar el indice del array en el que deberia ser introducido el segundo parametro')
function getIndexToIns (arr, num) {
  if (num < arr[0]) return 0
  if (num > arr[arr.length]) return arr.length
  let i
  for (i = 1; i < arr.length; i++) {
    if (num <= arr[i]) return i
  }
  return i
}

console.log(getIndexToIns([40, 60], 50))
console.log(getIndexToIns([40, 60], 70))
console.log(getIndexToIns([40, 60, 75, 90, 113, 1024], 95))

// Mutaciones de cadenas
console.log('Mutaciones de cadenas')
function mutation (arr) {
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) return false
  }
  return true
}

console.log(mutation(['hello', 'hey']))
console.log(mutation(['hello', 'OLLEH']))

// Chunky Monkey
console.log('\n Parte un array en porciones del tamaño que se le pasa como segundo parametro')
function chunkArrayInGroups (arr, size) {
  let newArray = []

  newArray.push(arr.slice(0, size))

  for (let i = size; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size))
  }

  console.log(newArray)
  return newArray
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
