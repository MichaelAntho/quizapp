
// oiram
var character1 =
    "https://pbs.twimg.com/profile_images/1142971165/super_mario_400x400.jpg"
    ;

// duolCcM xof
var character2 =
    "https://en.wikifur.com/w/images/thumb/8/86/FoxAssault.jpg/250px-FoxAssault.jpg"
    ;

// feihC retsam
var character3 =
    "https://pbs.twimg.com/profile_images/378800000606027712/b0830e92fd74cd94ca3ad682d5cd1f5d.jpeg"
    ;

// adlez
var character4 =
    "https://img.wattpad.com/useravatar/Botw_Princess_Zelda.256.701207.jpg"
    ;

// gaz
var character5 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUkolZ1tLLkhDM9J-XWDiUxHtWNac1tu4Gg&usqp=CAU"
    ;

// miJ mrowhtrae
var character6 =
    "https://giantbomb1.cbsistatic.com/uploads/scale_small/0/6127/187806-earthwormjim.jpg"
    ;

// reknoc
var character7 =
    "https://pbs.twimg.com/profile_images/1104694609760931841/1TIOi07b.png"
    ;

// sodalg
var character8 =
    "https://www.gamasutra.com/db_area/images/news/2017/Oct/307309/glados.jpg"
    ;

// 74 tnega
var character9 =
    "https://pbs.twimg.com/profile_images/612921668823064576/1kPgT-Y0_400x400.jpg"
    ;

// retlarbig
var character10 =
    "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.320w.jpg"
    ;
// extra pic but slow to load: https://img.rankedboost.com/wp-content/plugins/apex-legends/apex-assets/characters/Gibraltar.png

// case pics
var sad =
    "https://i.pinimg.com/474x/de/b0/f7/deb0f731ef158cadfad775ba49b1debe.jpg"
    ;
var soso =
    "http://www.sub-cultured.com/wp-content/uploads/2016/09/sad-spartan-300x240.jpg"
    ;
var almost =
    "https://www.seekpng.com/png/small/368-3688397_i-dont-know-what-this-is-but-heres.png"
    ;
var wowzer =
    "https://i.redd.it/qa7zgwvpkv441.png"
    ;

var character = new Image();
character.src = character1;

var a = document.getElementById("Character").innerHTML = character;
var p = document.getElementById("parent");
p.appendChild(a);

var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var button4 = document.getElementById("b4");
var h2 = document.getElementById("who");
var question = 1;
var points = 0;

/*
* removes button(s) & h2 after score
* score evaluated
*/
function userScore() {
    var p2 = document.getElementById("parent2");
    var score = document.getElementById("score");
    //var who = document.getElementById("who")
    p2.removeChild(button1);
    p2.removeChild(button2);
    p2.removeChild(button3);
    p2.removeChild(button4);
    p2.removeChild(h2);
    var scored = points * 10;
    switch (scored) {
        case 0:
        case 10:
        case 20:
        case 30:
        case 40:
        case 50:
            character.src = sad;
            p.appendChild(a);
            score.innerHTML = `NOOB, you only scored a ${scored}% Looks like you need to study up on your vidia games!`;
            break;
        case 60:
        case 70:
        case 80:
            character.src = soso;
            p.appendChild(a);
            score.innerHTML = `You scored a ${scored}% Not bad... Maybe try harder next time ;)`;
            break;
        case 90:
            character.src = almost;
            p.appendChild(a);
            score.innerHTML = `You scored a ${scored}% You almost had it. Keep trying!`;
            break;
        case 100:
            character.src = wowzer;
            p.appendChild(a);
            score.innerHTML = `Boom! You scored a ${scored}% A+ and 50 gold stars for you!`;
            break;
    }

}

