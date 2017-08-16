/*
  Examples of how to use a Map-structure implemented with a plain javascript object.
*/
class MapWithObject {
  static runTest () {
    const map = {}

    map['key1'] = 'value1'
    map['key2'] = 'value2'
    map['key3'] = 'value3'

    console.log('  --- for keys')
    for (let k in map) {
      console.log('    ', k)
    }

    console.log('  --- for values (and keys)')
    for (let k in map) {
      const v = map[k]
      console.log('    ', v)
    }

    console.log('  --- for entries')
    for (let k in map) {
      const v = map[k]
      const e = {key: k, value: map[k]}
      console.log('    ', e)
    }

    console.log('  --- filter keys')
    Object.keys(map).filter(k => k === 'key2').map(e => console.log('    ', e))

    console.log('  --- filter values')
    Object.values(map).filter(k => k === 'value2').map(e => console.log('    ', e))

    // Filter entries results needs a utility function or we code that is hard to read
    console.log('  --- filter entries')
    MapWithObject.entries(map).filter(e => e.key === 'key2').map(e => console.log('    ', e))
  }

  // Nice to find a neat solution not implementing this
  static entries (map) { return Object.keys(map).map(key => { return {key: key, value: map[key]} }) }
}

console.log('MapWithObject----------------------------------------')
MapWithObject.runTest()

