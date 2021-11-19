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

    const cardHead = document.createElement('div');
    cardHead.classList.add('card-head');

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
    cardHead.append(cardHeading, cardDescription, cardMonthlyPrice, cardAnnualPrice, freeTrialBtn)
    planCard.append(cardHead);
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

if (window.innerWidth < 768) {
    planCards[0].classList.add('show-card');
}   else if (window.innerWidth < 1200) {
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

console.log(window.innerWidth);

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
        transformX -= 275;
    }
    runTestimonyCarousel(carouselContent);
}

const runTestimonyCarousel = (carouselContent) => {
    let transformX = 32.2;
    const moveCarousel = setInterval(() => {
        for (let item of carouselContent.children) {
            if (item.getClientRects()[0].left > -360) {
                item.style.transform = `translateX(${(item.getClientRects()[0].left - transformX)}px)`;
            }   else {
                item.style.transform = `translateX(${1537}px)`;
            }
        }
    }, 5);
}

addCompanyTestimonials(testimonialCarousel, testimonials);

// FAQ
const faqHead = document.querySelector('.faq-head');
const faqFoot = document.querySelector('.faq-foot');
const faqs = document.querySelector('.faqs');

faqHead.innerText = faqHeading;
faqFoot.innerText = faqFooter;

const faqMain = (faQuestions, appendTo) => {
    for (let question of faQuestions) {
        const newFaq = document.createElement('div');
        newFaq.classList.add('faq');
        const newQuestion = document.createElement('h3');
        newQuestion.innerHTML = `<span>${question.question}</span> <i class="fas fa-chevron-down"></i>`;
        const newAnswer = document.createElement('p');
        newAnswer.innerText = question.answer;
        newFaq.append(newQuestion, newAnswer);
        appendTo.append(newFaq);
    };
};
faqMain(questions, faqs);

const faqQuestions = document.querySelectorAll('.faq');

const showAnswer = () => {
    for (let question of faqQuestions) {
        question.addEventListener('click', () => {
            for (let question of faqQuestions) {
                question.classList.remove('show-answer');
            };
            question.classList.toggle('show-answer');
        });
    };
};
showAnswer();

// FREE TRIAL

const freeTrialBox = document.querySelector('.free-trial');

const addFreeTrialFeatures = (features, appendTo) => {
    for (let i = 0; i < features.length; i++) {
        const newFeature = document.createElement('div');
        newFeature.classList.add('trial-feature');
        newFeature.innerHTML = `<i class="fas fa-check"></i> <h4>${features[i]}</h4>`;
        appendTo.append(newFeature);
    };
};
addFreeTrialFeatures(freeTrialFeatures, freeTrialBox);

// FOOTER HEADING

const footerHeadingLeft = document.querySelector('.footer-head-left');
const footerHeadingRight = document.querySelector('.footer-head-right');
const footerHeadLinksContainer = document.querySelector('.footer-head-links');
const footerLogo = document.querySelector('.footer-head-left img');
footerLogo.setAttribute('src', companyLogo.image);
footerLogo.setAttribute('alt', companyLogo.alt);

const appendFooterHeadContent = (content, appendTo) => {
    for (let item of content) {
        const newItem = document.createElement('a');
        if (item.icon) {
            newItem.innerHTML = item.icon;
        }   else {
            newItem.innerHTML = item.name;
        }
        newItem.setAttribute('href', item.link);
        appendTo.append(newItem);
    }
}
appendFooterHeadContent(socialMedia, footerHeadingRight);
appendFooterHeadContent(footerHeadLinks, footerHeadLinksContainer);

// FOOTER MAIN

const footerMain = document.querySelector('.footer-main');

const createFooterCats = (categories, appendTo) => {
    categories.forEach(category => {
        if (category.name !== 'Login' && category.name !== 'Sign Up' && category.name !== 'Blog') {
            const newCat = document.createElement('div');
            newCat.classList.add('footer-main-cat');
            const catTitle = document.createElement('h6');
            catTitle.innerHTML = `<span>${category.name}</span> <i class="fas fa-chevron-down"></i>`;
            newCat.append(catTitle);
            createFooterSubCats(category, newCat);
            appendTo.append(newCat);
        }
    });
};

const createFooterSubCats = (categories, appendTo) => {
    const newSubCats = document.createElement('div');
    newSubCats.classList.add('footer-sub-cats');
    categories.extras.forEach(extra => {
        const newSubCat = document.createElement('a');
        newSubCat.classList.add('footer-sub-cat');
        newSubCat.innerText = extra.name;
        newSubCats.append(newSubCat);
        appendTo.append(newSubCats);
    });
};

createFooterCats(pageCategories, footerMain);

const footerCats = document.querySelectorAll('.footer-main-cat');

footerCats.forEach(cat => {
    cat.addEventListener('click', () => {
        for (let c of footerCats) {
            c.classList.remove('show-cats');
        }
        cat.classList.toggle('show-cats');
    });
});

// FOOTER FOOT

