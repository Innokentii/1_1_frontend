"use strict"

//Калькулятор (стандартная вёрстка)_________________________________________________________________
//Окно вывода расчета;
const result_module = document.querySelector('.result_module');

//Максимальная длина ввода данных;
let input_restriction = 14;

//Удаление стартового текста;
function delete_start_f() {
    result_module.textContent = '';
    delete_start_f = () => { }
}

//Ввод данных;
function click_calculator_f(simvol) {
    delete_start_f();
    let last_character = result_module.textContent.split('').reverse()[0];
    if (result_module.textContent.split('').length >= 1 && (simvol == '+' || simvol == '-' || simvol == '*' || simvol == '/') && (last_character == '+' || last_character == '-' || last_character == '*' || last_character == '/')) {delete_f()}
    if (result_module.textContent.split('').length < input_restriction) {result_module.textContent = result_module.textContent + simvol};
}

//Удаление данных;
function del_f() {result_module.textContent = ''};

function delete_f() {
    delete_start_f();
    let remove_text = result_module.textContent.split('');
    remove_text.splice((result_module.textContent.length - 1), 1);
    result_module.textContent = remove_text.join('');
};

//Ввывод расчета (+, -, /, *);
let eval_string, right_bracket, left_bracket;
function eval_f () {
    right_bracket = result_module.textContent.split('').filter(RB => RB == ')').length;
    left_bracket = result_module.textContent.split('').filter(LB => LB == '(').length;
    if (right_bracket == left_bracket) {
        delete_start_f = () => {
            result_module.textContent = '';
            delete_start_f = () => { }
        }
        eval_string = result_module.textContent;
        try {if ((eval(eval_string) - eval(eval_string).toFixed(0)) != 0) {result_module.textContent = eval(eval_string).toFixed(3)} else {result_module.textContent = eval(eval_string)}} catch(err) {result_module.textContent = 'Ошибка'}
    }
}

//Квадратный корень 
function square_root() {
    try {if (((Math.sqrt(eval(result_module.textContent))).toFixed(0) - Math.sqrt(eval(result_module.textContent))) != 0) {result_module.textContent = (Math.sqrt(eval(result_module.textContent))).toFixed(3)} else {result_module.textContent = (Math.sqrt(eval(result_module.textContent)))}} catch(err) {result_module.textContent = result_module.textContent};
}

//Возведение в Квадрат
function square() {
    try {if ((((eval(result_module.textContent)) ** 2).toFixed(0) - (eval(result_module.textContent) ** 2)) != 0) {result_module.textContent = ((eval(result_module.textContent) ** 2)).toFixed(3)} else {result_module.textContent = ((eval(result_module.textContent) ** 2))}} catch(err) {result_module.textContent = result_module.textContent};
}

//Возведение в Куб
function cube() {
    try {if ((((eval(result_module.textContent)) ** 3).toFixed(0) - (eval(result_module.textContent) ** 3)) != 0) {result_module.textContent = ((eval(result_module.textContent) ** 3)).toFixed(3)} else {result_module.textContent = ((eval(result_module.textContent) ** 3))}} catch(err) {result_module.textContent = result_module.textContent};
}

//Факториал;
let factorial_meaning = 1;
function factorial() {
    eval_f ();
    if (result_module.textContent == 'Ошибка') {result_module.textContent = 'Ошибка'} else {
        if ((eval(result_module.textContent) - eval(result_module.textContent).toFixed(0)) != 0) {result_module.textContent = 'Ошибка'} else {
            for (let f_n = 1; f_n < eval(result_module.textContent) + 1;f_n++) {
                factorial_meaning = factorial_meaning * f_n;
            }
            result_module.textContent = factorial_meaning;
            factorial_meaning = 1;
        }
    }
}

//Калькулятор (вёрстка чисто на Java Script)_________________________________________________________________
const new_div_JS = document.getElementById('calculator_JS_id');

let new_div_1 = document.createElement('div');
new_div_1.className = 'result_module_JS';
new_div_1.innerText = 'ввод данных';
new_div_JS.append(new_div_1);
let new_div_2 = document.createElement('div');
new_div_2.className = 'buttons_module';
new_div_JS.append(new_div_2);

