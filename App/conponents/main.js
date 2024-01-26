
function UserInput() {
    const link_section = document.querySelector(".link-section")
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

    else {
        link_section.appendChild(links);
        const links = document.createElement("div")
        const Ul = document.createElement("ul");
        const li = document.createElement("li");
        const Flex = document.createElement("div");
        const aLink = document.createElement('a');
        const copyBtn = document.createElement('button')

        links.appendChild(Ul);
        Ul.appendChild(li);
        Ul.appendChild(Flex);
        Flex.appendChild(aLink);
        Flex.appendChild(copyBtn);

        links.classList.add('links');
        copyBtn.classList.add("copy-btn")
        li.textContent = SearchBox.value;
        copyBtn.textContent = "Copy"
        aLink.textContent = SearchBox.value;
        copyBtn.addEventListener('click', ()=> {
            copyBtn.textContent = "Copied";
        })

    }
  
    
    

 })
}

UserInput()