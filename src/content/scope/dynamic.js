const code = `

    // dynamic scope
    function foo() {
      console.log( a ); // 3  (not 2!)
    }

    function bar() {
      var a = 3;
      foo();
    }

    var a = 2;

    bar();

`

export default code
