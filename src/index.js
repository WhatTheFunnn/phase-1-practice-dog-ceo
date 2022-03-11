const dog = document.querySelector("#breed-dropdown")
for (let i = 0; i < dog; i++);
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', (e) => {
    const dog = document.querySelector("#breed-dropdown")
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
                li.addEventListener("click", (d) =>{   
                li.style.color = "red"
                    dog.addEventListener("change", (e) => {
                        const newDogList = bl.filter(dog => dog.startsWith(e.target.value))
                        var el = []
                        types.append(newDogList)
                    })
                    
                })
            })
        })
})

//This should have been an asychronous function so that all of the event listeners works simultaniously instead of one after the other. 
