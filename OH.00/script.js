const btn = document.querySelector('.btn')
const container = document.querySelector('#container')

btn.addEventListener('click', function done(){
    container.setAttribute('id', 'done')
})

