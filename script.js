const  board= document.querySelector('.drawing-board')
const blackbtn = document.getElementById('black')
const rgbbtn = document.getElementById('rgb')
const resizebtn = document.getElementById('resize')
const resetbtn = document.getElementById('reset')

let default_size = 16
function size()
{
    const n = prompt("please enter the number of boxes you want per line in your drawing board")
    if(n !== NaN)
    return n
    else return default_size
}
function creatediv()
{
    
    
    for(let i=0;i<(default_size*default_size);i++){
        
        const div  = document.createElement("div")
        div.classList.add('pixels')
        // div.style.border ="1px solid rgb(250, 248, 248)"
        
        board.style.gridTemplateColumns = `repeat(${default_size},1fr)`
        board.style.gridTemplateRows = `repeat(${default_size},1fr)`
        board.appendChild(div)
    }
    
    
}
creatediv()

function rainbow(){
    rgbbtn.addEventListener('click',e=>{
        let box = document.querySelectorAll(".pixels")
        
        
        box.forEach(i=>i.addEventListener('mouseover',e=>{
            let R = Math.floor(Math.random()*256)
            let G= Math.floor(Math.random()*256)
            let B = Math.floor(Math.random()*256)
            i.style.background = `rgb(${R},${G},${B})`
            
        }))
    })
    
    
}
function blackcolor(){
    blackbtn.addEventListener('click',()=>{
        
        let box = document.querySelectorAll(".pixels")
        
        box.forEach(i=>i.addEventListener('mouseover',function() {
            i.style.background = `black`
            
        }))
    })
    
    
}
function resetUI(){
    resetbtn.addEventListener('click',e=>{
        let box = document.querySelectorAll('.pixels')
        box.forEach(i=>{
            
            i.style.background='white'
           
        })
    })
}
rainbow()
blackcolor()
resetUI()
resizebtn.addEventListener('click',()=>{
    
    default_size = size()
    board.innerHTML=""
    creatediv()
    rainbow()
    blackcolor()
    resetUI()
  })





