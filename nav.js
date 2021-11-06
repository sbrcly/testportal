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
        if (item.extras.length > 0) {
            menuItem.innerHTML = `<span>${item.name}</span><i class="fas fa-chevron-down"></i>`;
        }   else {
            menuItem.innerText = item.name;
        }
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