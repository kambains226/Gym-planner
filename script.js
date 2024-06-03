// js file for the project 


//global variables 

//record button 
const recordButton = document.getElementById("recordButton");


// when the recordWorkout button is clicked, the recordWorkout function is called
function recordWorkout(){
    recordButton.style.display = "none";
    //create exercise to add 
    const workout = document.createElement("div");
    workout.classList.add("workout");

    //add exercise button
    const addExerciseButton = document.createElement("button");
    addExerciseButton.classList.add("addExercise");
    addExerciseButton.innerHTML = "Add Exercise";
    


}

