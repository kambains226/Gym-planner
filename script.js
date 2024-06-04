// js file for the project 


//global variables 

//record button 



// when the recordWorkout button is clicked, the recordWorkout function is called
const workoutButton = document.querySelector("#exercise");
function recordWorkout(){
    workoutButton.style.display = "none";
    //create exercise to add 
    const workout = document.createElement("div");
    workout.classList.add("workout");

    //add exercise button
    addButton();
    removeButton();

    workoutButton.style.display = "inline-block";


}

// creates the putton to add an exercise
function addButton(){
    const addDiv = document.createElement("div");
    addDiv.classList.add("add");

    const addButton = document.createElement("button");
    addButton.classList.add("button");
    
    const line1 = document.createElement("div");
    const line2 = document.createElement("div");
    line1.classList.add("line1");
    line2.classList.add("line2");
    
    addDiv.appendChild(addButton);
    addDiv.appendChild(line1);
    addDiv.appendChild(line2);

    document.body.appendChild(addDiv);

}
//creates the remove button
function removeButton(){
    const minusDiv = document.createElement("div");
    minusDiv.classList.add("minus");

    const minusButton = document.createElement("button");
    minusButton.classList.add("button");
    
    const line1 = document.createElement("div");
    
    line1.classList.add("line1");
    
    
    minusDiv.appendChild(minusButton);
    minusDiv.appendChild(line1);
 
    document.body.appendChild(minusDiv);

}

