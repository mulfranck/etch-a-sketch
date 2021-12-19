// alert("Welcome to etchy sketch!")

const DefaultSize = 8; // the actual grid is an 8 * 8
const DefaultColoring = "#ddd";

let $board = document.querySelector('.board');

let $color_btns = document.querySelectorAll('.color');
let $size_btns = document.querySelectorAll('size');

let string_form = "";
let counter = 1;

let size = DefaultSize;
let color = DefaultColoring;


function create_board() {
    $board.style['grid-template-columns'] = `repeat(${size}, 1fr)`
    $board.style['grid-template-rows'] = `repeat(${size}, 1fr)`
}
create_board();

function create_content(size) {
    size = size*size;

    for(counter; counter <= size; counter++){
        string_form += `<span></span>`;
    }

    $board.innerHTML = string_form;
}
create_content(size);

function handle_mouse_moving(e) {
    e.target.classList.add('items');
}

$board.addEventListener('mouseover', handle_mouse_moving)