function createObject (arg) {
  const objectState = arg

  return {
    myMethod: function (a) {
      console.log('myMethod in createObject, a: %s, objectState: %s', a, objectState)
    }
  }
}

// Static functions and static data
const myStaticMethod = function () {
  console.log('myStaticMethod in ClasslessClass')
}

const MY_STATIC_DATA = 4

module.exports = {createObject, MY_STATIC_DATA, myStaticMethod}

// Usage
const m = require('./create-object')
const obj = m.createObject(2)
obj.myMethod(3)
myStaticMethod()

