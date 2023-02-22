let box = document.getElementById("box")

let height = 513, width = 912

const decideBox = () => {
    let scaledHeight_1 = parseInt(screen.height * height / 900)
    let scaledWidth_1 = parseInt(scaledHeight_1 * width / height)

    let scaledWidth_2 = parseInt(screen.width * width / 1600)
    let scaledHeight_2 = parseInt(scaledWidth_2 * height / width)

    if (scaledHeight_1 * scaledWidth_1 > scaledHeight_2 * scaledWidth_2) {
        box.style.height = scaledHeight_1 + "px"
        box.style.width = scaledWidth_1 + "px"
    } else {
        box.style.height = scaledHeight_2 + "px"
        box.style.width = scaledWidth_2 + "px"
    }
}