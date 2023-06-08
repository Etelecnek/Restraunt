const pageLoad = (() => {
    const contentContainer = document.querySelector('#content');
    const titleContainer = document.createElement('div');
    const restname = document.createElement('h2')
    const btnContainer = document.createElement('ul')
    const homeBtn = document.createElement('li');
    const aboutBtn = document.createElement('li');
    const menuBtn = document.createElement('li');
    const contactBtn = document.createElement('li');

    titleContainer.setAttribute('id', 'title');
    restname.setAttribute('id', 'restname');
    btnContainer.setAttribute('id', 'btnContainer');
    homeBtn.setAttribute('id', 'homebtn');
    aboutBtn.setAttribute('id', 'aboutbtn');
    menuBtn.setAttribute('id', 'menuBtn');
    contactBtn.setAttribute('id', 'contactBtn');

    restname.textContent = 'Celeste and Kenneth Fun Snacks'
    homeBtn.textContent = 'Home';
    aboutBtn.textContent = 'About';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact Info';

    titleContainer.appendChild(restname)
    titleContainer.appendChild(btnContainer);
    btnContainer.appendChild(homeBtn); 
    btnContainer.appendChild(aboutBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);    

    contentContainer.appendChild(titleContainer)
})();

export { pageLoad };