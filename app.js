const appDiv = document.getElementById('app');


function updateContent(route) {
    switch(route) {
        case '/':
            
            break;
        case '/about':
        
            appDiv.innerHTML = '<h2>About Us</h2>';
            break;
        case '/delivery_order':
        
            appDiv.innerHTML = '<h2>Choose a store</h2>';
            break;

        default:
        
            appDiv.innerHTML = '<h2>Page Not Found</h2>';
    }
}


function handleCheckboxChange(event) {
    if (event.target.matches('input[type="checkbox"]')) {
        const checkbox = event.target;
        const isChecked = checkbox.checked;
        const categoryId = checkbox.id;
        
        
        const storeElements = document.querySelectorAll(`.row2.${categoryId}`);

        storeElements.forEach(element => {
            element.style.display = isChecked ? 'block' : 'none';
        });
    }
}


document.body.addEventListener('change', handleCheckboxChange);



function handleNavigation() {
    const route = window.location.hash.slice(1) || '/';
    updateContent(route);
}


document.body.addEventListener('change', handleCheckboxChange);


window.addEventListener('load', handleNavigation);
window.addEventListener('hashchange', handleNavigation);


function openLoginForm1() {
    document.getElementById("loginForm1").style.display = "block";
}

function closeLoginForm1() {
    document.getElementById("loginForm1").style.display = "none";
}

function openLoginForm2() {
    document.getElementById("loginForm2").style.display = "block";
}


function closeLoginForm2() {
    document.getElementById("loginForm2").style.display = "none";
}


		
function displayFoodItems(categoryId) {
    
    const foodCategories = document.querySelectorAll('.food_cat');
    foodCategories.forEach(category => {
        category.style.display = 'none';
    });

    
    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.style.display = 'block';
}


function addToOrder(itemName, price) {
    
    const selectedItem = {
        name: itemName,
        price: price
    };

    
    order.push(selectedItem);

    
    updateCart();
}


function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    
    order.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${item.price}€`;
        cartContainer.appendChild(itemElement);
    });
}

const order = [];