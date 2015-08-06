// medium challenge 

var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Input the nth number of prime number we want to get ", function (num) {
    
    var isprime = true; 
    var primearr= [];
  
    for (var i = 2; i < 10000; i++){
    for (var j = 2; j<i ; j++){
    if (i % j == 0){isprime = false;} 
        };
    if (isprime){primearr.push(i);}
    isprime = true; 
    };
    console.log("the "+num+ " prime number is "+ primearr[num-1]); 
    
    process.exit();
});