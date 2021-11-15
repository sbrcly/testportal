// DOM Selectors
const navbar = document.querySelector('nav');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('main');
const header = document.querySelector('header');
const mainHeading = document.querySelector('h1');
const testimonies = document.querySelector('.testimonials')
const faqSection = document.querySelector('.faq-section');
const freeTrialSection = document.querySelector('.free-trial');
const footer = document.querySelector('footer');
const planTypeContainer = document.querySelector('.plan-type-buttons');
const subscriptionToggler = document.querySelector('.toggle-overlay');
const toggleLabels = document.querySelectorAll('.subscription-toggle h3')
const sections = [mainSection, header, testimonies, faqSection, freeTrialSection, footer];
const buttons = document.querySelectorAll('button');
const planCardsContainer = document.querySelector('.plan-cards-container');

// Company and modular Information
const navMenuIcon = '<i class="fas fa-bars"></i>';
const pageHeading = 'Pick your plan. Change whenever you want.';
const companyLogo = {
    image: '/projects/testportal/images/companyLogo.PNG',
    alt: 'Company Logo'
};
const pageCategories = [
    {
        name: 'Product',
        important: false,
        extras: [
            {
                name: 'Skills and knowledge assessment',
                icon: '<i class="fas fa-user-circle"></i>'
            },
            {
                name: 'Reporting',
                icon: '<i class="fas fa-calendar"></i>'
            },
            {
                name: 'Insights & Analytics',
                icon: '<i class="far fa-chart-bar"></i>'
            },
            {
                name: 'Customization',
                icon: '<i class="fas fa-paint-roller"></i>'
            },
            {
                name: 'Feedback & Grades',
                icon: '<i class="fas fa-comments"></i>'
            },
            {
                name: 'Integrations & API',
                icon: '<i class="fas fa-code"></i>'
            },
            {
                name: 'Proctoring & Security',
                icon: '<i class="fas fa-eye"></i>'
            },
            {
                name: 'Dedicated app for Microsoft Teams',
                icon: '<i class="fas fa-user"></i>'
            },
            {
                name: 'Self-graded & open-ended questions',
                icon: '<i class="fas fa-newspaper"></i>'
            },
            {
                name: 'Security',
                icon: '<i class="fas fa-shield-alt"></i>'
            },
            {
                name: 'Certificates',
                icon: '<i class="fas fa-award"></i>'
            }
        ]
    },
    {
        name: 'For whom',
        important: false,
        extras: [ 
            {
                name: 'Business',
                icon: '<i class="fas fa-file-alt"></i>',
                extras: [
                    {
                        name: 'Human Resources',
                    },
                    {
                        name: 'Training companies & departments',
                    },
                    {
                        name: 'Certification institutions',
                    },
                    {
                        name: 'Sales & Customer service',
                    }
                ]
            },
            {
                name: 'Education',
                icon: '<i class="fas fa-book-open"></i>',
                extras: [
                    {
                        name: 'Teachers'
                    },
                    {
                        name: 'Schools'
                    },
                    {
                        name: 'Higher education'
                    },
                    {
                        name: 'Language schools'
                    }
                ]
            }
        ]
    },
    {
        name: 'Use cases',
        important: false,
        extras: [
            {
                name: 'Business',
                icon: '<i class="fas fa-file-alt"></i>',
                extras: [
                    {
                        name: 'Recruitment',
                    },
                    {
                        name: 'Employee assessment',
                    },
                    {
                        name: 'Trainings',
                    },
                    {
                        name: 'Sales Training',
                    },
                    {
                        name: 'Customer service',
                    },
                    {
                        name: 'Safety procedures',
                    },
                    {
                        name: 'Certification',
                    }
                ]
            },
            {
                name: 'Education',
                icon: '<i class="fas fa-book-open"></i>',
                extras: [
                    {
                        name: 'Quizzes'
                    },
                    {
                        name: 'Exams/High-stakes'
                    },
                    {
                        name: 'Homework'
                    },
                    {
                        name: 'Competition'
                    },
                    {
                        name: 'Formative assessment'
                    }
                ]
            }
        ]
    },
    {
        name: 'Pricing',
        important: false,
        extras: [
            {
                name: 'Business',
                icon: '<i class="fas fa-building"></i>'
            },
            {
                name: 'Education',
                icon: '<i class="fas fa-book-open"></i>'
            },
            {
                name: 'Conducting assessments on behalf',
                icon: '<i class="fas fa-file-alt"></i>'
            }
        ]
    },
    {
        name: 'Blog',
        important: false,
        extras: []
    },
    {
        name: 'Login',
        important: true,
        extras: [

        ]
    },
    {
        name: 'Sign Up',
        important: true,
        extras: [

        ]
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
const planInfo = [
    {
        header: 'Standard',
        recommended: false,
        description: 'Ideal for low-volume testing where no advanced results analytics is needed',
        monthly: 35,
        annual: 29,
        limit: 30,
        extras: [
            {
                description: 'Max number of results per month',
                value: 30
            },
            {
                description: 'Various innovative test configuration options',
                value: true
            },
            {
                description: 'Insightful analytics and reporting of results',
                value: false
            },
            {
                description: 'Certificates',
                value: false
            },
            {
                description: 'Additional user accounts and collaboration',
                value: false
            },
            {
                description: 'Customizatoin & API Integration',
                value: false
            }
        ]
    },
    {
        header: 'Pro',
        recommended: true,
        description: 'Fits to most use cases with limited results collected per month',
        monthly: 69,
        annual: 59,
        limit: 500,
        extras: [
            {
                description: 'Max number of results per month',
                value: 300
            },
            {
                description: 'Various innovative test configuration options',
                value: true
            },
            {
                description: 'Insightful analytics and reporting of results',
                value: true
            },
            {
                description: 'Certificates',
                value: false
            },
            {
                description: 'Additional user accounts and collaboration',
                value: false
            },
            {
                description: 'Customizatoin & API Integration',
                value: false
            }
        ]
    },
    {
        header: 'Max',
        recommended: false,
        description: 'Unlimited features and no Max number of results per month',
        monthly: 119,
        annual: 99,
        limit: 3000,
        extras: [
            {
                description: 'Max number of results per month',
                value: 'Unlimited'
            },
            {
                description: 'Various innovative test configuration options',
                value: true
            },
            {
                description: 'Insightful analytics and reporting of results',
                value: true
            },
            {
                description: 'Certificates',
                value: true
            },
            {
                description: 'Additional user accounts and collaboration',
                value: false
            },
            {
                description: 'Customizatoin & API Integration',
                value: false
            }
        ]
    },
    {
        header: 'Max Enterprise',
        recommended: false,
        description: 'Collaboration and additional user accounts, unlimited features and results collected, customization',
        monthly: 'Custom quote',
        annual: 'Custom quote',
        limit: 'Unlimited',
        extras: [
            {
                description: 'Max number of results per month',
                value: 'Unlimited'
            },
            {
                description: 'Various innovative test configuration options',
                value: true
            },
            {
                description: 'Insightful analytics and reporting of results',
                value: true
            },
            {
                description: 'Certificates',
                value: true
            },
            {
                description: 'Additional user accounts and collaboration',
                value: true
            },
            {
                description: 'Customizatoin & API Integration',
                value: true
            }
        ]
    }
]
const subscriptionTypes = ['Annually', 'Monthly'];

// TESTIMONIALS
const testimoniesHeading = `You'll be in good company`;
const testimoniesTagline = 'We helped these brands turn online assessments into success stories. Join them. Elevate your testing.';
const testimonials = [
    {
        name: 'Schenker',
        logo: '/projects/testportal/images/schenker.jpg'
    },
    {
        name: 'Electrolux',
        logo: '/projects/testportal/images/electrolux.png'
    },
    {
        name: 'DHL',
        logo: '/projects/testportal/images/dhl.jpg'
    },
    {
        name: 'Broen',
        logo: '/projects/testportal/images/broen.jpg'
    },
    {
        name: 'Sega',
        logo: '/projects/testportal/images/sega.jpg'
    },
    {
        name: 'Techland',
        logo: '/projects/testportal/images/techland.jpg'
    },
    {
        name: 'University of the West of Scotland',
        logo: '/projects/testportal/images/uws.PNG'
    }
];

// Frequently asked Questions

const faqHeading = 'Frequently asked questions';
const faqFooter = 'Didn\'t find a fit solution? We can conduct a test for your organization.'

const questions = [
    {
        question: 'What happens when the trial or subscription expires?',
        answer: 'Your tests will be suspended but you still have an access to previously collected results.'
    },
    {
        question: 'Can you organize the whole exam for me?',
        answer: 'Yes, if you would like us to handle the examination process end-to-end we are more than happy to help.'
    },
    {
        question: 'How many respondents may take the test simultaneously?',
        answer: 'As many as needed. If you expect more than 1000 people to take the test at one time, write to us and make sure that the platform will work stably.'
    },
    {
        question: 'Do you offer customization?',
        answer: 'Yes. If you need custom features that are not available on our platform, just contact us and our custom development team will work with you.'
    }
];

// FREE TRIAL

const freeTrialFeatures = ['Free 14-day trial', 'No card required'];

// SOCIAL MEDIA

const socialMedia = [
    {
        name: 'linkedin',
        icon: '<i class="fab fa-linkedin"></i>',
        link: 'http://www.linkedin.com'
    },
    {
        name: 'facebook',
        icon: '<i class="fab fa-facebook"></i>',
        link: 'http://www.facebook.com'
    }
];

// FOOTER LINKS

const footerHeadLinks = [
    {
        name: 'Blog',
        link: ''
    },
    {
        name: 'Help Center',
        link: ''
    },
    {
        name: 'Customer Stories',
        link: ''
    },
    {
        name: 'About us',
        link: ''
    },
    {
        name: 'Contact us',
        link: ''
    }
];




