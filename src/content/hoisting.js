const code = `
      // here is the code

      var a = 1;
      var b = 2;
      c = 3;

      var c;

      hoist()

      function hoist() {
        // some code
      }

      var hoist2 = () => {
        // some code
      }

      _________________________________________
      // JS creation phase this is the behavior

      var a = undefined;
      var b = undefined;
      var c = undefined;

      function hoist() {
        // some code
      }
      var hoist2 = undefined;

      a = 1;
      b = 2;
      c = 3;

      hoist2 = () => {
        // some code
      }

`

export default code
