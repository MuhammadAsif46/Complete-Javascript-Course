let randomNumber = Math.floor(Math.random()*100); //50
let user;
let chances = 0

while (user !== randomNumber) {
    chances = chances + 1
    user = +prompt("guess a number");
    
    if(user === randomNumber){
        console.log("this number is correct ");
        console.log(`you guess the number in ${0 + chances} chances,accuall number is : ${randomNumber} `);
    } else if( user > randomNumber && user < 100){
       console.log("this number is greater than random number " + user);
    } else if( user < randomNumber && user > 0){
        console.log("this number is smaller than random number " + user);
    }
    else{
        console.log("Enter a number between 1 to 100");
    }
}

console.log(randomNumber);
