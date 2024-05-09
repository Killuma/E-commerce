/* Elements du DOM */
const cartEmpty          = document.getElementById('cart-empty');
const cartItems          = document.getElementById('cart-items');
const panierButton       = document.getElementById('Panier');
const decreaseButton     = document.getElementById('decrease-btn');
const increaseButton     = document.getElementById('increase-btn');
const quantityElement    = document.getElementById('quantite');
const cartBubble         = document.getElementById('quantite-bubble');
const addToCartButton    = document.getElementById('add-to-cart-button');
const cartContentElement = document.querySelector('.cart-content .text-prefix'); 
const finalPriceElement  = document.querySelector('.final-price'); 
const deleteButton       = document.getElementById('delete-btn');
const iconsMenuBurger    = document.getElementById ('icons-menu');
const MenuBurger         = document.getElementById('Menu-burger')
const prixUnitaire = 125;
let quantity = 0;

/* Mise à jour de l'affichage de la quantité et de la bulle  */
function updateQuantityDisplay() {
    if (quantity >0)
    quantityElement.textContent = quantity;
}

/* Boutons pour ajuster la quantité */
decreaseButton.addEventListener('click', function() {
    if (quantity > 0) {
        quantity--;
        updateQuantityDisplay();
    }
});

increaseButton.addEventListener('click', function() {
    quantity++;
    updateQuantityDisplay();
});

/* Ouverture/fermeture du panier */
panierButton.addEventListener('click', function() {
    console.log('ouverture/fermeture carte');
    cartEmpty.classList.toggle('hide');
});

/* Fonction pour ajouter au panier */
function addToCart() {
    let productQuantity = parseInt(quantityElement.textContent); 

    if (productQuantity < 1) {
        alert("Veuillez ajouter au moins un produit.");
        return;
    }

    const totalPrice = productQuantity * prixUnitaire;
    cartContentElement.innerHTML = `Fall Limited Edition Sneakers $${prixUnitaire}.00 x <span>${productQuantity}</span> <span class="final-price">$${totalPrice}.00</span>`;
    
    cartItems.classList.remove('hide');
    cartEmpty.classList.add('hide');
}

/* Écouteur d'événement pour le bouton 'Ajouter au panier' */
addToCartButton.addEventListener('click', addToCart);

/* Affichage du burger menu */

iconsMenuBurger.addEventListener("click", function()  {
    console.log('ouverture du menu');
    MenuBurger.classList.toggle('hide');
});


