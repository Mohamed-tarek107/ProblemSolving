function countdown(number){
    if(number == 0){
        return 0;
    }
    console.log(number)
    countdown(number - 1)
}


//Factorial
function Factorial(number){
    return number == 0 ? 1 : number * Factorial(number - 1)
}
