// js file for the project 






const addDiv = document.querySelector(".workout");
const parentOfAddDiv = addDiv.parentElement;
 //table for information


// class that creates the tables 

class Exercise{
    constructor(setNum){

        this.num = setNum
        //maybe create a varaible ot keep track of how many times the variable has been called 
        this.localStorageContents = [];
        this.sortedkeyValues = [];
        this.test= []
        this.sortedLocal = {}
        this.match= false;
        this.disabled= false;
        this.startingcode=0;
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
        this.match = false;
        this.preCode; // gets the kg weight from local storage
        this.recCode;
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
        //will need use this to make it so other exercies work 
        this.sortsLocalStorage();
        
   
        for (let i =0; i < setValues.length; i++){ //maybe try using set values.length
        
            
            
            
            
            for(key in this.sortedLocal){
            let recordkeyname;
            
            
            
            let keyName= key.replace(/[0-9]/g, '')//used to get rid of the numbers from the key and is the exercise name
            let keyNumMatch= key.match(/[0-9]/g)  //gets the number from the key and matches it to check if its true

            let keyNum = keyNumMatch ? keyNumMatch.join('') : null; //number in the key for local storage to match the set num 
            if(keyName.includes('REC')){
                recordkeyname =keyName.replace('REC','');
            }
            
            // console.log(keyName,'keynanme');
            
            if ((exerciseName.textContent == keyName || exerciseName.textContent==recordkeyname) && keyNum == setValues[i].textContent)
                // maybe loop through local storage for all the ones keys with tri in it 
                {

                    this.match =true;
                    if (key.includes('REC')){
                        this.displayTextContent(record,key,this.match)//adds the record text cotent 
                        continue;
                    }
                    // use the keynum to match with correct set 
                   
                    // console.log(keyNum,setValues[i].textContent);
                    
                    
                    
                 
                    
                    this.displayTextContent(previous,key,this.match)
                    
                    // need to make sure it only changes if it gets beaten
                
                    
                    
                
                    
                }
                
            else if (!this.match) {
                
                this.displayTextContent(previous,key,this.match)
                        
                       
                    
                    
                }
            
            }
        }

        
        
        

        

        
        
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
            // kgs[i].addEventListener('input', function(){
            //     preCode = exerciseName.textContent + setValues[i].textContent;
            //     // kgs[i].id=kgcode; //sets the kg input boxes an id 
                
            //     if(repsInput[i].value && kgs[i].value){
            //         localStorage.setItem(preCode,repsInput[i].value+'x'+kgs[i].value+'kg');
                    
                   
            //     }
                
                
            
            // });
            // changes local storage on both inputs 
            kgs[i].addEventListener('input', () => this.keys(exerciseName.textContent, setValues[i].textContent, repsInput[i].value, kgs[i].value,'prev'));
            repsInput[i].addEventListener('input', () => this.keys(exerciseName.textContent, setValues[i].textContent, repsInput[i].value, kgs[i].value,'prev'));
            

            //for the record inputs     
            kgs[i].addEventListener('input', () => this.keys(exerciseName.textContent, setValues[i].textContent, repsInput[i].value, kgs[i].value,'record'));
            repsInput[i].addEventListener('input', () => this.keys(exerciseName.textContent, setValues[i].textContent, repsInput[i].value, kgs[i].value,'record'));


        }
        

        


        
        
       
    }
    // loop through the local storage and get the correct key 
    keys(exerciseName,set,rep,kg,mode){
        
        
        
        if(mode == 'prev'){
            this.preCode = exerciseName + set;
            

            
            
                    // kgs[i].id=kgcode; //sets the kg input boxes an id 
                    if(kg && rep){
                        localStorage.setItem(this.preCode,rep+'x'+kg+'kg');
                        console.log(localStorage.getItem(this.preCode));
                    }
                    
                    
                //    return localStorage.getItem(this.preCode)
                
            }      
        else if(mode == 'record'){
            
            this.startingcode = !this.disabled ? this.getPreviousRecord() : this.startingcode;
            
            this.recCode = exerciseName + set + 'REC';
            //get the starting code kg part
            let repCode =this.startingcode.split('x')[0];
            let kgCode = this.startingcode.split('x')[1];
            
            let oldKg =this.numberCheck(kgCode);
            //checks to see if the previous code has been beaten and if it has will be updated 
            
            if(rep && kg && rep >0){
                if(kg > oldKg && rep > repCode){
                    localStorage.setItem(this.recCode,rep+'x'+kg+'kg');
                    
                }
               
               
            }
        }
        
    }
    getPreviousRecord(){
        
        this.disabled = true;

       
        return this.sortedLocal[this.preCode];
    }
    displayTextContent(text,key,match){
        
        if(match ==true){
            text.textContent =this.sortedLocal[key];
            
        }
        else{
            text.textContent = '-';
        }
    }
    numberCheck(string){
        let kgCheck='';
        for (let i = 0; i < string.length; i++){
            if (isNaN(string[i])){
                break;
                
            }
            else{
                kgCheck += string[i];
                return kgCheck;
            }
        }
        
    }

    sortsLocalStorage(){
        
        
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let data = localStorage.getItem(key);
            this.sortedLocal[key] = data;  
            
            

        }
        
        
        let sortedLocalLength =Object.keys(this.sortedLocal).length
        
       
        for (let i = 0; i < sortedLocalLength; i++){
            
            
            localStorage.setItem(Object.keys(this.sortedLocal)[i],this.sortedLocal[Object.keys(this.sortedLocal)[i]]);
            // console.log(Object.keys(this.sortedLocal)[i],this.sortedLocal[Object.keys(this.sortedLocal)[i]]);
        }
        
        
    }
}




const workoutButton = document.querySelector("#exercise");


workoutButton.addEventListener("click", function(){
let exercise = new Exercise(0);
exercise.exercise();

});