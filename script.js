


// Holds size 
let small;

let bucceeSong;

// Creates new people 
let personGenerator; 

// Need quick and easy way to find out screen size 
if(window.innerWidth < 768){
    small = true;
}  else {
    small = false;
}

let MindReader = {

    // Possible values will be in this array
    possibleValues: ["&", "@", "$", "B", "%", "#", "~", "*", "?"],

    // Value that will be shown at end of project (Need to go through local)
    displayValue: "&",

    // Shows default page Value
    pageValue: 1,

    // Used for my benefit to check current value of page 
    displayPage(){
        console.log(this.pageValue);
    },

    // Used to put pageValue equal to current value of pageVal
    getVal(){
        return parseInt(localStorage.getItem("pageVal"));
    },

    // Used to set the value everytime value is changed or incremented
    setPage(){

        localStorage.setItem("pageVal", this.pageValue);
    },    

    // Allows for turning page
    incrementPage(){

        // Used when next button is pressed
        this.pageValue++;

        // Used for setting pageValue to incremented value
        this.setPage();
    },

    // Used to clear every element off of the page 
    clearPage() {
        while (document.body.childElementCount > 0) {
            document.body.removeChild(document.body.firstChild);
        }
    },

    // Function used to call buccees
    setPage7(){
        this.pageValue = 7;
        this.clearPage(); 
       // this.setPage(); 
        this.createPage();
    },

    // Function that will be used to create Page Based on value of this.pageValue

    createPage(){

        // This will check the pageValue and make the relevant page
        switch(this.pageValue){
            case 1:
            this.createFirstPage();
            break; 
            case 2: 
            this.createSecondPage();
            break;
            case 3:
            this.createThirdPage();
            break;
            case 4: 
            this.createFourthPage();
            break; 
            case 5: 
            this.createFifthPage();
            break; 
            case 6: 
            this.createSixthPage(); 
            break; 
            case 7: 
            this.createQuestForBucees(); 
            break;
        }

    },

    // Will be used to make the first page 
    createFirstPage(){

        // Text that appears on top of screen 
        let initialText = document.createElement("h2");
        initialText.textContent = "I can read your mind"; 
        initialText.style.color = "gray"

        if(small){
            initialText.style.fontSize = "70px";
        } else{
            initialText.style.fontSize = "90px";
        }

        // Holds column values 
        let col = document.createElement("div"); 
        col.classList.add("col", "col-9", "mx-auto");
        col.appendChild(initialText);        
        
        // Testing text 
        let testText = document.createElement("h3");
        testText.textContent = "GO"
        testText.fontSize = "60px";
        testText.backgroundColor = "blue"
        testText.style.zIndex = "5";
        testText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdText = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

        holdText.style.height = "100px"; 
        holdText.style.width = "100px";
        holdText.style.borderRadius = "50%";
        holdText.style.backgroundColor = "white";
        holdText.style.border = "2px solid black";
        holdText.style.textAlign = "center";
        holdText.style.display = "flex"; 

        holdText.style.alignItems = "center"; 
        holdText.style.justifyContent = "center"; 

        
        if(small){
            holdText.style.marginTop = "80%"; 
        } else{
            holdText.style.marginTop = "40%"; 
        }
        
        holdText.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdText.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        holdText.appendChild(testText);
        document.body.appendChild(col);
        document.body.appendChild(holdText);
    },

    transferClear(){

        // First clear page 
        // Then iterate page 
        // Then build page 
        this.clearPage();
        this.incrementPage();
        this.createPage(); 
    },

    // Function takes user back to page 1 
    transferReset(){

        // First clear page 
        // Then set page equal to first page
        // Then build page 
        this.clearPage();
        this.pageValue = 1; 
        this.setPage();
        this.createPage(); 
    },

    createSecondPage(){

        // Violates DRY, but don't want to use CSS to make classes all JS 
        let secondText = document.createElement("h2");
        secondText.textContent = "Pick a Number From 01 - 99"; 
        secondText.style.color = "gray"

        let NextButton = document.createElement("div");
        let nextButtonText = document.createElement("h3");

        NextButton.classList.add("col", "col-6", "mx-auto");

        nextButtonText.textContent = "Next"
        nextButtonText.style.fontSize = "40px"

        nextButtonText.style.color = "white";

        NextButton.style.textAlign = "center";
        NextButton.style.display = "flex"; 

        NextButton.style.border = "2px solid black";

        // Sets NextButton height based on screen size
        if(small){

            NextButton.style.height = "100px";
            NextButton.style.marginTop = "20%";
        } else {
            NextButton.style.height = "120px";
            NextButton.style.marginTop = "15%";
            nextButtonText.style.fontSize = "60px";
        }
        

        NextButton.style.alignItems = "center"; 
        NextButton.style.justifyContent = "center"; 
        
        NextButton.appendChild(nextButtonText);

        NextButton.style.backgroundColor = "#8cd8e2";

        if(small){
            secondText.style.fontSize = "70px";
        } else{
            secondText.style.fontSize = "90px";
        }
        
        let holdSecond = document.createElement("div"); 
        holdSecond.classList.add("col", "col-9", "mx-auto");
        holdSecond.style.display = "flex";

        NextButton.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        // Need to make button in bottom corner that will reset back to first page 
                // Testing text 
        let testText = document.createElement("h3");
        testText.textContent = "GO"
        testText.fontSize = "60px";
        testText.backgroundColor = "blue"
        testText.style.zIndex = "5";
        testText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdText = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

        holdText.style.height = "100px"; 
        holdText.style.width = "100px";
        holdText.style.borderRadius = "50%";
        holdText.style.backgroundColor = "white";
        holdText.style.border = "2px solid black";
        holdText.style.textAlign = "center";
        holdText.style.display = "flex"; 

        holdText.style.alignItems = "center"; 
        holdText.style.justifyContent = "center"; 

        
        if(small){
            holdText.style.marginTop = "80%"; 
        } else{
            holdText.style.marginTop = "40%"; 
        }
        
        holdText.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdText.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        holdText.appendChild(testText);

        holdSecond.appendChild(secondText);   


        // Testing text 
        let resetText = document.createElement("h3");
        resetText.textContent = "Reset"
        resetText.fontSize = "60px";
        resetText.backgroundColor = "blue"
        resetText.style.zIndex = "5";
        resetText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdReset = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

       holdReset.style.height = "100px"; 
       holdReset.style.width = "100px";
       holdReset.style.borderRadius = "50%";
       holdReset.style.backgroundColor = "white";
       holdReset.style.border = "2px solid black";
       holdReset.style.textAlign = "center";
       holdReset.style.display = "flex"; 

       holdReset.style.alignItems = "center"; 
       holdReset.style.justifyContent = "center"; 

        
        if(small){
            holdReset.style.marginTop = "20%"; 
        } else{
            holdReset.style.marginTop = "18%"; 
        }
        
        holdReset.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdReset.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferReset();

        })

        // Creating text that says When you have number click next 
        let createNewNumText = document.createElement("h3");
        let holdcreateNewNumText = document.createElement("div");

        

        // Add Text to div 
        holdReset.appendChild(resetText);

        holdText.appendChild(testText);
        document.body.appendChild(holdSecond);
        document.body.appendChild(NextButton);

        // Add div to page 
        document.body.appendChild(holdReset)
    },

    createThirdPage(){
        // Violates DRY, but don't want to use CSS to make classes all JS 
        let secondText = document.createElement("h2");
        secondText.textContent = "Add both digits together to get a new number"; 
        secondText.style.color = "gray"

        let NextButton = document.createElement("div");
        let nextButtonText = document.createElement("h3");

        NextButton.classList.add("col", "col-6", "mx-auto");

        nextButtonText.textContent = "Next"
        nextButtonText.style.fontSize = "40px"

        nextButtonText.style.color = "white";

        NextButton.style.textAlign = "center";
        NextButton.style.display = "flex"; 

        NextButton.style.border = "2px solid black";

        // Sets NextButton height based on screen size
        if(small){

            NextButton.style.height = "100px";
            NextButton.style.marginTop = "20%";
        } else {
            NextButton.style.height = "120px";
            NextButton.style.marginTop = "12%";
            nextButtonText.style.fontSize = "60px";
        }
        

        NextButton.style.alignItems = "center"; 
        NextButton.style.justifyContent = "center"; 
        
        NextButton.appendChild(nextButtonText);

        NextButton.style.backgroundColor = "#8cd8e2";

        if(small){
            secondText.style.fontSize = "70px";
        } else{
            secondText.style.fontSize = "90px";
        }
        
        let holdSecond = document.createElement("div"); 
        holdSecond.classList.add("col", "col-9", "mx-auto");
        holdSecond.style.display = "flex";

        NextButton.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        // Need to make button in bottom corner that will reset back to first page 
                // Testing text 
        let testText = document.createElement("h3");
        testText.textContent = "GO"
        testText.fontSize = "60px";
        testText.backgroundColor = "blue"
        testText.style.zIndex = "5";
        testText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdText = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

        holdText.style.height = "100px"; 
        holdText.style.width = "100px";
        holdText.style.borderRadius = "50%";
        holdText.style.backgroundColor = "white";
        holdText.style.border = "2px solid black";
        holdText.style.textAlign = "center";
        holdText.style.display = "flex"; 

        holdText.style.alignItems = "center"; 
        holdText.style.justifyContent = "center"; 

        
        if(small){
            holdText.style.marginTop = "80%"; 
        } else{
            holdText.style.marginTop = "35%"; 
        }
        
        holdText.style.marginLeft = "90%";

        // Need to add eventListener to holdText to call 
        holdText.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        holdText.appendChild(testText);

        holdSecond.appendChild(secondText);   


        // Testing text 
        let resetText = document.createElement("h3");
        resetText.textContent = "Reset"
        resetText.fontSize = "60px";
        resetText.backgroundColor = "blue"
        resetText.style.zIndex = "5";
        resetText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdReset = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

       holdReset.style.height = "100px"; 
       holdReset.style.width = "100px";
       holdReset.style.borderRadius = "50%";
       holdReset.style.backgroundColor = "white";
       holdReset.style.border = "2px solid black";
       holdReset.style.textAlign = "center";
       holdReset.style.display = "flex"; 

       holdReset.style.alignItems = "center"; 
       holdReset.style.justifyContent = "center"; 

        
        if(small){
            holdReset.style.marginTop = "10%"; 
        } else{
            holdReset.style.marginTop = "15%"; 
        }
        
        holdReset.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdReset.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferReset();

        })

        // Add Text to div 
        holdReset.appendChild(resetText);

        holdText.appendChild(testText);
        document.body.appendChild(holdSecond);
        document.body.appendChild(NextButton);

        // Add div to page 
        document.body.appendChild(holdReset)
    },

    createFourthPage(){
        // Violates DRY, but don't want to use CSS to make classes all JS 
        let secondText = document.createElement("h2");
        secondText.textContent = "Subtract your new number from the original number"; 
        secondText.style.color = "gray"

        let NextButton = document.createElement("div");
        let nextButtonText = document.createElement("h3");

        NextButton.classList.add("col", "col-6", "mx-auto");

        nextButtonText.textContent = "Next"
        nextButtonText.style.fontSize = "40px"

        nextButtonText.style.color = "white";

        NextButton.style.textAlign = "center";
        NextButton.style.display = "flex"; 

        NextButton.style.border = "2px solid black";

        // Sets NextButton height based on screen size
        if(small){

            NextButton.style.height = "100px";
            NextButton.style.marginTop = "30%";
        } else {
            NextButton.style.height = "120px";
            NextButton.style.marginTop = "15%";
            nextButtonText.style.fontSize = "60px";
        }
        

        NextButton.style.alignItems = "center"; 
        NextButton.style.justifyContent = "center"; 
        
        NextButton.appendChild(nextButtonText);

        NextButton.style.backgroundColor = "#8cd8e2";

        if(small){
            secondText.style.fontSize = "50px";
        } else{
            secondText.style.fontSize = "90px";
        }
        
        let holdSecond = document.createElement("div"); 
        holdSecond.classList.add("col", "col-9", "mx-auto");


        NextButton.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        // Need to make button in bottom corner that will reset back to first page 
                // Testing text 
        let testText = document.createElement("h3");
        testText.textContent = "GO"
        testText.fontSize = "60px";
        testText.backgroundColor = "blue"
        testText.style.zIndex = "5";
        testText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdText = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

        holdText.style.height = "100px"; 
        holdText.style.width = "100px";
        holdText.style.borderRadius = "50%";
        holdText.style.backgroundColor = "white";
        holdText.style.border = "2px solid black";
        holdText.style.textAlign = "center";
        holdText.style.display = "flex"; 

        holdText.style.alignItems = "center"; 
        holdText.style.justifyContent = "center"; 

        
        if(small){
            holdText.style.marginTop = "80%"; 
        } else{
            holdText.style.marginTop = "40%"; 
        }
        
        holdText.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdText.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

        holdText.appendChild(testText);

        holdSecond.appendChild(secondText);   


        // Testing text 
        let resetText = document.createElement("h3");
        resetText.textContent = "Reset"
        resetText.fontSize = "60px";
        resetText.backgroundColor = "blue"
        resetText.style.zIndex = "5";
        resetText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdReset = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

       holdReset.style.height = "100px"; 
       holdReset.style.width = "100px";
       holdReset.style.borderRadius = "50%";
       holdReset.style.backgroundColor = "white";
       holdReset.style.border = "2px solid black";
       holdReset.style.textAlign = "center";
       holdReset.style.display = "flex"; 

       holdReset.style.alignItems = "center"; 
       holdReset.style.justifyContent = "center"; 

        
        if(small){
            holdReset.style.marginTop = "15%"; 
        } else{
            holdReset.style.marginTop = "8%"; 
        }
        
        holdReset.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdReset.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferReset();

        })

        // Add Text to div 
        holdReset.appendChild(resetText);

        holdText.appendChild(testText);
        document.body.appendChild(holdSecond);
        document.body.appendChild(NextButton);

        // Add div to page 
        document.body.appendChild(holdReset)
    },

    createFifthPage(){

        // Need to randomize addding divs to page (Val will be 0-8)
        let randomizeVal = Math.floor(Math.random() * 9);

        // Need to make 99 values 
        for(let i = 0; i <= 99; i++){

            // Will hold Text 
            let newTextToDisplay = document.createElement("h3");

            // Will place Div 
            let holdnewTextToDisplay = document.createElement("div");
            
            // Relevant attributes 
            holdnewTextToDisplay.classList.add("col", "col-6", "mx-auto"); 
            holdnewTextToDisplay.style.display = "flex";
            holdnewTextToDisplay.style.justifyContent = "center";
            holdnewTextToDisplay.style.alignItems = "center"; 

            // Relevant Styling 
            newTextToDisplay.style.color = "gray"; 
            newTextToDisplay.textContent = `${i} - `;

            // Randomizing and giving final value t
            if((i + randomizeVal) % 9 == 0){
                newTextToDisplay.textContent += this.possibleValues[0];
            } else if((i + randomizeVal) % 9 == 1){
                newTextToDisplay.textContent += this.possibleValues[1];
            } else if((i + randomizeVal) % 9 == 2){
                newTextToDisplay.textContent += this.possibleValues[2];
            } else if((i + randomizeVal) % 9 == 3){
                newTextToDisplay.textContent += this.possibleValues[3];
            } else if((i + randomizeVal) % 9 == 4){
                newTextToDisplay.textContent += this.possibleValues[4];
            } else if((i + randomizeVal) % 9 == 5){
                newTextToDisplay.textContent += this.possibleValues[5];
            } else if((i + randomizeVal) % 9 == 6){
                newTextToDisplay.textContent += this.possibleValues[6];
            } else if((i + randomizeVal) % 9 == 7){
                newTextToDisplay.textContent += this.possibleValues[7];
            } else if((i + randomizeVal) % 9 == 8){
                newTextToDisplay.textContent += this.possibleValues[8];
            }

            if(small){
                newTextToDisplay.style.fontSize = "70px";
            } else{
                newTextToDisplay.style.fontSize = "90px";
            }
        
            holdnewTextToDisplay.appendChild(newTextToDisplay);
            
            document.body.appendChild(holdnewTextToDisplay);

        }

        // This should always set the value at displayValue to 0 
        this.displayValue = this.possibleValues[(randomizeVal)];

        // Allows us to save this value 
        localStorage.setItem("displayVal", this.displayValue);


        // Need to add button to advance to next page 

        let NextButton = document.createElement("div");
        let nextButtonText = document.createElement("h3");

        NextButton.classList.add("col", "col-6", "mx-auto");

        nextButtonText.textContent = "Next"
        nextButtonText.style.fontSize = "40px"

        nextButtonText.style.color = "white";

        NextButton.style.textAlign = "center";
        NextButton.style.display = "flex"; 

        NextButton.style.border = "2px solid black";

        
        NextButton.style.backgroundColor = "#8cd8e2";

        NextButton.style.alignItems = "center"; 
        NextButton.style.justifyContent = "center"; 
        
        if(small){

            NextButton.style.height = "100px";
            NextButton.style.marginTop = "20%";
        } else {
            NextButton.style.height = "120px";
            NextButton.style.marginTop = "15%";
            nextButtonText.style.fontSize = "60px";
        }
        
        NextButton.appendChild(nextButtonText);

        document.body.appendChild(NextButton);

        // Need to add button that allows for resetting to first page 
// Testing text 
        let resetText = document.createElement("h3");
        resetText.textContent = "Reset"
        resetText.fontSize = "60px";
        resetText.backgroundColor = "blue"
        resetText.style.zIndex = "5";
        resetText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdReset = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

       holdReset.style.height = "100px"; 
       holdReset.style.width = "100px";
       holdReset.style.borderRadius = "50%";
       holdReset.style.backgroundColor = "white";
       holdReset.style.border = "2px solid black";
       holdReset.style.textAlign = "center";
       holdReset.style.display = "flex"; 

       holdReset.style.alignItems = "center"; 
       holdReset.style.justifyContent = "center"; 

        
        if(small){
            holdReset.style.marginTop = "30%"; 
        } else{
            holdReset.style.marginTop = "18%"; 
        }
        
        holdReset.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdReset.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferReset();

        })

        // Add Text to div 
        holdReset.appendChild(resetText);
        document.body.appendChild(holdReset)
        
        // Need to move to next page when clicked 
        NextButton.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferClear();

        })

    },

    createSixthPage(){


    // Need to add value to top of page 

    let secondText = document.createElement("h2");
    secondText.textContent = String(localStorage.getItem("displayVal")); 
    secondText.style.color = "gray"

    if(small){
        secondText.style.fontSize = "70px";
    } else{
        secondText.style.fontSize = "90px";
    }

    let holdSecond = document.createElement("div"); 
    holdSecond.classList.add("col", "col-9", "mx-auto");
    holdSecond.style.display = "flex";
    holdSecond.style.textAlign = "center";

        // Allows resetting to first page 
        // Testing text 
        let resetText = document.createElement("h3");
        resetText.textContent = "Reset"
        resetText.fontSize = "60px";
        resetText.backgroundColor = "blue"
        resetText.style.zIndex = "5";
        resetText.style.color = "#8cd8e2"

        // put text in div then put in bottomish corner
        let holdReset = document.createElement("div");
       // holdText.classList.add("col", "col-3", "bg-success", "mx-auto");

       holdReset.style.height = "100px"; 
       holdReset.style.width = "100px";
       holdReset.style.borderRadius = "50%";
       holdReset.style.backgroundColor = "white";
       holdReset.style.border = "2px solid black";
       holdReset.style.textAlign = "center";
       holdReset.style.display = "flex"; 

       holdReset.style.alignItems = "center"; 
       holdReset.style.justifyContent = "center"; 

        
        if(small){
            holdReset.style.marginTop = "30%"; 
        } else{
            holdReset.style.marginTop = "18%"; 
        }
        
        holdReset.style.marginLeft = "60%";

        // Need to add eventListener to holdText to call 
        holdReset.addEventListener("click", () => {

            // Have to call this with MindReader to gain access to this without using Bind (Don't know what bind does)
            MindReader.transferReset();

        })

        holdSecond.classList.add("col", "col-9", "mx-auto");
        holdSecond.style.alignContent = "center";
        holdSecond.style.justifyContent = "center";

        // Adds answer 
        document.body.appendChild(holdSecond);

        holdSecond.appendChild(secondText);  

        // Add Text to div 
        holdReset.appendChild(resetText);
        document.body.appendChild(holdReset)

        

    },

    createQuestForBucees(){

        console.log("Bucees"); 

        bucceeSong = new Audio("bucSong.mp3")

        bucceeSong.loop = true;

        bucceeSong.play();

        let holdPeopleArray = [];

        // Creates new person who is seekeing bucees 

    }





}

