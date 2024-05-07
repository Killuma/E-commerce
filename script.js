/* Element du DOM */
const cartEmpty          = document.getElementById('cart-empty');
const cartItems          = document.getElementById('cart-items');
const panierButton       = document.getElementById('Panier');
const panierContainer    = document.getElementById('cart-items');
const decreaseButton     = document.getElementById('decrease-btn');
const increaseButton     = document.getElementById('increase-btn');
const quantityElement    = document.getElementById('quantite');
const cartBubble         = document.getElementById('quantite-bubble');
const addToCartButton    = document.getElementById('add-to-cart-button')
const cartContentElement = document.getElementById('.cart-content .text-prefix')
const finalPriceElement  = document.getElementById('.cart-content .final-price')
const prixUnitaire       = 125;
let quantity = 0;

/*Mise à jour seulement de l'affichage de la quantité */

function updateQuantityDisplay() {
    quantityElement.textContent = quantity;
  }

/* Ajout (-1) quantité du bouton */
decreaseButton.addEventListener('click', function() {
    if (quantity > 0) {
        quantity--;
        updateQuantityDisplay()
    }
});

/* Ajout (+1) quantité du bouton */
increaseButton.addEventListener('click', function() {
    quantity++;
    updateQuantityDisplay()
});

/* Ouverture/fermeture du panier */

panierButton.addEventListener ('click', function() {
    console.log('ouverture/fermeture carte')
    cartEmpty.classList.toggle('hide');
});

/* Fonction pour ajouter au panier */

function addToCart() {
    const productName   = "Paire de sneaker";
    const prixUnitaire  = 125;
    let productQuantity = parseInt(document.getElementById('quantite').textContent);


    if (productQuantity < 1) {
        alert("Veuillez ajouter au moins un produit.");
        return; 
    }

    console.log(`${productQuantity} x ${productName} ajoutés au panier pour ${productQuantity * prixUnitaire} €.`);

}

addToCartButton.addEventListener('click', addToCart);

//calcul du prix total

const totalPrice = quantityElement * prixUnitaire;



