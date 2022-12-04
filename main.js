function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

async function editImageUrl() {
    await fetch("giflist.json").then((response) => response.json()).then((data) => {
        let list = data['list']
        let randNum = getRandomInt(0, list.length)
        document.querySelector('#gif').setAttribute('src', list[randNum])
    })
}

editImageUrl()

let wodate = new Date(2022, 6, 30) // день закрытия квайтиленди
let bodate = new Date(2022, 11, 3) // день бана El_tatto
let now = new Date() // сегодня
diff = Math.abs(wodate.getTime() - now.getTime()) / (1000 * 3600 * 24)
bodiff = Math.abs(bodate.getTime() - now.getTime()) / (1000 * 3600 * 24)

let without = document.querySelector('.without')
let bogdan = document.querySelector('.bogdan')

without.innerHTML = Math.floor(diff)
bogdan.innerHTML = Math.floor(bodiff)
