const cols = document.querySelectorAll('.col')
document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
        setRandomColors()
    } else {
        throw new Error
    }
    e.preventDefault()
})

document.addEventListener('click',e => {
    const type = e.target.dataset.type
    
    if(type === 'lock') {
        const node = 
        e.target.tagName.toLowerCase()=== 'i' 
        ? e.target 
        : e.target.children[0]
         node.classList.toggle('fa-lock-open')
         node.classList.toggle('fa-lock')
    } else (type === 'copy') 
        copyToClickBoard(e.target.textContent)
})

const copyToClickBoard = (text) => {
    return navigator.clipboard.writeText(text)
 }

const setRandomColors =() => {
    cols.forEach(col => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        if (isLocked) {
            return
        }

        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()
        text.textContent = color
        col.style.background = color
        setTextColor(text, color)
        setTextColor(button, color)

    })
}

const setTextColor = (text, color) => {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()









 






// function generateRandomColors() {
//     const hexCodes = '0123456789ABCDEF'
//     let color = ''
//     for(let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     return '#' + color
// }