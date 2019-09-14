

var botoaneNumere = document.querySelectorAll(".number");
var butoaneOperatori = document.querySelectorAll(".operator");
var rezultat = document.getElementById("rezultat");
var operatieActuala = document.getElementById("operatie");
var egal = document.querySelector(".egal-operator");

var 
    firstNumber,
    secondNumber,
    oldNumber = "",
    newNumber = "",
    operator,
    operatorGlobal,
    total=1,
    alesOperator = false;

for (var i = 0; i < botoaneNumere.length; i++) {

    botoaneNumere[i].addEventListener("click", function () {
        if (alesOperator == false) {
            oldNumber = this.innerHTML;
            newNumber = newNumber + oldNumber;
            firstNumber = newNumber;
            rezultat.innerHTML = firstNumber;
            console.log("First Number " + firstNumber);
            
        }




        if (alesOperator == true) {
            oldNumber = this.innerHTML;
            newNumber = newNumber + oldNumber;
            secondNumber = newNumber;
            rezultat.innerHTML =rezultat.innerHTML+this.innerHTML;
            console.log("Second Number" + secondNumber);
        }
        
    })
}  //Add event listeners to numbers


for (i = 0; i < butoaneOperatori.length; i++) {
    butoaneOperatori[i].addEventListener("click", function () {

        
        var operator = this.innerHTML;
        operatorGlobal=operator;
        rezultat.innerHTML=rezultat.innerHTML+operator;
        oldNumber = "";
        newNumber = "";
        console.log("Operator " + operator);
        alesOperator = true;
       

        switch (operator) {
            case 'C':
                oldNumber = "";
                newNumber = "";
                total=1;
                rezultat.innerHTML = "0";
                alesOperator = false;
                break;
            case 'e<sup>x</sup>':
                total = Math.exp(firstNumber);
                showResult(total);
                break;
            case 'x!':
                total = permutari(firstNumber,total);
                showResult(total);
                break;
            case 'ln':
                total = Math.log(firstNumber);
                showResult(total);
                break;


        }

    })
}// add event listener to Operators


    egal.addEventListener("click",function(){
        
        console.log(operatorGlobal);
        compute(firstNumber,secondNumber,operatorGlobal);
        moveOperations();
        showResult(total);
        displaySpace = displaySpace -(17 *total.lenth);
        logicFlows();
    })

//Functii;
function depanareLog(arg1) {
    console.log(arg1);
}

function compute(arg1, arg2, arg3) {
    
    console.log("Ajunge in functia de compute");
    console.log("Primul numar"+arg1 +"Al doilea numar "+arg2+ " Iar operantul este"+ arg3);
    switch (arg3) {
        case  '+':
            total = parseInt(arg1,10)+parseInt(arg2,10);
            console.log("ajunge la compute de adunare si totatlul este "+total);
            break;
        case '−':
            total=parseInt(arg1,10)-parseInt(arg2,10);
            console.log("ajunge la compute de scadere si totatlul este "+total);
            break;
        case '×':
            total=parseInt(arg1,10)*parseInt(arg2,10);
            console.log("ajunge la compute de inmultire si totatlul este "+total);
            break;
        case '÷':
            total=parseInt(arg1,10)/parseInt(arg2,10);
            console.log("ajunge la compute de impartire si totatlul este "+total);
            break;
        case 'x<sup>y</sup>':
            total=Math.pow(arg1,arg2);
            console.log("Ajunge la compute exponential si totalul este "+total);
            break;
        case '%':
            total = (arg1 *arg2)/100;
            console.log("Ajunge in functia procent");
            break;
        

        default:
            rezultat.innerHTML = parseInt(arg1,10)+parseInt(arg2,10);
    }

}
function permutari(arg1,result){
    while(arg1>=2){

        result *= arg1*(arg1-1);
        arg1=arg1-2;
    }
    return result;
}

function showResult(arg1){
    console.log("Ajung in functie de afisare rezultat!");
    console.log(arg1);
    rezultat.innerHTML= arg1.toString();
}
function logicFlows(){
    if(rezultat.innerHTML =="NaN"){
        document.querySelector(".erase").click();
    }
}
function moveOperations(){
    document.querySelector(".prior-operation").innerHTML=rezultat.innerHTML+" = ";
}
