const ClassClassImplementation = function OldClass(arg) {
  this.objectState = arg
}

ClassClassImplementation.prototype.myMethod = function(a) {
  console.log('myMethod in ClassClassImplementation, a: %s, objectState: %s', a, this.objectState)
}

// Static functions and static data
ClassClassImplementation.myStaticMethod = function() {
  console.log('myStaticMethod in ClassClassImplementation')
}

ClassClassImplementation.MY_STATIC_DATA = 4

// Usage
const obj = new ClassClassImplementation(2)
obj.myMethod(3)
ClassClassImplementation.myStaticMethod()

module.exports = ClassClassImplementation