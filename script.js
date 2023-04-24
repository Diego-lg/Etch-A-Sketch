var container = document.getElementById('container');
var button_Container = document.getElementById('button_Container');
let grid_Size = 16*16;
//16x16 - 32x32 - 64x64 - 128x128   
let scale = 30;

//ecuation scale - grid size
// 30x = 16*16 && 30x/4 = 64*64 
console.log(scale/Math.sqrt(scale))
//align grid in the middle 
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

//align button in the middle
button_Container.style.display = 'flex';
button_Container.style.justifyContent = 'center';
button_Container.style.alignItems = 'center';

console.log(`HELO ${Math.sqrt(grid_Size)}`)
//grid creation
function gridCreation()
{
    for (let i = 0; i < grid_Size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
      }
      
      const squares = document.querySelectorAll('.square');
      squares.forEach((square) => {
        square.style.width = `${scale}px`;
        square.style.height = `${scale}px`;
        square.style.border = '2px solid black';

        //creacion grid
        square.addEventListener('mouseenter',() =>square.style.backgroundColor= 'red');
    
        //borrado
        button_Clear.addEventListener('click',() =>square.style.backgroundColor= 'transparent');
    
        setTimeout(function(){
            //square.addEventListener('mouseleave',() =>square.style.backgroundColor= 'transparent')
        }, 2000);
        });
      
      container.style.display = 'grid';
      container.style.gridTemplateColumns = `repeat(${Math.sqrt(grid_Size)}, ${scale}px)`;
      container.style.gridTemplateRows = `repeat(${Math.sqrt(grid_Size)}, ${scale}px)`;
    }
//grid delete
function gridDeleter()
{   
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < grid_Size; i++) {
        console.log(squares[i]);
        squares[i].remove();
      }


}

//button clear
    var button_Clear = document.createElement('button');
    var buttonText_Clear = document.createTextNode('CLEAR');
    button_Container.appendChild(button_Clear)
    button_Clear.appendChild(buttonText_Clear);

    //button slider
    var slider = document.getElementById('myRange');
    var output = document.getElementById('demo');
    output.innerHTML = slider.value;
    slider.oninput = function() {
    output.innerHTML = this.value;
    //grid
    gridDeleter();
    grid_Size=Math.pow(slider.value,2);
    scale= 30/(Math.sqrt(grid_Size)/16);
    gridCreation();
    }




//grid
gridCreation();