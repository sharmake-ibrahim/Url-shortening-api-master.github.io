
function UserInput() {
    const SearchBox = document.querySelector(".searchBox");
    const invalid_txt = document.querySelector(".invalid-text")
    const shortenBtn = document.querySelector(".shorten-btn")

    console.log(SearchBox)
    console.log(invalid_txt)
    console.log(shortenBtn)
 shortenBtn.addEventListener('click', ()=> {
    if ( SearchBox.value === "")  {
        invalid_txt.style.opacity = " 100";
        SearchBox.classList.add('red-border');
    }

 })
}

UserInput()