"use strict"

//Координаты мыши и события клавиатуры (стандартная вёрстка)_________________________________________________________
let mouse_coordinates = document.querySelector('.mouse_coordinates');

let x_m_coord_id = document.getElementById('x_m_coord_id');
let y_m_coord_id = document.getElementById('y_m_coord_id');
mouse_coordinates.addEventListener('mousemove', mouse_coordinates_f);
function mouse_coordinates_f(e) {
    if (e.offsetX >= 0 && e.offsetX <= 800) {x_m_coord_id.textContent = e.offsetX};
    if (e.offsetY >= 0 && e.offsetY <= 600) {y_m_coord_id.textContent = e.offsetY};
}

let keyboard_id = document.getElementById('keyboard_id');
window.addEventListener('keydown', (e) => {keyboard_id.textContent = `клавиша: ${e.key}, код: ${e.keyCode}`});

let mouseboard_id = document.getElementById('mouseboard_id');
let mouseboard_two_id = document.getElementById('mouseboard_two_id');
mouse_coordinates.addEventListener('click', _ => {mouseboard_id.textContent = 'левая кнопка мыши'});
mouse_coordinates.addEventListener('contextmenu', _ => {mouseboard_id.textContent = 'правая кнопка'});
mouse_coordinates.addEventListener('dblclick', _ => {mouseboard_id.textContent = 'двойной клик'});
mouse_coordinates.addEventListener('mousedown', _ => {mouseboard_two_id.textContent = 'mousedown'});
mouse_coordinates.addEventListener('mouseup', _ => {mouseboard_two_id.textContent = 'mouseup'});
mouse_coordinates.addEventListener('mouseover', _ => {mouseboard_two_id.textContent = 'mouseover'});
mouse_coordinates.addEventListener('mouseout', _ => {mouseboard_two_id.textContent = 'mouseout'});

//Координаты мыши и события клавиатуры (вёрстка чисто на Java Script)_________________________________________________________
let mouse_coordinates_JS = document.getElementById('mouse_coordinates_JS');

mouse_coordinates_JS.insertAdjacentHTML('beforeend', '<div><b>Координаты мыши</b><div class="mouse_coordinates_x_y"><span>X-координата: </span><span id="x_m_coord_id_JS"></span><span>Y-координата: </span><span id="y_m_coord_id_JS"></span></div></div>');
mouse_coordinates_JS.insertAdjacentHTML('beforeend', '<div><b>Нажатая кнопка клавиатуры:</b><span id="keyboard_id_JS"></span></div>');
mouse_coordinates_JS.insertAdjacentHTML('beforeend', '<div><b>Нажатая кнопка мыши:</b><span id="mouseboard_id_JS"></span><span id="mouseboard_two_id_JS"></span></div>');

let x_m_coord_id_JS = document.getElementById('x_m_coord_id_JS');
let y_m_coord_id_JS = document.getElementById('y_m_coord_id_JS');
mouse_coordinates_JS.addEventListener('mousemove', mouse_coordinates_f_JS);
function mouse_coordinates_f_JS(e) {
    if (e.offsetX >= 0 && e.offsetX <= 800) {x_m_coord_id_JS.textContent = e.offsetX};
    if (e.offsetY >= 0 && e.offsetY <= 600) {y_m_coord_id_JS.textContent = e.offsetY};
}

let keyboard_id_JS = document.getElementById('keyboard_id_JS');
window.addEventListener('keydown', (e) => {keyboard_id_JS.textContent = `клавиша: ${e.key}, код: ${e.keyCode}`});

let mouseboard_id_JS = document.getElementById('mouseboard_id_JS');
let mouseboard_two_id_JS = document.getElementById('mouseboard_two_id_JS');
mouse_coordinates_JS.addEventListener('click', _ => {mouseboard_id_JS.textContent = 'левая кнопка мыши'});
mouse_coordinates_JS.addEventListener('contextmenu', _ => {mouseboard_id_JS.textContent = 'правая кнопка'});
mouse_coordinates_JS.addEventListener('dblclick', _ => {mouseboard_id_JS.textContent = 'двойной клик'});
mouse_coordinates_JS.addEventListener('mousedown', _ => {mouseboard_two_id_JS.textContent = 'mousedown'});
mouse_coordinates_JS.addEventListener('mouseup', _ => {mouseboard_two_id_JS.textContent = 'mouseup'});
mouse_coordinates_JS.addEventListener('mouseover', _ => {mouseboard_two_id_JS.textContent = 'mouseover'});
mouse_coordinates_JS.addEventListener('mouseout', _ => {mouseboard_two_id_JS.textContent = 'mouseout'});

