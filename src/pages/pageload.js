const pageLoad = (() => {
    const contentContainer = document.querySelector('#content');
    const titleContainer = document.createElement('div');
    const restname = document.createElement('h2')

    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    titleContainer.setAttribute('id', 'title');
    restname.setAttribute('id', 'restname');
    homeBtn.setAttribute('class', 'tabButton');
    homeBtn.setAttribute('id', 'active');
    homeBtn.setAttribute('data-for-tab', '1');
    aboutBtn.setAttribute('class', 'tabButton');
    aboutBtn.setAttribute('data-for-tab', '2');
    menuBtn.setAttribute('class', 'tabButton');
    menuBtn.setAttribute('data-for-tab', '3');
    contactBtn.setAttribute('class', 'tabButton');
    contactBtn.setAttribute('data-for-tab', '4');

    restname.textContent = 'Celeste and Kenneth Fun Snacks'
    homeBtn.textContent = 'Home';
    aboutBtn.textContent = 'About';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact Info';

    titleContainer.appendChild(restname)
    titleContainer.appendChild(homeBtn); 
    titleContainer.appendChild(aboutBtn);
    titleContainer.appendChild(menuBtn);
    titleContainer.appendChild(contactBtn);    
    contentContainer.appendChild(titleContainer)
})();

export { pageLoad };