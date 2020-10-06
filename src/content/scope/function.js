const code = `

      // function scope
      function foo(){
        var fruit ='apple';
        console.log('inside function: ',fruit);
      }

      foo();                    
      //inside function: apple
      console.log(fruit);       
      //error: fruit is not defined 

`

export default code