let button_array = ['Del.','√',`X²`,`X³`,'(',')','!','*','7','8','9','/','4','5','6','+','1','2','3','-','C','0','.','='];
for (let n = 0; n < button_array.length; n++) {
    let new_button = document.createElement('button');
    new_button.textContent = button_array[n];
    new_button.id = 'new_button_JS_id_' + n;
    new_div_2.append(new_button);
}
document.getElementById('new_button_JS_id_0').addEventListener('click', _ => {del_f_JS()});
document.getElementById('new_button_JS_id_1').addEventListener('click', _ => {square_root_JS()});
document.getElementById('new_button_JS_id_2').addEventListener('click', _ => {square_JS()});
document.getElementById('new_button_JS_id_3').addEventListener('click', _ => {cube_JS()});
document.getElementById('new_button_JS_id_4').addEventListener('click', _ => {click_calculator_f_JS(button_array[4])});
document.getElementById('new_button_JS_id_5').addEventListener('click', _ => {click_calculator_f_JS(button_array[5])});
document.getElementById('new_button_JS_id_6').addEventListener('click', _ => {factorial_JS()});
document.getElementById('new_button_JS_id_7').addEventListener('click', _ => {click_calculator_f_JS(button_array[7])});
document.getElementById('new_button_JS_id_8').addEventListener('click', _ => {click_calculator_f_JS(button_array[8])});
document.getElementById('new_button_JS_id_9').addEventListener('click', _ => {click_calculator_f_JS(button_array[9])});
document.getElementById('new_button_JS_id_10').addEventListener('click', _ => {click_calculator_f_JS(button_array[10])});
document.getElementById('new_button_JS_id_11').addEventListener('click', _ => {click_calculator_f_JS(button_array[11])});
document.getElementById('new_button_JS_id_12').addEventListener('click', _ => {click_calculator_f_JS(button_array[12])});
document.getElementById('new_button_JS_id_13').addEventListener('click', _ => {click_calculator_f_JS(button_array[13])});
document.getElementById('new_button_JS_id_14').addEventListener('click', _ => {click_calculator_f_JS(button_array[14])});
document.getElementById('new_button_JS_id_15').addEventListener('click', _ => {click_calculator_f_JS(button_array[15])});
document.getElementById('new_button_JS_id_16').addEventListener('click', _ => {click_calculator_f_JS(button_array[16])});
document.getElementById('new_button_JS_id_17').addEventListener('click', _ => {click_calculator_f_JS(button_array[17])});
document.getElementById('new_button_JS_id_18').addEventListener('click', _ => {click_calculator_f_JS(button_array[18])});
document.getElementById('new_button_JS_id_19').addEventListener('click', _ => {click_calculator_f_JS(button_array[19])});
document.getElementById('new_button_JS_id_20').addEventListener('click', _ => {delete_f_JS()});
document.getElementById('new_button_JS_id_21').addEventListener('click', _ => {click_calculator_f_JS(button_array[21])});
document.getElementById('new_button_JS_id_22').addEventListener('click', _ => {click_calculator_f_JS(button_array[22])});
document.getElementById('new_button_JS_id_23').addEventListener('click', _ => {eval_f_JS ()});

//Окно вывода расчета;
const result_module_JS = document.querySelector('.result_module_JS');

//Максимальная длина ввода данных;
let input_restriction_JS = 14;

//Удаление стартового текста;
function delete_start_f_JS() {
    result_module_JS.textContent = '';
    delete_start_f_JS = () => { }
}

//Ввод данных;
function click_calculator_f_JS(simvol) {
    delete_start_f_JS();
    let last_character = result_module_JS.textContent.split('').reverse()[0];
    if (result_module_JS.textContent.split('').length >= 1 && (simvol == '+' || simvol == '-' || simvol == '*' || simvol == '/') && (last_character == '+' || last_character == '-' || last_character == '*' || last_character == '/')) {delete_f_JS()}
    if (result_module_JS.textContent.split('').length < input_restriction) {result_module_JS.textContent = result_module_JS.textContent + simvol};
}

//Удаление данных;
function del_f_JS() {result_module_JS.textContent = ''};

function delete_f_JS() {
    delete_start_f_JS();
    let remove_text = result_module_JS.textContent.split('');
    remove_text.splice((result_module_JS.textContent.length - 1), 1);
    result_module_JS.textContent = remove_text.join('');
};

