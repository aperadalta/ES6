import {li, li2} from "./exercicis/exercici1.js"; // exercici1
import {greet, greet2, 
        multiply, multiply2,
        toCelcius, toCelcius2,
        padZeros, padZeros2, 
        power, power2
} from "./exercicis/exercici2.js"; // exercici2

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

// FROM EXERCICIS1.JS
new Exercicis(li, li2, "ex1", "ex2").show();


// FROM EXERCICIS2.JS
new Exercicis(multiply, multiply2, "ex3", "ex4").show();
new Exercicis(toCelcius, toCelcius2, "ex5", "ex6").show();
new Exercicis(padZeros, padZeros2, "ex7", "ex8").show();
new Exercicis(power, power2, "ex9", "ex10").show();
new Exercicis(greet, greet2, "ex11", "ex12").show();





var cool = users.map( user => {
    return user.firstName;
 });
 
 var users = 
 [{ firstName: 'Homer', lastName: 'Simpson' },
 { firstName: 'Marge', lastName: 'Simpson' },
 { firstName: 'Bart', lastName: 'Simpson' },
 { firstName: 'Lisa', lastName: 'Simpson' },
 { firstName: 'Maggie', lastName: 'Simpson' }];
 

 console.log(cool);