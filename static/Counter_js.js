"use strict"

// Счетчик (стандартная верстка)

const count = document.getElementById('count_id');
const price = document.getElementById('price_id');
const the_amount = document.getElementById('the_amount_id');
function button_minus_f() {
    if (count.textContent != 0 || count.textContent != '0') {
        count.textContent--;
        amount_of_goods_f();
    }
}
function button_plus_f() {
    count.textContent++;
    amount_of_goods_f();
}

function amount_of_goods_f() {
    the_amount.textContent = price.textContent * count.textContent;
}

//______________________________________________________________________________
//Счетчик (вёрстка чисто на Java Script)

let index_id = 1, div_New, img_New, table_New, table_Class, elem_New;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
div_New.className = 'product';
document.querySelector('.Counter_class_js').append(div_New);

index_id = 2;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
div_New.className = 'Counter';
document.querySelector('.Counter_class_js').append(div_New);

index_id = 3;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
document.getElementById('div_New_1_id').append(div_New);

img_New = document.createElement('img');
img_New.src = '/static/img-1.jpg';
img_New.alt = 'нету фото';
document.getElementById('div_New_3_id').append(img_New);

index_id = 4;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
document.getElementById('div_New_1_id').append(div_New);

table_Class = document.getElementById('div_New_4_id');
table_New = document.querySelector('.table');
let clone_table_New = table_New.cloneNode(true);
table_Class.append(clone_table_New);

index_id = 5;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
document.getElementById('div_New_2_id').append(div_New);

elem_New = document.createElement('span');
elem_New.textContent = 'Цена товара:';
document.getElementById('div_New_5_id').append(elem_New);

elem_New = document.createElement('span');
elem_New.textContent = 1200;
elem_New.id = "price_(2)_id";
document.getElementById('div_New_5_id').append(elem_New);

elem_New = document.createElement('span');
elem_New.textContent = '$';
document.getElementById('div_New_5_id').append(elem_New);

index_id = 6;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
document.getElementById('div_New_2_id').append(div_New);

elem_New = document.createElement('button');
elem_New.textContent = '-';
elem_New.id = "button_(2)_minus";
document.getElementById('div_New_6_id').append(elem_New);

elem_New = document.createElement('span');
elem_New.textContent = '0';
elem_New.id = "count_(2)_id";
document.getElementById('div_New_6_id').append(elem_New);

elem_New = document.createElement('span');
elem_New.textContent = 'шт.';
document.getElementById('div_New_6_id').append(elem_New);

elem_New = document.createElement('button');
elem_New.textContent = '+';
elem_New.id = "button_(2)_plus";
document.getElementById('div_New_6_id').append(elem_New);

index_id = 7;
div_New = document.createElement('div');
div_New.id = 'div_New_' + index_id + "_id";
document.getElementById('div_New_2_id').append(div_New);

elem_New = document.createElement('span');
elem_New.textContent = 'Сумма закупки:';
document.getElementById('div_New_7_id').append(elem_New);

elem_New = document.createElement('span');
elem_New.textContent = 0;
elem_New.id = "the_amount_(2)_id";
document.getElementById('div_New_7_id').append(elem_New);

elem_New = document.createElement('span');
elem_New.textContent = '$';
document.getElementById('div_New_7_id').append(elem_New);

const count_2 = document.getElementById('count_(2)_id');
const price_2 = document.getElementById('price_(2)_id');
const the_amount_2 = document.getElementById('the_amount_(2)_id');
const button_plus_2 = document.getElementById('button_(2)_plus');
const button_minus_2 = document.getElementById('button_(2)_minus');

button_minus_2.addEventListener("click", _ => {
    if (count_2.textContent != 0 || count_2.textContent != '0') {
        count_2.textContent--;
        amount_of_goods_2_f();
    }
})

button_plus_2.addEventListener("click", _ => {
    count_2.textContent++;
    amount_of_goods_2_f();
})

function amount_of_goods_2_f() {
    the_amount_2.textContent = price_2.textContent * count_2.textContent;
}

//______________________________________________________________________________
//Счетчик (вёрстка в JQuery)


var url_Q = 'img-1.jpg';

$('<div>')
    .addClass('product')
    .attr('id', 'div_New_1Q_id')
    .appendTo(".Counter_jQueri")

$('<div>')
    .addClass('Counter')
    .attr('id', 'div_New_2Q_id')
    .appendTo(".Counter_jQueri")

$('<div>')
    .attr('id', 'div_New_3Q_id')
    .appendTo("#div_New_1Q_id")

$(`<img src='/static/${url_Q}' alt="нету фото">`)
    .appendTo('#div_New_3Q_id')

$('<div>')
    .addClass('table_Q_clone')
    .attr('id', 'div_New_4Q_id')
    .appendTo("#div_New_1Q_id")

$('.Counter_standard>div>div>.table_Q').clone().appendTo('.table_Q_clone')

$('<div>')
    .attr('id', 'div_New_5Q_id')
    .appendTo("#div_New_2Q_id")
    
    $('<span>')
        .text('Цена товара:')
        .appendTo('#div_New_5Q_id')

    $('<span>')
        .text('1200')
        .attr('id', 'price_(3)_id')
        .appendTo('#div_New_5Q_id')

    $('<span>')
        .text('$')
        .appendTo('#div_New_5Q_id')

$('<div>')
    .attr('id', 'div_New_6Q_id')
    .appendTo("#div_New_2Q_id")

    $('<button>')
        .attr('id', 'button_(3)_minus')
        .text('-')
        .appendTo("#div_New_6Q_id")

    $('<span>')
        .attr('id', 'count_(3)_id')
        .text('0')
        .appendTo('#div_New_6Q_id')

    $('<span>')
        .text('шт.')
        .appendTo('#div_New_6Q_id')

    $('<button>')
        .attr('id', 'button_(3)_plus')
        .text('+')
        .appendTo("#div_New_6Q_id")

$('<div>')
    .attr('id', 'div_New_7Q_id')
    .appendTo("#div_New_2Q_id")

    $('<span>')
        .text('Сумма закупки:')
        .appendTo('#div_New_7Q_id')

    $('<span>')
        .text('0')
        .attr('id', 'the_amount_(3)_id')
        .appendTo('#div_New_7Q_id')

    $('<span>')
        .text('$')
        .appendTo('#div_New_7Q_id')

const count_3 = document.getElementById('count_(3)_id');
const price_3 = document.getElementById('price_(3)_id');
const the_amount_3 = document.getElementById('the_amount_(3)_id');
const button_plus_3 = document.getElementById('button_(3)_plus');
const button_minus_3 = document.getElementById('button_(3)_minus');

$(button_minus_3).click(_ => {
    if (count_3.textContent != 0 || count_3.textContent != '0') {
        count_3.textContent--;
        amount_of_goods_3_f();
    }
})

$(button_plus_3).click(_ => {
    count_3.textContent++;
    amount_of_goods_3_f();
})

function amount_of_goods_3_f() {
    the_amount_3.textContent = price_3.textContent * count_3.textContent;
}