/*
* holds button text (not button 1)
* switches characters
*/
function changeCharacter(blah) {
    switch (blah) {
        case 2:
            character.src = character2;
            p.appendChild(a);
            button1.innerHTML = "Knuckles";
            button2.innerHTML = "Ninetails";
            button3.innerHTML = "Swiper";
            button4.innerHTML = "Fox McCloud";
            break;
        case 3:
            character.src = character3;
            p.appendChild(a);
            button1.innerHTML = "Master Chief";
            button2.innerHTML = "Samus";
            button3.innerHTML = "Marcus Fenix";
            button4.innerHTML = "Matt Damon";
            break;
        case 4:
            character.src = character4;
            p.appendChild(a);
            button1.innerHTML = "Elsa";
            button2.innerHTML = "Zelda";
            button3.innerHTML = "Peach";
            button4.innerHTML = "Will Ferrell";
            break;
        case 5:
            character.src = character5;
            p.appendChild(a);
            button1.innerHTML = "Hades";
            button2.innerHTML = "Devil Guy";
            button3.innerHTML = "Zagreus";
            button4.innerHTML = "My Uncle";
            break;
        case 6:
            character.src = character6;
            p.appendChild(a);
            button1.innerHTML = "Earthworm Jim";
            button2.innerHTML = "Microbe Mark";
            button3.innerHTML = "Sonic";
            button4.innerHTML = "Organism Ed";
            break;
        case 7:
            character.src = character7;
            p.appendChild(a);
            button1.innerHTML = "Ray-Man";
            button2.innerHTML = "Conker";
            button3.innerHTML = "Alvin";
            button4.innerHTML = "Banjo";
            break;
        case 8:
            character.src = character8;
            p.appendChild(a);
            button1.innerHTML = "Bigweld";
            button2.innerHTML = "Claptrap";
            button3.innerHTML = "Clank";
            button4.innerHTML = "GLaDOS";
            break;
        case 9:
            character.src = character9;
            p.appendChild(a);
            button1.innerHTML = "Agent 007";
            button2.innerHTML = "Agent 31";
            button3.innerHTML = "Agent 47";
            button4.innerHTML = "Agent 94";
            break;
        case 10:
            character.src = character10;
            p.appendChild(a);
            button1.innerHTML = "Massdrop";
            button2.innerHTML = "Gibraltar";
            button3.innerHTML = "Sheild Boi";
            button4.innerHTML = "Caustic";
            break;
    }
}

// button correct when points++ 
function button01() {
    switch (question) {
        case 1:
            question++;
            changeCharacter(question);
            break;
        case 2:
            question++;
            changeCharacter(question);
            break;
        case 3:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 4:
            question++;
            changeCharacter(question);
            break;
        case 5:
            question++;
            changeCharacter(question);
            break;
        case 6:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 7:
            question++;
            changeCharacter(question);
            break;
        case 8:
            question++;
            changeCharacter(question);
            break;
        case 9:
            question++;
            changeCharacter(question);
            break;
        case 10:
            userScore();
            break;
    }
}

// button correct when points++ 
function button02() {
    switch (question) {
        case 1:
            question++;
            changeCharacter(question);
            break;
        case 2:
            question++;
            changeCharacter(question);
            break;
        case 3:
            question++;
            changeCharacter(question);
            break;
        case 4:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 5:
            question++;
            changeCharacter(question);
            break;
        case 6:
            question++;
            changeCharacter(question);
            break;
        case 7:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 8:
            question++;
            changeCharacter(question);
            break;
        case 9:
            question++;
            changeCharacter(question);
            break;
        case 10:
            points++;
            userScore();
            break;
    }
}

// button correct when points++ 
function button03() {
    switch (question) {
        case 1:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 2:
            question++;
            changeCharacter(question);
            break;
        case 3:
            question++;
            changeCharacter(question);
            break;
        case 4:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 5:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 6:
            question++;
            changeCharacter(question);
            break;
        case 7:
            question++;
            changeCharacter(question);
            break;
        case 8:
            question++;
            changeCharacter(question);
            break;
        case 9:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 10:
            userScore();
            break;
    }
}

// button correct when points++ 
function button04() {
    switch (question) {
        case 1:
            question++;
            changeCharacter(question);
            break;
        case 2:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 3:
            question++;
            changeCharacter(question);
            break;
        case 4:
            question++;
            changeCharacter(question);
            break;
        case 5:
            question++;
            changeCharacter(question);
            break;
        case 6:
            question++;
            changeCharacter(question);
            break;
        case 7:
            question++;
            changeCharacter(question);
            break;
        case 8:
            points++;
            question++;
            changeCharacter(question);
            break;
        case 9:
            question++;
            changeCharacter(question);
            break;
        case 10:
            userScore();
            break;
    }
}

//reloads the quiz when "RESTART" button is pressed
function restartButton() {
    location.reload();
}
