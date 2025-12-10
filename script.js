// Product data with prices in Philippine Peso (PHP) and image URLs
const products = [
    {
        id: 1,
        name: "Maybelline SuperStay Matte Ink Liquid Lipstick",
        price: 299.00,
        rating: 4.7,
        reviews: 2548,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Lipstick",
        shipping: "FREE Shipping"
    },
    {
        id: 2,
        name: "ColourPop Going Coconuts Pressed Powder Palette",
        price: 1250.00,
        rating: 4.8,
        reviews: 1890,
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Eyeshadow",
        shipping: "FREE Shipping"
    },
    {
        id: 3,
        name: "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation",
        price: 2199.00,
        rating: 4.6,
        reviews: 3205,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Foundation",
        shipping: "FREE Shipping"
    },
    {
        id: 4,
        name: "Real Techniques Everyday Essentials Brush Set",
        price: 899.00,
        rating: 4.9,
        reviews: 1567,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Brushes",
        shipping: "FREE Shipping"
    },
    {
        id: 5,
        name: "NARS Orgasm Blush",
        price: 1899.00,
        rating: 4.8,
        reviews: 2450,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Blush",
        shipping: "FREE Shipping"
    },
    {
        id: 6,
        name: "The Ordinary Niacinamide 10% + Zinc 1% Serum",
        price: 650.00,
        rating: 4.5,
        reviews: 4210,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Skincare",
        shipping: "FREE Shipping"
    },
    {
        id: 7,
        name: "Urban Decay All Nighter Setting Spray",
        price: 1599.00,
        rating: 4.7,
        reviews: 2980,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Setting Spray",
        shipping: "FREE Shipping"
    },
    {
        id: 8,
        name: "Charlotte Tilbury Pillow Talk Lip Cheat Lip Liner",
        price: 1299.00,
        rating: 4.8,
        reviews: 1765,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Lip Liner",
        shipping: "FREE Shipping"
    },
    {
        id: 9,
        name: "Too Faced Better Than Sex Mascara",
        price: 1499.00,
        rating: 4.4,
        reviews: 3120,
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Mascara",
        shipping: "FREE Shipping"
    },
    {
        id: 10,
        name: "Anastasia Beverly Hills Brow Wiz",
        price: 1199.00,
        rating: 4.9,
        reviews: 2250,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Brows",
        shipping: "FREE Shipping"
    },
    {
        id: 11,
        name: "Beautyblender Original Makeup Sponge",
        price: 899.00,
        rating: 4.7,
        reviews: 4100,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Tools",
        shipping: "FREE Shipping"
    },
    {
        id: 12,
        name: "Huda Beauty Nude Eyeshadow Palette",
        price: 2899.00,
        rating: 4.8,
        reviews: 1890,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsQFa76geBcl90KwQPM445IIxgdUdRgx29g&s",
        category: "Eyeshadow",
        shipping: "FREE Shipping"
    },
    {
        id: 13,
        name: "Professional Makeup Palette Set - Deal of the Day",
        price: 1299.00,
        rating: 4.8,
        reviews: 2458,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Eyeshadow",
        shipping: "FREE Shipping",
        originalPrice: 2165.00
    }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const recommendedGrid = document.querySelector('.recommended-grid');
const cartSidebar = document.getElementById('cartSidebar');
const cartIcon = document.getElementById('cartIcon');
const closeCartBtn = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const emptyCart = document.getElementById('emptyCart');
const itemCount = document.getElementById('itemCount');
const subtotalPrice = document.querySelector('.subtotal-price');
const checkoutBtn = document.getElementById('checkoutBtn');
const authModal = document.getElementById('authModal');
const signInBtn = document.getElementById('signInBtn');
const startHereBtn = document.getElementById('startHereBtn');
const closeAuth = document.getElementById('closeAuth');
const authTabs = document.querySelectorAll('.auth-tab');
const signinForm = document.getElementById('signinForm');
const registerForm = document.getElementById('registerForm');
const signinBtn = document.getElementById('signinBtn');
const createAccountBtn = document.getElementById('createAccountBtn');
const registerBtn = document.getElementById('registerBtn');

// Format price in Philippine Peso
function formatPrice(price) {
    return `₱${price.toFixed(2)}`;
}

// Initialize the page
function init() {
    renderFeaturedProducts();
    renderRecommendedProducts();
    updateCart();
    setupSaleButtons();
    
    // Check if user is logged in
    if (currentUser) {
        updateUserInfo();
    }
    
    // Start deal timer
    startDealTimer();
    startFlashSaleTimer();
}

// Render featured products
function renderFeaturedProducts() {
    productGrid.innerHTML = '';
    
    products.slice(0, 8).forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${renderStars(product.rating)}
                </div>
                <span class="rating-count">${product.reviews.toLocaleString()}</span>
            </div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-shipping">${product.shipping}</div>
            <div class="product-actions">
                <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
                <button class="btn-wishlist" data-id="${product.id}">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.btn-add-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Render recommended products
function renderRecommendedProducts() {
    recommendedGrid.innerHTML = '';
    
    // Shuffle products for variety
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    shuffledProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'recommended-card';
        
        productCard.innerHTML = `
            <div class="recommended-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="recommended-title">${product.name}</h3>
            <div class="recommended-price">${formatPrice(product.price)}</div>
            <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
        `;
        
        recommendedGrid.appendChild(productCard);
    });
    
    // Add event listeners to recommended product buttons
    recommendedGrid.querySelectorAll('.btn-add-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Setup sale product buttons
function setupSaleButtons() {
    // Deal of the day button
    document.querySelector('.btn-deal').addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
    });
    
    // Flash sale buttons
    document.querySelectorAll('.btn-sale').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Render stars for rating
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    updateCart();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
    
    // Open cart sidebar
    cartSidebar.classList.add('open');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Update cart quantity
function updateCartItem(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Update cart UI
function updateCart() {
    // Update cart count in header
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
    
    // Update item count in cart sidebar
    itemCount.textContent = totalItems;
    
    // Update cart items display
    if (cart.length === 0) {
        emptyCart.style.display = 'flex';
        cartItems.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartItems.style.display = 'block';
        
        cartItems.innerHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="quantity-input" value="${item.quantity}" data-id="${item.id}">
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to cart item controls
        cartItems.querySelectorAll('.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateCartItem(productId, item.quantity - 1);
                }
            });
        });
        
        cartItems.querySelectorAll('.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateCartItem(productId, item.quantity + 1);
                }
            });
        });
        
        cartItems.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const newQuantity = parseInt(this.value) || 1;
                updateCartItem(productId, newQuantity);
            });
        });
        
        cartItems.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    // Update subtotal
    const cartSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    subtotalPrice.textContent = formatPrice(cartSubtotal);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #ff69b4;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s, fadeOut 0.3s 2.7s;
        max-width: 300px;
    `;
    
    // Add keyframes for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Start deal timer
function startDealTimer() {
    const timerUnits = document.querySelectorAll('.deal-timer .timer-unit');
    let hours = 12, minutes = 45, seconds = 30;
    
    const timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    clearInterval(timer);
                }
            }
        }
        
        timerUnits[0].textContent = hours.toString().padStart(2, '0');
        timerUnits[1].textContent = minutes.toString().padStart(2, '0');
        timerUnits[2].textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Start flash sale timer
function startFlashSaleTimer() {
    const timerUnits = document.querySelectorAll('.sale-timer .timer-unit');
    let hours = 4, minutes = 22, seconds = 15;
    
    const timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    clearInterval(timer);
                    document.querySelector('.flash-sale').innerHTML = '<div class="sale-ended"><h3>Flash Sale Ended</h3><p>Check back soon for more deals!</p></div>';
                }
            }
        }
        
        timerUnits[0].textContent = hours.toString().padStart(2, '0');
        timerUnits[1].textContent = minutes.toString().padStart(2, '0');
        timerUnits[2].textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Update user info in header
function updateUserInfo() {
    const accountGreeting = document.querySelector('.account-greeting');
    const accountText = document.querySelector('.account-text');
    
    if (currentUser) {
        accountGreeting.textContent = `Hello, ${currentUser.name.split(' ')[0]}`;
        accountText.textContent = 'Account & Lists';
    }
}

// Cart functionality
cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    if (!currentUser) {
        authModal.classList.add('active');
        cartSidebar.classList.remove('open');
        return;
    }
    
    alert(`Checkout successful! Total: ${subtotalPrice.textContent}\n\nThank you for shopping with Blush Boutique!`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    cartSidebar.classList.remove('open');
});

// Auth modal functionality
signInBtn.addEventListener('click', () => {
    authModal.classList.add('active');
    setActiveTab('signin');
});

startHereBtn.addEventListener('click', () => {
    authModal.classList.add('active');
    setActiveTab('register');
});

closeAuth.addEventListener('click', () => {
    authModal.classList.remove('active');
});

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        setActiveTab(tabId);
    });
});

function setActiveTab(tabId) {
    // Update tabs
    authTabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update forms
    if (tabId === 'signin') {
        signinForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        signinForm.classList.remove('active');
        registerForm.classList.add('active');
    }
}

createAccountBtn.addEventListener('click', () => {
    setActiveTab('register');
});

signinBtn.addEventListener('click', () => {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    
    if (!email || !password) {
        alert('Please enter your email and password');
        return;
    }
    
    // For demo purposes, accept any login
    currentUser = {
        name: 'Demo User',
        email: email
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserInfo();
    authModal.classList.remove('active');
    showNotification('Successfully signed in!');
});

registerBtn.addEventListener('click', () => {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    
    if (!name || !email || !password || !passwordConfirm) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    currentUser = {
        name: name,
        email: email
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserInfo();
    authModal.classList.remove('active');
    showNotification('Account created successfully!');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.classList.remove('active');
    }
    
    if (e.target === cartSidebar) {
        cartSidebar.classList.remove('open');
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', init);