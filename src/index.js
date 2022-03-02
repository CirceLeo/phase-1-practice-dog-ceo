//console.log('%c HI', 'color: firebrick')
const init = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(imgInfo => imgInfo.json())
    .then(jsonObj => {
        jsonObj.message.forEach(dogLink => renderDog(dogLink))
    })

    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    
    fetch(breedUrl)
    .then(breedInfo => breedInfo.json())
    .then(breedObj => {
        const breedArray = Object.keys(breedObj.message)
        breedArray.forEach(breed => renderBreed(breed))
    })

    const breedSelector = document.querySelector('#breed-dropdown')
    breedSelector.addEventListener("change", () => {selecctBreeds(event)})
}
function renderDog(dogLink){
    const newPic = document.createElement('img')
    newPic.src = dogLink
    newPic.style.maxWidth = "50%"
    document.querySelector('#dog-image-container').appendChild(newPic)
}

function renderBreed(breed){
    const newBreed = document.createElement('li')
    newBreed.innerText = breed
    //newBread.className = 'breeds'
    newBreed.addEventListener("click", event => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        event.target.style.color = randomColor
    })
    // newBreed.addEventListener("click", console.log("hi"))
    document.querySelector('#dog-breeds').appendChild(newBreed)
}

function selecctBreeds(event){ 
    const firstLetter = event.target.value
    const breeds = document.querySelectorAll('li')
    breeds.forEach(breed => {

        if (!breed.innerText.startsWith(firstLetter)){
            breed.style.display = "none"
        }else{
            breed.style.display = ""
        }
    })
    //document.querySelector('#dog-breeds').replaceChildren(filteredBreeds) 
}

document.addEventListener('DOMContentLoaded', init);