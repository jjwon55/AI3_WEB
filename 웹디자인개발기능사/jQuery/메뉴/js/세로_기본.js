//문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {
     const mainMenuList = document.querySelectorAll('.main-menu > .menu-item')

     mainMenuList.forEach( function(menu) {
        //
        const submenu = menu.children[1]

        menu.addEventListener("mouseover", () => {
            submenu.classList.add('active')
        })
        menu.addEventListener("mouseout", () => {
            submenu.classList.remove('active')
        })
    })

     
})