class ClassClass {
  constructor (arg) {
    this.objectState = arg
  }

  myMethod(a) {
    console.log('myMethod in ClassClass, a: %s, objectState: %s', a, this.objectState)
  }

  // Static functions
  static myStaticMethod () {
    console.log('myStaticMethod in ClassClass')
  }
}

// Static data
ClassClass.myStaticData = 104

// Usage
{
  const obj = new ClassClass(102)
  obj.myMethod(103)
  ClassClass.myStaticMethod()
}