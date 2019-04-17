class Menu {
    constructor(element) {
        this.element = element;
        this.hamburger = this.element.querySelector('.burger-button');
        this.content = this.element.querySelector('.menu-content');
        this.hamburger.addEventListener('click', () => {this.toggleMenu()} );
    }

    toggleMenu() {
        this.content.classList.toggle('menu-hidden');
    }
}

let menuItems = document.querySelectorAll('.menu-holder').forEach( menuItem => new Menu(menuItem));