let isPress = false;

document.addEventListener("DOMContentLoaded", () => {
    //Erase And Clear Board Button
    const eraseBtn = document.querySelector('#erase-btn');
    const clearBtn = document.querySelector('#clear-btn');
    let isEraseOn = false;
    clearBtn.addEventListener('click',()=>{createBoard(slider.value,board);});
    eraseBtn.addEventListener('click', (e)=>{
        isEraseOn = !isEraseOn;
        if(isEraseOn) e.target.classList.add("button-active");
        else e.target.classList.remove("button-active");    
    });

    // Draw When mousedown and move
    const board = document.querySelector('.board');
    board.addEventListener('mousedown', () => {isPress = true; console.log(isPress);});
    board.addEventListener('mouseup', () => {isPress = false; console.log(isPress);});
    board.addEventListener('mouseover', (e) => {
        if(isPress) {
            if(isEraseOn) e.target.style.backgroundColor="white";
            else e.target.style.backgroundColor="black"
        }
    });


    //Range Slider to change board size
    const slider = document.querySelector('#board-size');
    const showSize = document.querySelector('#show-size');
    
    createBoard(slider.value, board);
    showSize.innerHTML = `${slider.value} x ${slider.value}`;

    slider.addEventListener('input', (e) => {
        showSize.innerHTML = `${slider.value} x ${slider.value}`;
        createBoard(e.target.value, board);
    });
}); 

function createBoard(pixel, obj){
    obj.innerHTML = "";
    for(let i = 0; i< pixel; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i< pixel; i++){
            const point = document.createElement('div');
            point.classList.add('pixel');
            row.append(point);
        }
        obj.append(row);
    }
}

