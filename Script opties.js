const bigFiveButton = document.querySelectorAll(".big-five-button")


document.querySelectorAll(".big-five-button").forEach(button => button.addEventListener("click", ()
    => bigFiveSpotted(button.innerHTML)))


const newLi = document.createElement("li")
const spottedAnimalsList = document.getElementById("spotted-animals-list")


function bigFiveSpotted(animal) {
    console.log(animal)
    let newLi = document.createElement("li")
    newLi.innerHTML = `${animal}`
    console.log(newLi)
    spottedAnimalsList.appendChild(newLi)
}
//.ANDERE OPLOSSING....................................................................
//.ANDERE OPLOSSING....................................................................


function bigFiveSpotted(animal) {
    console.log(animal)
    let newLi = document.createElement("li")
    newLi.innerHTML = `${animal}`
    console.log(newLi)
    spottedAnimalsList.appendChild(newLi)


    //.ANDERE OPLOSSING....................................................................
    //.ANDERE OPLOSSING....................................................................


    const big5ListBtns = document.querySelectorAll("button[class^=big]");

    big5ListBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            spottedAnimal(event.target.firstChild.data);
        });
    });


    const spottedAnimal = (animal) => {
        const newAnimal = document.getElementById("spotted-animals-list");
        newAnimal.appendChild(newLi);
        newLi.classList.add("spotted-animals-list-item");
        newLi.innerHTML = animal;
        console.log(newAnimal);
    };