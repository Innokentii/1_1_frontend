"use strict"

//Выборка строки (стандартная вёрстка)______________________________________
let line_sel_id = document.getElementById('line_sel_id');
let line_sel_array = document.querySelectorAll('#line_sel_id > li');

line_sel_id.onclick = function (e) {
    let el = e.target;
    if (e.ctrlKey == false) {
        for (let n = 0; n < line_sel_array.length; n++) {
            line_sel_array[n].style.backgroundColor = '';
        };
    };
    if (e.target != line_sel_id) {
        el.style.backgroundColor = 'green';
    };
};

//Выборка строки (вёрстка чисто на Java Script)______________________________________
let line_selection_id_JS = document.getElementById('line_selection_id_JS');

let new_ol = document.createElement('ol');
new_ol.className = 'line_selection';
new_ol.id = 'line_sel_id_JS';
line_selection_id_JS.append(new_ol);

    let array_book = ['Физика 10-й класс',
    'Игра престолов (песнь льда и пламени)',
    'История мира "пирамида Хеопса"',
    'Как стать миллиардером - 100 шагов',
    'Френк Герберд - Дюна',
    'Суюнь Дзы - искуство войны'];

    for (let n = 0; n < array_book.length; n++) {
        let new_li = document.createElement('li');
        new_li.textContent = array_book[n];
        new_ol.append(new_li);
    }
let new_span_1 = document.createElement('span');
new_span_1.textContent = 'Нажмите строку для выделения нужной книги.';
line_selection_id_JS.append(new_span_1);

let new_br_1 = document.createElement('br');
line_selection_id_JS.append(new_br_1);

let new_span_2 = document.createElement('span');
new_span_2.textContent = 'Нажмите Ctrl + строку для выделения нескольких нужных книг.';
line_selection_id_JS.append(new_span_2);

let new_br_2 = document.createElement('br');
line_selection_id_JS.append(new_br_2);

let line_sel_array_JS = document.querySelectorAll(`#line_sel_id_JS > li`);
new_ol.onclick = function (e) {
    let el = e.target;
    if (e.ctrlKey == false) {
        for (let n = 0; n < line_sel_array_JS.length; n++) {
            line_sel_array_JS[n].style.backgroundColor = '';
        };
    };
    if (e.target != new_ol) {
        el.style.backgroundColor = 'green';
    };
};

//Выборка строки (вёрстка в JQuery)______________________________________

$('<ol>')
    .addClass('line_selection')
    .attr('id', 'line_sel_id_JQ')
    .appendTo('#line_selection_id_JQ')

let array_book_JQ = ['Физика 10-й класс',
'Игра престолов (песнь льда и пламени)',
'История мира "пирамида Хеопса"',
'Как стать миллиардером - 100 шагов',
'Френк Герберд - Дюна',
'Суюнь Дзы - искуство войны'];

    for (let x = 0; x < array_book_JQ.length; x++) {
        $('<li>')
            .text(`${array_book_JQ[x]}`)
            .appendTo('#line_sel_id_JQ')
    }

$('<span>')
    .text('Нажмите строку для выделения нужной книги.')
    .appendTo('#line_selection_id_JQ')

$('<span>')
    .text('Нажмите Ctrl + строку для выделения нескольких нужных книг.')
    .appendTo('#line_selection_id_JQ')

let line_sel_array_JQ = $(`#line_sel_id_JQ > li`);
$('#line_sel_id_JQ').on('click', function(e) {
    let el = e.target;
    if (e.ctrlKey == false) {
        for (let n = 0; n < line_sel_array_JQ.length; n++) {
            line_sel_array_JQ[n].style.backgroundColor = '';
        };
    };
    if (e.target != new_ol) {
        el.style.backgroundColor = 'green';
    };
});