window.onload = init;  //to load javascript after page loads
    
var counter = 0; //this var declares our counter
   
function init() {
//code below sets generate button so that it calls on generate function
var generateButton = document.getElementById("generateButton");
generateButton.onclick = generate;
//code below sets clear button so that it calls on clear function
var clearBoxes = document.getElementById("clearButton");
clearBoxes.onclick = clear;
}
   
function Box(id,name,color,x,y) { //This is the object constructor
     this.id = id;
     this.name = name;
     this.color = color;
     this.x = x;
     this.y = y;
     this.createDiv = function() {
         var myDiv = document.createElement("div");
         myDiv.setAttribute("class", "box");  //sets "box" class for all the divs
         myDiv.setAttribute("id", counter);
         myDiv.name = name;  //helps for calling name later for alert message
         myDiv.style.backgroundColor = color;
         myDiv.style.left = x + "px";
         myDiv.style.top = y + "px";
         var canvas = document.getElementById("scene");
         myDiv.onclick = display;  //calls on display function when the div box we created is clicked
         var p = document.createElement("p");
         myDiv.appendChild(p);  //adds new boxes to the div called scene
         p.innerHTML = name;
         scene.appendChild(myDiv);
      }
    }


//function for displaying box information
function display(event) {
     var targ = event.currentTarget;
     console.log(event);
      //var pos = getOffset(targ);
     alert("My name is " + targ.name + ", my ID is " + targ.id + ", I'm " + targ.style.backgroundColor + ", and my location is (" + targ.style.left + ", " + targ.style.top + ").");
}


//function getOffset( el ) {  //this creates a function to get the x,y, coordinates for display in the alert message
//var _x = 0;
//var _y = 0;
//while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//_x += el.offsetLeft - el.scrollLeft;
//_y += el.offsetTop - el.scrollTop;
//el = el.offsetParent;
//}
//return { top: _y, left: _x };
//}
   
//var x = getOffset( document.getElementById('yourElId') ).left;


   function generate()  { //generates the boxes by getting data input by user
     var data = document.forms.data;
     var sceneDiv = document.getElementById("scene");
     var name = data.elements.name.value;
     if (name == null || name == "") { //message if name is blank
     alert("Name your amazing boxes or they will not materialize!");
       return;
     }
     var colorSelect = document.getElementById("color");
     var colorOption = colorSelect.options[colorSelect.selectedIndex];
     var color = colorOption.value;
     var howMany = data.elements.amount;
     var amount;
     var id;
     var boxes = [];  //array for boxes      
     for (i = 0; i < howMany.length; i++) {  // calculates how many boxes and where to place them
       if (howMany[i].checked) {
         amount = parseInt(howMany[i].value);
         for (j = 0; j < amount; j++) {
           var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));
           var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));
     var myBox = new Box(id, name, color, x, y);
     boxes.push(myBox);
     myBox.createDiv();
     counter++;
         }
       }
     }
         if (amount == null) {   //message if amount is not chosen
       alert("Choose the number of amazing boxes to appear or my magic will not work!");
       return;
     }
           
     var data = document.forms.data;
     data.reset();
}
     
//function for clearing the boxes
function clear() {
var sceneClear = document.getElementById("scene");
       if (sceneClear.hasChildNodes()) {
         while (sceneClear.childNodes.length > 0) {
           sceneClear.removeChild(sceneClear.firstChild);
      }
   }
}
