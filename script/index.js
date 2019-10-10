let projectsLink = document.querySelector('#projects-link');

function addScroll (element) {
    let scrollToElement = '#' + element.id.slice(0, element.id.indexOf('-'));
    let targetElement = document.querySelector(scrollToElement);
    element.addEventListener('click', () => {
        targetElement.scrollIntoView(top);
    });
}

addScroll(projectsLink);

