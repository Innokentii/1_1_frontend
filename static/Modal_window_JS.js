"use strict"

//Модальное окно (стандартная вёрстка)_________________________________________
let modal_windows_shadow = document.querySelector('.modal_windows_shadow');
modal_windows_shadow.style.display = 'none';

let modal_windows_module = document.querySelector('.modal_windows_module');
modal_windows_module.style.display = 'none';

function open_modale_windows() {
    modal_windows_shadow.style.display = '';
    modal_windows_module.style.display = '';
}

function close_modale_windows() {
    modal_windows_shadow.style.display = 'none';
    modal_windows_module.style.display = 'none';
}

//Модальное окно (вёрстка чисто на Java Script)_________________________________________
let modal_windows_JS = document.querySelector('.modal_windows_JS');

let new_div_1 = document.createElement('div');
new_div_1.className = 'modal_windows_shadow';
modal_windows_JS.append(new_div_1);
let new_div_2 = document.createElement('div');
new_div_2.className = 'modal_windows_module';
modal_windows_JS.append(new_div_2);
let new_button_1 = document.createElement('button');
new_button_1.textContent = 'Открыть модальное окно';
modal_windows_JS.append(new_button_1);
let new_span = document.createElement('span');
new_span.textContent = 'X';
new_span.className = 'cross_close_modal';
new_div_2.append(new_span);
let new_h3 = document.createElement('h3');
new_h3.textContent = 'модальное окно';
new_div_2.append(new_h3);
let new_p = document.createElement('p');
new_p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorem, voluptatibus deleniti nam id sed, ipsam, illum aperiam consequuntur omnis cupiditate perspiciatis voluptate accusamus sequi molestiae deserunt necessitatibus excepturi suscipit?';
new_div_2.append(new_p);
let new_button_2 = document.createElement('button');
new_button_2.textContent = 'Закрыть модальное окно';
new_div_2.append(new_button_2);

new_div_1.style.display = 'none';
new_div_2.style.display = 'none';

new_button_1.addEventListener('click', _ => {
    new_div_1.style.display = '';
    new_div_2.style.display = '';
});

new_button_2.addEventListener('click', _ => {close_modale_windows_JS()});
new_span.addEventListener('click', _ => {close_modale_windows_JS()});

function close_modale_windows_JS() {
    new_div_1.style.display = 'none';
    new_div_2.style.display = 'none';
    console.log('123');
}

//Модальное окно (вёрстка в JQuery)_________________________________________
$('<div>')
    .attr('id','new_div_shadow_id_JQ')
    .addClass('modal_windows_shadow')
    .appendTo('.modal_windows_JQ')
$('<div>')
    .addClass('modal_windows_module')
    .attr('id', 'new_div_id_JQ')
    .appendTo('.modal_windows_JQ')
$('<button>')
    .attr('id', 'new_button_open_JQ_id')
    .text('Открыть модальное окно')
    .appendTo('.modal_windows_JQ')

$('<span>')
    .attr('id', 'new_span_JQ_id')
    .addClass('cross_close_modal')
    .text('X')
    .appendTo('#new_div_id_JQ')
$('<h3>')
    .text('модальное окно')
    .appendTo('#new_div_id_JQ')
$('<p>')
    .text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorem, voluptatibus deleniti nam id sed, ipsam, illum aperiam consequuntur omnis cupiditate perspiciatis voluptate accusamus sequi molestiae deserunt necessitatibus excepturi suscipit?')
    .appendTo('#new_div_id_JQ')
$('<button>')
.attr('id', 'new_button_close_JQ_id')
    .text('Закрыть модальное окно')
    .appendTo('#new_div_id_JQ')

let new_div_1_JQ = document.getElementById('new_div_shadow_id_JQ');
let new_div_2_JQ = document.getElementById('new_div_id_JQ');
let new_span_JQ = document.getElementById('new_span_JQ_id');
let new_button_open_JQ = document.getElementById('new_button_open_JQ_id');
let new_button_close_JQ = document.getElementById('new_button_close_JQ_id');

new_div_1_JQ.style.display = 'none';
new_div_2_JQ.style.display = 'none';

new_button_open_JQ.addEventListener('click', _ => {
    new_div_1_JQ.style.display = '';
    new_div_2_JQ.style.display = '';
});

new_button_close_JQ.addEventListener('click', _ => close_modale_windows_JQ());
new_span_JQ.addEventListener('click', _ => close_modale_windows_JQ());

function close_modale_windows_JQ() {
    new_div_1_JQ.style.display = 'none';
    new_div_2_JQ.style.display = 'none';
}
