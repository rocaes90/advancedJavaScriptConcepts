const code = `
// global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

// function scope
function foo(){
  var fruit ='apple';
  console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined 

// block scope
function foo(){
  if(true){
      var fruit1 = 'apple';        //exist in function scope
      const fruit2 = 'banana';     //exist in block scope
      let fruit3 = 'strawberry';   //exist in block scope

  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

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
