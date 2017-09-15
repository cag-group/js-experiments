const oldClassPrototype = {
  init: function(arg) {
    this.objectState = arg
    return this
  },
  myMethod: function() {
    console.log('myMethod in oldClass, a: %s, objectState: %s', a, objectState)
  },
}

// Public static functions and public static data
function myPublicStaticMethod () {
  console.log('myPublicStaticMethod in oldClass')
}
const myPublicStaticData = 4

// Private static methods
function myPrivateStaticMethod () {
  console.log('myPrivateStaticMethod in oldClass')
}

// Usage
const obj = Object.create(oldClassPrototype).init(2)
obj.myMethod(3)
?.myPublicStaticMethod()

module.exports = ?