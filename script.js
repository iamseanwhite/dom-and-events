var newTable = document.createElement("table");

var newTr = document.createElement("tr");
newTable.appendChild(newTr);

for (var i = 1; i < 5; i++) {
  var newTd = document.createElement("td");
  newTd.textContent = "Header " + i;
  newTd.style.border = "1px solid black";
  newTd.className = "header";
  newTr.appendChild(newTd);
}

newTr = document.createElement("tr");
newTable.appendChild(newTr);

var newTd = document.createElement("td");
newTd.textContent = "1, 1";
newTd.style.border = "2px solid black";
newTd.id = "selected";
newTd.className = "cell";
newTr.appendChild(newTd);


function cellMaker(text, className){
  var newTd = document.createElement("td");
  newTd.textContent = text;
  newTd.style.border = "1px solid black";
  newTd.className = className;
  newTr.appendChild(newTd);
}

cellMaker("2, 1", "cell");
cellMaker("3, 1", "cell");
cellMaker("4, 1", "cell");

newTr = document.createElement("tr");
newTable.appendChild(newTr);

cellMaker("1, 2", "cell");
cellMaker("2, 2", "cell");
cellMaker("3, 2", "cell");
cellMaker("4, 2", "cell");

newTr = document.createElement("tr");
newTable.appendChild(newTr);

cellMaker("1, 3", "cell");
cellMaker("2, 3", "cell");
cellMaker("3, 3", "cell");
cellMaker("4, 3", "cell");

document.getElementById("body").appendChild(newTable);

function buttonMaker(text, id) {
  var newButton = document.createElement("button");
  newButton.textContent = text;
  newButton.id = id;
  newButton.style.borderRadius = "10px";

  document.getElementById("body").appendChild(newButton);
}

buttonMaker("Up", "up");
buttonMaker("Down", "down");
buttonMaker("Left", "left");
buttonMaker("Right", "right");
buttonMaker("Mark Cell", "marker");

function changeColor() {
  //debugger;
  var toUpdate = document.getElementById("selected");
  if(toUpdate.style.backgroundColor != "yellow"){
  		toUpdate.style.backgroundColor = "yellow";
  }
}

function moveRight(){
	if (document.getElementById("selected").nextElementSibling.className == "cell"){
		  var cell = document.getElementById("selected");
          cell.style.border = "1px solid black";
          cell.id = "notSelected";
          cell = cell.nextElementSibling;
          cell.id = "selected";
          cell.style.border = "2px solid black";
   }
}

function moveLeft(){
	if (document.getElementById("selected").previousElementSibling.className == "cell"){
		  var cell = document.getElementById("selected");
          cell.style.border = "1px solid black";
          cell.id = "notSelected";
          cell = cell.previousElementSibling;
          cell.id = "selected";
          cell.style.border = "2px solid black";
   }
}


function moveUp(){
	var cell = document.getElementById("selected");
  if(cell.parentNode.previousElementSibling.firstElementChild.className != "header"){
      cell.style.border = "1px solid black";
      cell.id = "notSelected";
      var position = 1;
      for (var i = 0; i < 4; i++){
          if (cell.previousElementSibling != null){
            cell = cell.previousElementSibling;
            position++;	
          }
      }

      cell = cell.parentNode;
      cell = cell.previousElementSibling;
      cell = cell.firstElementChild;
      for(var i = position; i > 1; i--)
          cell = cell.nextElementSibling;
          
          cell.id = "selected";
          cell.style.border = "2px solid black";
   }
}


function moveDown(){
debugger;
	var cell = document.getElementById("selected");
  if(cell.parentNode.nextElementSibling.firstElementChild.className == "cell"){
      cell.style.border = "1px solid black";
      cell.id = "notSelected";
      var position = 1;
      for (var i = 0; i < 4; i++){
          if (cell.previousElementSibling != null){
            cell = cell.previousElementSibling;
            position++;	
          }
      }

      cell = cell.parentNode;
      cell = cell.nextElementSibling;
      cell = cell.firstElementChild;
      for(var i = position; i > 1; i--)
          cell = cell.nextElementSibling;
          
          cell.id = "selected";
          cell.style.border = "2px solid black";
   }
}

document.getElementById("marker").addEventListener("click", changeColor);

document.getElementById("up").addEventListener("click", moveUp);
document.getElementById("down").addEventListener("click", moveDown);
document.getElementById("left").addEventListener("click", moveLeft);
document.getElementById("right").addEventListener("click", moveRight);
