let projectsLink = document.querySelector('#projects-link');

function addScroll (element) {
    let scrollToElement = '#' + element.id.slice(0, element.id.indexOf('-'));
    let targetElement = document.querySelector(scrollToElement);
    element.addEventListener('click', () => {
        targetElement.scrollIntoView(top);
    });
}

addScroll(projectsLink);


class popupInfo {
    constructor (data) {
        this.pictureUrl = data.pictureUrl;
        this.title = data.title;
        this.description = data.description;
        this.linkUrl = data.linkUrl;
    }

    fillPopup(element) {
        let pictureContainer = element.querySelector('.projects-popup-picture');
        pictureContainer.style.background = `center / 100% 100% no-repeat url(${this.pictureUrl})`;
        
        let popupTitle = element.querySelector('.projects-popup-title');
        popupTitle.innerHTML = this.title;

        let popupDescription = element.querySelector('.projects-popup-description');
        popupDescription.innerHTML = this.description;

        let popupLink = element.querySelector('.projects-popup-link');
        popupLink.href = this.linkUrl;
    }
}

let dataPopup = [];

let lenomaPopup = new popupInfo({
    pictureUrl: 'static/pct/lenoma-preview.png',
    title: 'Главная страница интернет-магазина',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci esse ipsum odio deleniti nulla maiores deserunt ratione quis commodi reiciendis, iure, magnam quisquam dolore amet, quaerat voluptas nesciunt vero?',
    linkUrl: 'static/projects/lenoma/lenoma.html'
});

let fusionPopup = new popupInfo({
    pictureUrl: 'static/pct/fusion-preview.png',
    title: 'Портфолио компании',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci esse ipsum odio deleniti nulla maiores deserunt ratione quis commodi reiciendis, iure, magnam quisquam dolore amet, quaerat voluptas nesciunt vero?',
    linkUrl: 'static/projects/fusion/fusion.html'
});

let landingPopup = new popupInfo({
    pictureUrl: 'static/pct/landing-preview.png',
    title: 'Лэндинг №1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci esse ipsum odio deleniti nulla maiores deserunt ratione quis commodi reiciendis, iure, magnam quisquam dolore amet, quaerat voluptas nesciunt vero?',
    linkUrl: 'static/projects/landing/landing.html'
});

dataPopup.push(lenomaPopup);
dataPopup.push(fusionPopup);
dataPopup.push(landingPopup);

let closeButton = document.querySelector('#btn-project-close');
let projectPopup = document.querySelector('.projects-popup');
let projectCard = document.querySelectorAll('.projects-gallery-item');

function closePopup (element) {
    element.addEventListener('click', () => {
        projectPopup.style.display = 'none';
    });
}

function showPopup (element, dataPopup) {
    element.addEventListener('click', () => {
        dataPopup.fillPopup(projectPopup);
        projectPopup.style.display = 'flex';
        
        
    });
}

for(let i = 0; i < projectCard.length; i++) {
    showPopup(projectCard[i], dataPopup[i]);
    
}

closePopup(closeButton);




