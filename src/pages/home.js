const homePage = (() => {
    const contentContainer = document.querySelector('#content');
    const homeContainer = document.createElement('div');
    const bigText = document.createElement('h1');
    const smallText = document.createElement('h4');
    const orderBtn = document.createElement('button');
    const moreInfo = document.createElement('div');
    const address = document.createElement('h4');
    const hours = document.createElement('h4');

    bigText.textContent = 'I want Taiwan!';
    smallText.textContent = 'Aaah!';
    orderBtn.textContent = 'Order Neow';
    address.textContent = 'Address: 1234 Super Land Ave., Super, SL, 1234567';
    hours.textContent = 'Hours: Mon - Thurs: 8AM - 8PM, Fri-Sun: 8AM - 11PM';

    
    homeContainer.appendChild(bigText);
    homeContainer.appendChild(smallText);
    homeContainer.appendChild(orderBtn);
    homeContainer.appendChild(moreInfo);
    moreInfo.appendChild(address);
    moreInfo.appendChild(hours);
    contentContainer.appendChild(homeContainer);
})();

export { homePage };