


// const HamburgerMenu = ()=> {
//     const Ul = document.querySelector('ul');
//     const menu = document.querySelector('.menu');
//     menu.addEventListener("click", ()=> {
//         Ul.classList.toggle("show");
//     })
// }

// HamburgerMenu();



function linkShortener() {
    
                const allLinks = document.createElement('div')
                allLinks.className = "allLinks";
                const inputSection = document.createElement("div");
                inputSection.className = "input-section";
                const inputContainer = document.createElement("div");
                inputContainer.className = "input-container";
                const searchBox = document.createElement("div");
                searchBox.className = "searchBox";
                const input = document.createElement("input");
                input.placeholder = "Shorten a link here..."
                const errorTxt = document.createElement("p");
                errorTxt.className = "error-txt";
                errorTxt.textContent = "Please add a link";
                const inputBtn = document.createElement('button');
                inputBtn.className = " inputBtn";
                inputBtn.textContent = "Shorten It!";

                inputContainer.appendChild(searchBox);
                searchBox.appendChild(input);
                inputContainer.appendChild(errorTxt);
                inputSection.appendChild(inputContainer);
                inputSection.appendChild(inputBtn)


                const inputLinks = document.createElement('div');
                inputLinks.className = "inputLinks";
                const linkOneTxt = document.createElement("p");
                const aOne = document.createElement("a");
                aOne.href= "https://github.com/Sharmake2024";
                aOne.textContent = "https://github.com/Sharmake2024";
                linkOneTxt.appendChild(aOne);
                const linkContainer = document.createElement('div');
                linkContainer.className = "link-container";
                const list = document.createElement("li");
                const aTwo = document.createElement('a');
                aTwo.href= "https://github.com/Sharmake2024";
                aTwo.textContent = "https://github.com/Sharmake2024"
                list.appendChild(aTwo);
                const linkBtn = document.createElement("button");
                linkBtn.className = "linkBtn";
                linkBtn.textContent = "Copy";
                linkContainer.appendChild(list);
                linkContainer.appendChild(linkBtn);

                inputLinks.appendChild(linkOneTxt)
                inputLinks.appendChild(linkContainer);

                
                allLinks.appendChild(inputSection);
                allLinks.appendChild(inputLinks);


                inputBtn.addEventListener("click", makeShortenUrl);

                function makeShortenUrl() {
                if( input.value === "") {
                searchBox.style.border = " 3px solid #F46363";
                errorTxt.style.display = "block";
            }  else {
                aOne.textContent = input.value;

                    async function getData() {
                        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
                        const data = await res.json();

                        console.log(data);

                    }
                    getData();
            }
            
            return input.value = '';
                
            }






                return allLinks;

}
  
const share_link = document.querySelector(".share-link");
// console.log(share_link);

// console.log(linkShortener());


share_link.append(linkShortener());

