console.log('its works');
/* 
In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore
porte
carburante
Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()



*/

// creo la classe cars

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante,){

        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.porte = porte
        this.carburante = carburante
        
    }
     //creo il metodo informazioni
    getInformation(){
        return `${this.marca} ${this.anno} ${this.colore} ${this.porte} porte ${this.carburante}`
    }
    //creo il metodo calcEta
    getCalcEta(){
        const date = new Date() 
         
        return  date.getFullYear() - this.anno
    }
    
}

const punto = new Veicolo('Fiat', 2019, 'blue', 5, 'benzina')

console.log(punto);

console.log(punto.getInformation());


console.log(punto.getCalcEta());


/* 
BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.

*/

const automobile = new Veicolo('Opel', 2020, 'black', 4, 'benzina')

console.log(automobile);

console.log(automobile.porte);
console.log(automobile.carburante);


