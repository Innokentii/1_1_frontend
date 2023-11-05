"use strict"
//Загрузка (стандартная вёрстка)___________________________________________________
const loading_1_level = document.querySelector('.loading_1 > div:nth-child(1)');
let Num_loading_1_level = 0;
const loading_1_percent = document.querySelector('.loading_1 > div:nth-child(2)');
let Num_loading_1_percent = 0;

function loading_f() {
    loading_1_level.style.width = Num_loading_1_level + 'px';
    loading_1_percent.textContent = Num_loading_1_percent + '%';
}

function loading_click_f() {
    if (Num_loading_1_level != 900) {
        if (Num_loading_1_percent <= 95) {
            Num_loading_1_level += 45;
            Num_loading_1_percent += 5; 
        } else {
            Num_loading_1_level += 900 - Num_loading_1_level;
            Num_loading_1_percent += 100 - Num_loading_1_percent; 
        }
    };
    loading_f()
}

let loading_left = 'no';
const loading_button_left = document.getElementById('loading_button_left_id');
loading_button_left.addEventListener('mousedown', _ => loading_left = 'yes');
loading_button_left.addEventListener('mouseup', _ => loading_left = 'no');
loading_button_left.addEventListener('mouseout', _ => loading_left = 'no');
setInterval(_ => {
    if (Num_loading_1_level != 0 && loading_left == 'yes') {
        Num_loading_1_level -= 9;
        Num_loading_1_percent -= 1;
    };
    loading_f()
},
200)

let loading_right = 'no';
const loading_button_right = document.getElementById('loading_button_right_id');
loading_button_right.addEventListener('mousedown', _ => loading_right = 'yes');
loading_button_right.addEventListener('mouseup', _ => loading_right = 'no');
loading_button_right.addEventListener('mouseout', _ => loading_right = 'no');
setInterval(_ => {
    if (Num_loading_1_level != 900 && loading_right == 'yes') {
        Num_loading_1_level += 9;
        Num_loading_1_percent += 1;
    };
    loading_f()
},
200)

//Загрузка (вёрстка чисто на Java Script)__________________________________________________

const loading_2 = document.getElementById('loading_2_id');

let new_span = document.createElement('span');
new_span.textContent = 'Линейная загрузка';
new_span.style.fontWeight = 'bolder';
loading_2.append(new_span);
let new_div_1 = document.createElement('div');
new_div_1.className = 'loading_1';
loading_2.append(new_div_1);
let new_div_2 = document.createElement('div');
new_div_2.style.display = 'flex';
new_div_2.style.flex = 'row';
new_div_2.style.justifyContent = 'center';
new_div_2.style.gap = '5px';
loading_2.append(new_div_2);
let new_div_3 = document.createElement('div');
new_div_1.append(new_div_3);
let new_div_4 = document.createElement('div');
new_div_4.textContent = '0%';
new_div_1.append(new_div_4);
let new_button_1 = document.createElement('button');
new_button_1.textContent = '<';
new_div_2.append(new_button_1);
let new_button_2 = document.createElement('button');
new_button_2.textContent = 'Загрузить';
new_div_2.append(new_button_2);
let new_button_3 = document.createElement('button');
new_button_3.textContent = '>';
new_div_2.append(new_button_3);

let Num_loading_1_level_JS = 0;
let Num_loading_1_percent_JS = 0;

function loading_f_JS() {
    new_div_3.style.width = Num_loading_1_level_JS + 'px';
    new_div_4.textContent = Num_loading_1_percent_JS + '%';
}

new_button_2.addEventListener('click', _ => {
    if (Num_loading_1_level_JS != 900) {
        if (Num_loading_1_percent_JS <= 95) {
            Num_loading_1_level_JS += 45;
            Num_loading_1_percent_JS += 5; 
        } else {
            Num_loading_1_level_JS += 900 - Num_loading_1_level_JS;
            Num_loading_1_percent_JS += 100 - Num_loading_1_percent_JS; 
        }
    };
    loading_f_JS()
})

let loading_left_JS = 'no';
new_button_1.addEventListener('mousedown', _ => loading_left_JS = 'yes');
new_button_1.addEventListener('mouseup', _ => loading_left_JS = 'no');
new_button_1.addEventListener('mouseout', _ => loading_left_JS = 'no');
setInterval(_ => {
    if (Num_loading_1_level_JS != 0 && loading_left_JS == 'yes') {
        Num_loading_1_level_JS -= 9;
        Num_loading_1_percent_JS -= 1;
    };
    loading_f_JS()
},
200)

