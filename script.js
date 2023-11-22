const board = document.querySelector('.board');

createBoard(16, board);

let isPress = false;
function createBoard(pixel, obj){
    for(let i = 0; i< pixel; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i< pixel; i++){
            const point = document.createElement('div');
            point.classList.add('pixel');

            point.addEventListener('mouseover', () => {
                if(isPress) point.style.background = 'black';
            });
            point.addEventListener('click', () => {
                point.style.background = 'black';
            });
            row.append(point);
        }
        obj.append(row);
    }
    obj.addEventListener('mousedown', () => {isPress = true;});
        obj.addEventListener('mouseup', () => {isPress = false;});
}
