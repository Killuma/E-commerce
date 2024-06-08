const cartContainer = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');
const cartFull = document.getElementById('cart-full');
const panierButton = document.getElementById('Panier');
const decreaseButton = document.getElementById('decrease-btn');
const increaseButton = document.getElementById('increase-btn');
const quantityElement = document.getElementById('quantite');
const cartBubble = document.getElementById('cart-bubble');
const addToCartButton = document.getElementById('add-to-cart-button');
const cartProductDescription = document.getElementById('cart-product-description');
const deleteButton = document.getElementById('delete-btn');
const iconsMenuBurger = document.getElementById('icons-menu');
const MenuBurger = document.getElementById('Menuburger');
const closeMenuButton = document.getElementById('cross');
const openCarrouselButton = document.getElementById('main-photo');
const Carrousel = document.getElementById('carrousel');
const closeCaroussel = document.getElementById('icon-close');
const previewImg = document.getElementById('preview-img');
const prixUnitaire = 125;
let quantity = 1; 
let cartQuantity = 0;


function updateQuantityDisplay() {
    quantityElement.textContent = quantity;
}

updateQuantityDisplay();


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


function addToCart() {
    if (quantity < 1) {
        alert("Veuillez ajouter au moins un produit.");
        return;
    }
    cartQuantity += quantity;
    updateCartDisplay();
    resetQuantity();
}

function resetQuantity() {
    quantity = 1;
    updateQuantityDisplay();
}

function removeFromCart() {
    cartQuantity = 0;
    updateCartDisplay();
}

addToCartButton.addEventListener('click', addToCart);

deleteButton.addEventListener('click', removeFromCart);

panierButton.addEventListener('click', function() {
    cartContainer.classList.toggle('hide');
});

openCarrouselButton.addEventListener('click', function () {
  Carrousel.classList.toggle('hide')
})

closeCaroussel.addEventListener('click', function () {
Carrousel.classList.add('hide')
})

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

const images = document.querySelectorAll('.carrousel .preview-imge');

const imageLinks = [];

if (images.length < 4) {
  console.error('Il y a moins de 4 images dans le carrousel.');
} else {
  for (let i = 0; i < 4; i++) {
    if (images[i]) {
      imageLinks.push(images[i].src);
    } else {
      console.error(`L'image à l'index ${i} est undefined.`);
    }
  }
}
console.log(imageLinks);

let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % imageLinks.length;
  updateCarrouselImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
  updateCarrouselImage();
}

function updateCarrouselImage() {
  const carrouselImage = document.querySelector('.carrousel .preview-img');
  if (carrouselImage) {
    carrouselImage.src = imageLinks[currentIndex];
  } else {
    console.error('L\'élément carrouselImage est undefined.');
  }
}

const nextButton = document.querySelector('.icon-next');
const prevButton = document.querySelector('.icon-previous');

if (nextButton && prevButton) {
  nextButton.addEventListener('click', showNextImage);
  prevButton.addEventListener('click', showPrevImage);
} else {
  console.error('Les boutons next ou prev sont undefined.');
}
