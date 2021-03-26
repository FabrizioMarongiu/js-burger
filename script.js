/**
 * RICHIAMO LE REFERENZE
 */

var btn = document.getElementById('button');
var burger = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var finalPrice = document.getElementById('price');
var discount = document.getElementById('coupon');
var addButton = document.getElementsByClassName('ingredient-add');


/**
 * ADD CLICCABILI
 */

for ( var i =0; i < addButton.length; i++ ){
    var add =addButton[i];

    add.addEventListener('click', function(){

        var thisCheckbox = this.previousElementSibling;

        thisCheckbox.checked = !thisCheckbox.checked;
    })
}








/**
 * CREAZIONE EVENTO PREZZO
 */

btn.addEventListener('click', 
    function(){

        var user = burger.value.toLowerCase().trim();

 
        if ( user.length == 0 ){
            alert('Inserisci il nome del tuo burger');
        }else{

            //aggiunta costo elementi
            var price = 50;

            for ( var i = 0; i < ingredients.length; i++ ){

                 var ingredientCheck = ingredients[i];

                 if ( ingredientCheck.checked === true ){

                    price += parseInt(ingredientCheck.value);
                    

                 }

                 
            }

            /**
            * CREAZIONE DISCOUNT
            */
            var discountCode = discount.value; 

            var discount20 = [ 'ab12', 'bc13', 'cd14', 'de15' ];


            if(discount20.includes(discountCode)){
               price -= price * 0.2;

           
            }
            
            finalPrice.innerHTML = price.toFixed(2);

        }

        
})