/*
calculatrice avec DOM
*/
//create Elements


//main div
var myBody = document.querySelector("body");
var mainDiv = document.createElement("div");

myBody.appendChild(mainDiv);

//create output
var outputDiv = document.createElement("div");
var output = document.createElement("div");
var output2 = document.createElement("div");
mainDiv.appendChild(outputDiv);
outputDiv.appendChild(output);
outputDiv.appendChild(output2);

//create text in outputs
var mytxt = document.createTextNode("12+45-98+"),
    mytxt2 = document.createTextNode("45");
output.appendChild(mytxt);    
output2.appendChild(mytxt2);

//create buttons

var btnAC = document.createElement("button");
var btnDel = document.createElement("button");
var btnDivi = document.createElement("button");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btnMULTI = document.createElement("button");
var btn4 = document.createElement("button");
var btn5 = document.createElement("button");
var btn6 = document.createElement("button");
var btnPLUS = document.createElement("button");
var btn7 = document.createElement("button");
var btn8 = document.createElement("button");
var btn9 = document.createElement("button");
var btnMINUS = document.createElement("button");
var btnPOINT = document.createElement("button");
var btnZERO = document.createElement("button");
var btnEQUEL = document.createElement("button");
mainDiv.appendChild(btnAC);
mainDiv.appendChild(btnDel);
mainDiv.appendChild(btnDivi);
mainDiv.appendChild(btn1);
mainDiv.appendChild(btn2);
mainDiv.appendChild(btn3);
mainDiv.appendChild(btnMULTI);
mainDiv.appendChild(btn4);
mainDiv.appendChild(btn5);
mainDiv.appendChild(btn6);
mainDiv.appendChild(btnPLUS);
mainDiv.appendChild(btn7);
mainDiv.appendChild(btn8);
mainDiv.appendChild(btn9);
mainDiv.appendChild(btnMINUS);
mainDiv.appendChild(btnPOINT);
mainDiv.appendChild(btnZERO);
mainDiv.appendChild(btnEQUEL);

//add text to buttons
btnAC.textContent = "AC";
btnDel.textContent = "DEL";
btnDivi.textContent = "÷";
btn1.textContent = "1";
btn2.textContent = "2";
btn3.textContent = "3";
btnMULTI.textContent = "*";
btn4.textContent = "4";
btn5.textContent = "5";
btn6.textContent = "6";
btnPLUS.textContent = "+";
btn7.textContent = "7";
btn8.textContent = "8";
btn9.textContent = "9";
btnMINUS.textContent = "-";
btnPOINT.textContent = ".";
btnZERO.textContent = "0";
btnEQUEL.textContent = "=";

// Add style
//global style
document.querySelector("*").style.cssText = " box-sizing: border-box;font-family: Gotham Rounded,sans-serif;font-weight: normal;";
//body
myBody.style.cssText = "font-family: Gotham Rounded,sans-serif;padding:0;margin: 0;background: linear-gradient(to right,#00AAFF, #00FF6C);";

//mainDiv style
Object.assign(mainDiv.style, {
   display:"grid",
   justifyContent: "center",
   alignContent: "center",
   minHeight : "100vh",
   gridTemplateColumns: "repeat(4,100px)",
   gridTemplateRows: "minmax(120px, auto) repeat(5,100px)",
});

// outputDiv style
outputDiv.style.cssText = "grid-column: 1 / -1;background-color: rgba(0, 0, 0, 0.75);display: flex;flex-direction: column;justify-content: space-around;align-content: flex-end;padding: 10px;align-items: flex-end;word-wrap: break-word;";

//output1
output.style.cssText = "color: rgba(255, 255, 255, 0.75);font-size: 1.5rem;";
//output2
output2.style.cssText = "color: rgba(255, 255, 255);font-size: 2.5rem;";


//buttons
for (let i = 0; i < mainDiv.children.length; i++) {
    if (mainDiv.children[i].tagName === "BUTTON") {
        mainDiv.children[i].setAttribute("style","font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.75);");

       
        //add hover to buttons
    mainDiv.children[i].onmouseover = function () {
        mainDiv.children[i].setAttribute("style","font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.9);");
        
    }
    mainDiv.children[i].onmouseout = function () {
        mainDiv.children[i].setAttribute("style","font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.75);");
    }
}
//button AC
btnAC.onmouseover = function(){
    btnAC.style.cssText = "grid-column: span 2;font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.9);";
}
btnAC.onmouseout = function(){
    btnAC.style.cssText = "grid-column: span 2;font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.75);";
}
btnAC.style.cssText = "grid-column: span 2;font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.75);";
//button Equal
btnEQUEL.style.cssText = "grid-column: span 2;font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.75);";
btnEQUEL.onmouseover = function(){
    btnEQUEL.style.cssText = "grid-column: span 2;font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.9);";
}
btnEQUEL.onmouseout = function(){
    btnEQUEL.style.cssText = "grid-column: span 2;font-family: Gotham Rounded,sans-serif;font-size: 2rem;border: 1px solid white;outline:none;cursor: pointer;background-color: rgba(255, 255, 255, 0.75);";
}
}










































