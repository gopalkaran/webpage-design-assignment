const footerItemList = document.querySelectorAll('[data-footer-item]');
footerItemList.forEach(item => {
    item.addEventListener('click', ()=> {
        footerItemList.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})