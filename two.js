const footerItemList = document.querySelectorAll('[data-footer-item]');
footerItemList.forEach(item => {
    item.addEventListener('click', ()=> {
        footerItemList.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})



const userList = document.querySelectorAll('.user');
// console.log(userList)
userList.forEach(user => {
    user.addEventListener('click', () => {
        if(!user.classList.contains('active-user')){
        // console.log(user);
        const activeIcon = 
        `<div class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        </div>`
      var activeHolder = document.createElement("div");
      activeHolder.innerHTML = activeIcon;
      activeHolder.classList.add('active-holder');
      user.appendChild(activeHolder);
      user.classList.add('active-user');
    }
    })
})