
const gridContainer = document.querySelector('.gridContainer');
const setGrid = document.querySelector('button');
setGrid.addEventListener('click', () => {
    const selectionSize = parseInt(prompt('select grid size 4x4,8x8,16x16,32x32,64x64'))
    setGridSize(selectionSize)
})

function setGridSize(selection){
    gridContainer.innerHTML =''
    for (let i = 0; i < selection; i ++){
        for (let j = 0; j < selection; j ++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem')
            gridContainer.appendChild(gridItem)
            switch(selection){
                case 4:
                    gridItem.style.width = selection / .77 * 32 + 'px' 
                    gridItem.style.height = selection / .77 * 32 + 'px'
                    break;
                case 8:
                    gridItem.style.width = selection / 1.55 * 16 + 'px' 
                    gridItem.style.height = selection / 1.55 * 16  + 'px'
                    break;
                case 16:
                    gridItem.style.width = selection / 6.40 * 16 + 'px' 
                    gridItem.style.height = selection / 6.40 * 16  + 'px'
                    break;
                case 32:
                    gridItem.style.width = selection / 13.45 * 8 + 'px' 
                    gridItem.style.height = selection / 13.45 * 8  + 'px'
                    break;
                case 64:
                    gridItem.style.width = selection / 60 * 8 + 'px' 
                    gridItem.style.height = selection / 60 * 8  + 'px'
                    break;
                default:
                    return null;

            }
                         
            gridContainer.style.setProperty('grid-template-columns', 'repeat(' + selection + ', 1fr)')
            gridContainer.style.setProperty('grid-template-rows', 'repeat(' + selection + ', 1fr)')
            gridItem.addEventListener('mouseenter', () => {
                
                let currentOpacity = Number(gridItem.style.opacity);
                let newOpacity = 0.1;
                gridItem.style.opacity = setOpacity(currentOpacity, newOpacity)
                gridItem.style.background = 'black'
            
            })
                        
        }
    }
}

const COLORS = ['red', 'green', 'blue', 'purple','orange', 'yellow']
function getRandomColor(){
    let newColor = Math.floor(Math.random() * COLORS.length)
    let myColor = COLORS[newColor]
    return myColor;

}

function setOpacity(currentOpacity, newOpacity){
    currentOpacity += newOpacity;
    return currentOpacity

}