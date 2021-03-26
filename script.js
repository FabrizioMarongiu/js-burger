/**
 * RICHIAMO LE REFERENZE
 */

var btn = document.getElementById('button');
var burger = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox')
console.log(ingredients)




/**
 * CREAZIONE EVENTO PREZZO
 */

btn.addEventListener('click', 
    function(){

        var user = burger.value.toLowerCase().trim();

        console.log(user)
 
        if ( user.length == 0 ){
            alert('Inserisci il nome del tuo burger');
        }else{

            //aggiunta costo elementi
            var price = 50;

            for ( var i = 0; i < ingredients.length; i++ ){

                 var ingredientCheck = ingredients[i];
//                 console.log(ingredientCheck)

                 if ( ingredientCheck.checked === true ){

                    price += parseInt(ingredientCheck.value);
                    console.log(price)

                 }
            }

        }
})