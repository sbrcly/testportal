// DOM Selectors
const navbar = document.querySelector('nav');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('main');
const header = document.querySelector('header');
const mainHeading = document.querySelector('h1');
const planTypeContainer = document.querySelector('.plan-type-buttons');
const subscriptionToggler = document.querySelector('.toggle-overlay');
const toggleLabels = document.querySelectorAll('.subscription-toggle h3')
const sections = [mainSection, header];
const buttons = document.querySelectorAll('button');

// Company and modular Information
const navMenuIcon = '<i class="fas fa-bars"></i>';
const pageHeading = 'Plans that start free and grow with you';
const companyLogo = {
    image: '/images/companyLogo.PNG',
    alt: 'Company Logo'
};
const pageCategories = [
    {
        name: 'Products',
        important: false
    },
    {
        name: 'For whom',
        important: false
    },
    {
        name: 'Use cases',
        important: false
    },
    {
        name: 'Blog',
        important: false
    },
    {
        name: 'Pricing',
        important: false
    },
    {
        name: 'Login',
        important: true
    },
    {
        name: 'Sign Up',
        important: true
    },
]
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
const planCards = [
    {
        plan: 'Standard',
        recommended: false,
        description: 'Ideal for low-volume testing where no advanced results analytics is needed',
        monthly: 23,
        annual: 249,
        limit: 30,
        extras: {
            advTest: true,
            analytics: false,
            certificates: false,
            addAccounts: false,
            customization: false
        }
    },
    {
        plan: 'Pro',
        recommended: true,
        description: 'Fits to most use cases with limited results collected per month',
        monthly: 49,
        annual: 529,
        limit: 500,
        extras: {
            advTest: true,
            analytics: true,
            certificates: false,
            addAccounts: false,
            customization: false
        }
    },
    {
        plan: 'Max',
        recommended: false,
        description: 'Unlimited features and no limit of results collected per month',
        monthly: 137,
        annual: 1399,
        limit: 'Unlimited',
        extras: {
            advTest: true,
            analytics: true,
            certificates: true,
            addAccounts: false,
            customization: false
        }
    },
    {
        plan: 'Max Enterprise',
        recommended: false,
        description: 'Collaboration and additional user accounts, unlimited features and results collected, customization',
        monthly: 'Custom quote',
        annual: 'Custom quote',
        limit: 'Unlimited',
        extras: {
            advTest: true,
            analytics: true,
            certificates: true,
            addAccounts: true,
            customization: true
        }
    }
]
const subscriptionTypes = ['Monthly', 'Annually'];
