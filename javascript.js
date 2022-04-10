// create grid of 16 by 16 //

createGrid = () => {
    for (let i=0; i<256; i++) {
        let div = document.createElement('div');
        div.classList='cell';
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div) ;
    };
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(event) {
    let cell = grid.children;
    for (let i=0; i<256; i++) {
        cell[i].style.backgroundColor='white';
    }

});

createGrid();
