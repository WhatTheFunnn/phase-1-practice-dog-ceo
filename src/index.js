const dog = document.querySelector("#breed-dropdown")
for (let i = 0; i < dog; i++);
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', (e) => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(result => console.log(result))
    var img = document.createElement('IMG')
    img.addEventListener('load', function () {

    }, true);
    img.src = imgUrl
    
    
})




/*  

, {
    method: 'POST',
    body:imgUrl,
})
    .then(response => response.json())
    .then(result => {
        console.log('success', result)
    })
    .catch(error => {
        console.error('Error:', error)
    })
})*/

