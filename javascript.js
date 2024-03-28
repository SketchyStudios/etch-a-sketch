const resetButton = document.querySelector("button")
const container = document.querySelector(".container")
const sizeOfGrid = 16
const div = document.createElement("div")


const createGrid = (amountOfGrid) => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

    for (let i =0; i < amountOfGrid; i++){
        const row = document.createElement("div")
        row.classList = ("grid-row")

        for (let j=0; j < amountOfGrid; j++){
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement("div")
            gridBox.classList = ("grid-box")
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black"
            })
            
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)

        container.appendChild(wrapper)
    }



}

createGrid(sizeOfGrid)


resetButton.addEventListener("click", () => {
    let userSize = Number(prompt("What dimensions would you like for a new grid?"))
    

    while (userSize > 100) { 
     userSize = Number(prompt("pick a number less than 100"))
    
}

const wrapper = document.querySelector(".wrapper")
wrapper.remove()
createGrid(userSize)

})


