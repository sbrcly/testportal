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
const planCardsContainer = document.querySelector('.plan-cards-container');

// Company and modular Information
const navMenuIcon = '<i class="fas fa-bars"></i>';
const pageHeading = 'Pick your plan. Change whenever you want.';
const companyLogo = {
    image: '/images/companyLogo.PNG',
    alt: 'Company Logo'
};
const pageCategories = [
    {
        name: 'Product',
        important: false,
        extras: [
            {
                name: 'Skills and knowledge assessment',
                icon: undefined
            },
            {
                name: 'Reporting',
                icon: undefined
            },
            {
                name: 'Insights & Analytics',
                icon: undefined
            },
            {
                name: 'Customization',
                icon: undefined
            },
            {
                name: 'Feedback & Grades',
                icon: undefined
            },
            {
                name: 'Integrations & API',
                icon: undefined
            },
            {
                name: 'Proctoring & Security',
                icon: undefined
            },
            {
                name: 'Dedicated app for Microsoft Teams',
                icon: undefined
            },
            {
                name: 'Self-graded open-ended & choice questions',
                icon: undefined
            },
            {
                name: 'Security',
                icon: undefined
            },
            {
                name: 'Certificates',
                icon: undefined
            }
        ]
    },
    {
        name: 'For whom',
        important: false,
        extras: [ 
            {
                name: 'Business',
                icon: undefined,
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
                icon: undefined,
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
                icon: undefined,
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
                icon: undefined,
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
        name: 'Blog',
        important: false,
        extras: []
    },
    {
        name: 'Pricing',
        important: false,
        extras: [
            {
                name: 'Business',
                icon: undefined
            },
            {
                name: 'Education',
                icon: undefined
            },
            {
                name: 'Conducting assessments on behalf',
                icon: undefined
            }
        ]
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
