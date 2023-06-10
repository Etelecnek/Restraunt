const aboutPage = (() => {
    const contentContainer = document.querySelector('#content');
    const aboutContainer = document.createElement('div');
    const bigText = document.createElement('h1');
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const smallText = document.createElement('h4');
    const moreInfo = document.createElement('div');
    const para1 = document.createElement('h4');
    const para2 = document.createElement('h4');
    const para3 = document.createElement('h4');
    const morePics = document.createElement('div');
    const image3 = document.createElement('img');
    const image4 = document.createElement('img');
    const image5 = document.createElement('img');

    aboutContainer.setAttribute('class', 'tabContent')
    aboutContainer.setAttribute('id', 'none');
    aboutContainer.setAttribute('data-for-tab', '2');
    bigText.setAttribute('id', 'aboutbigText');
    image1.setAttribute('id', 'aboutOne');
    image2.setAttribute('id', 'aboutTwo');
    moreInfo.setAttribute('id', 'aboutThree');
    para1.setAttribute('class', 'aboutPara');
    para2.setAttribute('class', 'aboutPara');
    para3.setAttribute('class', 'aboutPara');
    morePics.setAttribute('id', 'morePics');
    image3.setAttribute('class', 'morePicsChild');
    image4.setAttribute('class', 'morePicsChild');
    image5.setAttribute('class', 'morePicsChild');

    image1.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1487548231809-L8YS3B1NI0QT9R4096PL/image-asset.jpeg?format=500w');
    image2.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1488580410644-APGHCWCF76XBW89K3BTT/image-asset.jpeg?format=750w');
    image3.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1488580453542-3AOVUU9USBPDHUGUZKI6/Olive170224-027h.jpg?format=500w')
    image4.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1488063750259-JE6HX44WAHNN8Z6Z1LQG/image-asset.jpeg?format=500w')
    image5.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/58a26f3cbf629a87d27a8464/1488491604610-16CCQ03ZMLYGBLXQX3JC/image-asset.jpeg?format=500w')

    bigText.textContent = 'A Little About Us';
    smallText.textContent = 'Happy Eden Farmers';
    para1.textContent = 'It all began when our Grandpa led us to farm on Mt. Olive in 1992. Our vision has always been to farm organically without using chemicals and toxins or anything harmful to the environment. ';
    para2.textContent = 'As Christians we believe that farming is not backwards, but the most advanced and meaningful way of life. That is because when God created the heavens and the earth, He placed man in the Garden of Eden to tend and keep it. That was mans first occupation. ';
    para3.textContent = 'Not only do our plants and animals thrive, we also thrive by working and living in nature. Our mission is to bring you the realm of Eden, so that you too can enjoy Gods blessings!';

    contentContainer.appendChild(aboutContainer);
    aboutContainer.appendChild(bigText);
    aboutContainer.appendChild(image1);
    aboutContainer.appendChild(image2);
    aboutContainer.appendChild(moreInfo);
    moreInfo.appendChild(smallText);
    moreInfo.appendChild(para1);
    moreInfo.appendChild(para2);
    moreInfo.appendChild(para3);
    aboutContainer.appendChild(morePics);
    morePics.appendChild(image3);
    morePics.appendChild(image4);
    morePics.appendChild(image5);
})();

export { aboutPage };