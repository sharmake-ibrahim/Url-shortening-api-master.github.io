


const HamburgerMenu = ()=> {
    const Navbar= document.querySelector('nav');
    const menu = document.querySelector('.menu');
    menu.addEventListener("click", ()=> {
        Navbar.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach( (link)=> {
        link.addEventListener("click", ()=>{
            Navbar.classList.remove("show");
        })
    })

    const headerBtns = document.querySelector(".header-btns");
        headerBtns.addEventListener("click", ()=> {
            Navbar.classList.remove("show");
        })
}

      HamburgerMenu();



      
const NavigateLinks = ()=> {
    const sections = document.querySelectorAll('section');
        let currentSection = "home";
        Window.addEventListener("scroll", ()=> {

            sections.forEach( (section)=> {
                window.scrollY >= section.offsetTop ?  currentSection = section.id : ""

            })
        })

  
}

NavigateLinks();



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
                    //local storage //
                localStorage.setItem('data', input.value);

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


               

                
                allLinks.appendChild(inputSection);
                


            

               
                inputBtn.addEventListener("click", makeShortenUrl);

                function makeShortenUrl() {

              
                
                if( input.value === "") {
                searchBox.style.border = " 3px solid #F46363";
                errorTxt.style.display = "block";
            }  else {
                errorTxt.style.display = "none";
                searchBox.style.border = "none";


            // fetching data from api
            async function getData(url) {
                try {
            
                    let res = await fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${url}/&service[name]=shrlc`);
                    let urlData = await res.json();
                
                    console.log("data", urlData);

                    const { data} = urlData;

                    aTwo.textContent = data;

                }
               
                catch (error) {
                    console.log(error);
                }
            
            }

            getData(input.value);
           

                const aOne = document.createElement("a");
                aOne.textContent = input.value;
                const aTwo = document.createElement('a');
                


                
                const inputLinks = document.createElement('div');
                inputLinks.className = "inputLinks";
                const linkOneTxt = document.createElement("p");
               
              
                
                // aOne.textContent =  localStorage.setItem('value',input.value);
                linkOneTxt.appendChild(aOne);
                const linkContainer = document.createElement('div');
                linkContainer.className = "link-container";
                const list = document.createElement("li");
               
                
                // aTwo.textContent =  localStorage.setItem('value',input.value);
                const CopyAndPasteText = async ()=> {
                    const text = aTwo.textContent;
                    await navigator.clipboard.writeText(text);
                    await navigator.clipboard.readText();
        

                }
                

                list.appendChild(aTwo);
                const linkBtn = document.createElement("button");
                linkBtn.className = "linkBtn";
                linkBtn.textContent = "Copy";
                linkContainer.appendChild(list);
                linkContainer.appendChild(linkBtn);

                linkBtn.addEventListener("click", ()=> {
                    linkBtn.style.background =  " #3A3054"
                    linkBtn.textContent = " Copied";
                    CopyAndPasteText()
                    
                });

                inputLinks.appendChild(linkOneTxt)
                inputLinks.appendChild(linkContainer);
                allLinks.appendChild(inputLinks);

            }
            
            return input.value = '';
                
            }


                return allLinks;

}

const share_link = document.querySelector(".share-link");
share_link.append(linkShortener());









