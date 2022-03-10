const pics = document.getElementById("dog-image-container")
const dog = document.querySelector("#breed-dropdown")
for (let i = 0; i < dog; i++);
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', (e) => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(result => {
            const p = result.message
            p.forEach((pic) =>  {
                console.log(pic)
            })

        })
    })















/*async function fetchPics() {
    const response = await fetch(imgUrl)
    const result = await response.json();

    result.forEach(imgUrl => {
   
            img => {
           Object.entries(imgUrl).forEach(([key, value]) => {
          var img = document.createElement('IMG')
                img.addEventListener('load', function () {

                }, true);
                img.src = imgUrl
            }
        })
    })

}
*/





