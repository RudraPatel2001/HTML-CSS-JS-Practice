const memesContainer = document.getElementById("memes-container")

const fetchMemes = async () => {
    let cards = ''
    await fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            console.log(data.data.memes)
            data.data.memes.map(m => {
                cards += `<div class="card">
                    <img src=${m.url} alt=${m.name} />
                </div>`
            })
            memesContainer.innerHTML = cards
        })
}