let likesIcon = document.querySelectorAll(".heartsecond");
likesIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
       e.target.classList.toggle("heartActive");
    });
});
