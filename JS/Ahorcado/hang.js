var words = [['ordenador'], ['videojuego'], ['playstation'], 
        ['mesa'], ['shogo'], ['timesplitters'], ['colina'], 
        ['didacta'], ['consola'], ['original'], ['region'], 
        ['shader'], ['teclado'], ['raton']];
var word = '';
var hidden_letter = [];
var letter_space = document.getElementById("word");
var count = 6;
var count_fails = 1;

function generateWord() {
    var total_words = words.length - 1;
    rand = (Math.random() * total_words).toFixed(0);
    word = words[rand][0].toUpperCase();

}

function generateDash(num) {
    letter_space = document.getElementById("word");
    for (var i = 0; i < num; i++) {
      hidden_letter[i] = "_";
    }
    letter_space.innerHTML = hidden_letter.join("");

}

function generateButtons (a,z) {
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letter = '';

    for( ; i<=j; i++) {
        letter = String.fromCharCode(i).toUpperCase();
        document.getElementById("buttons").innerHTML += 
        "" + letter + "";
    }

}

function try_letter(letter) {
    document.getElementById(letter).disabled = true;
    document.getElementById(letter).classList.remove("letter");
    
    if(word.indexOf(letter) != -1) {
        for(var i=0; i<word.length; i++) {
            if(word[i]==letter) hidden_letter[i] = letter;
        }
        letter_space.innerHTML = hidden_letter.join("");
        document.getElementById(letter).classList.add("letter-correct");
    }
    else {
        count--;
        count_fails++;
        document.getElementById(letter).classList.add("letter-incorrect");
        document.getElementById('try').innerHTML = count;
        document.getElementById("image").src = 'assets/img/hangman_'+count_fails+'.jpg';
    }

    checkWord();

}

function checkWord() {
    if (count == 0) {
        document.getElementById('buttons').innerHTML = "Volver a empezar";
    }
    else if (hidden_letter.indexOf("_") == -1 ) {
        document.getElementById("image").src = 'assets/img/hangman_win.jpg';
        document.getElementById('buttons').innerHTML = "Volver a empezar";
    }

}

function startGame() {
    generateWord();
    generateDash(word.length);
    generateButtons ('a', 'z');

}

window.onload = startGame();