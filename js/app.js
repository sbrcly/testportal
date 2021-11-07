// Main Content

// Create Header Content
mainHeading.innerText = pageHeading;

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
const planButtons = document.querySelectorAll('.plan-type');
planButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this === planButtons[0]) {
            planBgOverlay.classList.remove('right')
        }   else {
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
    this.classList.toggle('right');
    pricingMode();
});


// Create Plan Cards

const createCard = (cardInfo) => {
    const {header, recommended, description, monthly, annual} = cardInfo;

    const planCard = document.createElement('div');
    planCard.classList.add('plan-card');
    planCard.classList.add('annually');

    const cardHeading = document.createElement('h2');
    cardHeading.classList.add('card-heading');
    cardHeading.innerText = header;

    let recommendedBadge;
    if (recommended === true) {
        planCard.classList.add('recommended-card');
        recommendedBadge = document.createElement('span');
        recommendedBadge.classList.add('recommended-badge');
        recommendedBadge.innerHTML = `<i class="fas fa-star"></i> Most Popular`;
        cardHeading.append(recommendedBadge);
    }

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.innerText = description;

    const cardMonthlyPrice = document.createElement('h3');
    cardMonthlyPrice.classList.add('monthly-price');
    cardMonthlyPrice.classList.add('inactive');
    if (typeof monthly === 'number') {
        cardMonthlyPrice.innerHTML = `<span>$${monthly}</span>/ per month`;
    }   else {
        cardMonthlyPrice.classList.add('custom-quote');
        cardMonthlyPrice.innerHTML = monthly;
    }

    const cardAnnualPrice = document.createElement('h3');
    cardAnnualPrice.classList.add('annual-price');
    cardAnnualPrice.classList.add('active');
    if (typeof annual === 'number') {
        cardAnnualPrice.innerHTML = `<span>$${annual}</span>/ per month`;
    }   else {
        cardAnnualPrice.classList.add('custom-quote');
        cardAnnualPrice.innerHTML = annual;
    }

    const freeTrialBtn = document.createElement('button');
    freeTrialBtn.classList.add('free-trial-btn');
    freeTrialBtn.innerText = 'Test 14 days for free';

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
        if (getPosition > 50) {
            card.classList.add('show-card');
        }
        if (getPosition < 50) {
            card.classList.remove('show-card');
        }
    }
});


// TESTIMONIALS:
const testimonyHead = document.querySelector('.testimony-head');
const testimonyTagline = document.querySelector('.testimony-tagline');
const testimonialCarousel = document.querySelector('.testimonial-carousel');

testimonyHead.innerText = testimoniesHeading;
testimonyTagline.innerText = testimoniesTagline;

const addCompanyTestimonials = (appendTo, companies) => {
    for (let company of companies) {
        const newLogo = document.createElement('img');
        newLogo.setAttribute('src', `${company.logo}`);
        newLogo.setAttribute('alt', `Company logo for ${company.name}`)
        newLogo.classList.add('testimonial-logo');
        appendTo.append(newLogo);
    }
    createTestimonyCarousel(appendTo);
}

const createTestimonyCarousel = (carouselContent) => {
    let transformX = 1500;
    for (let item of carouselContent.children) {
        item.style.transform = `translateX(${transformX}px)`;
        transformX -= 350;
    }
    runTestimonyCarousel(carouselContent);
}

const runTestimonyCarousel = (carouselContent) => {
    let transformX = 33;
    const moveCarousel = setInterval(() => {
        for (let item of carouselContent.children) {
            if (item.getClientRects()[0].left > -1500) {
                item.style.transform = `translateX(${(item.getClientRects()[0].left - transformX)}px)`;
            }   else {
                item.style.transform = `translateX(${650}px)`;
            }
        }
    }, 10);
}

addCompanyTestimonials(testimonialCarousel, testimonials);