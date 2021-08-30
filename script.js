const footerItemList = document.querySelectorAll('[data-footer-item]');
footerItemList.forEach(item => {
    item.addEventListener('click', ()=> {
        console.log(item);
        const [svg, info] = item.children;
        console.log(svg)
        console.log(info) 
        footerItemList.forEach(item => {
            const [svg, info] = item.children;
            svg.classList.remove('active-svg');
            info.classList.remove('active-info');

        })
        svg.classList.add('active-svg');
        info.classList.add('active-info');
    })
})