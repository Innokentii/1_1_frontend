"use strick"

document.addEventListener('keydown', (e)=>{
    console.log(e.key);
    if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)==true) {
        e.preventDefault();
    }
});

//Анимация (стандартная вёрстка)____________________
//Часы
let big_hand_of_the_clock = document.getElementById('big_hand_of_the_clock_id');
let small_hand_of_the_clock = document.getElementById('small_hand_of_the_clock_id');
let second_hand = document.getElementById('second_hand_id');

setInterval(() => passage_of_time_f(), 1000);

function passage_of_time_f() {
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let Minute = currentDate.getMinutes();
    let Second = currentDate.getSeconds();
    big_hand_of_the_clock.style.transform = `rotateZ(${-90 + hour*30}deg)`;
    small_hand_of_the_clock.style.transform = `rotateZ(${-90 + Minute*6}deg)`;
    second_hand.style.transform = `rotateZ(${-90 + Second*6}deg)`;
};

//Куб

    var rotateY = 0;
    var rotateX = 0;
    document.onkeydown = function (e) {
             if (e.keyCode === 37) rotateY -= 4
        else if (e.keyCode === 38) rotateX += 4
        else if (e.keyCode === 39) rotateY += 4
        else if (e.keyCode === 40) rotateX -= 4
        document.querySelector('.cube').style.transform = 
        'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)';
    }

//Анимация (вёрстка чисто на Java Script)____________________
let animation_JS = document.getElementById('animation_JS');

//Двери
let new_div_1 = document.createElement('div');
new_div_1.className = 'door_animation';
animation_JS.append(new_div_1);

    let new_h2_1 = document.createElement('h2');
    new_h2_1.textContent = 'Hello';
    new_div_1.append(new_h2_1);

    let new_img_1 = document.createElement('img');
    new_img_1.className = 'door_1';
    new_img_1.src = '/static/Door-1.bmp';
    new_img_1.alt = 'нет двери';
    new_div_1.append(new_img_1);

    let new_img_2 = document.createElement('img');
    new_img_2.className = 'door_2';
    new_img_2.src = '/static/Door-2.bmp';
    new_img_2.alt = 'нет двери';
    new_div_1.append(new_img_2);

    let new_span_1 = document.createElement('span');
    new_span_1.textContent = '(укажите на изображение)';
    new_div_1.append(new_span_1);

//Часы
let new_div_2 = document.createElement('div');
new_div_2.className = 'watch';
animation_JS.append(new_div_2);

    let new_div_3 = document.createElement('div');
    new_div_3.className = 'big_hand_of_the_clock';
    new_div_3.id = 'big_hand_of_the_clock_id_JS';
    new_div_2.append(new_div_3);

    let new_div_4 = document.createElement('div');
    new_div_4.className = 'small_hand_of_the_clock';
    new_div_4.id = 'small_hand_of_the_clock_id_JS';
    new_div_2.append(new_div_4);

    for (let n = 0; n < 12; n++) {
        let new_b = document.createElement('b');
        new_b.textContent = n + 1;
        new_div_2.append(new_b);
    }

    let new_div_5 = document.createElement('div');
    new_div_5.className = 'second_hand';
    new_div_5.id = 'second_hand_id_JS';
    new_div_2.append(new_div_5);

    let new_div_5_1 = document.createElement('div');
    new_div_5_1.className = 'clock_center';
    new_div_2.append(new_div_5_1);

let big_hand_of_the_clock_JS = document.getElementById('big_hand_of_the_clock_id_JS');
let small_hand_of_the_clock_JS = document.getElementById('small_hand_of_the_clock_id_JS');
let second_hand_JS = document.getElementById('second_hand_id_JS');

setInterval(() => passage_of_time_f_JS(), 1000);

function passage_of_time_f_JS() {
    let currentDate_JS = new Date();
    let hour_JS = currentDate_JS.getHours();
    let Minute_JS = currentDate_JS.getMinutes();
    let Second_JS = currentDate_JS.getSeconds();
    big_hand_of_the_clock_JS.style.transform = `rotateZ(${-90 + hour_JS * 30}deg)`;
    small_hand_of_the_clock_JS.style.transform = `rotateZ(${-90 + Minute_JS * 6}deg)`;
    second_hand_JS.style.transform = `rotateZ(${-90 + Second_JS * 6}deg)`;
};

//3D куб
let new_div_7 = document.createElement('div');
new_div_7.className = '_3_D_JS';
animation_JS.append(new_div_7);

    let new_div_8 = document.createElement('div');
    new_div_8.className = 'cube_JS';
    new_div_7.append(new_div_8);

        let new_div_9 = document.createElement('div');
        new_div_9.className = 'cube_front';
        new_div_9.textContent = 'фронт';
        new_div_8.append(new_div_9);

        let new_div_10 = document.createElement('div');
        new_div_10.className = 'cube_back';
        new_div_10.textContent = 'тыл';
        new_div_8.append(new_div_10);

        let new_div_11 = document.createElement('div');
        new_div_11.className = 'cube_right';
        new_div_11.textContent = 'правая';
        new_div_8.append(new_div_11);

        let new_div_12 = document.createElement('div');
        new_div_12.className = 'cube_left';
        new_div_12.textContent = 'левая';
        new_div_8.append(new_div_12);

        let new_div_13 = document.createElement('div');
        new_div_13.className = 'cube_top';
        new_div_13.textContent = 'вверхняя';
        new_div_8.append(new_div_13);

        let new_div_14 = document.createElement('div');
        new_div_14.className = 'cube_bottom';
        new_div_14.textContent = 'нижняя';
        new_div_8.append(new_div_14);

    let new_span_2 = document.createElement('span');
    new_span_2.textContent = '(куб можно вращать стрелками клавиатуры "вверх", "вниз", "влево", "вправо")';
    new_div_7.append(new_span_2);

