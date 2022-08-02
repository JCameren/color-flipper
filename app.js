const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    localStorage.setItem('currentColor', JSON.stringify(colors[randomNumber]))
})
//Setting bgcolor and header color tag equal to key-value in local storade
color.textContent = JSON.parse(localStorage.getItem('currentColor'))
document.body.style.backgroundColor = JSON.parse(localStorage.getItem('currentColor'))