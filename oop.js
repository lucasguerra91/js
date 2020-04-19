function Animal () { }
Animal.prototype.eat = function () { console.log('nom nom nom') }

// Objeto
function Dog () { }

Dog.prototype = Object.create(Animal.prototype) // Herencia de prototipo
Dog.prototype.constructor = Dog // Manteniendo su propio constructor

Dog.prototype.bark = function () { // Puedo agregar mas metodos
  console.log('Woof!')
}

// Instanciando un objeto de tipo Dog
let beagle = new Dog()
beagle.bark()
beagle.eat()

// Mixin
let bird = {
  name: 'Donald',
  numLegs: 2
}

let boat = {
  name: 'Warrior',
  type: 'race-boat'
}

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('Glide!')
  }
}

glideMixin(bird)
glideMixin(boat)

bird.glide()

// Closure Encapsulamiento

function Bird () {
  let weight = 15

  this.getWeight = function () {
    return weight
  }
}

let pajarito = new Bird()
console.log(pajarito.getWeight())

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true
      }
    },

    singMixin: function (obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune')
      }
    }
  }
})()

funModule.singMixin(pajarito)
pajarito.sing()
