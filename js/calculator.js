

var botoaneNumere = document.querySelectorAll(".number");
var butoaneOperatori = document.querySelectorAll(".operator");
var rezultat = document.getElementById("rezultat");
var operatieActuala = document.getElementById("operatie");
var egal = document.querySelector(".egal-operator");

var displaySpace = 680,
    firstNumber,
    secondNumber,
    oldNumber = "",
    newNumber = "",
    operator,
    operatorGlobal,
    total,
    alesOperator = false;

for (var i = 0; i < botoaneNumere.length; i++) {

    botoaneNumere[i].addEventListener("click", function () {
        if (alesOperator == false) {
            oldNumber = this.innerHTML;
            newNumber = newNumber + oldNumber;
            firstNumber = newNumber;
            rezultat.innerHTML = firstNumber;
            console.log("First Number " + firstNumber);
            rezultat.style.marginLeft = displaySpace.toString() + "px";
        }




        if (alesOperator == true) {
            oldNumber = this.innerHTML;
            newNumber = newNumber + oldNumber;
            secondNumber = newNumber;
            rezultat.innerHTML = secondNumber;
            console.log("Second Number" + secondNumber);
            rezultat.style.marginLeft = displaySpace.toString() + "px";
        }
        displaySpace -= 17;
    })
}  //Add event listeners to numbers


for (i = 0; i < butoaneOperatori.length; i++) {
    butoaneOperatori[i].addEventListener("click", function () {

        var operator = this.innerHTML;
        operatorGlobal=operator;
        rezultat.innerHTML=rezultat.innerHTML+this.innerHTML;
        oldNumber = "";
        newNumber = "";
        console.log("Operator " + operator);
        alesOperator = true;
        displaySpace = 680;

        switch (operator) {
            case 'C':
                rezultat.style.marginLeft = displaySpace.toString() + "px";
                oldNumber = "";
                newNumber = "";
                rezultat.innerHTML = "0";
                alesOperator = false;
                break;
        }

    })
}// add event listener to Operators


    egal.addEventListener("click",function(){
        console.log(operatorGlobal);
        compute(firstNumber,secondNumber,operatorGlobal);
        showResult(total);
    })


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
        default:
            rezultat.innerHTML = parseInt(arg1,10)+parseInt(arg2,10);
    }

}
function showResult(arg1){
    console.log("Ajung in functie de afisare rezultat!");
    console.log(arg1);
    rezultat.innerHTML= arg1.toString();
}
