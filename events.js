let num = 0;
function increment() {
    const countElem = document.getElementById('count');
    countElem.innerText = ++num;
}
function decrement() {
    const countElem = document.getElementById('count');
    countElem.innerText = --num;
}
function reset() {
    const countElem = document.getElementById('count');
    num = 0;
    countElem.innerText = 0;
}

function modifyNum(number) {
    const countElem = document.getElementById('count');
    num += number;
    countElem.innerText = num;
}

function fizzbuzz() {
    console.log(document.querySelector('#fizzbuzz-input').value);
    const fizzElem = document.getElementById('fizzbuzz-output');

    let value = document.querySelector('#fizzbuzz-input').value;
    fizzElem.innerText = "";

    if(value <= 0){
        fizzElem.innerText = "Not a valid number";
    }else{
        for(let i = 0; i <= value; i++){
            if(i == 0){
                fizzElem.innerText += 0 + "\n";
            }else if(i % 15 == 0){
                fizzElem.innerText += "FizzBuzz\n";
            }else if(i % 5 == 0){
                fizzElem.innerText += "Buzz\n";
            }else if(i % 3 == 0){
                fizzElem.innerText += "Fizz\n";
            }else{
                fizzElem.innerText += i + "\n";
            }
        }
    }
}

let num1 = "";
let num2 = "";
let opperation = "";
let justDidCalc = false;

function calculator(value) {
    const output = document.getElementById('expression');
    
    if((value === "+" || value === "-" || value === "/" || value === "*") && num1 !== "" && opperation === ""){
        opperation = value;
        output.innerText += value;
        justDidCalc = false;
    }else if(opperation === "" && (!isNaN(value) || (value === "." && !num1.includes(".")))  && !justDidCalc){
        num1 += value;
        output.innerText += value; 
    }else if(!isNaN(value) || (value === "." && !num2.includes("."))  && !justDidCalc){
        num2 += value;
        output.innerText += value;
    }else if(value === "=" && (num1 !=="" && num2 !=="")){
        output.innerText = math();
        num1 = output.innerText;
        num2 = "";
        opperation = "";
        justDidCalc = true;
    }else if(value === "AC"){
        num1 = "";
        num2 = "";
        opperation = "";
        justDidCalc = false;

        output.innerText = "";
    }
}

function math(){
    let num1_int = Number(num1);
    let num2_int = Number(num2);

    switch(opperation){
        case "+":
            return num1_int + num2_int;
        case "-":
            return num1_int - num2_int;
        case "/":
            return num1_int / num2_int;
        case "*":
            return num1_int * num2_int; 
    }
}
