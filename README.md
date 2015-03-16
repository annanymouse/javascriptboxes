# javascriptboxes

Here are the rest of the requirements for the JavaScript:  

Box(): create a constructor function named Box to create box objects for each box that's generated. The Box object will hold each property of a box, including its id, name, color, and x and y positions. Note that the id of each box must be unique, but the name isn't (you'll have multiple boxes with the same name). 

boxes: an array of all the boxes. All boxes should be represented by elements, and given the class "box" and a unique id. (Note that you can just use a number for an id if you want!). 

counter: a global variable that keeps track of the number of boxes generated, which you can use to create a unique id for each box. 

init(): the load handler. 

generate(): the click handler for the Generate! button. This function generates the &lt;div> elements that represent the boxes. 

clear(): the click handler for the Clear! button. This function removes all the boxes from the scene, and resets everything so you can start from scratch. 

display(): the click handler for each box. When the user clicks on a box, this function will show an alert with all the information about the box, including its id, name, color, and position.
