
// function UserInput() {
//     const link_section = document.querySelector(".link-section")
//     const SearchBox = document.querySelector(".searchBox");
//     const invalid_txt = document.querySelector(".invalid-text")
//     const shortenBtn = document.querySelector(".shorten-btn")
//     const links = document.querySelector(".links");
//     console.log(links);

//     console.log(SearchBox)
//     console.log(invalid_txt)
//     console.log(shortenBtn)
//  shortenBtn.addEventListener('click', ()=> {
//     if ( SearchBox.value === "")  {
//         invalid_txt.style.opacity = " 100";
//         SearchBox.classList.add('red-border');
//     }


//     else {
       
    
//         const Ul = document.createElement("ul");
//         const li = document.createElement("li");
//         const Flex = document.createElement("div");
//         const aLink = document.createElement('a');
//         const copyBtn = document.createElement('button')

//         links.appendChild(Ul);
//         Ul.appendChild(li);
//         Ul.appendChild(Flex);
//         Flex.appendChild(aLink);
//         Flex.appendChild(copyBtn);

//         links.classList.add('links');
//         copyBtn.classList.add("copy-btn")
//         Flex.classList.add("flex");
//         copyBtn.classList.add("copy-btn")
//         li.textContent = SearchBox.value;
//         copyBtn.textContent = "Copy"
//         aLink.textContent = SearchBox.value;
//         copyBtn.addEventListener('click', ()=> {
//             copyBtn.textContent = "Copied";
//         })
            

//     }
  
    
    

//  })
// }

// UserInput()

// const url = 'https://ismaelc-bitly.p.rapidapi.com/v3/shorten?login=%3CREQUIRED%3E&apikey=%3CREQUIRED%3E&longUrl=http%3A%2F%2Fwww.mashape.com';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'ismaelc-bitly.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
//     console.log(" something wrong")
// }

// }


const HamburgerMenu = ()=> {
    const Ul = document.querySelector('ul');
    const menu = document.querySelector('.menu');
    menu.addEventListener("click", ()=> {
        Ul.classList.toggle("show");
    })
}

HamburgerMenu();