// Condition value is already declared, set value equal to saved value 
if(localStorage.getItem("pageVal") != null){
    MindReader.pageValue = MindReader.getVal();
}

console.log(MindReader.pageValue);

// Initially sets mindReader pageValue 

MindReader.displayPage(); 

// Saves value after pushing to next page 
MindReader.setPage(); 

// First clear page 
MindReader.clearPage(); 

MindReader.createPage();


// Add event listener for clicking left 

document.body.addEventListener("keydown", (e) =>{
  
    // Need to clear background and set buccees 
    if(e.key == "t"){
    
        MindReader.setPage7();

        
        if(MindReader.pageValue == 7){
            setInterval(function(){
                createSomeone();
        
            }, 1500)
        }


        let buceeTitle = document.createElement("h1"); 
        let containBucee = document.createElement("div"); 

        containBucee.classList.add("col",  "col-9",  "mx-auto")

        buceeTitle.style.textContent = "center";
        buceeTitle.style.display = "absolute"; 

        buceeTitle.textContent = "Quest For Buc-ee's!"
        buceeTitle.style.color = "darkgray";
        containBucee.style.justifyContent = "center"

        buceeTitle.style.fontSize = "100px";

        let buceeImage = document.createElement("img"); 
        buceeImage.style.position = "absolute"; 

        buceeImage.style.top = "200px";
        buceeImage.style.left = "820px";

        buceeImage.style.height = "500px";
        buceeImage.style.width = "850px";

        buceeImage.src = "img/bucees-logo.png";

        containBucee.appendChild(buceeTitle);

        document.body.appendChild(containBucee);

        document.body.appendChild(buceeImage);


   }
})



