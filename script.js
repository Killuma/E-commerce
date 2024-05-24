
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
    const MenuBurger             = document.getElementById('Menuburger');
    const closeMenuButton        = document.getElementById('cross');
    const prixUnitaire = 125;
    let quantity = 1; 
    let cartQuantity = 0;

    // Fonction pour mettre à jour l'affichage de la quantité
    function updateQuantityDisplay() {
        quantityElement.textContent = quantity;
    }

    // Mise à jour initiale de l'affichage de la quantité
    updateQuantityDisplay();

    // Boutons pour ajuster la quantité
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

    // Fonction pour mettre à jour l'affichage du panier
    function updateCartDisplay() {
        if (cartQuantity > 0) {
            const totalPrice = cartQuantity * prixUnitaire;
            cartProductDescription.innerHTML = `Fall Limited Edition Sneakers $${prixUnitaire}.00 x <span>${cartQuantity}</span> <span class="final-price">$${totalPrice}.00</span>`;
            cartEmpty.classList.add('hide');
            cartFull.classList.remove('hide');
            cartBubble.textContent = cartQuantity;
            cartBubble.classList.remove('hide');
        } else {
            cartEmpty.classList.remove('hide');
            cartFull.classList.add('hide');
            cartBubble.classList.add('hide');
        }
    }

    // Fonction pour ajouter au panier
    function addToCart() {
        if (quantity < 1) {
            alert("Veuillez ajouter au moins un produit.");
            return;
        }
        cartQuantity += quantity;
        updateCartDisplay();
        resetQuantity();
    }

    // Fonction pour réinitialiser la quantité
    function resetQuantity() {
        quantity = 1;
        updateQuantityDisplay();
    }

    // Fonction pour supprimer tous les produits du panier
    function removeFromCart() {
        cartQuantity = 0;
        updateCartDisplay();
    }

    // Écouteur d'événement pour le bouton 'Ajouter au panier'
    addToCartButton.addEventListener('click', addToCart);

    // Écouteur d'événement pour le bouton de suppression du produit
    deleteButton.addEventListener('click', removeFromCart);

    // Ouverture/fermeture du panier
    panierButton.addEventListener('click', function() {
        cartContainer.classList.toggle('hide');
    });

    // Ouverture/fermeture du menu burger
    if (iconsMenuBurger) {
        iconsMenuBurger.addEventListener('click', function() {
            MenuBurger.classList.toggle('hide');
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', function() {
            MenuBurger.classList.toggle('hide');
        });
    }

