const mainContainer = document.querySelector('.main-container')
const newPad = document.getElementById('new-pad-btn')
console.log(mainContainer)
mainContainer.style.cssText = `display:grid;
grid-template-columns: repeat(16,1fr);
    grid-template-rows: repeat(16);
`
newPad.addEventListener('click',() =>{
    const squareNum = Number(prompt('Enter the number of squares per side'))
    mainContainer.replaceChildren()
    if(!isNaN(squareNum) && squareNum < 101){
        for(let i=0; i<squareNum*squareNum ; i++){
            const div= document.createElement('div')
            let opacity =0.15
            div.addEventListener('mouseover', () =>{
             div.style.backgroundColor=`rgba(234, 20, 20, ${opacity+=opacity})`
             
            })
            mainContainer.style.cssText = `
            display:grid;
            grid-template-columns: repeat(${squareNum},1fr);
            grid-template-rows: repeat(${squareNum});
            `
            mainContainer.append(div)
         }
    }else{
        alert('please enter a valid number that is less than a 101')
    }
})
for(let i=0; i<16*16 ; i++){
   const div= document.createElement('div')
   let opacity =0.15
   div.addEventListener('mouseover', () =>{
    div.style.backgroundColor=`rgba(234, 20, 20, ${opacity+=opacity})`
   })
   
   mainContainer.append(div)
}