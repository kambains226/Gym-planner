// js file for the project 


//global variables 
// variables to keep count of sets
// let setNum = 0;


// when the recordWorkout button is clicked, the recordWorkout function is called




const addDiv = document.querySelector(".workout");
const parentOfAddDiv = addDiv.parentElement;
 //table for information

// function recordWorkout(){
    
//     const table = document.createElement("table");
    
//     const workoutLayout = document.createElement("div");
//     workoutLayout.classList.add("workoutLayout");
//     workoutButton.disabled = true;
//     let exerciseName=document.createElement("textarea");
//     exerciseName.maxLength = 20;
//     exerciseName.placeholder = "Enter exercise";
//     exerciseName.classList.add("exerciseName");
//     document.body.appendChild(exerciseName);
//     //create exercise to add 
//     exerciseName.addEventListener('keypress', function(event){
//         //occurs when the user pressses enter 
//         if (event.key === "Enter"){

//             exerciseName.style.display = "none"; // makes the text area disappear
//             //creates a lable of the exercise name 
//             let exerciseLabel = document.createElement("label");
//             exerciseLabel.textContent = exerciseName.value;
            
//             parentOfAddDiv.insertBefore(workoutLayout,addDiv); //gets  the parent of add div and buts the workoutlayout before that element
//             exerciseLabel.classList.add("exerciseLabel");
//             workoutLayout.appendChild(exerciseLabel);
            
//             exerciseTable(table,workoutLayout); // creates the table of exercise
//             const minusButton = document.createElement("button"); // creates the minus button

//             let setNum = 0;
//             //creates the table of infomration
//             for (let i = 0; i < 3; i++){
//                 addRow(table,minusButton,setNum); 
//             }
//             addButton(table,workoutLayout,minusButton,setNum);
            
//             removeButton(table,workoutLayout,minusButton,setNum);
//             workoutButton.disabled = false;
            
            
//         }
        
//     });
    

//     //add and minus  exercise button
    
    
    
    

    


// }


// // creates the putton to add an exercise
// function addButton(table,layout,button,num){
    
//     const addDiv = document.createElement("div");
//     addDiv.classList.add("add");

//     const addButton = document.createElement("button");
//     addButton.classList.add("button");
    
//     const line1 = document.createElement("div");
//     const line2 = document.createElement("div");
//     line1.classList.add("line1");
//     line2.classList.add("line2");
    
//     addDiv.appendChild(addButton);
//     addDiv.appendChild(line1);
//     addDiv.appendChild(line2);

//     layout.appendChild(addDiv);

//     addButton.addEventListener("click",function(){
//         addRow(table,button,num);
//     });
// }
// //creates the remove button
// function removeButton(table,layout,button,setNum){
    
//     const minusDiv = document.createElement("div");
//     minusDiv.classList.add("minus");

    
//     button.classList.add("button");
    
//     const line1 = document.createElement("div");
    
//     line1.classList.add("line1");
    
    
//     minusDiv.appendChild(button);
//     minusDiv.appendChild(line1);
 
//     layout.appendChild(minusDiv);
    
//     button.addEventListener("click",function(){
//         // let table =document.querySelector(".information");
//         let lastrow = table.querySelector("tr:last-child");

//         try{
//             table.removeChild(lastrow);

//             setNum--;
            
//             //if setnum is 0 make it so you can't press the remove button 
//             if (setNum == 1){
//                 throw "error";
//             }
            
//         }
//         catch(error){
            
//             button.disabled = true;
//         }
        
        


//     });

// }

// const exerciseTable = (table,layout) => 
//     {
        
//         table.classList.add("information");
//         const HtableRow = document.createElement("tr");//the plus button will add a row minuts wil delete if there is information
    
        
        
//         table.appendChild(HtableRow);
//         layout.appendChild(table);
//         //adds the default rows to the table
//         const sets = document.createElement("th");
//         const reps =document.createElement("th");
//         const kg = document.createElement("th");
//         const previous = document.createElement("th");
//         const record = document.createElement("th");
//         const notes = document.createElement("th");
    
