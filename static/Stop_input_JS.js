"use strict"

//Стоп ввод (стандартная вёрстка)______________________________________________________________
let chec_rad_1_id = document.getElementById('chec_rad_1_id');
let chec_rad_2_id = document.getElementById('chec_rad_2_id');
let chec_rad_3_id = document.getElementById('chec_rad_3_id');

document.getElementById('stop_input_text_id').addEventListener('keydown', function (e) {
    let keydown_str = e.code[0] + e.code[1] + e.code[2];
    if (chec_rad_1_id.checked && keydown_str  == 'Key') {e.preventDefault()};
    if (chec_rad_2_id.checked && !['0','1','2','3','4','5','6','7','8','9'].includes(e.key) == false) {e.preventDefault()};
    if (chec_rad_3_id.checked && ![',','?','.','{','}','[',']',"\\",'|','/',':',';','!','&','^','%','#','№'].includes(e.key) == false) {e.preventDefault()};
});

//Стоп ввод (вёрстка чисто на Java Script)______________________________________________________________
let stop_input_id_JS = document.getElementById('stop_input_id_JS');

let new_input = document.createElement('input');
new_input.id = 'stop_input_text_id_JS';
new_input.type = "text";
stop_input_id_JS.append(new_input);

let new_br_1 = document.createElement('br');
stop_input_id_JS.append(new_br_1);

let new_label_1 = document.createElement('label');
new_label_1.textContent = 'Запрет ввода букв';
stop_input_id_JS.append(new_label_1);

    let new_input_1 = document.createElement('input');
    new_input_1.id = 'chec_rad_1_id_JS';
    new_input_1.name = 'rad_stop_input_2';
    new_input_1.type = "radio";
    new_input_1.checked = true;
    new_label_1.prepend(new_input_1);

let new_br_2 = document.createElement('br');
stop_input_id_JS.append(new_br_2);

let new_label_2 = document.createElement('label');
new_label_2.textContent = 'Запрет ввода цыфр';
stop_input_id_JS.append(new_label_2);

    let new_input_2 = document.createElement('input');
    new_input_2.id = 'chec_rad_2_id_JS';
    new_input_2.name = 'rad_stop_input_2';
    new_input_2.type="radio";
    new_label_2.prepend(new_input_2);

let new_br_3 = document.createElement('br');
stop_input_id_JS.append(new_br_3);

let new_label_3 = document.createElement('label');
new_label_3.textContent = 'Запрет ввода ", ? . { } [ ] \ | / : ; ! & ^ % # №"';
stop_input_id_JS.append(new_label_3);

    let new_input_3 = document.createElement('input');
    new_input_3.id = 'chec_rad_3_id_JS';
    new_input_3.name = 'rad_stop_input_2';
    new_input_3.type="radio";
    new_label_3.prepend(new_input_3);

let chec_rad_1_id_JS = document.getElementById('chec_rad_1_id_JS');
let chec_rad_2_id_JS = document.getElementById('chec_rad_2_id_JS');
let chec_rad_3_id_JS = document.getElementById('chec_rad_3_id_JS');

document.getElementById('stop_input_text_id_JS').addEventListener('keydown', function (e) {
    let keydown_str = e.code[0] + e.code[1] + e.code[2];
    if (chec_rad_1_id_JS.checked && keydown_str  == 'Key') {e.preventDefault()};
    if (chec_rad_2_id_JS.checked && !['0','1','2','3','4','5','6','7','8','9'].includes(e.key) == false) {e.preventDefault()};
    if (chec_rad_3_id_JS.checked && ![',','?','.','{','}','[',']',"\\",'|','/',':',';','!','&','^','%','#','№'].includes(e.key) == false) {e.preventDefault()};
});

//Стоп ввод (вёрстка в JQuery)______________________________________________________________

$('<input>')
    .attr('type','text')
    .attr('id', 'stop_input_text_id_JQ')
    .appendTo('#stop_input_id_JQ')

$('<br>')
    .appendTo('#stop_input_id_JQ')

$('<label id="label_JQ_1">')
    .text('Запрет ввода букв')
    .appendTo('#stop_input_id_JQ')

    $('<input>')
        .attr('id', 'chec_rad_1_id_JQ')
        .attr('name', 'rad_stop_input_3')
        .attr('type', 'radio')
        .attr('checked', 'true')
        .prependTo('#label_JQ_1')

$('<br>')
    .appendTo('#stop_input_id_JQ')

$('<label id="label_JQ_2">')
    .text('Запрет ввода цыфр')
    .appendTo('#stop_input_id_JQ')

    $('<input>')
        .attr('id', 'chec_rad_2_id_JQ')
        .attr('name', 'rad_stop_input_3')
        .attr('type', 'radio')
        .prependTo('#label_JQ_2')

$('<br>')
    .appendTo('#stop_input_id_JQ')

$('<label id="label_JQ_3">')
    .text('Запрет ввода ", ? . { } [ ] \ | / : ; ! & ^ % # №"')
    .appendTo('#stop_input_id_JQ')

    $('<input>')
        .attr('id', 'chec_rad_3_id_JQ')
        .attr('name', 'rad_stop_input_3')
        .attr('type', 'radio')
        .prependTo('#label_JQ_3')

let chec_rad_1_id_JQ = $('#chec_rad_1_id_JQ');
let chec_rad_2_id_JQ = $('#chec_rad_2_id_JQ');
let chec_rad_3_id_JQ = $('#chec_rad_3_id_JQ');
let keydown_check_ = $('#stop_input_text_id_JQ');

keydown_check_.on('keydown', (e) => {
    console.log(1);
    let keydown_str = e.code[0] + e.code[1] + e.code[2];
    console.log(keydown_str);
    if (chec_rad_1_id_JQ.is(':checked') && keydown_str == 'Key') { e.preventDefault() };
    if (chec_rad_2_id_JQ.is(':checked') && !['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key) == false) { e.preventDefault() };
    if (chec_rad_3_id_JQ.is(':checked') && ![',', '?', '.', '{', '}', '[', ']', "\\", '|', '/', ':', ';', '!', '&', '^', '%', '#', '№'].includes(e.key) == false) { e.preventDefault() };
})