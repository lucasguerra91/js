// Setup
var collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: [
      'Let It Rock',
      'You Give Love a Bad Name'
    ]
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: [
      '1999',
      'Little Red Corvette'
    ]
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [ ]
  },
  5439: {
    album: 'ABBA Gold'
  }
}

// Only change code below this line
function updateRecords (id, prop, value) {
  if (value === '') {
    delete collection[id][prop]
  }
  if ((prop !== '') && (value !== '')) {
    if (prop === 'tracks') {
      if (collection[id].hasOwnProperty('traks') === false) {
        collection[id].tracks = []
        console.log(id + 'entro al has own, value es ' + value)
      }
      if (value !== '') {
        collection[id].tracks.push(value)
      }
    } else {
      collection[id][prop] = value
    }
  }
  return collection
}

updateRecords(5439, 'artist', 'ABBA')
console.log(collection)
