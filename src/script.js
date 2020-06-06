const main = document.querySelector('.main')
const rotatingFace = document.querySelector('.gameBoy')

window.addEventListener('mousemove', (event) =>
{
    const rotateY = event.clientX * 0.3
    const rotateX = event.clientY * 0.3
    console.log(rotateX)
    rotatingFace.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

})

