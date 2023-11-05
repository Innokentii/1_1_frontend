"use strict"

//hover, click анимации (стандартная вёрстка)_________________________________________________
let hover_click_5 = document.querySelector('.hover_click_5');

let new_div_1 = document.createElement('div');
new_div_1.style.width = '180px';
new_div_1.style.height = '55px';
new_div_1.style.borderRadius = '10px';
new_div_1.style.position = 'relative';
new_div_1.style.top = '50px';
new_div_1.style.left = '50px';
new_div_1.textContent = 'Подсказка (через 2 сек. исчезнет)';
new_div_1.style.paddingTop = '25px';
new_div_1.style.fontWeight = 'bolder';
new_div_1.style.background = '#bfd761'
hover_click_5.append(new_div_1);

let new_div_2 = document.createElement('div');
new_div_2.style.width = '30px';
new_div_2.style.height = '30px';
new_div_2.style.transform = 'rotateZ(45deg)';
new_div_2.style.position = 'relative';
new_div_2.style.left = '20px';
new_div_2.style.background = '#bfd761';
new_div_1.append(new_div_2);

new_div_1.style.display = 'none';
new_div_2.style.display = 'none';

hover_click_5.addEventListener('click', _ => {
    if (new_div_1.style.display != '') {
        new_div_1.style.display = '';
        new_div_2.style.display = '';
        setTimeout(setTimeout_hint_f, 2000);
    }
});

function setTimeout_hint_f() {
    new_div_1.style.display = 'none';
    new_div_2.style.display = 'none';
}

//hover, click анимации (вёрстка чисто на Java Script)_________________________________________________
let hover_click_JS = document.getElementById('hover_click_JS');

hover_click_JS.insertAdjacentHTML('beforeend','<div class="hover_click_block"><b>hover</b><span>изменение фона блока</span><div class="hover_click_1"></div><span>изменение рамки блока</span><div id="hover_click_2"></div></div><div class="hover_click_block"><b>active (нажмите и не отпускайте)</b><span>изменение фона блока</span><div class="hover_click_3"></div><span>изменение рамки блока</span><div id="hover_click_4"></div></div><div class="hover_click_block"><b>click</b><span>сплывающая подсказка</span><div id="hover_click_5_JS"></div><span>нажимная кнопка</span><div id="hover_click_6"></div></div>');

let hover_click_5_JS = document.getElementById('hover_click_5_JS');

let new_div_1_JS = document.createElement('div');
new_div_1_JS.style.width = '180px';
new_div_1_JS.style.height = '55px';
new_div_1_JS.style.borderRadius = '10px';
new_div_1_JS.style.position = 'relative';
new_div_1_JS.style.top = '50px';
new_div_1_JS.style.left = '50px';
new_div_1_JS.textContent = 'Подсказка (через 2 сек. исчезнет)';
new_div_1_JS.style.paddingTop = '25px';
new_div_1_JS.style.fontWeight = 'bolder';
new_div_1_JS.style.background = '#bfd761'
hover_click_5_JS.append(new_div_1_JS);

let new_div_2_JS = document.createElement('div');
new_div_2_JS.style.width = '30px';
new_div_2_JS.style.height = '30px';
new_div_2_JS.style.transform = 'rotateZ(45deg)';
new_div_2_JS.style.position = 'relative';
new_div_2_JS.style.left = '20px';
new_div_2_JS.style.background = '#bfd761';
new_div_1_JS.append(new_div_2_JS);

new_div_1_JS.style.display = 'none';
new_div_2_JS.style.display = 'none';

hover_click_5_JS.addEventListener('click', _ => {
    if (new_div_1_JS.style.display != '') {
        new_div_1_JS.style.display = '';
        new_div_2_JS.style.display = '';
        setTimeout(setTimeout_hint_f_JS, 2000);
    }
});

function setTimeout_hint_f_JS() {
    new_div_1_JS.style.display = 'none';
    new_div_2_JS.style.display = 'none';
}

//hover, click анимации (вёрстка в JQuery)_________________________________________________

$('<div class="hover_click_block" id="div_1G_JQ">')
    .appendTo($('#hover_click_JQ'))

    $('<b>')
        .text('hover')
        .appendTo($('#div_1G_JQ'))
    $('<span>')
        .text('изменение фона блока')
        .appendTo($('#div_1G_JQ'))
    $('<div class="hover_click_1">')
        .appendTo($('#div_1G_JQ'))
    $('<span>')
        .text('изменение рамки блока')
        .appendTo($('#div_1G_JQ'))
    $('<div id="hover_click_2">')
        .appendTo($('#div_1G_JQ'))
    
$('<div class="hover_click_block" id="div_2G_JQ">')
    .appendTo($('#hover_click_JQ'))
    
    $('<b>')
        .text('active (нажмите и не отпускайте)')
        .appendTo($('#div_2G_JQ'))
    $('<span>')
        .text('изменение фона блока')
        .appendTo($('#div_2G_JQ'))
    $('<div class="hover_click_3">')
        .appendTo($('#div_2G_JQ'))
    $('<span>')
        .text('изменение рамки блока')
        .appendTo($('#div_2G_JQ'))
    $('<div id="hover_click_4">')
        .appendTo($('#div_2G_JQ'))

$('<div class="hover_click_block" id="div_3G_JQ">')
    .appendTo($('#hover_click_JQ'))
    
    $('<b>')
        .text('click')
        .appendTo($('#div_3G_JQ'))
    $('<span>')
        .text('сплывающая подсказка')
        .appendTo($('#div_3G_JQ'))
    $('<div id="hover_click_5_JQ">')
        .appendTo($('#div_3G_JQ'))
    $('<span>')
        .text('нажимная кнопка')
        .appendTo($('#div_3G_JQ'))
    $('<div id="hover_click_6">')
        .appendTo($('#div_3G_JQ'))

$('<div id="div_4G_JQ">')
    .appendTo('#hover_click_5_JQ')
    .css('width', '180px')
    .css('height', '55px')
    .css('borderRadius', '10px')
    .css('position', 'relative')
    .css('top', '50px')
    .css('left', '50px')
    .text('Подсказка (через 2 сек. исчезнет)')
    .css('paddingTop', '25px')
    .css('fontWeight', 'bolder')
    .css('background', '#bfd761')
    .css('display', 'none')

$('<div id="div_5G_JQ">')
    .appendTo('#div_4G_JQ')
    .css('width', '30px')
    .css('height', '30px')
    .css('transform', 'rotateZ(45deg)')
    .css('position', 'relative')
    .css('left', '20px')
    .css('background', '#bfd761')
    .css('display', 'none')

let hover_click_5_JQ = document.getElementById('hover_click_5_JQ');
let div_4G_JQ = document.getElementById('div_4G_JQ');
let div_5G_JQ = document.getElementById('div_5G_JQ');

hover_click_5_JQ.addEventListener('click', _ => {
    if (div_4G_JQ.style.display != '') {
        div_4G_JQ.style.display = '';
        div_5G_JQ.style.display = '';
        setTimeout(setTimeout_hint_f_JQ, 2000);
    }
});

function setTimeout_hint_f_JQ() {
    div_4G_JQ.style.display = 'none';
    div_5G_JQ.style.display = 'none';
}