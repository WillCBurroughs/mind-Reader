localStorage.clear();
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
    }

}

// Condition value is already declared
if(localStorage.getItem("pageVal") != null){
    MindReader.pageValue = MindReader.getVal();
}

console.log(MindReader.pageValue);

// Initially sets mindReader pageValue 


MindReader.displayPage(); 

// Saves value after pushing to next page 
MindReader.setPage(); 


