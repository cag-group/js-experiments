class ClassClass {
  constructor (arg) {
    this.objectState = arg
  }

  myMethod(a) {
    console.log('myMethod in ClassClass, a: %s, objectState: %s', a, this.objectState)
  }

  // Public static method
  static myStaticMethod () {
    console.log('myStaticMethod in ClassClass')
  }
}

// Private static methods
function myPrivateStaticMethod () {
  console.log('myPrivateStaticMethod in ClassClass')
}

// Public static data
ClassClass.myStaticData = 104

// Usage
{
  const obj = new ClassClass(102)
  obj.myMethod(103)
  ClassClass.myStaticMethod()
}

module.exports = ClassClass