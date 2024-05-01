/*Ouverture du panier */
const Panier = document.getElementById('Panier');
Panier.addEventListener('click', function() {
    const panier = document.querySelector('.container-cart');
    panier.classList.toggle('hide');
    updateCartBubble(quantite)
});

/* Element du bouton de quantité */
const decreaseButton = document.getElementById('decrease-btn');
const increaseButton = document.getElementById('increase-btn');
const QuantiteElement = document.getElementById('quantite');
const cartBubble = document.getElementById('quantite-bubble');
const prixUnitaire = 125;

let quantite = 0;

/*Ajout (+1) quantité du bouton*/

decreaseButton.addEventListener('click', function(){
    if (quantite > 0 ) {
        quantite--;
        QuantiteElement.textContent = quantite;
        updateCartBubble(quantite);
        updateTotalPrice();
    }
});

/*Ajout (-1) quantité du bouton */

increaseButton.addEventListener('click', function(){
    quantite++;
    QuantiteElement.textContent = quantite;
    updateCartBubble(quantite);
    updateTotalPrice();
});


/*Quantite de la bulle en fonction de la quantité du bouton*/
function updateCartBubble(quantity) {
    cartBubble.textContent = quantity;
}

/*Mise à jour du prix total */

function updateTotalPrice() {
    const totalPriceElement = document.querySelector('.final-price');
    const totalPrice = prixUnitaire * quantite;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    updateTotalPrice();
}