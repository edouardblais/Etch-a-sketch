// create grid of 16 by 16 //

createGrid = () => {
    for (let i=0; i<256; i++) {
        let div = document.createElement('div');
        div.classList='cell16';
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div) ;
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(event) {
    let cell = grid.children;
    for (let i=0; i<grid.children.length; i++) {
        cell[i].style.backgroundColor='white';
    }

});

const size16 = document.querySelector('#size16');
size16.addEventListener('click', function (event) {
    removeAllChildNodes(grid);
    createGrid();
});

const size32 = document.querySelector('#size32');
size32.addEventListener('click', function (event) {
    removeAllChildNodes(grid);
    for (let i=0; i<1024; i++) {
        let div = document.createElement('div');
        div.classList='cell32';
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div) ;
    };
});

const size64 = document.querySelector('#size64');
size64.addEventListener('click', function (event) {
    removeAllChildNodes(grid);
    for (let i=0; i<4096; i++) {
        let div = document.createElement('div');
        div.classList='cell64';
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div) ;
    };
});

const color = document.querySelector('#color');
color.addEventListener('input', function (event) {
    let newColor = document.getElementById('color').value;
    let cell=grid.children;
    for (i=0; i<grid.children.length; i++) {
        cell[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor=newColor;
        });
    };

});

createGrid();
