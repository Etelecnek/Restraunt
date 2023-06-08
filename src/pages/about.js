const aboutPage = (() => {
    const contentContainer = document.querySelector('#content');
    const aboutContainer = document.createElement('div');
    const bigText = document.createElement('h1');
    const smallText = document.createElement('h4');
    const moreInfo = document.createElement('div');
    const address = document.createElement('h4');
    const hours = document.createElement('h4');

    aboutContainer.setAttribute('class', 'tabContent')
    aboutContainer.setAttribute('id', 'none');
    aboutContainer.setAttribute('data-for-tab', '2');


    bigText.textContent = 'We are awesome at cooking';
    smallText.textContent = 'Aaah! Aaah!';
    address.textContent = 'Look at our menu and see our proof';
    hours.textContent = 'If you do not like it we will do anything for you ANYTHING!';

    contentContainer.appendChild(aboutContainer);
    aboutContainer.appendChild(bigText);
    aboutContainer.appendChild(smallText);
    aboutContainer.appendChild(moreInfo);
    moreInfo.appendChild(address);
    moreInfo.appendChild(hours);
    
})();

export { aboutPage };