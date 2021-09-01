/* below code is used to navigate different pages by clicking on the items in footer section  */

const footerItemList = document.querySelectorAll('[data-footer-item]');
footerItemList.forEach(item => {
    item.addEventListener('click', ()=> {
        footerItemList.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})