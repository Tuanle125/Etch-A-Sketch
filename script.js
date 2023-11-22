const board = document.querySelector('.board');

createBoard(16, board);


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