//Координаты мыши и события клавиатуры (вёрстка в JQuery)_________________________________________________________
let mouse_coordinates_JQ = document.getElementById('mouse_coordinates_JQ');

$('<div id="new_div_1_JQ_id">')
    .appendTo(mouse_coordinates_JQ)
    $('<b>')
        .text('Координаты мыши')
        .appendTo('#new_div_1_JQ_id')
    $('<div class="mouse_coordinates_x_y" id="mouse_coordinates_x_y_id">')
        .appendTo('#new_div_1_JQ_id')
        $('<span>')
            .text('X-координата: ')
            .appendTo('#mouse_coordinates_x_y_id')
        $('<span id="x_m_coord_id_JQ">')
            .appendTo('#mouse_coordinates_x_y_id')
        $('<span>')
            .text('Y-координата: ')
            .appendTo('#mouse_coordinates_x_y_id')
        $('<span id="y_m_coord_id_JQ">')
            .appendTo('#mouse_coordinates_x_y_id')

$('<div id="new_div_3_JQ_id">')
    .appendTo(mouse_coordinates_JQ)
    $('<b>')
        .text('Нажатая кнопка клавиатуры:')
        .appendTo('#new_div_3_JQ_id')
    $('<span id="keyboard_id_JQ">')
        .appendTo('#new_div_3_JQ_id')

$('<div id="new_div_4_JQ_id">')
    .appendTo(mouse_coordinates_JQ)
    $('<b>')
        .text('Нажатая кнопка мыши:')
        .appendTo('#new_div_4_JQ_id')
    $('<span id="mouseboard_id_JQ">')
        .appendTo('#new_div_4_JQ_id')
    $('<span id="mouseboard_two_id_JQ">')
        .appendTo('#new_div_4_JQ_id')

let x_m_coord_id_JQ = document.getElementById('x_m_coord_id_JQ');
let y_m_coord_id_JQ = document.getElementById('y_m_coord_id_JQ');
mouse_coordinates_JQ.addEventListener('mousemove', mouse_coordinates_f_JQ);
function mouse_coordinates_f_JQ(e) {
    if (e.offsetX >= 0 && e.offsetX <= 800) { x_m_coord_id_JQ.textContent = e.offsetX };
    if (e.offsetY >= 0 && e.offsetY <= 600) { y_m_coord_id_JQ.textContent = e.offsetY };
}

let keyboard_id_JQ = document.getElementById('keyboard_id_JQ');
window.addEventListener('keydown', (e) => { keyboard_id_JQ.textContent = `клавиша: ${e.key}, код: ${e.keyCode}` });

let mouseboard_id_JQ = document.getElementById('mouseboard_id_JQ');
let mouseboard_two_id_JQ = document.getElementById('mouseboard_two_id_JQ');
mouse_coordinates_JQ.addEventListener('click', _ => { mouseboard_id_JQ.textContent = 'левая кнопка мыши' });
mouse_coordinates_JQ.addEventListener('contextmenu', _ => { mouseboard_id_JQ.textContent = 'правая кнопка' });
mouse_coordinates_JQ.addEventListener('dblclick', _ => { mouseboard_id_JQ.textContent = 'двойной клик' });
mouse_coordinates_JQ.addEventListener('mousedown', _ => { mouseboard_two_id_JQ.textContent = 'mousedown' });
mouse_coordinates_JQ.addEventListener('mouseup', _ => { mouseboard_two_id_JQ.textContent = 'mouseup' });
mouse_coordinates_JQ.addEventListener('mouseover', _ => { mouseboard_two_id_JQ.textContent = 'mouseover' });
mouse_coordinates_JQ.addEventListener('mouseout', _ => { mouseboard_two_id_JQ.textContent = 'mouseout' });
