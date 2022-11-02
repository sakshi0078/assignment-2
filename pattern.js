// You are given an integerN.

// Print the pattern as shown below.

// If the value stored inN = 5, then the pattern required will be

// *       *
//   *   *  
//     *    
//   *   *  
// *       *


let N=5;
for(let i=1; i<=N; i++){

  let bag="";
  
for(let j=1; j<=N; j++){

    if( i == j || i + j == (N+1)){

      bag+="* ";

    }
     
      else{
       
 bag+="  " ;
      }
    }
  console.log(bag);
 }
 
