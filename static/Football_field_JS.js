"use strict"

//Футбольное поле (стандартная вёрстка)__________________________________

let bool = document.getElementById('bool_id');
let capturing_the_ball = false;
let xy_ccordinate_bool = [0, 0];
bool.addEventListener('mousedown', (e) => {
    capturing_the_ball = true;
    bool.style.cursor = 'grabbing';
    xy_ccordinate_bool = [e.offsetX, e.offsetY];
});
bool.addEventListener('mouseup', _ => {
    capturing_the_ball = false;
    bool.style.cursor = 'grab';
});

let field = document.getElementById('field_id');

field.addEventListener('mousemove', (e) => {
    if (capturing_the_ball === true && e.clientX < (field.getBoundingClientRect().left + 1000 - (56 - xy_ccordinate_bool[0]))
    && e.clientY < (field.getBoundingClientRect().top + 690 - (56 - xy_ccordinate_bool[1])) && e.clientX > (field.getBoundingClientRect().left + xy_ccordinate_bool[0])
    && e.clientY > (field.getBoundingClientRect().top + xy_ccordinate_bool[1])) {  
        bool.style.top = `${e.pageY - xy_ccordinate_bool[1]}px`;
        bool.style.left = `${e.pageX - xy_ccordinate_bool[0]}px`;
    }
});

//Футбольное поле (вёрстка чисто на Java Script)__________________________________

let new_div_1 = document.createElement('div');
new_div_1.className = 'field';
document.getElementById('Football_field_JS').append(new_div_1);

let new_div_2 = document.createElement('div');
new_div_2.className = 'bool';
new_div_1.append(new_div_2);

let new_span = document.createElement('span');
new_span.className = 'Football_field';
new_span.textContent = 'Нажмите и удерживайте левую кнопку мыши для передвижения мяча';
document.getElementById('Football_field_JS').append(new_span);


let capturing_the_ball_JS = false;
let xy_ccordinate_bool_JS = [0, 0];
new_div_2.addEventListener('mousedown', (e) => {
    capturing_the_ball_JS = true;
    new_div_2.style.cursor = 'grabbing';
    xy_ccordinate_bool_JS = [e.offsetX, e.offsetY];
});
new_div_2.addEventListener('mouseup', _ => {
    capturing_the_ball_JS = false;
    new_div_2.style.cursor = 'grab';
});

new_div_1.addEventListener('mousemove', (e) => {
    if (capturing_the_ball_JS === true && e.clientX < (new_div_1.getBoundingClientRect().left + 1000 - (56 - xy_ccordinate_bool_JS[0]))
    && e.clientY < (new_div_1.getBoundingClientRect().top + 690 - (56 - xy_ccordinate_bool_JS[1])) && e.clientX > (new_div_1.getBoundingClientRect().left + xy_ccordinate_bool_JS[0])
    && e.clientY > (new_div_1.getBoundingClientRect().top + xy_ccordinate_bool_JS[1])) {  
        new_div_2.style.top = `${e.pageY - xy_ccordinate_bool_JS[1]}px`;
        new_div_2.style.left = `${e.pageX - xy_ccordinate_bool_JS[0]}px`;
    }
});

//Футбольное поле (вёрстка в JQuery)__________________________________
$('<div class="field">')
    .attr('id', 'field_id_JQ')
    .appendTo('#Football_field_JQ')

    $('<div class="bool">')
        .attr('id', 'bool_id_JS')
        .appendTo('#field_id_JQ')

$('<span class="Football_field">')
    .text('Нажмите и удерживайте левую кнопку мыши для передвижения мяча')
    .appendTo('#Football_field_JQ')

let capturing_the_ball_JQ = false;
let xy_ccordinate_bool_JQ = [0, 0];
$('#bool_id_JS').on('mousedown', (e) => {
    capturing_the_ball_JQ = true;
    $('#bool_id_JS').css('cursor','grabbing');
    xy_ccordinate_bool_JQ = [e.offsetX, e.offsetY];
});
$('#bool_id_JS').on('mouseup', _ => {
    capturing_the_ball_JQ = false;
    $('#bool_id_JS').css('cursor','grab');
});

$('#field_id_JQ').on('mousemove', (e) => {
    if (capturing_the_ball_JQ === true && e.clientX < ($('#field_id_JQ')[0].getBoundingClientRect().left + 1000 - (56 - xy_ccordinate_bool_JQ[0]))
    && e.clientY < ($('#field_id_JQ')[0].getBoundingClientRect().top + 690 - (56 - xy_ccordinate_bool_JQ[1])) && e.clientX > ($('#field_id_JQ')[0].getBoundingClientRect().left + xy_ccordinate_bool_JQ[0])
    && e.clientY > ($('#field_id_JQ')[0].getBoundingClientRect().top + xy_ccordinate_bool_JQ[1])) {  
        $('#bool_id_JS').css('top', `${e.pageY - xy_ccordinate_bool_JQ[1]}px`);
        $('#bool_id_JS').css('left', `${e.pageX - xy_ccordinate_bool_JQ[0]}px`);
    }
});