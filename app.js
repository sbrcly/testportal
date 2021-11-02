// DOM Selectors
const navbar = document.querySelector('nav');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('main');
const mainHeading = document.querySelector('h1');
const planTypeContainer = document.querySelector('.plan-type-buttons');
const subscriptionToggler = document.querySelector('.toggle-overlay');
const toggleLabels = document.querySelectorAll('.subscription-toggle h3')

// Company and modular Information
const navMenuIcon = '<i class="fas fa-bars"></i>';
const companyLogo = {
    image: '/images/companyLogo.PNG',
    alt: 'Company Logo'
};
const pageCategories = ['Products', 'For whom', 'Use cases', 'Blog', 'Pricing'];
const pageHeading = 'Plans that start free and grow with you';
const planTypes = [
    {
        type: 'Business',
        status: 'active'
    },
    {
        type: 'Education',
        status: 'inactive'
    }
];
const subscriptionTypes = ['Monthly', 'Annually'];

// Create Navbar**

// Navbar Left Logo
const addLogo = (target, logo, description) => {
    const newLogo = document.createElement('img');
    newLogo.setAttribute('src', logo);
    newLogo.setAttribute('alt', description);
    target.append(newLogo);
};

addLogo(navLeft, companyLogo.image, companyLogo.alt);

// Navbar Right Menu
const hamburgerMenu = document.createElement('button');
hamburgerMenu.classList.add('hideMenu');
hamburgerMenu.innerHTML = navMenuIcon;

navMenu.append(hamburgerMenu);


// Create Menu Items
const navMenuItems = document.createElement('div');
navMenuItems.classList.add('hideItems');
navMenuItems.id = 'nav-menu-items';
document.body.prepend(navMenuItems);

const createMenu = (target, menuItems) => {
    menuItems.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.innerText = item;
        menuItem.id = item;
        target.append(menuItem);
    });
};

createMenu(navMenuItems, pageCategories);

// Nav Menu Functionality

hamburgerMenu.addEventListener('click', function (e) {
    showMenu(this, navMenuItems)
});

const showMenu = (target, items) => {
    target.classList.toggle('hideMenu');
    target.classList.toggle('showMenu');
    items.classList.toggle('hideItems');
    items.classList.toggle('showItems');
}


// Create Header Content
mainHeading.innerText = pageHeading;

// Main Content

// Plan Types
planTypes.forEach(type => {
    const planTypeBtn = document.createElement('button');
    planTypeBtn.innerText = type.type;
    planTypeBtn.classList.add('plan-type');
    type.status === 'active' ?
    planTypeBtn.classList.add('active') :
    planTypeBtn.classList.add('inactive');
    planTypeContainer.append(planTypeBtn);
})

const planTypeBtns = document.querySelectorAll('.plan-type');
planTypeBtns.forEach(button => {
    button.addEventListener('click', () => {
        planTypeBtns.forEach(button => {
            button.classList.remove('active');
            button.classList.add('inactive')
        });
        button.classList.remove('inactive');
        button.classList.add('active')
    })
});

// Subscription Type
subscriptionToggler.addEventListener('click', function() {
    this.classList.toggle('left');
    this.classList.toggle('right');
});

