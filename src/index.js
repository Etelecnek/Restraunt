import pageLoad from './pages/pageload';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';
import './style.css';

function setupTabs() {
    document.querySelectorAll('.tabButton').forEach(button => {
        button.addEventListener('click', () => {
            const titleBar = button.parentElement;
            const tabsContainer = titleBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabContent[data-for-tab="${tabNumber}"]`);

            titleBar.querySelectorAll('#active').forEach(item => {
            item.setAttribute('id', 'none')
            })

            tabsContainer.querySelectorAll('#active').forEach(item => {
                item.setAttribute('id', 'none')
            })
            
            button.setAttribute('id', 'active')
            tabToActivate.setAttribute('id', 'active')
            

            
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});