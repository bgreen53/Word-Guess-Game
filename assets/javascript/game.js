window.onload = function () {

    var words = [
        "SNOW WHITE", "ANNA",
        "CINDERELLA", "ELSA",
        "AURORA", "RAPUNZEL",
        "ARIEL", "BAYMAX",
        "BELLE", "TIANA",
        "JASMINE", "MOANA",
        "POCAHONTAS", "MAUI",
        "MULAN", "VANELLOPE VON SCHWEETZ"
    ];

    var maxGuess = 10           
    var wins = 0
    var losses = 0
    var wrongGuess = [];
    var word = "";
    var blanksText = [];
    var numLetters = [];
    var blanks = 0;
    
    




   function Game() {
        word = words[Math.floor(Math.random() * words.length)];
        
        numLetters= word.split("")
        console.log(numLetters)
        blanks = numLetters.length;
        
       

        for (var i=0; i < blanks; i++){
             if(word[i] === " "){
                blanksText.push("   ")
            } else {
            blanksText.push("_")
            }

            };
        
        document.getElementById("blanks").innerHTML = blanksText.join(" ")
        document.getElementById("numguess").innerHTML= maxGuess
        document.getElementById("letguess").innerHTML= wrongGuess

        
    }

    
//Pic of guessed characters
    function pic() {
        
        if (word === words[0]) {
            
            document.getElementById("image").src = "./assets/images/snow.jpg";
        }
        else if (word === words[1]){
            
            document.getElementById("image").src = "./assets/images/anna.jpg";
            console.log("word was Anna ")
        }
        else if (word === words[2]){
           
            document.getElementById("image").src = "./assets/images/cinder.jpg";
        }
        else if (word === words[3]){
            
            document.getElementById("image").src = "./assets/images/elsa.jpg";
        }
        else if (word === words[4]){
            
            document.getElementById("image").src = "./assets/images/aurora.jpg";
        }
        else if (word === words[5]){
           
            document.getElementById("image").src = "./assets/images/rapunzel.jpg";
        }
        else if (word === words[6]){
            document.getElementById("image").src = "./assets/images/ariel.jpg";
        }
        else if (word === words[7]){
            document.getElementById("image").src = "./assets/images/baymax.jpg";
        }
        else if (word === words[8]){
            document.getElementById("image").src = "./assets/images/belle.jpg";
        }
        else if (word === words[9]){
            document.getElementById("image").src = "./assets/images/tiana.jpg";
        }
        else if (word === words[10]){
            document.getElementById("image").src = "./assets/images/jasmine.jpg";
        }
        else if (word === words[11]){
            document.getElementById("image").src = "./assets/images/moana.jpg";
        }
        else if (word === words[12]){
            document.getElementById("image").src = "./assets/images/poca.jpg";
        }
        else if (word === words[13]){
            document.getElementById("image").src = "./assets/images/maui.jpg";
        }
        else if (word === words[14]){
            document.getElementById("image").src = "./assets/images/mulan.jpg";
        }
        else if (word === words[15]){
            document.getElementById("image").src = "./assets/images/van.jpg";
        }
       
    }
    function reset() {
         maxGuess = 10;
         wrongGuess = [];
        blanksText = [];
        Game()
    } 


    function checkLetters(letter) {
        var letterInWord = false;
        
       
        //if the generated randomword is equal to the letter entered... then variable is true
        for (var i = 0; i < blanks; i++) {
            if (numLetters[i] == letter) {
                letterInWord = true;
            }
        }
        //if letterInWord (false)
        if (letterInWord) {
            //check each letter to see if it matches word
            for (var i = 0; i < blanks; i++) {
                if (numLetters[i] == letter) {
                    blanksText[i] = letter;
                }
               
            }
        }
        

        else {
            if (!wrongGuess.includes(letter))
            {wrongGuess.push(letter);
            maxGuess--;}
        }
       console.log(wrongGuess + " was incorrect")
    }

    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }

   
    function complete() {
    
        console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + maxGuess)
        if (numLetters.toString() == blanksText.toString()) {
            wins++;
             pic()
             setTimeout(reset,5000)
             
            //display wins on screen
            document.getElementById("wins").innerHTML = "Wins: " + wins;
    
            //if LOST...then alert and reset new round
        } else if (maxGuess === 0) {
            losses++;
             setTimeout(reset,5000)
            
             document.getElementById("image").src = "./assets/images/tryagain.png"
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            
        }
        //display losses on screen && guesses remaining countdown
        document.getElementById("blanks").innerHTML = "  " + blanksText.join(" ");
        document.getElementById("numguess").innerHTML = " " + maxGuess;

    } 
    

    Game()
       

   

   document.onkeyup = function (event) {

    if(isAlpha(event.key)){
    var guesses = String.fromCharCode(event.keyCode).toUpperCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("letguess").innerHTML = "  " + wrongGuess.join(" ");
}
}
   

    


}// function end bracket