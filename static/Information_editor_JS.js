"use strict"

//Редактор информации (стандартная вёрстка)_________________________________________
let IE_span_1 = document.querySelector('#Information_editor > span:nth-child(1)');
let IE_span_2 = document.querySelector('#Information_editor > span:nth-child(2)');
let IE_span_3 = document.querySelector('#Information_editor > span:nth-child(3)');
let IE_textarea = document.querySelector('#Information_editor > textarea');

IE_span_2.style.display = 'none';
IE_textarea.style.display = 'none';

document.addEventListener("keydown", function(e) {
    if (e.code == "KeyE" && IE_textarea.style.display == 'none') {
        IE_span_2.style.display = '';
        IE_textarea.style.display = '';
        IE_span_1.style.display = 'none';
        IE_span_3.style.display = 'none';
        e.preventDefault()
    }
    else if (e.code == "KeyE") {
        IE_span_2.style.display = 'none';
        IE_textarea.style.display = 'none';
        IE_span_1.style.display = '';
        IE_span_3.style.display = '';
        IE_span_3.textContent = IE_textarea.value;
        e.preventDefault()
    }
})

//Редактор информации (вёрстка чисто на Java Script)_________________________________________
let Information_editor_JS = document.getElementById('Information_editor_JS');

Information_editor_JS.insertAdjacentHTML('beforeend', '<span>Нажмите <b>E</b> для редактирования текста</span>');
Information_editor_JS.insertAdjacentHTML('beforeend', '<span>Нажмите <b>E</b> для сохранения текста</span>');

let new_span_3 = document.createElement('span')
new_span_3.className = 'IE_text';
new_span_3.textContent = 'Введите текст';
Information_editor_JS.append(new_span_3);

let new_textarea = document.createElement('textarea')
new_textarea.className = 'IE_text';
new_textarea.textContent = 'Введите текст';
Information_editor_JS.append(new_textarea);

let IE_span_1_JS = document.querySelector('#Information_editor_JS > span:nth-child(1)');
let IE_span_2_JS = document.querySelector('#Information_editor_JS > span:nth-child(2)');
let IE_span_3_JS = document.querySelector('#Information_editor_JS > span:nth-child(3)');
let IE_textarea_JS = document.querySelector('#Information_editor_JS > textarea');

IE_span_2_JS.style.display = 'none';
IE_textarea_JS.style.display = 'none';

document.addEventListener("keydown", function(e) {
    if (e.code == "KeyE" && IE_textarea_JS.style.display == 'none') {
        IE_span_2_JS.style.display = '';
        IE_textarea_JS.style.display = '';
        IE_span_1_JS.style.display = 'none';
        IE_span_3_JS.style.display = 'none';
        e.preventDefault()
    }
    else if (e.code == "KeyE") {
        IE_span_2_JS.style.display = 'none';
        IE_textarea_JS.style.display = 'none';
        IE_span_1_JS.style.display = '';
        IE_span_3_JS.style.display = '';
        IE_span_3_JS.textContent = IE_textarea_JS.value;
        e.preventDefault()
    }
})

//Редактор информации (вёрстка в JQuery)_________________________________________
$('<span>Нажмите <b>E</b> для редактирования текста</span>')
    .appendTo('#Information_editor_JQ')
$('<span>Нажмите <b>E</b> для сохранения текста</span>')
    .appendTo('#Information_editor_JQ')
$('<span>')
    .text('Введите текст')
    .addClass('IE_text')
    .appendTo('#Information_editor_JQ')
$('<textarea>')
    .text('Введите текст')
    .addClass('IE_text')
    .appendTo('#Information_editor_JQ')

$('#Information_editor_JQ > span:nth-child(2)').css('display', 'none')
$('#Information_editor_JQ > textarea').css('display', 'none')

document.addEventListener("keydown", function(e) {
    if (e.code == "KeyE" && $('#Information_editor_JQ > textarea').css('display') == 'none') {
        $('#Information_editor_JQ > span:nth-child(2)').css('display', '')
        $('#Information_editor_JQ > textarea').css('display', '')
        $('#Information_editor_JQ > span:nth-child(1)').css('display', 'none')
        $('#Information_editor_JQ > span:nth-child(3)').css('display', 'none')
        e.preventDefault()
    }
    else if (e.code == "KeyE") {
        $('#Information_editor_JQ > span:nth-child(2)').css('display', 'none')
        $('#Information_editor_JQ > textarea').css('display', 'none')
        $('#Information_editor_JQ > span:nth-child(1)').css('display', '')
        $('#Information_editor_JQ > span:nth-child(3)').css('display', '')
        $('#Information_editor_JQ > span:nth-child(3)').text($('#Information_editor_JQ > textarea').val())
        e.preventDefault()
    }
})