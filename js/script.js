// 1- Il numero di chilometri da percorrere
// 2- Età del passeggero
// 3- calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: 
// 3.1- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// 3.2- va applicato uno sconto del 20% per i minorenni 
// 3.3- va applicato uno sconto del 40% per gli over 65.

const gen_price = document.getElementById('price-btn');
gen_price.addEventListener('click', function(){
    let name_surname = document.getElementById('name-surname').value;
    let age = document.getElementById('buyer-age').value;
    let kms = document.getElementById('kms-to-do').value;
    let price;

    if(age == 'minorenne'){
        price = (0.21 * kms * 0.80).toFixed(2);
    }
    else if(age == 'over'){
        price = (0.21 * kms * 0.60).toFixed(2);
    }
    else{
        price = (0.21 * kms).toFixed(2);
    }

    document.getElementById('name-on-ticket').innerHTML = name_surname
    document.getElementById('age-on-ticket').innerHTML = age
    document.getElementById('price-on-ticket').innerHTML = price
})