let loading_right_JS = 'no';
new_button_3.addEventListener('mousedown', _ => loading_right_JS = 'yes');
new_button_3.addEventListener('mouseup', _ => loading_right_JS = 'no');
new_button_3.addEventListener('mouseout', _ => loading_right_JS = 'no');
setInterval(_ => {
    if (Num_loading_1_level_JS != 900 && loading_right_JS == 'yes') {
        Num_loading_1_level_JS += 9;
        Num_loading_1_percent_JS += 1;
    };
    loading_f_JS()
},
200)

//Загрузка (вёрстка в JQuery)__________________________________________________

$('<span>')
    .appendTo('#loading_3_id')
    .text('Линейная загрузка')
    .css('font-weight', 'bolder')
$('<div>')
    .appendTo('#loading_3_id')
    .addClass('loading_1')
    .attr('id', 'new_div_1_JQ')
$('<div>')
    .appendTo('#loading_3_id')
    .attr('id', 'new_div_2_JQ')
    .css('display', 'flex')
    .css('flex-direction', 'row')
    .css('justify-content', 'center')
    .css('gap', '5px')
$('<div>')
    .appendTo('#new_div_1_JQ')
    .attr('id', 'new_div_3_JQ')
$('<div>')
    .appendTo('#new_div_1_JQ')
    .attr('id', 'new_div_4_JQ')
    .text('0%')
$('<button>')
    .appendTo('#new_div_2_JQ')
    .text('<')
    .attr('id', 'new_button_1_JQ')
$('<button>')
    .appendTo('#new_div_2_JQ')
    .text('Загрузить')
    .attr('id', 'new_button_2_JQ')
$('<button>')
    .appendTo('#new_div_2_JQ')
    .text('>')
    .attr('id', 'new_button_3_JQ')


    let new_div_3_jq = document.getElementById('new_div_3_JQ');
    let new_div_4_jq = document.getElementById('new_div_4_JQ');
    let Num_loading_1_level_JQ = 0;
    let Num_loading_1_percent_JQ = 0;
    
    function loading_f_JQ() {
        new_div_3_jq.style.width = Num_loading_1_level_JQ + 'px';
        new_div_4_jq.textContent = Num_loading_1_percent_JQ + '%';
    }
    
    let new_button_2_jq = document.getElementById('new_button_2_JQ');
    new_button_2_jq.addEventListener('click', _ => {
        if (Num_loading_1_level_JQ != 900) {
            if (Num_loading_1_percent_JQ <= 95) {
                Num_loading_1_level_JQ += 45;
                Num_loading_1_percent_JQ += 5; 
            } else {
                Num_loading_1_level_JQ += 900 - Num_loading_1_level_JQ;
                Num_loading_1_percent_JQ += 100 - Num_loading_1_percent_JQ; 
            }
        };
        loading_f_JQ()
    })
    
    let new_button_1_jq = document.getElementById('new_button_1_JQ');
    let loading_left_JQ = 'no';
    new_button_1_jq.addEventListener('mousedown', _ => loading_left_JQ = 'yes');
    new_button_1_jq.addEventListener('mouseup', _ => loading_left_JQ = 'no');
    new_button_1_jq.addEventListener('mouseout', _ => loading_left_JQ = 'no');
    setInterval(_ => {
        if (Num_loading_1_level_JQ != 0 && loading_left_JQ == 'yes') {
            Num_loading_1_level_JQ -= 9;
            Num_loading_1_percent_JQ -= 1;
        };
        loading_f_JQ()
    },
    200)
    
    let new_button_3_jq = document.getElementById('new_button_3_JQ');
    let loading_right_JQ = 'no';
    new_button_3_jq.addEventListener('mousedown', _ => loading_right_JQ = 'yes');
    new_button_3_jq.addEventListener('mouseup', _ => loading_right_JQ = 'no');
    new_button_3_jq.addEventListener('mouseout', _ => loading_right_JQ = 'no');
    setInterval(_ => {
        if (Num_loading_1_level_JQ != 900 && loading_right_JQ == 'yes') {
            Num_loading_1_level_JQ += 9;
            Num_loading_1_percent_JQ += 1;
        };
        loading_f_JQ()
    },
    200)