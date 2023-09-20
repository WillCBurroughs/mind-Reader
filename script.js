
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
    setPage(value){

        localStorage.setItem("pageVal", value);
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

// Testing that page value changes
MindReader.incrementPage();

MindReader.displayPage(); 

MindReader.setPage(MindReader.pageValue); 


