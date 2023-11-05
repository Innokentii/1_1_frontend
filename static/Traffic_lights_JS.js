"use strict"

//Светофор (стандартная верстка): (с изменением цвета фона)
let number_queue_one = 1;
const Traffic_lights_1 = document.querySelector(".Traffic_lights_1");
const Traffic_lights_2 = document.querySelector(".Traffic_lights_2");
const Traffic_lights_3 = document.querySelector(".Traffic_lights_3");
const button_1 = document.getElementById('button_1');
button_1.addEventListener('click', _ => {
    if (number_queue_one == 1) {
        Traffic_lights_1.style.background = "rgb(158, 154, 154)";
        Traffic_lights_2.style.background = "yellow";
    }
    if (number_queue_one == 2) {
        Traffic_lights_2.style.background = "rgb(158, 154, 154)";
        Traffic_lights_3.style.background = "green";
    } 
    if (number_queue_one == 3) {
        Traffic_lights_3.style.background = "rgb(158, 154, 154)";
        Traffic_lights_1.style.background = "red";
    }
    if (number_queue_one != 3) {number_queue_one++} else {number_queue_one = 1}
});

//Светофор (стандартная верстка): (с изменением картинки)
let number_queue_two = 1;
const img_id = document.getElementById('img_id');
const button_2 = document.getElementById('button_2');
button_2.addEventListener('click', _ => {
    if (number_queue_two == 1) {
        img_id.src = '/static/2_Traffic_lights_yellow.bmp';
    }
    if (number_queue_two == 2) {
        img_id.src = '/static/3_Traffic_lights_green.bmp';
    }
    if (number_queue_two == 3) {
        img_id.src = '/static/1_Traffic_lights_red.bmp';
    }
    if (number_queue_two != 3) {number_queue_two++} else {number_queue_two = 1}
});

//Светофор (стандартная верстка): (с перемещением картинки по Z-координатам)
let number_queue_three = 1;
const img_id_green = document.getElementById('img_id_green');
const img_id_yellow = document.getElementById('img_id_yellow');
const img_id_red = document.getElementById('img_id_red');
const button_3 = document.getElementById('button_3');
button_3.addEventListener('click', _ => {
    if (number_queue_three == 1) {
        img_id_green.style.zIndex = "1";
        img_id_red.style.zIndex = "3";
    }
    if (number_queue_three == 2) {
        img_id_red.style.zIndex = "1";
        img_id_yellow.style.zIndex = "3";
    }
    if (number_queue_three == 3) {
        img_id_yellow.style.zIndex = "1";
        img_id_green.style.zIndex = "3";
    }
    if (number_queue_three != 3) {number_queue_three++} else {number_queue_three = 1}
});

//______________________________________________________________________________
//Светофор (вёрстка чисто на Java Script): (с изменением цвета фона)

let new_div_1, new_div_2, new_div_3, new_div_4, new_div_5, new_span_1, new_span_2, new_p_1, new_p_2, new_button_1;
const new_traffic_lights_JS = document.getElementById('new_traffic_lights_JS');

new_div_1 = document.createElement('div');
new_div_2 = document.createElement('div');
new_div_3 = document.createElement('div');
new_div_4 = document.createElement('div');
new_div_5 = document.createElement('div');
new_span_1 = document.createElement('span');
new_span_2 = document.createElement('span');
new_p_1 = document.createElement('p');
new_p_2 = document.createElement('p');
new_button_1 = document.createElement('button');

new_traffic_lights_JS.append(new_div_1);
new_div_1.append(new_span_1);
new_span_1.textContent = '(с изменением цвета фона)';
new_div_1.append(new_p_1);
new_div_1.append(new_div_2);
new_div_2.className = 'Traffic_lights_block';
new_div_1.append(new_p_2);
new_div_1.append(new_span_2);
new_span_2.textContent = 'Переключатель светофора ';
new_div_1.append(new_button_1);
new_button_1.textContent = 'Кнопка';

new_div_2.append(new_div_3);
new_div_3.className = 'Traffic_lights_1';
new_div_2.append(new_div_4);
new_div_4.className = 'Traffic_lights_2';
new_div_2.append(new_div_5);
new_div_5.className = 'Traffic_lights_3';

let number_queue_four = 1;
new_button_1.addEventListener('click', _ => {
    if (number_queue_four == 1) {
        new_div_3.style.background = 'rgb(158, 154, 154)';
        new_div_4.style.background = 'yellow';
    }
    if (number_queue_four == 2) {
        new_div_4.style.background = 'rgb(158, 154, 154)';
        new_div_5.style.background = 'green';
    }
    if (number_queue_four == 3) {
        new_div_5.style.background = 'rgb(158, 154, 154)';
        new_div_3.style.background = 'red';
    }
    if (number_queue_four != 3) {number_queue_four++} else {number_queue_four = 1}
});

