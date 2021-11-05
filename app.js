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
    if (window.innerWidth < 765) {
        target.classList.toggle('hideMenu');
        target.classList.toggle('showMenu');
        items.classList.toggle('hideItems');
        items.classList.toggle('showItems');
        sections.forEach(section => {
            section.classList.toggle('menuOpen')
            section.classList.toggle('menuClosed')
        });
    }   
};

const hideMenu = (target, items) => {
    if (window.innerWidth < 765) {
        target.classList.add('hideMenu');
        target.classList.remove('showMenu');
        items.classList.add('hideItems');
        items.classList.remove('showItems');
        sections.forEach(section => {
            section.classList.remove('menuOpen')
            section.classList.add('menuClosed')
        });
    }   
};

// Remove Hamburger Menu classes on larger devices
if (window.innerWidth >= 765) {
    hamburgerMenu.classList.remove('hideMenu');
    hamburgerMenu.classList.remove('showMenu');
    navMenuItems.classList.remove('hideItems');
    navMenuItems.classList.remove('showItems');
    sections.forEach(section => {
        section.classList.remove('menuOpen')
        section.classList.remove('menuClosed')
    });
    hamburgerMenu.remove();
    let navMenuItemsPlaceholder = navMenuItems;
    navMenuItems.remove();
    navMenu.append(navMenuItemsPlaceholder);
}

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
const subscriptionOptions = document.querySelectorAll('.toggle-option');
subscriptionOptions.forEach((option, index) => option.innerText = subscriptionTypes[index]);

subscriptionToggler.addEventListener('click', function() {
    this.classList.toggle('left');
    this.classList.toggle('right');
    pricingMode();
});


// Create Plan Cards

const createCard = (cardInfo) => {
    const {header, recommended, description, monthly, annual} = cardInfo;

    const planCard = document.createElement('div');
    planCard.classList.add('plan-card');
    planCard.classList.add('monthly');

    const cardHeading = document.createElement('h2');
    cardHeading.classList.add('card-heading');
    cardHeading.innerText = header;

    let recommendedBadge;
    if (recommended === true) {
        planCard.classList.add('recommended-card');
        recommendedBadge = document.createElement('span');
        recommendedBadge.classList.add('recommended-badge');
        recommendedBadge.innerHTML = `<i class="fas fa-star"></i> Recommended`;
        cardHeading.append(recommendedBadge);
    }

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.innerText = description;

    const cardMonthlyPrice = document.createElement('h3');
    cardMonthlyPrice.classList.add('monthly-price');
    if (typeof monthly === 'number') {
        cardMonthlyPrice.innerHTML = `<span>$${monthly}</span>/ per month`;
    }   else {
        cardMonthlyPrice.classList.add('custom-quote');
        cardMonthlyPrice.innerHTML = monthly;
    }

    const cardAnnualPrice = document.createElement('h3');
    cardAnnualPrice.classList.add('annual-price');
    cardAnnualPrice.classList.add('inactive');
    if (typeof annual === 'number') {
        cardAnnualPrice.innerHTML = `<span>$${annual}</span>/ per year`;
    }   else {
        cardAnnualPrice.classList.add('custom-quote');
        cardAnnualPrice.innerHTML = annual;
    }

    const freeTrialBtn = document.createElement('button');
    freeTrialBtn.classList.add('free-trial-btn');
    freeTrialBtn.innerText = 'Try 30 days for free';

    planCard.append(cardHeading, cardDescription, cardMonthlyPrice, cardAnnualPrice, freeTrialBtn);
    addCardExtras(cardInfo, planCard);

    planCardsContainer.append(planCard);

};

const addCardExtras = (cardInfo, target) => {
    const extraBenefits = cardInfo.extras;
    extraBenefits.forEach(extraBenefit => {
        const benefit = document.createElement('h4');
        benefit.classList.add('extra-benefit');
        if (typeof extraBenefit.value === 'number' || typeof extraBenefit.value === 'string') {
            benefit.innerHTML = `<span>${extraBenefit.description}</span> <span>${extraBenefit.value}</span>`; 
        }   else if (extraBenefit.value === true) {
            benefit.classList.add('included');
            benefit.innerHTML = `<span>${extraBenefit.description}</span> <span><i class="fas fa-check-circle"></i></span>`;
        }   else {
            benefit.classList.add('notIncluded');
            benefit.innerHTML = `<span>${extraBenefit.description}</span> <span><i class="fas fa-times-circle"></i></span>`;
        }
        target.append(benefit);
    })
}

const pricingMode = () => {
    planCards.forEach(card => {
        card.classList.toggle(subscriptionTypes[0].toLowerCase());
        card.classList.toggle(subscriptionTypes[1].toLowerCase());
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const annualPrices = document.querySelectorAll('.annual-price');
        if (card.classList.contains('monthly')) {
            monthlyPrices.forEach(price => {
                price.classList.remove('inactive');
                price.classList.add('active');
            });
            annualPrices.forEach(price => {
                price.classList.remove('active');
                price.classList.add('inactive');
            });
        }   else {
                annualPrices.forEach(price => {
                    price.classList.remove('inactive');
                    price.classList.add('active');
                });
                monthlyPrices.forEach(price => {
                    price.classList.remove('active');
                    price.classList.add('inactive');
                });
        }
    });
}

planInfo.forEach(plan => {
    createCard(plan);
});
const planCards = document.querySelectorAll('.plan-card');
console.log(window.innerWidth);

if (window.innerWidth < 765) {
    planCards[0].classList.add('show-card');
}   else if (window.innerWidth < 1500) {
    planCards[0].classList.add('show-card');
    planCards[1].classList.add('show-card');
}   else {
    for (let card of planCards) {
        card.classList.add('show-card');
    }
}

// Load Cards on scroll
window.addEventListener('scroll', (e) => {
    for (let card of planCards) {
        let getPosition = window.innerHeight - card.getClientRects()[0].top;
        if (getPosition > 200) {
            card.classList.add('show-card');
        }
        if (getPosition < 200) {
            card.classList.remove('show-card');
        }
    }
});