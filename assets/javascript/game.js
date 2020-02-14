window.onload = function () { 

    var words = [
        "Snow White", "Anna",
        "Cinderella", "Elsa",
        "Aurora", "Rapunzle",
        "Ariel", "Baymax",
        "Belle", "Tiana",
        "Jasmine", "Moana",
        "Pocahontas", "Maui",
        "Mulan", "Vanellope Von Schweetz"
    ];

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var letguessText=document.getElementById(letguess)
    

    document.onkeypress= function(event){
        var guess= event.key
        guess.toString
        letguessText.textContent = guess;

        

    }
    var buttons = function () {
        var myButtons = document.getElementById('buttons');
        var letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }

        console.log(buttons)
    }


    


    var word = words[Math.floor(Math.random() * words.length)];




} // function end bracket