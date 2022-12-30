const str = "*";
const maxIteration = 6;

for(let iteration = 0 ; iteration<maxIteration; iteration++) {
   console.log(str.repeat(iteration+1))
}

console.log("------------------using nested Loop-------------------");

for(let iteration=0;iteration<maxIteration;iteration++){
  do {
    console.log(str.repeat(iteration+1))
    iteration++;
  }while(iteration<6)
}


  
  