//Светофор (вёрстка чисто на Java Script): (с изменением картинки)

let new_div_1_2, new_div_2_2, new_div_3_2, new_img_1_2, new_span_1_2, new_span_2_2, new_p_1_2, new_p_2_2, new_button_1_2;

new_div_1_2 = document.createElement('div');
new_div_2_2 = document.createElement('div');
new_div_3_2 = document.createElement('div');
new_img_1_2 = document.createElement('img');
new_span_1_2 = document.createElement('span');
new_span_2_2 = document.createElement('span');
new_p_1_2 = document.createElement('p');
new_p_2_2 = document.createElement('p');
new_button_1_2 = document.createElement('button');

new_traffic_lights_JS.append(new_div_1_2);
new_div_1_2.append(new_span_1_2);
new_span_1_2.textContent = '(с изменением картинки)';
new_div_1_2.append(new_p_1_2);
new_div_1_2.append(new_div_2_2);
new_div_2_2.className = 'Traffic_lights_block_medium';
new_div_1_2.append(new_p_2_2);
new_div_1_2.append(new_span_2_2);
new_span_2_2.textContent = 'Переключатель светофора ';
new_div_1_2.append(new_button_1_2);
new_button_1_2.textContent = 'Кнопка';

new_div_2_2.append(new_div_3_2);
new_div_3_2.append(new_img_1_2);
new_img_1_2.src = '/static/1_Traffic_lights_red.bmp';
new_img_1_2.alt = "нет сфетофора";

let number_queue_five = 1;
new_button_1_2.addEventListener('click', _ => {
    if (number_queue_five == 1) {
        new_img_1_2.src = '/static/2_Traffic_lights_yellow.bmp';
    }
    if (number_queue_five == 2) {
        new_img_1_2.src = '/static/3_Traffic_lights_green.bmp';
    }
    if (number_queue_five == 3) {
        new_img_1_2.src = '/static/1_Traffic_lights_red.bmp';
    }
    if (number_queue_five != 3) {number_queue_five++} else {number_queue_five = 1}
});

//Светофор (вёрстка чисто на Java Script): (с перемещением картинки по Z-координатам)

let new_div_1_3, new_div_2_3, new_div_3_3, new_div_4_3, new_div_5_3, new_span_1_3, new_span_2_3, new_p_1_3, new_p_2_3, new_button_1_3,
new_img_1_3, new_img_2_3, new_img_3_3, new_div_A_3, new_div_B_3, new_div_C_3;

new_div_1_3 = document.createElement('div');
new_div_2_3 = document.createElement('div');
new_div_3_3 = document.createElement('div');
new_div_4_3 = document.createElement('div');
new_div_5_3 = document.createElement('div');
new_span_1_3 = document.createElement('span');
new_span_2_3 = document.createElement('span');
new_p_1_3 = document.createElement('p');
new_p_2_3 = document.createElement('p');
new_button_1_3 = document.createElement('button');
new_img_1_3 = document.createElement('img');
new_img_2_3 = document.createElement('img');
new_img_3_3 = document.createElement('img');
new_div_A_3 = document.createElement('div');
new_div_B_3 = document.createElement('div');
new_div_C_3 = document.createElement('div');

new_traffic_lights_JS.append(new_div_1_3);
new_div_1_3.append(new_span_1_3);
new_span_1_3.textContent = '(с перемещением картинки по Z-координатам)';
new_div_1_3.append(new_p_1_3);
new_div_1_3.append(new_div_2_3);
new_div_2_3.className = 'Traffic_lights_block';
new_div_1_3.append(new_p_2_3);
new_div_1_3.append(new_span_2_3);
new_span_2_3.textContent = 'Переключатель светофора ';
new_div_1_3.append(new_button_1_3);
new_button_1_3.textContent = 'Кнопка';

new_div_2_3.append(new_div_3_3);
new_div_3_3.className = 'Traffic_lights_0';
new_div_3_3.append(new_div_A_3);
new_div_A_3.className = 'div_img';
new_div_3_3.append(new_img_1_3);
new_img_1_3.src = '/static/1_Traffic_lights_red.bmp';
new_img_1_3.alt = "нет сфетофора";
new_img_1_3.id="img_id_red";

new_div_2_3.append(new_div_4_3);
new_div_4_3.className = 'Traffic_lights_0';
new_div_4_3.append(new_div_B_3);
new_div_B_3.className = 'div_img';
new_div_4_3.append(new_img_2_3);
new_img_2_3.src = '/static/2_Traffic_lights_yellow.bmp';
new_img_2_3.alt = "нет сфетофора";
new_img_2_3.id="img_id_yellow";

