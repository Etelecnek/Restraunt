const menuPage = (() => {
    const contentContainer = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    const bigText = document.createElement('h1');
    const smallText = document.createElement('h4');
    const item1Container = document.createElement('div');
    const item1 = document.createElement('h4');
    const item1image = document.createElement('img');
    const item1dsc = document.createElement('h4');
    const item2Container = document.createElement('div');
    const item2 = document.createElement('h4');
    const item2image = document.createElement('img');
    const item2dsc = document.createElement('h4');

    menuContainer.setAttribute('class', 'tabContent')
    menuContainer.setAttribute('id', 'none');
    menuContainer.setAttribute('data-for-tab', '3');
    item1Container.setAttribute('class', 'menuitems')
    item2Container.setAttribute('class', 'menuitems')

    item1image.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1613610820689-H6LSFRTDDGSI4KMLVZKF/ManukaSingle.jpg?format=500w');
    item1image.setAttribute('height', '300px');
    item2image.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1490399346509-29VIX9MYDE2S1VU2LL20/DSC00926.jpg?format=500w');
    item2image.setAttribute('height', '300px');

    bigText.textContent = 'Menu';
    smallText.textContent = 'Beverage';
    item1.textContent = 'Manuka Honey Drink';   
    item1dsc.textContent = 'Drink the honey raw it will quench your thirst!';
    item2.textContent = 'Olive Oil';   
    item2dsc.textContent = 'This drink not only quenches your thirst it lubricates it at the same time!';

    contentContainer.appendChild(menuContainer);
    menuContainer.appendChild(bigText);
    menuContainer.appendChild(smallText);
    menuContainer.appendChild(item1Container);
    item1Container.appendChild(item1);
    item1Container.appendChild(item1image);
    item1Container.appendChild(item1dsc);
    menuContainer.appendChild(item2Container);
    item2Container.appendChild(item2);
    item2Container.appendChild(item2image);
    item2Container.appendChild(item2dsc);
    
})();

export { menuPage };