var rotateY_JS = 0;
var rotateX_JS = 0;
document.addEventListener('keydown', function (x) {
    if (x.keyCode === 37) rotateY_JS -= 4
    else if (x.keyCode === 38) rotateX_JS += 4
    else if (x.keyCode === 39) rotateY_JS += 4
    else if (x.keyCode === 40) rotateX_JS -= 4
    document.querySelector('.cube_JS').style.transform =
        'rotateY(' + rotateY_JS + 'deg)' + 'rotateX(' + rotateX_JS + 'deg)';
})

//Анимация (вёрстка в JQuery)____________________
//Двери
$('<div id="new_div_1_JS">')
    .addClass('door_animation')
    .appendTo('#animation_JQ')

    $('<h2>')
        .text('Hello')
        .appendTo('#new_div_1_JS')

    $('<img>')
        .addClass('door_1')
        .attr('src', '/static/Door-1.bmp')
        .attr('alt', 'нет двери')
        .appendTo('#new_div_1_JS')

    $('<img>')
        .addClass('door_2')
        .attr('src', '/static/Door-2.bmp')
        .attr('alt', 'нет двери')
        .appendTo('#new_div_1_JS')

    $('<span>')
        .text('(укажите на изображение)')
        .appendTo('#new_div_1_JS')

//Часы
$('<div id="new_div_2_JS">')
    .addClass('watch')
    .appendTo('#animation_JQ')

    $('<div>')
        .addClass('big_hand_of_the_clock')
        .attr('id', 'big_hand_of_the_clock_id_JQ')
        .appendTo('#new_div_2_JS')

    $('<div>')
        .addClass('small_hand_of_the_clock')
        .attr('id', 'small_hand_of_the_clock_id_JQ')
        .appendTo('#new_div_2_JS')

    for (let n = 0; n < 12; n++) {
        $('<b>')
            .text(n+1)
            .appendTo('#new_div_2_JS')
    }

    $('<div>')
        .addClass('second_hand')
        .attr('id', 'second_hand_id_JQ')
        .appendTo('#new_div_2_JS')

    $('<div>')
        .addClass('clock_center')
        .appendTo('#new_div_2_JS')

let big_hand_of_the_clock_JQ = document.getElementById('big_hand_of_the_clock_id_JQ');
let small_hand_of_the_clock_JQ = document.getElementById('small_hand_of_the_clock_id_JQ');
let second_hand_JQ = document.getElementById('second_hand_id_JQ');

setInterval(() => passage_of_time_f_JQ(), 1000);

function passage_of_time_f_JQ() {
    let currentDate_JQ = new Date();
    let hour_JQ = currentDate_JQ.getHours();
    let Minute_JQ = currentDate_JQ.getMinutes();
    let Second_JQ = currentDate_JQ.getSeconds();
    big_hand_of_the_clock_JQ.style.transform = `rotateZ(${-90 + hour_JQ * 30}deg)`;
    small_hand_of_the_clock_JQ.style.transform = `rotateZ(${-90 + Minute_JQ * 6}deg)`;
    second_hand_JQ.style.transform = `rotateZ(${-90 + Second_JQ * 6}deg)`;
}

//3D куб
$('<div id="new_div_3_JS">')
    .addClass('_3_D')
    .appendTo('#animation_JQ')

    $('<div id="new_div_4_JS">')
        .addClass('cube_JQ')
        .appendTo('#new_div_3_JS')

        $('<div>')
            .addClass("cube_front")
            .text('фронт')
            .appendTo('#new_div_4_JS')

        $('<div>')
            .addClass("cube_back")
            .text('тыл')
            .appendTo('#new_div_4_JS')

        $('<div>')
            .addClass("cube_right")
            .text('правая')
            .appendTo('#new_div_4_JS')

        $('<div>')
            .addClass("cube_left")
            .text('левая')
            .appendTo('#new_div_4_JS')

        $('<div>')
            .addClass("cube_top")
            .text('вверхняя')
            .appendTo('#new_div_4_JS')

        $('<div>')
            .addClass("cube_bottom")
            .text('нижняя')
            .appendTo('#new_div_4_JS')

var rotateY_JQ = 0;
var rotateX_JQ = 0;
document.addEventListener('keydown', function (x) {
         if (x.keyCode === 37) rotateY_JQ -= 4
    else if (x.keyCode === 38) rotateX_JQ += 4
    else if (x.keyCode === 39) rotateY_JQ += 4
    else if (x.keyCode === 40) rotateX_JQ -= 4
    document.querySelector('.cube_JQ').style.transform =
        'rotateY(' + rotateY_JQ + 'deg)' + 'rotateX(' + rotateX_JQ + 'deg)';
})