// Need to get image from array 
// Need to move image toward right side of screen 
// Need to detect clicks on person 
// Can check if x coordinate is greater than a certain value to say they made it to buc ees 
function createSomeone(){

    let playAudio = new Audio("clicked.wav");

    let holdPosition = 50; 
    let hasBeenClicked = false;

    // Person will be img with set height 
    let newPerson = document.createElement("img");
    newPerson.style.height = "300px";
    newPerson.style.width = "300px"; 
    newPerson.style.position = "absolute";

    // Consistently sized images by filling image container 
    newPerson.style.objectFit = "cover";

    // Will randomize Y position somewhere between 100 and 699 
    let yPosition = Math.floor(Math.random() * 600) + 100; 

    // Value will be 0-6
    let randomizePerson = Math.floor(Math.random() * 7);

    // generates random speed for person 3 - 14
    let randomizeSpeed = Math.floor(Math.random() * 12) + 3;

    // Add name tag to each person 
    let labelName = document.createElement("h3"); 
    labelName.style.textContent = "center";
    labelName.style.color = "black"; 

    // Placing label
    labelName.style.position = "absolute"
    labelName.style.top = yPosition + 50 + "px";
    labelName.style.fontSize = "20px"; 

    let backDiv = document.createElement("div"); 
    backDiv.style.textContent = "center";
    backDiv.style.backgroundColor = "black";

    backDiv.style.width = "100px";
    backDiv.style.height = "10px";

    backDiv.style.position = "absolute"; 
    backDiv.style.top = yPosition + 30 + "px";

    let topDiv = document.createElement("div"); 
    topDiv.style.backgroundColor = "red"; 

    topDiv.style.width = "100px";
    topDiv.style.height = "10px";

    topDiv.style.position = "absolute"; 
    topDiv.style.top = yPosition + 30 + "px";


    switch(randomizePerson){
        case 0: 
        newPerson.src = "img/Dylan.png";
        labelName.textContent = "Dylan";
        break;
        case 1: 
        newPerson.src = "img/Justin-Hinged.png";
        labelName.textContent = "Justin (Hinged)";
        break;
        case 2: 
        newPerson.src = "img/Michael-Full-Power.png";
        labelName.textContent = "Michael (Full-Power)";
        break;
        case 3: 
        newPerson.src = "img/Michael-holding-back.png";
        labelName.textContent = "Michael (Holding Back)"
        break; 
        case 4: 
        newPerson.src = "img/Tanner.png";
        labelName.textContent = "Tanner";
        break; 
        case 5:
        newPerson.src = "img/Vanessa.png";
        labelName.textContent = "Vanessa";
        break; 
        case 6: 
        newPerson.src = "img/Justin-unhinged.png";
        labelName.textContent = "Justin (Unhinged)";
        break;
    }

    newPerson.style.top = yPosition + "px";
    labelName.style.left = holdPosition + 100 + "px";
    
    backDiv.style.left = holdPosition + 100 + "px";
    backDiv.style.top = parseInt(labelName.style.top) + 25 + "px";

    topDiv.style.left = holdPosition + 100 + "px";
    topDiv.style.top = parseInt(labelName.style.top) + 25 + "px";


    setInterval(function(){
        holdPosition += randomizeSpeed;


        newPerson.style.left = holdPosition + "px";
        
        labelName.style.left = holdPosition + 100 + "px";

        backDiv.style.left = holdPosition + 100 + "px";

        topDiv.style.left = holdPosition + 100 + "px";

        console.log(newPerson.style.left);

        let holdLeft = parseInt(newPerson.style.left);

        // Can use this to determine if player should lose 
        if(holdLeft > 1100 && !hasBeenClicked){
            MindReader.transferReset();
        }

    }, 100)


    if(randomizePerson != 6){

        let health = 100;
        let fullWidth = parseInt(topDiv.style.width);

        newPerson.addEventListener("click", function(){

            if(health > 0){
                health -= 50; 
                topDiv.style.width = Math.floor(fullWidth * health/100) + "px";
    
            } else if (health <= 0){

            newPerson.parentNode.removeChild(newPerson);
            labelName.parentNode.removeChild(labelName);
            backDiv.parentNode.removeChild(backDiv);
            topDiv.parentNode.removeChild(topDiv);
            hasBeenClicked = true; 
            playAudio.play();

         }
        })
    }

    if(randomizePerson == 6){

        let health = 100;
        let fullWidth = parseInt(topDiv.style.width);

        newPerson.addEventListener("click", function(){
            
            if(health > 0){
                health -= 10; 
                topDiv.style.width = Math.floor(fullWidth * health/100) + "px";
            } else if(health <= 0){

            newPerson.parentNode.removeChild(newPerson);
            labelName.parentNode.removeChild(labelName);
            backDiv.parentNode.removeChild(backDiv);
            topDiv.parentNode.removeChild(topDiv);
            hasBeenClicked = true; 
            playAudio.play();

            }
        })
    }


    document.body.appendChild(newPerson);
    document.body.appendChild(backDiv);
    document.body.appendChild(topDiv);
    document.body.appendChild(labelName);

}



