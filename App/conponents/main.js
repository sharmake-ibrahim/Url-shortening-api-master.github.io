const hamburger = document.querySelector('.hamburger');



console.log(hamburger)

hamburger.addEventListener('click', ()=> {
    const navBar = document.querySelector(".navbar");
    navBar.classList.add('active');
    console.log(navBar)
})