//         sets.textContent = "Sets";
//         reps.textContent = "Reps";
//         kg.textContent = "Kg";
//         previous.textContent = "Previous";
//         record.textContent = "Record";
//         notes.textContent = "Notes";
//         // adds the headers to the row
//         HtableRow.appendChild(sets);
//         HtableRow.appendChild(reps);
        
//         HtableRow.appendChild(kg);
//         HtableRow.appendChild(previous);
//         HtableRow.appendChild(record);
//         HtableRow.appendChild(notes);

//         layout.appendChild(table);


//     } 


// //adds inpute 

// function addRow(table,button,setNum){
//     setNum++;
//     button.disabled = false;
//     const tableRow = document.createElement("tr");
//     const sets = document.createElement("td");
//     const reps = document.createElement("td");
//     const kg = document.createElement("td");
//     const previous = document.createElement("td");
//     const record = document.createElement("td");
//     const notes = document.createElement("td");

//     sets.textContent = setNum ;
//     previous.textContent ='-';
//     record.textContent = '-';
//     //create the input boxes to go in the table 
//     const repInput = document.createElement("input");
//     const kgInput = document.createElement("input");
//     const notesInput = document.createElement("textarea");
//     kgInput.type = "number";
//     repInput.type = "number";
//     kgInput.min= 5;
//     kgInput.classList.add("kgInput");
//     repInput.classList.add("repInput");
//     notesInput.classList.add("notes");
//     notesInput.maxLength =180;
//     reps.appendChild(repInput);
//     kg.appendChild(kgInput);
//     notes.appendChild(notesInput);
//     tableRow.appendChild(sets);
//     tableRow.appendChild(reps);
//     tableRow.appendChild(kg);
//     tableRow.appendChild(previous);
//     tableRow.appendChild(record);
//     tableRow.appendChild(notes);
    
//     table.appendChild(tableRow);
//     // puts limiations on the inputs
//     repInput.addEventListener('input', function (e) {
//         //makes its so the kg can only be postive whole numbers that are 3 digits long 
//         e.target.value = Math.max(Math.round(e.target.value), 0);
//         if (e.target.value.length > 2) {
//             e.target.value = e.target.value.slice(0, 2);
//         }
//     });
//     kgInput.addEventListener('input', function (e) {
//         //makes its so the kg can only be postive whole numbers that are 3 digits long 
//         e.target.value = Math.max(Math.round(e.target.value), 0);
//         if (e.target.value.length > 3) {
//             e.target.value = e.target.value.slice(0, 3);
//         }
//     });

// }

// class that creates the tables 

class Exercise{
    constructor(setNum){
        this.num = setNum
        //maybe create a varaible ot keep track of how many times the variable has been called 
        this.localStorageContents = [];
        this.sortedkeyValues = [];
        this.test= []
        this.sortedLocal = {}
    }

