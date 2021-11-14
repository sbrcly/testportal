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
        const navItem = document.createElement('div');
        navItem.classList.add('nav-item-container');
        const menuItem = document.createElement('a');
        menuItem.setAttribute('href', '#');
        menuItem.classList.add('nav-link');
        if (item.extras.length > 0) {
            menuItem.innerHTML = `${item.name} <i class="fas fa-chevron-down"></i>`;
        }   else {
            menuItem.innerText = item.name;
        }
        menuItem.id = item.name;
        if (item.important === true) {
            menuItem.classList.add('main-link');
        }
        navItem.append(menuItem);
        target.append(navItem);
    });
};

createMenu(navMenuItems, pageCategories);


// Nav Menu Functionality


hamburgerMenu.addEventListener('click', function () {
    showMenu(this, navMenuItems)
});

const showMenu = (target, items) => {
    if (window.innerWidth < 765) {
        target.classList.toggle('showMenu');
        items.classList.toggle('showItems');
        sections.forEach(section => {
            section.classList.toggle('menuOpen')
        });
    }   
};

const hideMenu = (target, items) => {
    if (window.innerWidth < 765) {
        target.classList.remove('showMenu');
        items.classList.remove('showItems');
        sections.forEach(section => {
            section.classList.remove('menuOpen')
        });
    }   
};


// Add Extras to nav menu Items
const navLinks = document.querySelectorAll('.nav-link');
const navItemContainer = document.querySelectorAll('.nav-item-container');


for (let i = 0; i < navItemContainer.length; i++) {
    let navSubLinksContainer;
    if (pageCategories[i].extras.length > 0) {
        if(navLinks[i].id === pageCategories[i].name) {
            navSubLinksContainer = document.createElement('div');
            navSubLinksContainer.classList.add('sub-link-container');
            for (let subCategory of pageCategories[i].extras) {
                const navSubLink = document.createElement('a');
                navSubLink.setAttribute('href', '#');
                navSubLink.classList.add('nav-sub-link');
                navSubLink.innerHTML = `${subCategory.icon} <span>${subCategory.name}</span>`;
                navSubLinksContainer.append(navSubLink);
            }
        }
        navItemContainer[i].append(navSubLinksContainer);
    }

}


const navSubLinkContainer = document.querySelectorAll('.sub-link-container');
for (let i = 0; i < navLinks.length; i++) {
    if (navSubLinkContainer[i]) {
        navLinks[i].addEventListener('click', () => {
            navLinks[i].classList.toggle('active');
            navSubLinkContainer[i].classList.toggle('show-sub-links');
        })
    }
}

// Remove Hamburger Menu classes on larger devices

const toggleNavMenu = () => {
    let hamburgerMenuPlaceHolder = hamburgerMenu;
    let navMenuItemsPlaceholder = navMenuItems;
    if (window.innerWidth >= 765) {
        // hamburgerMenu.classList.remove('hideMenu');
        hamburgerMenu.classList.remove('showMenu');
        // navMenuItems.classList.remove('hideItems');
        navMenuItems.classList.remove('showItems');
        sections.forEach(section => {
            section.classList.remove('menuOpen')
            section.classList.remove('menuClosed')
        });
        hamburgerMenu.remove();
        let navMenuItemsPlaceholder = navMenuItems;
        navMenuItems.remove();
        navMenu.append(navMenuItemsPlaceholder);
    }   else {
        sections.forEach(section => {
            let hamburgerMenu = hamburgerMenuPlaceHolder;
            let navMenuItems = navMenuItemsPlaceholder;
            navMenu.append(hamburgerMenu);
            document.body.prepend(navMenuItems);
        });
    }
}
toggleNavMenu();


window.addEventListener('resize', toggleNavMenu);