const footerItemList = document.querySelectorAll('[data-footer-item]');
footerItemList.forEach(item => {
    item.addEventListener('click', ()=> {
        // console.log(item);
        // const [svg, info] = item.children;
        // console.log(svg)
        // console.log(info) 
        footerItemList.forEach(item => {
            // const [svg, info] = item.children;
            // svg.classList.remove('active-svg');
            // info.classList.remove('active-info');
            // info.style.color= '#bbb';
            item.classList.remove('active');
        })
        // svg.classList.add('active-svg');
        // info.classList.add('active-info');
        // info.style.color = 'white';
        item.classList.add('active');
    })
})