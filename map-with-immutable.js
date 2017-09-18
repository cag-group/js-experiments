const Immutable = require('immutable')

/*
  Examples of how to use a Map-structure implemented with a javascript Map class.
*/
class MapWithImmutable {
  static runTest () {
    let map = Immutable.Map()
    map = map.set('key1', 'value1')
    map = map.set('key2', 'value2')
    map = map.set('key3', 'value3')

    console.log('  --- for keys')
    for (let k of map.keys()) {
      console.log('    ', k)
    }

    console.log('  --- for values')
    for (let v of map.values()) {
      console.log('    ', v)
    }

    console.log('  --- for entries()')
    for (let e of map.entries()) {
      console.log('    ', e)
    }

    console.log('  --- for entries [k,v]')
    for (let [k, v] of map) {
      console.log('    ', k, '   ', v)
    }

    console.log('  --- built in filter, map, reduce!')
    map.map((v, k) => console.log('    ', v, k))

    console.log('  --- sort entries')
    {
      let map = Immutable.OrderedMap()
      map = map.set('key2', 'value2')
      map = map.set('key1', 'value1')
      map = map.set('key3', 'value3')
      map = map.sortBy()
      for (let e of map.entries()) {
        console.log('    ', e)
      }
    }
  }
}

console.log('MapWithImmutable-------------------------------------------')
MapWithImmutable.runTest()
