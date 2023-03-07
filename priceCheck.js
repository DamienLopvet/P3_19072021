let menuItems = document.querySelectorAll(".menu li") 

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (e) => {
        
        let price = e.target.closest("li").children[1]
        price.style.marginRight == "0px" 
        ? price.style.marginRight = "-61px"
        : price.style.marginRight = 0 + "px" 
        
    })

})