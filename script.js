localStorage.clear(); 

// Holds size 
let small;

// Need quick and easy way to find out screen size 
if(window.innerWidth < 768){
    small = true;
}  else{
    small = false;
}

let MindReader = {

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

        holdText.appendChild(testText);
        document.body.appendChild(holdSecond);
        document.body.appendChild(NextButton);

        // Add div to page 
        document.body.appendChild(holdReset)
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



