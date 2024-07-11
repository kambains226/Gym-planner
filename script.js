// js file for the project 







 //table for information


// class that creates the tables 

class Exercise{
    static exerciseCount = 0;
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
        this.addDiv = document.querySelector(".workout");
        this.parentOfAddDiv = this.addDiv.parentElement;
        this.usedkeys = [];
        
        // keeps track of how many exercises there are 
        
        Exercise.exerciseCount =Exercise.exerciseCount || 0;   
        
    }

    exercise(){
        this.table = document.createElement("table");
        this.workoutLayout = document.createElement("div");
        this.workoutLayout.classList.add("workoutLayout");
        workoutButton.disabled = true;
        this.exerciseName=document.createElement("textarea");
        this.exerciseName.maxLength = 20;
        this.exerciseName.placeholder = "Enter exercise";
        this.exerciseName.classList.add("exerciseName");
        document.body.appendChild(this.exerciseName);
        
        let exerciseCount=Exercise.setExerciseCount();; //keeps  count of how many exercises there are
        
        //create exercise to add 
        this.exerciseName.addEventListener('keypress', (event) =>{
            //occurs when the user pressses enter 
            if (event.key === "Enter"){

                this.exerciseName.style.display = "none"; // makes the text area disappear
                //creates a lable of the exercise name 
                this.exerciseLabel = document.createElement("label");
                this.exerciseLabel.textContent = this.exerciseName.value;
                
                this.parentOfAddDiv.insertBefore(this.workoutLayout,this.addDiv); //gets  the parent of add div and buts the workoutlayout before that element
                this.exerciseLabel.classList.add("exerciseLabel");
                this.workoutLayout.appendChild(this.exerciseLabel);
                
                this.exerciseTable(exerciseCount); // creates the table of exercise
                const minusButton = document.createElement("button"); // creates the minus button

                
                //creates the table of infomration
                for (let i = 0; i < 3; i++){
                    this.addRow(minusButton,exerciseCount); 
                }
                this.addButton(minusButton,exerciseCount);
                
                this.removeButton(minusButton);
                workoutButton.disabled = false;
                
            
        }
        


        
        
    });
    }
    addButton(button,count){
       
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

        this.workoutLayout.appendChild(addDiv);

        addButton.addEventListener("click", () => {
            this.addRow( button,count );
        });
}
    removeButton(button){
       
        const minusDiv = document.createElement("div");
        minusDiv.classList.add("minus");
    
        
        button.classList.add("button");
        
        const line1 = document.createElement("div");
        
        line1.classList.add("line1");
        
        
        minusDiv.appendChild(button);
        minusDiv.appendChild(line1);
     
        this.workoutLayout.appendChild(minusDiv);
        
        button.addEventListener("click",() =>{
            // let table =document.querySelector(".information");
            let lastrow = this.table.querySelector("tr:last-child");
    
            try{
                this.table.removeChild(lastrow);
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
    exerciseTable(exerciseCount) 
            {
                
                this.exerciseName = document.querySelectorAll('.exerciseLabel');
                
                
                
                
                
                
                console.log(this.exerciseName[exerciseCount].textContent); /// USES THIS TO SET THE VALUES OF THE TABLE
               
               
                // console.log(this.exerciseName[exerciseCount].textContent);
                this.table.classList.add("information");
                const HtableRow = document.createElement("tr");//the plus button will add a row minuts wil delete if there is information
            
                
                
                this.table.appendChild(HtableRow);
                this.workoutLayout.appendChild(this.table);
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
        
                this.workoutLayout.appendChild(this.table);
        
               
            } 

    addRow(button,count){
        console.log(count);
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
        
        this.table.appendChild(tableRow);
        this.setValues = document.querySelectorAll('.sets'); // gets all the set values
        let key;
        //will need use this to make it so other exercies work 
        this.sortsLocalStorage();
        
        // going to be used to keep track of  what numbers have been used
        // append the keys to this array which have been used 
   
        for (let i =0; i < this.setValues.length; i++){ //maybe try using set values.length
            
            
            
            
            
            for(key in this.sortedLocal){
            
            let recordkeyname;
            let noteskeyname;
            // console.log(key);
            
            
            let keyName= key.replace(/[0-9]/g, '')//used to get rid of the numbers from the key and is the exercise name
            let keyNumMatch= key.match(/[0-9]/g)  //gets the number from the key and matches it to check if its true

            let keyNum = keyNumMatch ? keyNumMatch.join('') : null; //number in the key for local storage to match the set num 
            
           
            // console.log(this.exerciseName.textContent);
            console.log(count);
            if (!this.usedkeys.includes(keyNum) && (this.exerciseName[count].textContent == keyName || this.exerciseName[count].textContent==recordkeyname || this.exerciseName[count].textContent==noteskeyname)) {
                this.usedkeys.push(keyNum);
            }
            
            
            
            if(keyName.includes('REC')){
                recordkeyname =keyName.replace('REC','');
            }
            else if(keyName.includes('NOTES')){
                noteskeyname= keyName.replace('NOTES','')
            }
            
            if(this.usedkeys.includes(this.setValues[i].textContent)){
                
            
            if ((this.exerciseName[count].textContent == keyName || this.exerciseName[count].textContent==recordkeyname || this.exerciseName[count].textContent==noteskeyname) && keyNum == this.setValues[i].textContent)
                // maybe loop through local storage for all the ones keys with tri in it 
                {
                    
                        

                    
                    
                    this.match =true;
                    

                    if (key.includes('REC')){
                        
                        this.displayTextContent(record,key,this.match)//adds the record text cotent 
                        
                        
                    }
                    // use the keynum to match with correct set 
                   
                    // console.log(keyNum,setValues[i].textContent);
                    
                    
                    
                    else if(key.includes('NOTES')){
                        
                        
                        this.displayTextContent(notesInput,key,this.match)
                        
                    }
                    else{
                        this.displayTextContent(previous,key,this.match)
                        
                        
                    }
                
                    
                
            }
                //try ti see if you can match the set with the key  number 
        }
            else  {
                
                this.displayTextContent(previous,key,false)
                this.displayTextContent(record,key,false)
                this.displayTextContent(notesInput,key,false)
                
                       
                
                    
                    
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
        const notesText = document.querySelectorAll('.notes');//get all the notes input boxes 

        
        
           
        
        
        
        //loops through all the users input boxes and saves the value to local storage
        for(let i =0; i < this.setValues.length; i++){
            
                
            
           
            // changes local storage on both inputs 
            kgs[i].addEventListener('input', () => this.keys(this.setValues[i].textContent, repsInput[i].value, kgs[i].value,'prev',count));
            repsInput[i].addEventListener('input', () => this.keys( this.setValues[i].textContent, repsInput[i].value, kgs[i].value,'prev',count));
            

            //for the record inputs     
            kgs[i].addEventListener('input', () => this.keys( this.setValues[i].textContent, repsInput[i].value, kgs[i].value,'record',count));
            repsInput[i].addEventListener('input', () => this.keys( this.setValues[i].textContent, repsInput[i].value, kgs[i].value,'record',count));

            notesText[i].addEventListener('input', () => this.notesUpdate(this.setValues[i].textContent,notesText[i],count));
            //need to assign the notes the value if there is one 

        }
        
       
        


        
        
       
    }
    // loop through the local storage and get the correct key 
    keys(set,rep,kg,mode,count){
        
        
        
        if(mode == 'prev'){
            this.preCode = this.exerciseName[count].textContent + set;
            

            
            
                    // kgs[i].id=kgcode; //sets the kg input boxes an id 
                    if(kg && rep){
                        localStorage.setItem(this.preCode,rep+'x'+kg+'kg');
                        
                    }
                    
                    
                //    return localStorage.getItem(this.preCode)
                
            }      
        else if(mode == 'record'){
            // assigns them the value to the starting record so it can be used to change it later 
           
                this.startingcodeKg = !this.disabled ? this.getPreviousRecord('prev') : this.startingcodeKg;
                this.startingcodeRep = !this.disabled ? this.getPreviousRecord('record') : this.startingcodeRep;
                this.recCode = this.exerciseName[count].textContent + set + 'REC';
            
                if(this.startingcodeKg==undefined && this.startingcodeRep ==undefined ){
                    
                    this.startingcodeKg='0'+'x'+'0'+'kg'
                    this.startingcodeRep='0'+'x'+'0'+'kg' // scores arent gettind displayed  
                }
            
            let repCode;
            

            //get the starting code kg part

            
            if(this.startingcodeRep){
                repCode =this.startingcodeRep.split('x')[0];
            }
            
            let kgCode;
            let oldKg;
            if (this.startingcodeKg){
                kgCode = this.startingcodeKg.split('x')[1];
            
           
            
                oldKg =this.numberCheck(kgCode);
            }
            
            //checks to see if the previous code has been beaten and if it has will be updated 
        
            if(rep && kg && rep >0){
                
                if(kg >= oldKg || rep >= repCode){
                    localStorage.setItem(this.recCode,rep+'x'+kg+'kg');
                    console.log(localStorage.getItem(this.recCode));
                    
                }
               
            
            }
            
        }
        
        
    }
    getPreviousRecord(mode){
        
        
        if(mode== 'prev'){
           
            return this.sortedLocal[this.preCode] ;
        }
        else if(mode== 'record'){
            
           
        return this.sortedLocal[this.recCode] ;

            
        }
        this.disabled = true;

       
       
    }
    displayTextContent(text,key,match){
        
        if(match ==true){
            text.textContent =this.sortedLocal[key];
            
        }
        else if(text.type == 'textarea'){
            text.textContent ='';
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
    notesUpdate(set,note,count){
        this.notesCode = this.exerciseName[count].textContent + set + 'NOTES';
        console.log(this.notesCode);
        localStorage.setItem(this.notesCode,note.value);
        console.log(localStorage.getItem(this.notesCode));
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
    static getExerciseCount() {
        return Exercise.exerciseCount;
    }
    static setExerciseCount(){
        
        return Exercise.exerciseCount++;
    }
}




const workoutButton = document.querySelector("#exercise");


workoutButton.addEventListener("click", function(){
    let exercise = new Exercise(0);
exercise.exercise();

});