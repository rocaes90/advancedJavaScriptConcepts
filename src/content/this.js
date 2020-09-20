const code = `
// here is the code

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this)
    var anotherFunc = function() {
      console.log('b', this)
    }
    anotherFunc()
  }
}

> obj.sing()

> a: {name: "Billy", sing: f}
> b: Window { postMessage:f, blur:f , focus:f, close:f, parent: Window, ... }

`

export default code
