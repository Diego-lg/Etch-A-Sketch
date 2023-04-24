var container = document.getElementById('container');
var button_Container = document.getElementById('button_Container');
let grid_Size = 16*16;
let scale = 30

//align grid in the middle 
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

//algin button in the middle
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

//button 64x64
    
    var button_64 = document.createElement('button');
    var buttonText_64 = document.createTextNode('64X64');
    button_Container.appendChild(button_64)
    button_64.appendChild(buttonText_64);
    button_64.addEventListener('click',() => gridDeleter());
    button_64.addEventListener('click',() => scale= 30/4);
    button_64.addEventListener('click',() => grid_Size=64*64);
    button_64.addEventListener('click',() => gridCreation());
    
   
    
//button 16x16

    var button_16 = document.createElement('button');
    var buttonText_16 = document.createTextNode('16X16');
    button_Container.appendChild(button_16)
    button_16.appendChild(buttonText_16);
    button_16.addEventListener('click',() => gridDeleter());
    button_16.addEventListener('click',() => scale= 30);
    button_16.addEventListener('click',() => grid_Size=16*16);
    button_16.addEventListener('click',() => gridCreation());
    
    
//grid
gridCreation();