new_div_2_3.append(new_div_5_3);
new_div_5_3.className = 'Traffic_lights_0';
new_div_5_3.append(new_div_C_3);
new_div_C_3.className = 'div_img';
new_div_5_3.append(new_img_3_3);
new_img_3_3.src = '/static/3_Traffic_lights_green.bmp';
new_img_3_3.alt = "нет сфетофора";
new_img_3_3.id="img_id_green";


let number_queue_six = 1;
new_button_1_3.addEventListener('click', _ => {
    if (number_queue_six == 1) {
        new_img_3_3.style.zIndex = '1'
        new_img_1_3.style.zIndex = '3'
    }
    if (number_queue_six == 2) {
        new_img_1_3.style.zIndex = '1'
        new_img_2_3.style.zIndex = '3'
    }
    if (number_queue_six == 3) {
        new_img_2_3.style.zIndex = '1'
        new_img_3_3.style.zIndex = '3'
    }
    if (number_queue_six != 3) {number_queue_six++} else {number_queue_six = 1}
});

//______________________________________________________________________________
//Светофор (вёрстка в JQuery): (с изменением цвета фона)

$('<div>')
    .appendTo('#new_traffic_lights_JQery')
    .attr('id', 'div_JQ_1_id')
$('<span>')
    .appendTo('#div_JQ_1_id')
    .text('(с изменением цвета фона)')
$('<p>')
    .appendTo('#div_JQ_1_id')
$('<div>')
    .appendTo('#div_JQ_1_id')
    .addClass('Traffic_lights_block')
    .attr('id', 'div_JQ_2_id')
$('<p>')
    .appendTo('#div_JQ_1_id')
$('<span>')
    .appendTo('#div_JQ_1_id')
    .text('Переключатель светофора  ')
$('<button>')
    .appendTo('#div_JQ_1_id')
    .attr('id', 'button_JQ_1_id')
    .text('Кнопка')

$('<div>')
    .appendTo('#div_JQ_2_id')
    .addClass('Traffic_lights_1')
    .attr('id', 'div_JQ_3_id')
$('<div>')
    .appendTo('#div_JQ_2_id')
    .addClass('Traffic_lights_2')
    .attr('id', 'div_JQ_4_id')
$('<div>')
    .appendTo('#div_JQ_2_id')
    .addClass('Traffic_lights_3')
    .attr('id', 'div_JQ_5_id')

let number_queue_seven = 1;
const div_JQ_3_id = document.getElementById('div_JQ_3_id');
const div_JQ_4_id = document.getElementById('div_JQ_4_id');
const div_JQ_5_id = document.getElementById('div_JQ_5_id');
const button_JQ_1_id = document.getElementById('button_JQ_1_id');
button_JQ_1_id.addEventListener('click', _ => {
    if (number_queue_seven == 1) {
        div_JQ_3_id.style.background = "rgb(158, 154, 154)";
        div_JQ_4_id.style.background = "yellow";
    }
    if (number_queue_seven == 2) {
        div_JQ_4_id.style.background = "rgb(158, 154, 154)";
        div_JQ_5_id.style.background = "green";
    } 
    if (number_queue_seven == 3) {
        div_JQ_5_id.style.background = "rgb(158, 154, 154)";
        div_JQ_3_id.style.background = "red";
    }
    if (number_queue_seven != 3) {number_queue_seven++} else {number_queue_seven = 1}
});

//Светофор (вёрстка в JQuery): (с изменением картинки)

$('<div>')
    .appendTo('#new_traffic_lights_JQery')
    .attr('id', 'div_JQ_1_2_id')
$('<span>')
    .appendTo('#div_JQ_1_2_id')
    .text('(с изменением картинки)')
$('<p>')
    .appendTo('#div_JQ_1_2_id')
$('<div>')
    .appendTo('#div_JQ_1_2_id')
    .addClass('Traffic_lights_block_medium')
    .attr('id', 'div_JQ_2_2_id')
$('<p>')
    .appendTo('#div_JQ_1_2_id')
$('<span>')
    .appendTo('#div_JQ_1_2_id')
    .text('Переключатель светофора  ')
$('<button>')
    .appendTo('#div_JQ_1_2_id')
    .attr('id', 'button_JQ_1_2_id')
    .text('Кнопка')

$('<div>')
    .appendTo('#div_JQ_2_2_id')
    .addClass('Traffic_lights_1')
    .attr('id', 'div_JQ_3_2_id')

$('<img id="img_id_JQ" src="/static/1_Traffic_lights_red.bmp" alt="нет сфетофора">')
    .appendTo('#div_JQ_3_2_id')

