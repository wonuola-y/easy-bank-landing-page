//  mobile nav bar
const hamburg = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const overlay = document.querySelector('#overlay')
const cancel = document.querySelector('.cancel')
hamburg.addEventListener('click', ()=>{
navList.style.display = 'flex';
overlay.style.display = 'block'
})
cancel.addEventListener('click', ()=>{
    overlay.style.display = 'none'

})
console.log(hamburg);