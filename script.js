function toggleMode() {
    const html = document.documentElement

    /*
    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
        */

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/eijaco.jpg')
        img.setAttribute('alt', "Olá")
    } else {
        img.setAttribute('src', './assets/eijaco.jpg')
        img.setAttribute('alt', "ei.jaco")
    }
}