    exercise(){
        const table = document.createElement("table");
        const workoutLayout = document.createElement("div");
        workoutLayout.classList.add("workoutLayout");
        workoutButton.disabled = true;
        let exerciseName=document.createElement("textarea");
        exerciseName.maxLength = 20;
        exerciseName.placeholder = "Enter exercise";
        exerciseName.classList.add("exerciseName");
        document.body.appendChild(exerciseName);
        //create exercise to add 
        exerciseName.addEventListener('keypress', (event) =>{
            //occurs when the user pressses enter 
            if (event.key === "Enter"){

                exerciseName.style.display = "none"; // makes the text area disappear
                //creates a lable of the exercise name 
                let exerciseLabel = document.createElement("label");
                exerciseLabel.textContent = exerciseName.value;
                
                parentOfAddDiv.insertBefore(workoutLayout,addDiv); //gets  the parent of add div and buts the workoutlayout before that element
                exerciseLabel.classList.add("exerciseLabel");
                workoutLayout.appendChild(exerciseLabel);
                
                this.exerciseTable(table,workoutLayout); // creates the table of exercise
                const minusButton = document.createElement("button"); // creates the minus button

                
                //creates the table of infomration
                for (let i = 0; i < 3; i++){
                    this.addRow(table,minusButton,this.num); 
                }
                this.addButton(table,workoutLayout,minusButton);
                
                this.removeButton(table,workoutLayout,minusButton);
                workoutButton.disabled = false;
                
            
        }
        


        
        
    });
    }
    addButton(table,layout,button){
        console.log(this.num);
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

        layout.appendChild(addDiv);

        addButton.addEventListener("click", () => {
            this.addRow(table, button, this.num);
        });
}
    removeButton(table,layout,button){
        console.log(this.num);
        const minusDiv = document.createElement("div");
        minusDiv.classList.add("minus");
    
        
        button.classList.add("button");
        
        const line1 = document.createElement("div");
        
        line1.classList.add("line1");
        
        
        minusDiv.appendChild(button);
        minusDiv.appendChild(line1);
     
        layout.appendChild(minusDiv);
        
        button.addEventListener("click",() =>{
            // let table =document.querySelector(".information");
            let lastrow = table.querySelector("tr:last-child");
    
            try{
                table.removeChild(lastrow);
                console.log(this.num);
                this.num--;
                
                
                //if setnum is 0 make it so you can't press the remove button 
                if (this.num == 1){
                    throw "error";
                }
                
            }
            catch(error){
                
                button.disabled = true;
            }
            
            
    
    
        });
    
    }
    exerciseTable(table,layout) 
            {
                
                table.classList.add("information");
                const HtableRow = document.createElement("tr");//the plus button will add a row minuts wil delete if there is information
            
                
                
                table.appendChild(HtableRow);
                layout.appendChild(table);
                //adds the default rows to the table
                const sets = document.createElement("th");
                const reps =document.createElement("th");
                const kg = document.createElement("th");
                const previous = document.createElement("th");
                const record = document.createElement("th");
                const notes = document.createElement("th");
            
                sets.textContent = "Sets";
                reps.textContent = "Reps";
                kg.textContent = "Kg";
                previous.textContent = "Previous";
                record.textContent = "Record";
                notes.textContent = "Notes";
                // adds the headers to the row
                HtableRow.appendChild(sets);
                HtableRow.appendChild(reps);
                
                HtableRow.appendChild(kg);
                HtableRow.appendChild(previous);
                HtableRow.appendChild(record);
                HtableRow.appendChild(notes);
        
                layout.appendChild(table);
        
        
            } 

