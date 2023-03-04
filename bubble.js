
let searchInput = document.querySelector(".search-form-input");

let commandButton = document.querySelectorAll(".menu-button")

const bubbleDiv = document.createElement("div")

bubbleDiv.innerHTML = `
<p>That doesn't work, this is just a template to show my CSS skills. There is no backend here! </p>`
    bubbleDiv.classList.add("bubbleInfo")

commandButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        document.body.contains(bubbleDiv)
        ? bubbleDiv.remove() 
        : e.target.appendChild(bubbleDiv)
        
    })
})

searchInput?.addEventListener('click', (e) => {
    document.body.contains(bubbleDiv)
    ? bubbleDiv.remove() 
    : e.target.insertAdjacentElement('afterend',bubbleDiv)
    
})