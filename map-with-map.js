/*
  Map implemented with a javascript Map class.
*/
class MapWithMap {
  static runTest () {
    const map = new Map()

    map.set('key1', 'value1')
    map.set('key2', 'value2')
    map.set('key3', 'value3')

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

    // Drawback: filter,map,reduce not implemented for Map
    console.log('  --- map forEach value filter')
    {
      const filtered = []
      map.forEach((v, k) => { if (k === 'key2') filtered.push(v) })
      filtered.map(e => console.log('    ', e))
    }

    // Drawback: Copy to array then use filter() and map()
    console.log('  --- filter keys')
    Array.from(map.keys()).filter(k => k === 'key2').map(e => console.log('    ', e))

    // Drawback: Copy to array then use filter() and map()
    console.log('  --- filter values')
    Array.from(map.values()).filter(v => v === 'value2').map(e => console.log('    ', e))

    // Drawback: Copy to array then use filter() and map()
    console.log('  --- filter entries')
    Array.from(map.entries()).filter(a => a[0] === 'key2').map(e => console.log('    ', e))
  }
}

console.log('MapWithMap-------------------------------------------')
MapWithMap.runTest()
