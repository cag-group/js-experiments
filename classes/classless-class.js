function ClasslessClass (arg) {
  const objectState = arg

  return {
    myMethod: function (a) {
      console.log('myMethod in ClasslessClass, a: %s, objectState: %s', a, objectState)
    }
  }
}

// Static functions and static data
ClasslessClass.myStaticMethod = function () {
  console.log('myStaticMethod in ClasslessClass')
}

ClasslessClass.myStaticData = 4

// Usage
const obj = ClasslessClass(2)
obj.myMethod(3)
ClasslessClass.myStaticMethod()
