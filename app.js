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
hamburgerMenu.setAttribute('aria-label', 'Navigation Menu');
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
        menuItem.setAttribute('href', '#');
        menuItem.innerText = item.name;
        menuItem.id = item.name;
        if (item.important === true) {
            menuItem.classList.add('main-link');
        }
        target.append(menuItem);
    });
};

createMenu(navMenuItems, pageCategories);

// Nav Menu Functionality

hamburgerMenu.addEventListener('click', function () {
    showMenu(this, navMenuItems)
});
hamburgerMenu.addEventListener('blur', function () {
    hideMenu(this, navMenuItems)
});


const showMenu = (target, items) => {
    target.classList.toggle('hideMenu');
    target.classList.toggle('showMenu');
    items.classList.toggle('hideItems');
    items.classList.toggle('showItems');
    sections.forEach(section => {
        section.classList.toggle('menuOpen')
        section.classList.toggle('menuClosed')
    });
};

const hideMenu = (target, items) => {
    target.classList.add('hideMenu');
    target.classList.remove('showMenu');
    items.classList.add('hideItems');
    items.classList.remove('showItems');
    sections.forEach(section => {
        section.classList.remove('menuOpen')
        section.classList.add('menuClosed')
    });
};

// Create Header Content
mainHeading.innerText = pageHeading;

// Main Content

// Plan Types
planTypes.forEach(type => {
    const planTypeBtn = document.createElement('button');
    planTypeBtn.setAttribute('name', 'Plan Type');
    planTypeBtn.innerText = type.type;
    planTypeBtn.classList.add('plan-type');
    planTypeContainer.append(planTypeBtn);
});

// Plan BG animation
const planBgOverlay = document.querySelector('.background-overlay')
planBgOverlay.classList.add('left');
const planButtons = document.querySelectorAll('.plan-type');
planButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this === planButtons[0]) {
            planBgOverlay.classList.remove('right')
            planBgOverlay.classList.add('left')
        }   else {
            planBgOverlay.classList.remove('left')
            planBgOverlay.classList.add('right')
        }
    });
});

const planTypeBtns = document.querySelectorAll('.plan-type');
planTypeBtns.forEach(button => {
    button.addEventListener('click', () => {
        planTypeBtns.forEach(button => {
            button.classList.remove('active');
            button.classList.add('inactive')
        });
        button.classList.remove('inactive');
        button.classList.add('active')
    });
});

// Subscription Type
subscriptionToggler.addEventListener('click', function() {
    this.classList.toggle('left');
    this.classList.toggle('right');
});


// Create Plan Cards

const createCard = (cardInfo) => {
    const {header, featured, description, monthly, annual, limit} = cardInfo;

    const planCard = document.createElement('div');
    planCard.classList.add('plan-card');

    const cardHeading = document.createElement('h2');
    cardHeading.classList.add('card-heading');
    cardHeading.innerText = header;

    if (featured === true) {
        const featuredBadge = document.createElement('div');
        featuredBadge.classList.add('featured-badge');
        featuredBadge.innerHTML = `<p><i class="fas fa-star"></i> Recommended</p>`;
    }

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.innerText = description;

    const cardMonthlyPrice = document.createElement('h3');
    cardMonthlyPrice.classList.add('monthly-price');
    cardMonthlyPrice.innerHTML = `<span>$${monthly}</span>/ per month`;

    const cardAnnualPrice = document.createElement('h3');
    cardAnnualPrice.classList.add('annual-price');
    cardAnnualPrice.innerHTML = `<span>$${annual}</span>/ per month`;

    const freeTrialBtn = document.createElement('button');
    freeTrialBtn.classList.add('free-trial-btn');
    freeTrialBtn.innerText = 'Try 30 days for free';

    planCard.append(cardHeading, cardDescription, cardMonthlyPrice, freeTrialBtn);

    mainSection.append(planCard);

};

planInfo.forEach(plan => {
    createCard(plan);
});

const planCards = document.querySelectorAll('.plan-card');

