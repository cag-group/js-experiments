const oldClassPrototype = {
  init: function(arg) {
    this.objectState = arg
    return this
  },
  myMethod: function() {
    console.log('myMethod in oldClass, a: %s, objectState: %s', a, objectState)
  },
}

// Static functions and static data
function myStaticMethod () {
  console.log('myStaticMethod in oldClass')
}
const myStaticData = 4

// Usage
const obj = Object.create(oldClassPrototype).init(2)
obj.myMethod(3)
myStaticMethod()
