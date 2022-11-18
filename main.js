function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

async function editImageUrl() {
    await fetch("giflist.json").then((response) => response.json()).then((data) => {
        let list = data['list']
        console.log(list.length)
        let randNum = getRandomInt(0, list.length)
        console.log(randNum)
        document.querySelector('#gif').setAttribute('src', list[randNum])
    })
}

editImageUrl()

let zer = new Date(2022, 6, 30)
let now = new Date()
difference = Math.abs(zer.getTime() - now.getTime()) / (1000 * 3600 * 24)

let field = document.querySelector('.time')
field.innerHTML = Math.floor(difference)