//Ввывод расчета (+, -, /, *);
let eval_string_JS, right_bracket_JS, left_bracket_JS;
function eval_f_JS () {
    right_bracket_JS = result_module_JS.textContent.split('').filter(RB => RB == ')').length;
    left_bracket_JS = result_module_JS.textContent.split('').filter(LB => LB == '(').length;
    if (right_bracket_JS == left_bracket_JS) {
        delete_start_f_JS = () => {
            result_module_JS.textContent = '';
            delete_start_f_JS = () => { }
        }
        eval_string_JS = result_module_JS.textContent;
        try {if ((eval(eval_string_JS) - eval(eval_string_JS).toFixed(0)) != 0) {result_module_JS.textContent = eval(eval_string_JS).toFixed(3)} else {result_module_JS.textContent = eval(eval_string_JS)}} catch(err) {result_module_JS.textContent = 'Ошибка'}
    }
}

//Квадратный корень 
function square_root_JS() {
    try {if (((Math.sqrt(eval(result_module_JS.textContent))).toFixed(0) - Math.sqrt(eval(result_module_JS.textContent))) != 0) {result_module_JS.textContent = (Math.sqrt(eval(result_module_JS.textContent))).toFixed(3)} else {result_module_JS.textContent = (Math.sqrt(eval(result_module_JS.textContent)))}} catch(err) {result_module_JS.textContent = result_module_JS.textContent};
}

//Возведение в Квадрат
function square_JS() {
    try {if ((((eval(result_module_JS.textContent)) ** 2).toFixed(0) - (eval(result_module_JS.textContent) ** 2)) != 0) {result_module_JS.textContent = ((eval(result_module_JS.textContent) ** 2)).toFixed(3)} else {result_module_JS.textContent = ((eval(result_module_JS.textContent) ** 2))}} catch(err) {result_module_JS.textContent = result_module_JS.textContent};
}

//Возведение в Куб
function cube_JS() {
    try {if ((((eval(result_module_JS.textContent)) ** 3).toFixed(0) - (eval(result_module_JS.textContent) ** 3)) != 0) {result_module_JS.textContent = ((eval(result_module_JS.textContent) ** 3)).toFixed(3)} else {result_module_JS.textContent = ((eval(result_module_JS.textContent) ** 3))}} catch(err) {result_module_JS.textContent = result_module_JS.textContent};
}

//Факториал;
let factorial_meaning_JS = 1;
function factorial_JS() {
    eval_f_JS ();
    if (result_module_JS.textContent == 'Ошибка') {result_module_JS.textContent = 'Ошибка'} else {
        if ((eval(result_module_JS.textContent) - eval(result_module_JS.textContent).toFixed(0)) != 0) {result_module_JS.textContent = 'Ошибка'} else {
            for (let f_n = 1; f_n < eval(result_module_JS.textContent) + 1;f_n++) {
                factorial_meaning_JS = factorial_meaning_JS * f_n;
            }
            result_module_JS.textContent = factorial_meaning_JS;
            factorial_meaning_JS = 1;
        }
    }
}

//Калькулятор (вёрстка в JQuery)_________________________________________________________________
const new_div_JQ = document.getElementById('calculator_JQ_id');

$('<div>')
    .appendTo(new_div_JQ)
    .addClass('result_module_JQ')

$('<div>')
    .appendTo(new_div_JQ)
    .css('display', 'flex')
    .css('flex-direction', 'row')
    .css('flex-wrap', 'wrap')
    .css('justify-content', 'center')
    .css('gap', '10px')

let button_array_JQ = ['Del.','√',`X²`,`X³`,'(',')','!','*','7','8','9','/','4','5','6','+','1','2','3','-','C','0','.','='];
let button_onClock_JQ = ['del_f_JQ()','square_root_JQ()',`square_JQ()`,`cube_JQ()`,
'click_calculator_f_JQ("(")','click_calculator_f_JQ(")")','factorial_JQ()','click_calculator_f_JQ("*")',
'click_calculator_f_JQ("7")','click_calculator_f_JQ("8")','click_calculator_f_JQ("9")',
'click_calculator_f_JQ("/")','click_calculator_f_JQ("4")','click_calculator_f_JQ("5")',
'click_calculator_f_JQ("6")','click_calculator_f_JQ("+")','click_calculator_f_JQ("1")',
'click_calculator_f_JQ("2")','click_calculator_f_JQ("3")','click_calculator_f_JQ("-")',
'delete_f_JQ()','click_calculator_f_JQ("0")','click_calculator_f_JQ(".")','eval_f_JQ ()'];

for (let n_js = 0; n_js < button_array_JQ.length; n_js++) {
    $(`<button>`)
        .attr('onclick', button_onClock_JQ[n_js])
        .text(button_array_JQ[n_js])
        .appendTo('#calculator_JQ_id > div:nth-child(2)')
}

