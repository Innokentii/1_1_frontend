"use strict"

//Увеличение изображения (стандартная вёрстка)___________________________________________________________
let img_0 = document.getElementById('img_0');
let x_position, y_position;
let Image_magnification_yes = 'No';

img_0.addEventListener('mouseup', _ => {Image_magnification_yes = 'No', img_0.style.backgroundPosition = "0, 0"});
img_0.addEventListener('mouseout', _ => {Image_magnification_yes = 'No', img_0.style.backgroundPosition = "0, 0"});

img_0.addEventListener('mousemove', (e) => {
    if (e.offsetX >= 0 && e.offsetX <= 520) {x_position = e.offsetX}
    if (e.offsetY >= 0 && e.offsetY <= 520) {y_position = e.offsetY}
});

img_0.addEventListener('mousedown', _ => {Image_magnification_yes = 'Yes', img_0.style.backgroundPosition = `${(-x_position)}px, ${(-y_position)}px`});

img_0.addEventListener('mousemove', () => {
    if (Image_magnification_yes == 'Yes') {
        img_0.style.backgroundPositionX = `${(-x_position)}px`;
        img_0.style.backgroundPositionY = `${(-y_position)}px`;
    }
});

let img_1 = document.getElementById('img_1');
let img_2 = document.getElementById('img_2');
let img_3 = document.getElementById('img_3');

img_1.addEventListener('click', _ => {img_0.style.backgroundImage = 'url(/static/A_1_17.jpg)'});
img_2.addEventListener('click', _ => {img_0.style.backgroundImage = 'url(/static/A_2_17.jpg)'});
img_3.addEventListener('click', _ => {img_0.style.backgroundImage = 'url(/static/A_3_17.jpg)'});


//Увеличение изображения (вёрстка чисто на Java Script)___________________________________________________

let Image_magnification_JS = document.getElementById('Image_magnification_JS');

let new_div_1 = document.createElement('div');
new_div_1.className = 'Image_magnification';
Image_magnification_JS.append(new_div_1);

let new_h1 = document.createElement('h1');
new_h1.textContent = 'комплект одежды ADIDAS (летний)';
new_div_1.append(new_h1);

let new_div_2 = document.createElement('div');
new_div_2.className = "img_0";
new_div_2.id = 'img_0_JS';
new_div_1.append(new_div_2);

let new_div_3 = document.createElement('div');
new_div_3.className = 'choosing_clothes';
new_div_1.append(new_div_3);

let new_div_4 = document.createElement('div');
new_div_4.className = "img_1";
new_div_4.id = 'img_1_JS';
new_div_3.append(new_div_4);
let new_div_5 = document.createElement('div');
new_div_5.className = "img_2";
new_div_5.id = 'img_2_JS';
new_div_3.append(new_div_5);
let new_div_6 = document.createElement('div');
new_div_6.className = "img_3";
new_div_6.id = 'img_3_JS';
new_div_3.append(new_div_6);

let new_span = document.createElement('span');
new_span.textContent = '(Для ближнего просмотра нажмите и удерживайте левую кнопку мыши)';
new_div_1.append(new_span);


let x_position_JS, y_position_JS;
let Image_magnification_yes_JS = 'No';

new_div_2.addEventListener('mouseup', _ => {Image_magnification_yes_JS = 'No', new_div_2.style.backgroundPosition = "0, 0"});
new_div_2.addEventListener('mouseout', _ => {Image_magnification_yes_JS = 'No', new_div_2.style.backgroundPosition = "0, 0"});

new_div_2.addEventListener('mousemove', (e) => {
    if (e.offsetX >= 0 && e.offsetX <= 520) {x_position_JS = e.offsetX}
    if (e.offsetY >= 0 && e.offsetY <= 520) {y_position_JS = e.offsetY}
});

new_div_2.addEventListener('mousedown', _ => {Image_magnification_yes_JS = 'Yes', new_div_2.style.backgroundPosition = `${(-x_position_JS)}px, ${(-y_position_JS)}px`});

new_div_2.addEventListener('mousemove', () => {
    if (Image_magnification_yes_JS == 'Yes') {
        new_div_2.style.backgroundPositionX = `${(-x_position_JS)}px`;
        new_div_2.style.backgroundPositionY = `${(-y_position_JS)}px`;
    }
});

new_div_4.addEventListener('click', _ => {new_div_2.style.backgroundImage = 'url(/static/A_1_17.jpg)'});
new_div_5.addEventListener('click', _ => {new_div_2.style.backgroundImage = 'url(/static/A_2_17.jpg)'});
new_div_6.addEventListener('click', _ => {new_div_2.style.backgroundImage = 'url(/static/A_3_17.jpg)'});


//Увеличение изображения (вёрстка в JQuery)________________________________________________________

$('<div id="div_1_JQ">')
    .addClass('Image_magnification')
    .appendTo('#Image_magnification_JQ')

$('<h1>')
    .text('комплект одежды ADIDAS (летний)')
    .appendTo('#div_1_JQ')

$('<div class="img_0" id="img_0_JQ">')
    .appendTo('#div_1_JQ')

$('<div class="choosing_clothes" id="choosing_clothes_JQ">')
    .appendTo('#div_1_JQ')

$('<div class="img_1" id="img_1_JQ">')
    .appendTo('#choosing_clothes_JQ')
$('<div class="img_2" id="img_2_JQ">')
    .appendTo('#choosing_clothes_JQ')
$('<div class="img_3" id="img_3_JQ">')
    .appendTo('#choosing_clothes_JQ')

$('<span>')
    .text('(Для ближнего просмотра нажмите и удерживайте левую кнопку мыши)')
    .appendTo('#div_1_JQ')

let x_position_JQ, y_position_JQ;
let Image_magnification_yes_JQ = 'No';

$('#img_0_JQ').on('mouseup', _ => {Image_magnification_yes_JQ = 'No', $('#img_0_JQ').css('backgroundPosition', "0, 0")});
$('#img_0_JQ').on('mouseout', _ => {Image_magnification_yes_JQ = 'No', $('#img_0_JQ').css('backgroundPosition', "0, 0")});

$('#img_0_JQ').on('mousemove', (e) => {
    if (e.offsetX >= 0 && e.offsetX <= 520) {x_position_JQ = e.offsetX}
    if (e.offsetY >= 0 && e.offsetY <= 520) {y_position_JQ = e.offsetY}
});

$('#img_0_JQ').on('mousedown', _ => {Image_magnification_yes_JQ = 'Yes', new_div_2.CSS('backgroundPosition', `${(-x_position_JQ)}px, ${(-y_position_JQ)}px`)});

$('#img_0_JQ').on('mousemove', () => {
    if (Image_magnification_yes_JQ == 'Yes') {
        $('#img_0_JQ').css('backgroundPositionX', `${(-x_position_JQ)}px`);
        $('#img_0_JQ').css('backgroundPositionY', `${(-y_position_JQ)}px`);
    }
});

$('#img_1_JQ').on('click', _ => {$('#img_0_JQ').css('backgroundImage', 'url(/static/A_1_17.jpg)')});
$('#img_2_JQ').on('click', _ => {$('#img_0_JQ').css('backgroundImage', 'url(/static/A_2_17.jpg)')});
$('#img_3_JQ').on('click', _ => {$('#img_0_JQ').css('backgroundImage', 'url(/static/A_3_17.jpg)')});
