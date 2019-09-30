

var botoaneNumere = document.querySelectorAll(".number");
var butoaneOperatori = document.querySelectorAll(".operator");
var rezultat = document.getElementById("rezultat");
var operatieActuala = document.getElementById("operatie");
var egal = document.querySelector(".egal-operator");
var historyOperatorBtn = document.querySelector(".fa-history");
var cellButton = document.querySelectorAll(".cell");

var priorOperationResult,
    firstNumber,
    secondNumber,
    cellResult,
    cellFirstNumber,
    cellSecondNumber,
    cellOperant,
    oldNumber = "",
    newNumber = "",
    operator,
    operatorGlobal,
    total = 1,
    alesOperator = false,
    on = 1
    rowNum = 0,
    cellNum = 0;

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
            rezultat.innerHTML = rezultat.innerHTML + this.innerHTML;
            console.log("Second Number" + secondNumber);
        }

    })
}  //Add event listeners to numbers


for (i = 0; i < butoaneOperatori.length; i++) {
    butoaneOperatori[i].addEventListener("click", function () {


        var operator = this.innerHTML;
        operatorGlobal = operator;
        rezultat.innerHTML = rezultat.innerHTML + operator;
        oldNumber = "";
        newNumber = "";
        console.log("Operator " + operator);
        alesOperator = true;


        switch (operator) {
            case 'C':
                oldNumber = "";
                newNumber = "";
                total = 1;
                rezultat.innerHTML = "0";
                alesOperator = false;
                break;
            case 'e<sup>x</sup>':
                total = Math.exp(firstNumber);
                showResult(total);
                break;
            case 'x!':
                total = permutari(firstNumber, total);
                showResult(total);
                break;
            case 'ln':
                total = Math.log(firstNumber);
                showResult(total);
                break;
            case '√':
                console.log("Ai ajuns in functia radical");
                total = Math.sqrt(firstNumber);
                showResult(total);
            break;


        }

    })
}// add event listener to Operators


egal.addEventListener("click", function () {
    if(firstNumber != 0){

    
    console.log(operatorGlobal);
    compute(firstNumber, secondNumber, operatorGlobal);
    moveOperations();
    showResult(total);
    firstNumber = total;
    addNode();
    
    logicFlows();
}
else{
    return;
}

    //
    //If user is pressing afterwards button do the following
    //Else if the user is pressing operator ia rezultatul si da-l la primulnumar ca valoare

    //Gandeste-te daca mai sunt si alte posibilitati
})


historyOperatorBtn.addEventListener("click", function () {
    toggleHistoryContainer();


});

function toggleHistoryContainer() {
    switch (on) {
        case 0:
            document.querySelector(".container-history").classList.remove("visible");
            historyOperatorBtn.classList.remove("blue");
            on = 1;
            break;
        case 1:
            document.querySelector(".container-history").classList.add("visible");
            historyOperatorBtn.classList.add("blue");
            on = 0;
            break;
    }
}

function addNode() {
    var result, body;
    result = total;
    body = priorOperationResult;
    equal = " = ";

    rowNum++; cellNum++;

    var rowClass = "row_" + rowNum.toString();
    var cellClass = "cell_" + cellNum.toString();
    cellNum++;
    var cellClass2 = "cell_" + cellNum.toString();
    cellNum++;
    var cellClass3 = "cell cell_" + cellNum.toString();

    var node = document.createElement("tr");
    node.className = rowClass;

    var childNode = document.createElement("td");
    var childNode2 = document.createElement("td");
    var childNode3 = document.createElement("p");

    childNode.className = cellClass;
    childNode2.className = cellClass3;
    childNode3.className = cellClass2;


    //var textnode = document.createTextNode(firstNumber+" "+operatorGlobal+" "+secondNumber+" = "+total);
    var textnodeLeft = document.createTextNode(body);
    var textnodeRight = document.createTextNode(result);
    var textnodeBetween = document.createTextNode(equal);


    document.querySelector("table").appendChild(node);
    document.querySelector("." + rowClass).appendChild(childNode);
    document.querySelector("." + rowClass).appendChild(childNode3);
    document.querySelector("." + rowClass).appendChild(childNode2);
    childNode.appendChild(textnodeLeft);
    childNode2.appendChild(textnodeRight);
    childNode3.appendChild(textnodeBetween);
    cellButton = document.querySelectorAll(".cell");
    addListenerForCells();
}

//Functii;
function depanareLog(arg1) {
    console.log(arg1);
}

function compute(arg1, arg2, arg3) {

    console.log("Ajunge in functia de compute");
    console.log("Primul numar" + arg1 + "Al doilea numar " + arg2 + " Iar operantul este" + arg3);
    switch (arg3) {
        case '+':
            total = parseInt(arg1, 10) + parseInt(arg2, 10);
            console.log("ajunge la compute de adunare si totatlul este " + total);
            break;
        case '−':
            total = parseInt(arg1, 10) - parseInt(arg2, 10);
            console.log("ajunge la compute de scadere si totatlul este " + total);
            break;
        case '×':
            total = parseInt(arg1, 10) * parseInt(arg2, 10);
            console.log("ajunge la compute de inmultire si totatlul este " + total);
            break;
        case '÷':
            total = parseInt(arg1, 10) / parseInt(arg2, 10);
            console.log("ajunge la compute de impartire si totatlul este " + total);
            break;
        case 'x<sup>y</sup>':
            total = Math.pow(arg1, arg2);
            console.log("Ajunge la compute exponential si totalul este " + total);
            break;
        case '%':
            total = (arg1 * arg2) / 100;
            console.log("Ajunge in functia procent");
            break;



        default:
            rezultat.innerHTML = parseInt(arg1, 10) + parseInt(arg2, 10);
    }

}
function permutari(arg1, result) {
    while (arg1 >= 2) {

        result *= arg1 * (arg1 - 1);
        arg1 = arg1 - 2;
    }
    return result;
}

function showResult(arg1) {
    console.log("Ajung in functie de afisare rezultat!");
    console.log(arg1);
    rezultat.innerHTML = arg1.toString();
}
function logicFlows() {
    if (rezultat.innerHTML == "NaN") {
        document.querySelector(".erase").click();
    }
}

//take  operatior or result from cell and move it to display;
function addListenerForCells() {
    for (var i = 0; i < cellButton.length; i++) {
        cellButton[i].addEventListener("click", function () {
            
            cellResult = this.innerHTML;
            alert("Detectez click"+cellResult);
            console.log(cellResult);
            firstNumber = parseInt(cellResult,10);
            showResult(firstNumber);

        })
    }
}

function moveOperations() {
    priorOperationResult = rezultat.innerHTML;
    document.querySelector(".prior-operation").innerHTML =priorOperationResult+" = ";
}
