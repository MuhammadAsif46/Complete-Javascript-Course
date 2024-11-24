// Chapter No 12 : Q1

const x = (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve(text)
      },2000)
    });
  };
  
  
  (
      async()=>{
          let text1 = await x("hello");
          console.log(text1);
          let text2 = await x("world");
          console.log(text2);
      }
  )()
  

// Chapter No 12 : Q2


function sum(a,b,c){
    return a + b + c;
}

let a = [1,3,5];
console.log(sum(...a));


// Chapter No 12 : Q3

const simpleInterest =(p, r, t)=>{
    return (p * r * t) / 100;
}

console.log(simpleInterest(1000,5,1));