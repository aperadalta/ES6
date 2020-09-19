import {li, li2} from "./exercicis/exercici1.js"; // exercici1
import {greet, greet2, 
        multiply, multiply2,
        toCelcius, toCelcius2,
        padZeros, padZeros2, 
        power, power2
} from "./exercicis/exercici2.js"; // exercici2
import {map, map2} from "./exercicis/exercici3.js"; // exercici3
import {epic, epic2} from "./exercicis/exercici4.js"; //exercici4
import {revert} from "./exercicis/exercici5.js"; //exercici5
import {original, sol} from "./exercicis/exercici6.js"; //exercici6
import {enunciat7, resposta7} from "./exercicis/exercici7.js"; //exercici7

class Exercicis {
    constructor(enunciat, solucio, id, id2) {
        this.id = id;
        this.id2 = id2;
        this.enunciat = enunciat;
        this.solucio = solucio;
    }

    show(){
        document.getElementById(this.id).textContent += this.enunciat;
        document.getElementById(this.id2).textContent += this.solucio;
    }
}

// FROM EXERCICI1.JS
new Exercicis(li, li2, "ex1", "ex2").show();

// FROM EXERCICI2.JS
new Exercicis(multiply, multiply2, "ex3", "ex4").show();
new Exercicis(toCelcius, toCelcius2, "ex5", "ex6").show();
new Exercicis(padZeros, padZeros2, "ex7", "ex8").show();
new Exercicis(power, power2, "ex9", "ex10").show();
new Exercicis(greet, greet2, "ex11", "ex12").show();

// FROM EXERCICI3.JS
new Exercicis(map, map2, "ex31", "ex32").show();

// FROM EXERCICI4.JS 
new Exercicis(epic, epic2, "ex41", "ex42").show();

// FROM EXERCICI5.JS
new Exercicis(revert, revert, "ex50", "none").show();

// FROM EXERCICI6.JS
new Exercicis (original, sol, "ex61", "ex62").show();


// FROM EXERCICI7.JS
new Exercicis (enunciat7, resposta7, "ex71", "ex72").show();
