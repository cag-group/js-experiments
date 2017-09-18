const myPrototype = {
  init: function(arg) {
    this.objectState = arg
    return this
  },
  myMethod: function(a) {
    console.log('myMethod in oldClass, a: %s, objectState: %s', a, this.objectState)
  },
}

// Public static functions and public static data
function myPublicStaticMethod () {
  console.log('myPublicStaticMethod in myPrototype')
}
const MY_STATIC_DATA = 4

// Private static methods
function myPrivateStaticMethod () {
  console.log('myPrivateStaticMethod in myPrototype')
}

module.exports = {myPrototype, MY_STATIC_DATA, myPublicStaticMethod}

// Usage
const m = require('./expose-prototype')
const obj = Object.create(m.myPrototype).init(2)
obj.myMethod(3)
myPublicStaticMethod()
