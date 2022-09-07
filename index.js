//  mobile nav bar
const hamburg = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const overlay = document.querySelector('#overlay')
const cancel = document.querySelector('.cancel')
const button = document.querySelectorAll('button')
const link = document.querySelectorAll('li')
hamburg.addEventListener('click', ()=>{
navList.style.display = 'flex';
overlay.style.display = 'block'
})
cancel.addEventListener('click', ()=>{
    overlay.style.display = 'none'

})
// for every link clicked
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',()=>{

    })
    
}

console.log(hamburg);