let number_queue_eight = 1;
const img_id_JQ = document.getElementById('img_id_JQ');
const button_JQ_1_2_id = document.getElementById('button_JQ_1_2_id');
button_JQ_1_2_id.addEventListener('click', _ => {
    if (number_queue_eight == 1) {
        img_id_JQ.src = '/static/2_Traffic_lights_yellow.bmp';
    }
    if (number_queue_eight == 2) {
        img_id_JQ.src = '/static/3_Traffic_lights_green.bmp';
    }
    if (number_queue_eight == 3) {
        img_id_JQ.src = '/static/1_Traffic_lights_red.bmp';
    }
    if (number_queue_eight != 3) {number_queue_eight++} else {number_queue_eight = 1}
});

//Светофор (вёрстка в JQuery): (с перемещением картинки по Z-координатам)

$('<div>')
    .appendTo('#new_traffic_lights_JQery')
    .attr('id', 'div_JQ_1_3_id')
$('<span>')
    .appendTo('#div_JQ_1_3_id')
    .text('(с перемещением картинки по Z-координатам)')
$('<p>')
    .appendTo('#div_JQ_1_3_id')
$('<div>')
    .appendTo('#div_JQ_1_3_id')
    .addClass('Traffic_lights_block')
    .attr('id', 'div_JQ_2_3_id')
$('<p>')
    .appendTo('#div_JQ_1_3_id')
$('<span>')
    .appendTo('#div_JQ_1_3_id')
    .text('Переключатель светофора  ')
$('<button>')
    .appendTo('#div_JQ_1_3_id')
    .attr('id', 'button_JQ_1_3_id')
    .text('Кнопка')

$('<div>')
    .appendTo('#div_JQ_2_3_id')
    .addClass('Traffic_lights_0')
    .attr('id', 'div_JQ_3_3_id')
$('<div>')
    .appendTo('#div_JQ_2_3_id')
    .addClass('Traffic_lights_0')
    .attr('id', 'div_JQ_4_3_id')
$('<div>')
    .appendTo('#div_JQ_2_3_id')
    .addClass('Traffic_lights_0')
    .attr('id', 'div_JQ_5_3_id')

$('<div>')
    .appendTo('#div_JQ_3_3_id')
    .addClass('div_img')
    .attr('id', 'div_JQ_6_3_id')
$('<div>')
    .appendTo('#div_JQ_4_3_id')
    .addClass('div_img')
    .attr('id', 'div_JQ_7_3_id')
$('<div>')
    .appendTo('#div_JQ_5_3_id')
    .addClass('div_img')
    .attr('id', 'div_JQ_8_3_id')

$('<img id="img_JQ_id_red" src="/static/1_Traffic_lights_red.bmp" alt="нет сфетофора">')
    .css("position", "relative")
    .css("left", "0")
    .css("top", "0")
    .css("background-color", "rgb(158, 154, 154)")
    .css("border", "solid 2px black")
    .css("border-radius", "50%")
    .css("width", "80px")
    .css("height", "80px")
    .css("z-index", "1")
    .appendTo('#div_JQ_3_3_id')
$('<img id="img_JQ_id_yellow" src="/static/2_Traffic_lights_yellow.bmp" alt="нет сфетофора">')
    .css("position", "relative")
    .css("left", "0")
    .css("top", "0")
    .css("background-color", "rgb(158, 154, 154)")
    .css("border", "solid 2px black")
    .css("border-radius", "50%")
    .css("width", "80px")
    .css("height", "80px")
    .css("z-index", "1")
    .appendTo('#div_JQ_4_3_id')
$('<img id="img_JQ_id_green" src="/static/3_Traffic_lights_green.bmp" alt="нет сфетофора">')
    .css("position", "relative")
    .css("left", "0")
    .css("top", "0")
    .css("background-color", "rgb(158, 154, 154)")
    .css("border", "solid 2px black")
    .css("border-radius", "50%")
    .css("width", "80px")
    .css("height", "80px")
    .css("z-index", "3")
    .appendTo('#div_JQ_5_3_id')

let number_queue_nine = 1;
const img_JQ_id_red = document.getElementById('img_JQ_id_red');
const img_JQ_id_yellow = document.getElementById('img_JQ_id_yellow');
const img_JQ_id_green = document.getElementById('img_JQ_id_green');
const button_JQ_1_3_id = document.getElementById('button_JQ_1_3_id');
button_JQ_1_3_id.addEventListener('click', _ => {
    if (number_queue_nine == 1) {
        img_JQ_id_green.style.zIndex = '1'
        img_JQ_id_red.style.zIndex = '3'
    }
    if (number_queue_nine == 2) {
        img_JQ_id_red.style.zIndex = '1'
        img_JQ_id_yellow.style.zIndex = '3'
    }
    if (number_queue_nine == 3) {
        img_JQ_id_yellow.style.zIndex = '1'
        img_JQ_id_green.style.zIndex = '3'
    }
    if (number_queue_nine != 3) {number_queue_nine++} else {number_queue_nine = 1}
});