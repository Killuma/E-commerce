/* Elements du DOM */
const cartContainer          = document.getElementById('cart-items');
const cartEmpty              = document.getElementById('cart-empty');
const cartFull               = document.getElementById('cart-full');
const panierButton           = document.getElementById('Panier');
const decreaseButton         = document.getElementById('decrease-btn');
const increaseButton         = document.getElementById('increase-btn');
const quantityElement        = document.getElementById('quantite');
const cartBubble             = document.getElementById('cart-bubble');
const addToCartButton        = document.getElementById('add-to-cart-button');
const cartProductDescription = document.getElementById('cart-product-description');
const deleteButton           = document.getElementById('delete-btn');
const iconsMenuBurger        = document.getElementById('icons-menu');
const MenuBurger             = document.getElementById('Menu-burger');
const prixUnitaire = 125;
let quantity = 1; 

/* Mise à jour de l'affichage de la quantité */
function updateQuantityDisplay() {
    quantityElement.textContent = quantity;
}

/* Mise à jour initiale de l'affichage de la quantité */
updateQuantityDisplay();

/* Boutons pour ajuster la quantité */
decreaseButton.addEventListener('click', function() {
    if (quantity > 1) { 
        quantity--;
        updateQuantityDisplay();
    }
});

increaseButton.addEventListener('click', function() {
    quantity++;
    updateQuantityDisplay();
});

/* Fonction pour mettre à jour l'affichage du panier */
function updateCartDisplay() {
    if (quantity > 0) {
        const totalPrice = quantity * prixUnitaire;
        cartProductDescription.innerHTML = `Fall Limited Edition Sneakers $${prixUnitaire}.00 x <span>${quantity}</span> <span class="final-price">$${totalPrice}.00</span>`;
        cartEmpty.classList.add('hide');
        cartFull.classList.remove('hide');
        cartBubble.textContent = quantity;
        cartBubble.classList.remove('hide');
    } else {
        cartEmpty.classList.remove('hide');
        cartFull.classList.add('hide');
        cartBubble.classList.add('hide');
    }
}



/* Fonction pour ajouter au panier */
function addToCart() {
    if (quantity < 1) {
        alert("Veuillez ajouter au moins un produit.");
        return;
    }

    updateCartDisplay();
}

/* Écouteur d'événement pour le bouton 'Ajouter au panier' */
addToCartButton.addEventListener('click', addToCart);

/* Ouverture/fermeture du panier */
panierButton.addEventListener('click', function() {
    cartContainer.classList.toggle('hide');
    updateCartDisplay();
});

/* Affichage du burger menu */
iconsMenuBurger.addEventListener('click', function() {
    console.log('ouverture du menu');
    MenuBurger.classList.toggle('hide');
});

/* Fonction pour supprimer un produit du panier */
function removeFromCart() {
    if (quantity > 0) {
        quantity--;
        updateCartDisplay();
    }
}

/* Écouteur d'événement pour le bouton de suppression du produit */
deleteButton.addEventListener('click', removeFromCart);
