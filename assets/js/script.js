/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log('***************** JS Basics *****************')
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// easy way
let sum = 10 + 20;
console.log('ESERCIZIO A (easy):', sum);
// function way
const Sum = (...args) => args.reduce((n1, n2) => n1 + n2);

sum = Sum(10,20);

console.log('ESERCIZIO A (function):', sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// easy way
let random = Math.floor(Math.random() * 21);
console.log('ESERCIZIO B (easy):', random);

const GetRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
random = GetRandomNum(0,20);
console.log('ESERCIZIO B (function):', random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
    name: 'Paolo',
    surname: 'Pellizzari',
    age: 27
}
console.log('ESERCIZIO C:', me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// easy way
delete me['age'];
console.log('ESERCIZIO D (easy):', me);


// function way
function RemoveAttribute(obj, attr){
    
    delete obj[attr];
    
    return obj;
}

let newMe = RemoveAttribute({...me}, 'age');

console.log('ESERCIZIO D (function):', newMe);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['C#', 'SQL', 'Javascript']

console.log('ESERCIZIO E (easy):', me);

function AddAttribute(obj, attr, val){
    
    obj[attr] = val;

    return obj;

}

newMe = AddAttribute(newMe, 'skills', ['C#', 'SQL', 'Javascript']);

console.log('ESERCIZIO E (function):', newMe);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
// easy way
me.skills.push('HTML');

console.log('ESERCIZIO F (easy):', me);


function PushToAttribute (obj, attr, val){
    obj[attr].push(val)

    return obj;
}

newMe = PushToAttribute(newMe, 'skills', 'HTML');

console.log('ESERCIZIO F (function):', newMe);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log('ESERCIZIO G (easy):', me);

function RemoveAttributeLastItem (obj, attr){
    obj[attr].pop();
    return obj;
}

newMe = RemoveAttributeLastItem(newMe, 'skills')

console.log('ESERCIZIO G (function):', newMe);

// Funzioni
console.log('***************** Funzioni *****************')

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function Dice(){
    return GetRandomNum(1,6)
}

console.log('ESERCIZIO 1 (easy):', Dice());


function RollDice(nrFaces){
    return GetRandomNum(1,nrFaces);
}

console.log('ESERCIZIO 1 (dynamic):', RollDice(6));

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const WhoIsBigger = (n1,n2) => (n1 > n2) ? n1 : n2;

let number1 = GetRandomNum(0,10);
let number2 = GetRandomNum(0,10);

console.log('number1', number1)
console.log('number2', number2)

console.log('ESERCIZIO 2 (easy):', WhoIsBigger(number1, number2));

function WhoIsBigger2 (...args){
    let res = 0;

    args.forEach(element => {
        res = element > res ? element : res;
    });

    return res;
}


number1 = GetRandomNum(0,10);
number2 = GetRandomNum(0,10);
let number3 = GetRandomNum(0,10);
let number4 = GetRandomNum(0,10);
let number5 = GetRandomNum(0,10);


console.log('number1', number1)
console.log('number2', number2)
console.log('number3', number3)
console.log('number4', number4)
console.log('number5', number5)


console.log('ESERCIZIO 2 (dynamic):', WhoIsBigger2(number1, number2, number3, number4, number5));


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let stringaEsercizi = "I love coding";

function SplitMe(string){
    return string.split(' ');
}

console.log('ESERCIZIO 3 (easy):', SplitMe(stringaEsercizi));

function SplitMe2(string, splitter){
    return string.split(splitter);
}

console.log('ESERCIZIO 3 (dynamic):', SplitMe(stringaEsercizi, ' '));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function DeleteOne(string, flag){
    if(flag)
        return string.slice(1, string.length)
    else
        return string.slice(0, -1)
}

console.log('ESERCIZIO 4 (true):', DeleteOne(stringaEsercizi, true));
console.log('ESERCIZIO 4 (false):', DeleteOne(stringaEsercizi, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const str = 'ci40 c0m3 s74i?';
// Ho trovato questo modo ma non vale :P
// const regex = /\d/g; // \d matches any digit, g is for global search

// let match;
// const indices = [];

// while ((match = regex.exec(str)) !== null) {
//   indices.push(match.index);
// }

// console.log(indices); // This will output [2, 3, 5, 7, 10, 11]
// avendo gli indici basta fare un map con uno slice al suo interno con l'indice e 1

function OnlyLetters(string){
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let stringCharacters = SplitMe2(string, '');
    let res = ''
    
    stringCharacters.forEach((character) => !numbers.includes(character) ? res = res.concat(character) : null);

    return res
}

console.log('ESERCIZIO 5:', OnlyLetters(str));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let email = 'ciao@ciao.it'

const IsThisAnEmail = (string) =>  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(string);

console.log(`ESERCIZIO 6 (${email}):`, IsThisAnEmail(email));


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const WhatDayIsIt =  () => new Date().toLocaleDateString('it-IT', { weekday: 'long' });

console.log(`ESERCIZIO 7:`, WhatDayIsIt());



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function RollTheDices(nrDices){

    const obj = {
        sum: 0,
        values: []
    }

    for(let i = 0; i < nrDices; i++)
        obj.values.push(Dice());

    obj.sum = obj.values.reduce((sum, item) => sum + item);

    return obj;
}

console.log(`ESERCIZIO 8:`, RollTheDices(GetRandomNum(1,12)));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function HowManyDays(date){
    let actualDate = new Date;
    
    return Math.floor((date - actualDate) / (1000 * 60 * 60 * 24));
}

const testDate = new Date('2024,1,1');
console.log(`ESERCIZIO 9:`, HowManyDays(testDate));


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function IsTodayMyBirthday(){
    // const today = new Date(2024,3,8); // true
    const today = new Date(); // false

    const myBirthDay = new Date (1997, 3, 8);
    
    let myBirthDayMonth = myBirthDay.getMonth();
    let myBirthDayDay = myBirthDay.getDate();

    let todayMonth = today.getMonth();
    let todayDay = today.getDate();

    return myBirthDayMonth === todayMonth && myBirthDayDay === todayDay;

}

console.log(`ESERCIZIO 10:`, IsTodayMyBirthday());



console.log('***************** Arrays & Oggetti *****************')
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
