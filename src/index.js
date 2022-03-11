const dog = document.querySelector("#breed-dropdown")
for (let i = 0; i < dog; i++);
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', (e) => {
    const pics = document.querySelector("#dog-image-container")
    fetch(imgUrl)
        .then(response => response.json())
        .then(pictures => {
            const p = pictures.message
            p.forEach((pic) => {
                const img = document.createElement('img')
                img.src = `${pic}`
                pics.appendChild(img)
                img.style.width = '400px'
                img.style.height = '400px'
            })
        });
    const types = document.querySelector('#dog-breeds')
    fetch(breedUrl)
        .then(response => response.json())
        .then(breeds => {
            const bl = Object.keys(breeds.message)
            bl.forEach((breed) => {
                const li = document.createElement('li')
                li.innerText = `${breed}`
                types.appendChild(li)  
                const b1 = document.querySelector("#dog-breeds > li")
                
                //for(let i = 0; i < b1.length; b1++)
                //document.addEventListener("click", (d) =>{   
                  //  b1.style.color = "red"
                    console.log(b1)
                //})
            })
        })
})



