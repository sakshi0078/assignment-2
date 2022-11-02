//Problem 2: Use the above function to print the Primes from 2 to a given limit
 function checkprime(num){
let count=0;
for(let i=0; i<=num; i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  return true;
}else
{
  return false;
}
}

for(let j=2; j<=10; j++){
  let ans= checkprime(j);
  if(ans==true){
    console.log(j, "is prime")
  }
}