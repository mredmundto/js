// medium challenge 

var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Input the number to see if that is a prime number ", function (num) {
    
 var output = true; 
  for (var i = 2; i < num; i++){ 
      if ( num%i == 0){output = false;};
      };   
        if ( num == 2){ output = true;}
      console.log(output); 
    process.exit();
});