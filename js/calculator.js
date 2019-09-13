

var botoaneNumere = document.querySelectorAll(".number");
var butoaneOperatori = document.querySelectorAll(".operator");
var rezultat = document.getElementById("rezultat");

var addagain = false;
var displaySpace = 630, firstNumber,secondNumber, oldNumber = "", newNumber = "",operator="",alesOperator=false;

for (var i = 0; i < botoaneNumere.length; i++) {

    botoaneNumere[i].addEventListener("click", function () {
        if(alesOperator==false){
        oldNumber = this.innerHTML;
        newNumber = newNumber + oldNumber;
        firstNumber=newNumber;
        rezultat.innerHTML = firstNumber;
        console.log("First Number "+firstNumber);
        rezultat.style.marginLeft = displaySpace.toString() + "px";
        }

        
        

        if(alesOperator==true){
        oldNumber = this.innerHTML;
        newNumber = newNumber + oldNumber;
        secondNumber=newNumber;
        rezultat.innerHTML = secondNumber;
        console.log("Second Number"+secondNumber);
        rezultat.style.marginLeft = displaySpace.toString() + "px";
        }
        displaySpace -= 17;
    })
}  //Add event listeners to numbers


for(i = 0; i<butoaneOperatori.length;i++){
    butoaneOperatori[i].addEventListener("click", function(){
        
        var operator = this.innerHTML;
        oldNumber="";
        newNumber="";
        console.log("Operator "+operator);
        alesOperator=true;
        displaySpace=630;
        //compute(firstNumber,secondNumber,operator);

        switch(operator){
            case 'AC':
                    rezultat.style.marginLeft = displaySpace.toString() + "px";
                    oldNumber="";
                    newNumber="";
                    rezultat.innerHTML ="0";
                    alesOperator=false;
                    break;
            case '=':
                //compute(firstNumber,secondNumber,operator);
        }

    })
}// add event listener to Operators


function depanareLog(arg1) {
    console.log(arg1);
}

function compute(arg1,arg2,operator){
    switch(operator){
        case '+':
                
                rezultat.innerHTML=arg1+arg2;
                console.log("ajunge la compute de adunare");
        break;
        default:
                rezultat.innerHTML =newNumber+oldNumber;
    }

}



// function compute(arg1,arg2,operator) {

//     function suma(arg1, arg2) {
//         return arg1 + arg2;
//     }
//     function scadere(arg1, arg2) {
//         return arg1 - arg2;
//     }
//     function inmultire(arg1, arg2) {
//         return arg1 * arg2;
//     }
//     function impartire(arg1, arg2) {
//         return arg1 / arg2;
//     }

//     function egal(arg1, arg2, operant) {
//         return operant(arg1, arg2);
//     }
// }