//Окно вывода расчета;
const result_module_JQ = document.querySelector('.result_module_JQ');

//Максимальная длина ввода данных;
let input_restriction_JQ = 14;

//Удаление стартового текста;
function delete_start_f_JQ() {
    result_module_JQ.textContent = '';
    delete_start_f_JQ = () => { }
}

//Ввод данных;
function click_calculator_f_JQ(simvol) {
    delete_start_f_JQ();
    let last_character = result_module_JQ.textContent.split('').reverse()[0];
    if (result_module_JQ.textContent.split('').length >= 1 && (simvol == '+' || simvol == '-' || simvol == '*' || simvol == '/') && (last_character == '+' || last_character == '-' || last_character == '*' || last_character == '/')) {delete_f_JQ()}
    if (result_module_JQ.textContent.split('').length < input_restriction) {result_module_JQ.textContent = result_module_JQ.textContent + simvol};
}

//Удаление данных;
function del_f_JQ() {result_module_JQ.textContent = ''};

function delete_f_JQ() {
    delete_start_f_JQ();
    let remove_text = result_module_JQ.textContent.split('');
    remove_text.splice((result_module_JQ.textContent.length - 1), 1);
    result_module_JQ.textContent = remove_text.join('');
};

//Ввывод расчета (+, -, /, *);
let eval_string_JQ, right_bracket_JQ, left_bracket_JQ;
function eval_f_JQ () {
    right_bracket_JQ = result_module_JQ.textContent.split('').filter(RB => RB == ')').length;
    left_bracket_JQ = result_module_JQ.textContent.split('').filter(LB => LB == '(').length;
    if (right_bracket_JS == left_bracket_JS) {
        delete_start_f_JQ = () => {
            result_module_JQ.textContent = '';
            delete_start_f_JQ = () => { }
        }
        eval_string_JQ = result_module_JQ.textContent;
        try {if ((eval(eval_string_JQ) - eval(eval_string_JQ).toFixed(0)) != 0) {result_module_JQ.textContent = eval(eval_string_JQ).toFixed(3)} else {result_module_JQ.textContent = eval(eval_string_JQ)}} catch(err) {result_module_JQ.textContent = 'Ошибка'}
    }
}

//Квадратный корень 
function square_root_JQ() {
    try {if (((Math.sqrt(eval(result_module_JQ.textContent))).toFixed(0) - Math.sqrt(eval(result_module_JQ.textContent))) != 0) {result_module_JQ.textContent = (Math.sqrt(eval(result_module_JQ.textContent))).toFixed(3)} else {result_module_JQ.textContent = (Math.sqrt(eval(result_module_JQ.textContent)))}} catch(err) {result_module_JQ.textContent = result_module_JQ.textContent};
}

//Возведение в Квадрат
function square_JQ() {
    try {if ((((eval(result_module_JQ.textContent)) ** 2).toFixed(0) - (eval(result_module_JQ.textContent) ** 2)) != 0) {result_module_JQ.textContent = ((eval(result_module_JQ.textContent) ** 2)).toFixed(3)} else {result_module_JQ.textContent = ((eval(result_module_JQ.textContent) ** 2))}} catch(err) {result_module_JQ.textContent = result_module_JQ.textContent};
}

//Возведение в Куб
function cube_JQ() {
    try {if ((((eval(result_module_JQ.textContent)) ** 3).toFixed(0) - (eval(result_module_JQ.textContent) ** 3)) != 0) {result_module_JQ.textContent = ((eval(result_module_JQ.textContent) ** 3)).toFixed(3)} else {result_module_JQ.textContent = ((eval(result_module_JQ.textContent) ** 3))}} catch(err) {result_module_JQ.textContent = result_module_JQ.textContent};
}

//Факториал;
let factorial_meaning_JQ = 1;
function factorial_JQ() {
    eval_f_JQ ();
    if (result_module_JQ.textContent == 'Ошибка') {result_module_JQ.textContent = 'Ошибка'} else {
        if ((eval(result_module_JQ.textContent) - eval(result_module_JQ.textContent).toFixed(0)) != 0) {result_module_JQ.textContent = 'Ошибка'} else {
            for (let f_n = 1; f_n < eval(result_module_JQ.textContent) + 1;f_n++) {
                factorial_meaning_JQ = factorial_meaning_JQ * f_n;
            }
            result_module_JQ.textContent = factorial_meaning_JQ;
            factorial_meaning_JQ = 1;
        }
    }
}