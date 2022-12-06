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
let now = new Date() // сегодня
diff = Math.abs(wodate.getTime() - now.getTime()) / (1000 * 3600 * 24)

let without = document.querySelector('.without')

without.innerHTML = Math.floor(diff)
