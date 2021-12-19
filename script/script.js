// alert("Welcome to etchy sketch!")

const DefaultSize = 8; // the actual grid is an 8 * 8
const DefaultColoring = "#ddd";

let $board = document.querySelector('.board');

let $color_btns = document.querySelectorAll('.color');
let $size_btns = document.querySelectorAll('.size');

let string_form = "";
let counter = 1;

let size = DefaultSize;
let color = DefaultColoring;




//Creating the 2D forming of the board and 
//filling it with elements.
function create_board(size) {
    $board.style['grid-template-columns'] = `repeat(${size}, 1fr)`
    $board.style['grid-template-rows'] = `repeat(${size}, 1fr)`
}
create_board(size);

function create_content(size) {
    size = size*size;
    
    for(counter; counter <= size; counter++){
        string_form += `<span></span>`;
    }
    $board.innerHTML = string_form;
}
create_content(size);


// console.log($size_btns)
//Reading the value of the selected button and 
//redefining size
function handle_sizes(e) {
    size = parseInt(e.target.id);
    create_board(size);
    create_content(size);
}
$size_btns.forEach($btn => {
    $btn.addEventListener('click', handle_sizes);
})


// coloring the background of the target elements
// by adding a predefined class name
function handle_mouse_moving(e) {
    e.target.classList.add('items');
}

$board.addEventListener('mouseover', handle_mouse_moving);


