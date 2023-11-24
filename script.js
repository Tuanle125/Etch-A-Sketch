const board = document.querySelector('.board');

document.addEventListener("DOMContentLoaded",createBoard(16, board)); 

let isPress = false;
board.addEventListener('mousedown', () => {isPress = true; console.log(isPress);});
board.addEventListener('mouseup', () => {isPress = false; console.log(isPress);});
board.addEventListener('mouseover', (e) => {if(isPress) e.target.style.backgroundColor="black"});

function createBoard(pixel, obj){
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
