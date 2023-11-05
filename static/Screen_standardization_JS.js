"use strict"

//Стандартизация экрана для гаджетов (вёрстка чисто на Java Script)______________________________________
let Screen_standardization_JS = document.getElementById('Screen_standardization_JS_id');

let new_h2_1 = document.createElement('h2');
new_h2_1.innerText = 'Трансформация котиков';
Screen_standardization_JS.append(new_h2_1);

let new_div_1 = document.createElement('div');
new_div_1.className = 'cats_class';
Screen_standardization_JS.append(new_div_1);

let new_h2_2 = document.createElement('h2');
new_h2_2.innerText = 'Трансформация информации про Леопарда'
Screen_standardization_JS.append(new_h2_2);

let div_2 = document.querySelector('.leopard_class');
let new_div_2 = div_2.cloneNode(true)
Screen_standardization_JS.append(new_div_2);

let new_img_1 = document.createElement('img');
new_img_1.src = '/static/Cat-1.jpg';
new_img_1.alt = 'Нет котиков';
new_div_1.append(new_img_1);

let new_img_2 = document.createElement('img');
new_div_1.append(new_img_2);
new_img_2.src = '/static/Cat-2.jpg';
new_img_2.alt = 'Нет котиков';

let new_img_3 = document.createElement('img');
new_div_1.append(new_img_3);
new_img_3.src = '/static/Cat-3.jpg';
new_img_3.alt = 'Нет котиков';

let new_img_4 = document.createElement('img');
new_div_1.append(new_img_4);
new_img_4.src = '/static/Cat-4.jpg';
new_img_4.alt = 'Нет котиков';

//Стандартизация экрана для гаджетов (вёрстка в JQuery)____________________________

$('<h2>')
    .text('Трансформация котиков')
    .appendTo('#Screen_standardization_JQ_id')
$('<div>')
    .attr('id', 'new_div_JQ_id')
    .addClass('cats_class')
    .appendTo('#Screen_standardization_JQ_id')
$('<h2>')
    .text('Трансформация информации про Леопарда')
    .appendTo('#Screen_standardization_JQ_id')

var img_JQ = ['Cat-1.jpg', 'Cat-2.jpg', 'Cat-3.jpg', 'Cat-4.jpg']
$(`<img src='/static/${img_JQ[0]}' alt='нету котика'>`)
    .appendTo('#new_div_JQ_id')
$(`<img src='/static/${img_JQ[1]}' alt='нету котика'>`)
    .appendTo('#new_div_JQ_id')
$(`<img src='/static/${img_JQ[2]}' alt='нету котика'>`)
    .appendTo('#new_div_JQ_id')
$(`<img src='/static/${img_JQ[3]}' alt='нету котика'>`)
    .appendTo('#new_div_JQ_id')

$('#leopard_class_ID').clone().appendTo('#Screen_standardization_JQ_id')

