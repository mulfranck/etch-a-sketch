// alert("Welcome to etchy sketch!")

const DefaultSize = 8; // the actual grid is an 8 * 8
const DefaultColoring = "rgb(37, 36, 36)";

let $board = document.querySelector('.board');
let $currentColor = document.querySelector('#currentColor');
let $hidden_color_panel = document.querySelector('.hide_basic_colors');

let $color_btns = document.querySelectorAll('.color');
let $size_btns = document.querySelectorAll('.size');

let $basic_colors = document.querySelector('#basicColors');
let $rainbow = document.querySelector('#rainbow');
let $wheel = document.querySelector('#wheel');

let $cls = document.querySelector('#clear');
let $erase = document.querySelector('#erase')

let colormode = 0;
let string_form = "";
let counter = 1;

let size = DefaultSize;
let color = DefaultColoring;



$currentColor.style.backgroundColor = color;
//Creating 2D forming of the board and 
function create_board(size) {
    $board.style['grid-template-columns'] = `repeat(${size}, 1fr)`
    $board.style['grid-template-rows'] = `repeat(${size}, 1fr)`
}
create_board(size);

//filling the grid or board with elements depending on the size.
function create_content(size) {
    size = size*size;
    
    for(counter; counter <= size; counter++){
        string_form += `<span></span>`;
    }
    $board.innerHTML = string_form;
}
create_content(size);


//Reading the value of the selected button and 
//redefining size
function change_sizes(e) {
    size = parseInt(e.target.id);
    create_board(size);
    create_content(size);
}
$size_btns.forEach($btn => {
    $btn.addEventListener('click', change_sizes);
})
//Read the color button and redefine the color based on the choice
function change_color(e) {
    color = e.target.id
    colormode = 0;
}
$color_btns.forEach($btn => {
    $btn.addEventListener('click', change_color);
})
//Rainbow coloring
function rainbowColors () {
    let r = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);

    colormode = 1;

   return `rgb(${r}, ${g}, ${b})`;
}
console.log($rainbow)
$rainbow.addEventListener('click', rainbowColors)
//create a similly pop off look for basic colors
function show_basicColor() {
    $hidden_color_panel.classList.toggle('hide_basic_colors')
    $currentColor.style.backgroundColor = color;
}
$basic_colors.addEventListener('click', show_basicColor)



//clear
function clear() {
    $board.innerHTML = null;
    create_content(size)
}
$cls.addEventListener('click', clear);

// coloring the background of the target elements
// by adding adding a bg prop styling
function handle_mouse_moving(e) {
    if (colormode){
        color = rainbowColors();
    }
    e.target.style.backgroundColor = color;
}

$board.addEventListener('mouseover', handle_mouse_moving);


