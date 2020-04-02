window.onload = function () {

    var hide = document.getElementById("hide")
    hide.focus()

    var words = [
        "STITCH", "ANNA",
        "CINDERELLA", "ELSA",
        "AURORA", "RAPUNZEL",
        "ARIEL", "BAYMAX",
        "BELLE", "TIANA",
        "JASMINE", "MOANA",
        "POCAHONTAS", "MAUI",
        "MULAN", "GENIE", 
        "SNOW WHITE"
    ];

    var maxGuess = 10           
    var wins = 0
    var losses = 0
    var wrongGuess = [];
    var word = "";
    var blanksText = [];
    var numLetters = [];
    var blanks = 0;
    var pause = false;
    




   function Game() {
        word = words[Math.floor(Math.random() * words.length)];
        
        
        console.log(numLetters)
        blanks = word.length;
        
       

        for (var i=0; i < word.length; i++){
             if(word[i] === " "){
                blanksText.push(" ")
            } else {
            blanksText.push("_")
            }
        
            console.log(word)
            };
        
        document.getElementById("blanks").innerHTML = blanksText.join("")
        document.getElementById("numguess").innerHTML= maxGuess
        document.getElementById("letguess").innerHTML= wrongGuess

        
    }


    //vars to call audio
    var lilo = document.getElementById("lilo")
    var an = document.getElementById("an")
    var cin = document.getElementById("cin")
    var letgo = document.getElementById("letgo")
    var sb = document.getElementById("sb")
    var tangled = document.getElementById("rap")
    var poyw = document.getElementById("part")
    var bay = document.getElementById("bay")
    var beauty = document.getElementById("bnb")
    var deep = document.getElementById("dig")
    var carpet = document.getElementById("newworld")
    var illgo = document.getElementById("far")
    var wincol = document.getElementById("wind")
    var demi = document.getElementById("welcome")
    var ref = document.getElementById("reflect")
    var likeme = document.getElementById("friend")


    
//Pic and song of guessed characters
    function pic() {
        
        if (word === words[0]) {
            lilo.play()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/stitch.jpg";
        }
        else if (word === words[1]){
            an.play()
            lilo.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/anna.jpg";
        }
        else if (word === words[2]){
           cin.play()
           lilo.pause()
            an.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/cinder.jpg";
        }
        else if (word === words[3]){
            letgo.play()
            lilo.pause()
            an.pause()
            cin.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/elsa.jpg";
        }
        else if (word === words[4]){
            sb.play()
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/aurora.jpg";
        }
        else if (word === words[5]){
            tangled.play()
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/rapunzel.jpg";
        }
        else if (word === words[6]){
            poyw.play()
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/ariel.jpg";
        }
        else if (word === words[7]){
            bay.play()
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/baymax.jpg";
        }
        else if (word === words[8]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.play()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/belle.jpg";
        }
        else if (word === words[9]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.play()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/tiana.jpg";
        }
        else if (word === words[10]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.play()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/jasmine.jpg";
        }
        else if (word === words[11]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.play()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/moana.jpg";
        }
        else if (word === words[12]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.play()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/poca.jpg";
        }
        else if (word === words[13]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.play()
            ref.pause()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/maui.jpg";
        }
        else if (word === words[14]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.play()
            likeme.pause()
            snow.pause()
            document.getElementById("image").src = "./assets/images/mulan.jpg";
        }
        else if (word === words[15]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.play()
            snow.pause()
            document.getElementById("image").src = "./assets/images/genie.jpg";
        }
        else if (word === words[16]){
            lilo.pause()
            an.pause()
            cin.pause()
            letgo.pause()
            sb.pause()
            tangled.pause()
            poyw.pause()
            bay.pause()
            beauty.pause()
            deep.pause()
            carpet.pause()
            illgo.pause()
            wincol.pause()
            demi.pause()
            ref.pause()
            likeme.pause()
            snow.play()
            document.getElementById("image").src = "./assets/images/snow.jpg";
        }
       
    }

    //reset defaults
    function reset() {
         maxGuess = 10;
         wrongGuess = [];
        blanksText = [];
        pause = false
        Game()
    } 

//check user guess against word
    function checkLetters(letter) {
        var letterInWord = false;
        
        for (var i = 0; i < blanks; i++) {
            if (word[i] == letter) {
                letterInWord = true;
            }
        }
        
        if (letterInWord) {
            for (var i = 0; i < blanks; i++) {
                if (word[i] == letter) {
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
        if (word == blanksText.join("")) {
            wins++;
             pic()
             pause = true
             setTimeout(reset,5000)
             
            //display wins on screen
            document.getElementById("wins").innerHTML = "Wins: " + wins;
    
            //if loss then add to losses and reset
        } else if (maxGuess === 0) {
            losses++;
            pause = true
             setTimeout(reset,5000)
            
             document.getElementById("image").src = "./assets/images/tryagain.png"
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            
        }
        //display losses on screen && guesses remaining countdown
        document.getElementById("blanks").innerHTML = "  " + blanksText.join("");
        document.getElementById("numguess").innerHTML = " " + maxGuess;

    } 
    

    //call game function
    Game()
       

   
//allow user guess and check against word
   document.onkeyup = function (event) {

    if(isAlpha(event.key) && !pause){
    var guesses = String.fromCharCode(event.keyCode).toUpperCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("letguess").innerHTML = "  " + wrongGuess.join(" ");
}
}
   



}// function end bracket