    addRow(table,button){
        this.num++;
        
        let kgcode; // gets the kg weight from local storage
        
        button.disabled = false;
        const tableRow = document.createElement("tr");
        const sets = document.createElement("td");
        const reps = document.createElement("td");
        const kg = document.createElement("td");
        const previous = document.createElement("td");
        const record = document.createElement("td");
        const notes = document.createElement("td");
        
        let exerciseName = document.querySelector('.exerciseLabel');
        sets.textContent = this.num ;
        
        // if statment to put the previous and record in place 
        
        



        //create the input boxes to go in the table 
        const repInput = document.createElement("input");
        const kgInput = document.createElement("input");
        const notesInput = document.createElement("textarea");
        kgInput.type = "number";
        repInput.type = "number";
        kgInput.min= 5;
        kgInput.classList.add("kgInput");
        repInput.classList.add("repInput");
        notesInput.classList.add("notes");
        sets.classList.add("sets");
        notesInput.maxLength =180;
        reps.appendChild(repInput);
        kg.appendChild(kgInput);
        notes.appendChild(notesInput);
        tableRow.appendChild(sets);
        tableRow.appendChild(reps);
        tableRow.appendChild(kg);
        tableRow.appendChild(previous);
        tableRow.appendChild(record);
        tableRow.appendChild(notes);
        
        table.appendChild(tableRow);
        const setValues = document.querySelectorAll('.sets'); // gets all the set values
        let key;
        // this.sortedLocalStorage();
        this.sortsLocalStorage();
        console.log(this.localStorage)
        
        for (let i =0; i < setValues.length; i++){ //maybe try using set values.length
        
            console.log(setValues[i].textContent);
            
           
            
            for(key in this.sortedLocal){
                console.log(key);
                
            
            // console.log(key);
            let keyName= key.replace(/[0-9]/g, '')//used to get rid of the numbers from the key and is the exercise name
            let keyNumMatch= key.match(/[0-9]/g)  //gets the number from the key and matches it to check if its true

            let keyNum = keyNumMatch ? keyNumMatch.join('') : null; //number in the key for local storage to match the set num 
           
            
            
            
            if (exerciseName.textContent == keyName)
                // maybe loop through local storage for all the ones keys with tri in it 
                {
                    
                    // use the keynum to match with correct set 
                   
                       
                    
                if (keyNum == setValues[i].textContent){
                        console.log(keyNum,setValues[i].textContent ,'match');
                        console.log(this.sortedLocal[key]);
                        record.textContent =this.sortedLocal[key];
                        
                    }
                
                else{
                    if(!record.textContent){
                        record.textContent = '-';
                    }
                    
                }
                    
                    
                }
            }
        }
        
        
        

        previous.textContent ='-';

        
        
        // puts limiations on the inputs
        repInput.addEventListener('input', function (e) {
            //makes its so the kg can only be postive whole numbers that are 3 digits long 
            e.target.value = Math.max(Math.round(e.target.value), 0);
            if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
            }
        });
        kgInput.addEventListener('input', function (e) {
            //makes its so the kg can only be postive whole numbers that are 3 digits long 
            e.target.value = Math.max(Math.round(e.target.value), 0);
            if (e.target.value.length > 3) {
                e.target.value = e.target.value.slice(0, 3);
            }
            
        });
        const repsInput = document.querySelectorAll('.repInput') // gets all the rep input boxes
        const kgs = document.querySelectorAll('.kgInput') // gets all the kg input boxes
        
        
        
        
           
        
        
        
        //loops through all the users input boxes and saves the value to local storage
        for(let i =0; i < setValues.length; i++){
            kgs[i].addEventListener('input', function(){
                kgcode = exerciseName.textContent + setValues[i].textContent;
                // kgs[i].id=kgcode; //sets the kg input boxes an id 
                console.log(repsInput[i].value);
                if(repsInput[i].value && kgs[i].value){
                    localStorage.setItem(kgcode,repsInput[i].value+'x'+kgs[i].value+'kg');
                    console.log(localStorage.getItem(kgcode));
                   
                }
                
                
                
            });


        }
        

        


        
        
       
    }
    // loop through the local storage and get the correct key
    // keys(reps,kgs){
    //     array.addEventListener('input', function(){
    //     kgcode = this.exerciseName.textContent + setValues[i].textContent +'KG';
    //     localStorage.setItem(kgcode,kgs[i].value);
        
        
            
            
            
    //     });

    // }

    sortedLocalStorage(){
        

        for (let i = 0; i < localStorage.length; i++){
            this.localStorageContents.push(localStorage.key(i));
        }
        this.localStorageContents.sort();
        console.log(this.localStorageContents);
        

        //gets the values from the sorted keys and puts them in a different array
        
        for (let i = 0; i < this.localStorageContents.length; i++){
            this.sortedkeyValues.push(localStorage.getItem(this.localStorageContents[i]));
        }
        console.log(this.sortedkeyValues);
    }
    sortsLocalStorage(){
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let data = localStorage.getItem(key);
            this.sortedLocal[key] = data;  
            
            

        }
        
        
        let sortedLocalLength =Object.keys(this.sortedLocal).length
        // localStorage.clear();
        console.log(Object.keys(this.sortedLocal));
        for (let i = 0; i < sortedLocalLength; i++){
            // localStorage.setItem(this.sortedLocal.key(i),this.sortedLocal[this.sortedLocal.key(i)]);
            
            localStorage.setItem(Object.keys(this.sortedLocal)[i],this.sortedLocal[Object.keys(this.sortedLocal)[i]]);
            console.log(Object.keys(this.sortedLocal)[i],this.sortedLocal[Object.keys(this.sortedLocal)[i]]);
        }
        
    }
}




const workoutButton = document.querySelector("#exercise");


workoutButton.addEventListener("click", function(){
let exercise = new Exercise(0);
exercise.exercise();

});