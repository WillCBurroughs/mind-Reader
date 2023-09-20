
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
        this.setPage(this.pageValue)
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
            this.createFirstPage()
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

        // // Row that will hold cols
        // let rowBuilt = document.createElement("div")
        // rowBuilt.classList.add("row", "bg-success");
        // holdTextContainer.appendChild(col);

        // // Container that will be used 
        // let holdTextContainer = document.createElement("div");
        // holdTextContainer.classList.add("container");
        // holdTextContainer.appendChild(rowBuilt);

        document.body.appendChild(col);
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

MindReader.createFirstPage();



