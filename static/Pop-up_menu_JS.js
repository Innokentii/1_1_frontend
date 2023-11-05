"use strict"

//Сплывающее меню (стандартная вёрстка)__________________________________
//Меню_1
let products_two = document.querySelector('.products_two');
products_two.style.display = 'none';

let products_menu_button = document.querySelector('.products_menu > button');
products_menu_button.addEventListener('click', _ => {
    if (products_two.style.display == 'none') {products_two.style.display = ''}
    else {products_two.style.display = 'none'}
});

let mp_1 = document.querySelector('.products_two > div:nth-child(1)');
mp_1.addEventListener('click', _ => {
    products_two.style.display = 'none';
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(/static/A_1.jpg)`;
        document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Автомобиль №${n + 1}`;
    };
});

let mp_2 = document.querySelector('.products_two > div:nth-child(2)');
mp_2.addEventListener('click', _ => {
    products_two.style.display = 'none';
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(/static/A_2.jpg)`;
        document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Мотоцикл №${n + 1}`;
    };
});

let mp_3 = document.querySelector('.products_two > div:nth-child(3)');
mp_3.addEventListener('click', _ => {
    products_two.style.display = 'none';
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(/static/A_3.jpg)`;
        document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Грузовик №${n + 1}`;
    };
});

let mp_4 = document.querySelector('.products_two > div:nth-child(4)');
mp_4.addEventListener('click', _ => {
    products_two.style.display = 'none';
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(/static/A_4.jpg)`;
        document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Эсковатор №${n + 1}`;
    };
});

let mp_5 = document.querySelector('.products_two > div:nth-child(5)');
mp_5.addEventListener('click', _ => {
    products_two.style.display = 'none';
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(/static/A-5.jpg)`;
        document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Верталет №${n + 1}`;
    };
});
let mp_6 = document.querySelector('.products_two > div:nth-child(6)');
mp_6.addEventListener('click', _ => {
    products_two.style.display = 'none';
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(/static/A-6.jpg)`;
        document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Катер №${n + 1}`;
    };
});

//Меню_2
let products_three = document.querySelector('.products_three');
products_three.style.width = '54px';

let mp_1_2 = document.querySelector('.mp_1_2');
mp_1_2.nextElementSibling.firstElementChild.textContent = '';
let mp_2_2 = document.querySelector('.mp_2_2');
mp_2_2.nextElementSibling.firstElementChild.textContent = '';
let mp_3_2 = document.querySelector('.mp_3_2');
mp_3_2.nextElementSibling.firstElementChild.textContent = '';
let mp_4_2 = document.querySelector('.mp_4_2');
mp_4_2.nextElementSibling.firstElementChild.textContent = '';
let mp_5_2 = document.querySelector('.mp_5_2');
mp_5_2.nextElementSibling.firstElementChild.textContent = '';
let mp_6_2 = document.querySelector('.mp_6_2');
mp_6_2.nextElementSibling.firstElementChild.textContent = '';

products_three.addEventListener('mouseover', _ => {
    products_three.style.width = '';
    mp_1_2.nextElementSibling.firstElementChild.textContent = ' - Автомобили';
    mp_2_2.nextElementSibling.firstElementChild.textContent = ' - Мотоцыклы';
    mp_3_2.nextElementSibling.firstElementChild.textContent = ' - Грузовики';
    mp_4_2.nextElementSibling.firstElementChild.textContent = ' - Эсковаторы';
    mp_5_2.nextElementSibling.firstElementChild.textContent = ' - Верталеты';
    mp_6_2.nextElementSibling.firstElementChild.textContent = ' - Катера';
});

products_three.addEventListener('mouseout', _ => {
    products_three.style.width = '54px';
    mp_1_2.nextElementSibling.firstElementChild.textContent = '';
    mp_2_2.nextElementSibling.firstElementChild.textContent = '';
    mp_3_2.nextElementSibling.firstElementChild.textContent = '';
    mp_4_2.nextElementSibling.firstElementChild.textContent = '';
    mp_5_2.nextElementSibling.firstElementChild.textContent = '';
    mp_6_2.nextElementSibling.firstElementChild.textContent = '';
});

let mp_1_3 = document.querySelector('.products_three > div:nth-child(1)');
mp_1_3.addEventListener('click', _ => {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(/static/A_1.jpg)`;
        document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Автомобиль №${n + 1}`;
    };
});
let mp_2_3 = document.querySelector('.products_three > div:nth-child(2)');
mp_2_3.addEventListener('click', _ => {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(/static/A_2.jpg)`;
        document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Мотоцикл №${n + 1}`;
    };
});
let mp_3_3 = document.querySelector('.products_three > div:nth-child(3)');
mp_3_3.addEventListener('click', _ => {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(/static/A_3.jpg)`;
        document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Грузовик №${n + 1}`;
    };
});
let mp_4_3 = document.querySelector('.products_three > div:nth-child(4)');
mp_4_3.addEventListener('click', _ => {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(/static/A_4.jpg)`;
        document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Эсковатор №${n + 1}`;
    };
});
let mp_5_3 = document.querySelector('.products_three > div:nth-child(5)');
mp_5_3.addEventListener('click', _ => {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(/static/A-5.jpg)`;
        document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Вертолет №${n + 1}`;
    };
});
let mp_6_3 = document.querySelector('.products_three > div:nth-child(6)');
mp_6_3.addEventListener('click', _ => {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(/static/A-6.jpg)`;
        document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Катер №${n + 1}`;
    };
});

//Меню_3
let mp_1_a = document.querySelector('.mp_1_a');
mp_1_a.nextElementSibling.firstElementChild.textContent = ' - Автомобили';
mp_1_a.parentElement.style.width = '140px';
mp_1_a.parentElement.style.borderBottom = 'none';
mp_1_a.parentElement.style.height = '32px';

const products_before = [' - Авт...',' - Мот...',' - Гру...',' - Эск...',' - Вер...',' - Кат...']
const products_after = [' - Автомобили',' -Мотоцыклы',' - Грузовики',' - Эсковаторы',' - Верталеты',' - Катера']

let y = 0;
let x = '';

mp_1_a.parentElement.addEventListener('mousedown', _ => {
    product_search_f();
    mp_1_a.parentElement.style.width = '140px';
    mp_1_a.parentElement.style.borderBottom = 'none';
    mp_1_a.parentElement.style.height = '32px';
    mp_1_a.nextElementSibling.firstElementChild.textContent = products_after[0];
    y = 'url(/static/A_1.jpg)';
    x = 'Автомобиль №';
    product_search_two_f(y, x)
});


let mp_2_a = document.querySelector('.mp_2_a');
mp_2_a.parentElement.addEventListener('mousedown', _ => {
    product_search_f();
    mp_2_a.parentElement.style.width = '140px';
    mp_2_a.parentElement.style.borderBottom = 'none';
    mp_2_a.parentElement.style.height = '32px';
    mp_2_a.nextElementSibling.firstElementChild.textContent = products_after[1];
    y = 'url(/static/A_2.jpg)';
    x = 'Мотоцикл №';
    product_search_two_f()
});

let mp_3_a = document.querySelector('.mp_3_a');
mp_3_a.parentElement.addEventListener('mousedown', _ => {
    product_search_f();
    mp_3_a.parentElement.style.width = '140px';
    mp_3_a.parentElement.style.borderBottom = 'none';
    mp_3_a.parentElement.style.height = '32px';
    mp_3_a.nextElementSibling.firstElementChild.textContent = products_after[2];
    y = 'url(/static/A_3.jpg)';
    x = 'Грузовик №';
    product_search_two_f(y, x)
});

let mp_4_a = document.querySelector('.mp_4_a');
mp_4_a.parentElement.addEventListener('mousedown', _ => {
    product_search_f();
    mp_4_a.parentElement.style.width = '140px';
    mp_4_a.parentElement.style.borderBottom = 'none';
    mp_4_a.parentElement.style.height = '32px';
    mp_4_a.nextElementSibling.firstElementChild.textContent = products_after[3];
    y = 'url(/static/A_4.jpg)';
    x = 'Эсковатор №';
    product_search_two_f(y, x)
});

let mp_5_a = document.querySelector('.mp_5_a');
mp_5_a.parentElement.addEventListener('mousedown', _ => {
    product_search_f();
    mp_5_a.parentElement.style.width = '140px';
    mp_5_a.parentElement.style.borderBottom = 'none';
    mp_5_a.parentElement.style.height = '32px';
    mp_5_a.nextElementSibling.firstElementChild.textContent = products_after[4];
    y = 'url(/static/A-5.jpg)';
    x = 'Верталет №';
    product_search_two_f(y, x)
});

let mp_6_a = document.querySelector('.mp_6_a');
mp_6_a.parentElement.addEventListener('mousedown', _ => {
    product_search_f();
    mp_6_a.parentElement.style.width = '140px';
    mp_6_a.parentElement.style.borderBottom = 'none';
    mp_6_a.parentElement.style.height = '32px';
    mp_6_a.nextElementSibling.firstElementChild.textContent = products_after[5];
    y = 'url(/static/A-6.jpg)';
    x = 'Катер №';
    product_search_two_f(y, x)
});

function product_search_f() {
    for (let n = 0; n < 6; n++) {
        document.querySelector(`.mp_${n + 1}_a`).parentElement.style.width = '90px';
        document.querySelector(`.mp_${n + 1}_a`).parentElement.style.borderBottom = '';
        document.querySelector(`.mp_${n + 1}_a`).parentElement.style.height = '30px';
        document.querySelector(`.mp_${n + 1}_a`).nextElementSibling.firstElementChild.textContent = products_before[n];
    }
}

function product_search_two_f() {
    for (let n = 0; n < 9; n++) {
        document.querySelector(`.p_${n + 1}_a`).style.backgroundImage = y;
        document.querySelector(`.p_${n + 1}_a`).nextElementSibling.textContent = `${x}${n}`;
    }
}

//Menu 4

let left_button_PUM_id = document.getElementById('left_button_PUM_id');
let right_button_PUM_id = document.getElementById('right_button_PUM_id');

let mp_1_b = document.querySelector('.mp_1_b');
let mp_2_b = document.querySelector('.mp_2_b');
let mp_3_b = document.querySelector('.mp_3_b');
let mp_4_b = document.querySelector('.mp_4_b');
let mp_5_b = document.querySelector('.mp_5_b');
let mp_6_b = document.querySelector('.mp_6_b');

let array_rotateY = [0,60,120,180,240,300];

right_button_PUM_id.addEventListener('click', _ => {
    array_rotateY[0] += 60;
    array_rotateY[1] += 60;
    array_rotateY[2] += 60;
    array_rotateY[3] += 60;
    array_rotateY[4] += 60;
    array_rotateY[5] += 60;
    if (array_rotateY[0] == 360) {
        array_rotateY[0] = 0;
        array_rotateY[1] = 60;
        array_rotateY[2] = 120;
        array_rotateY[3] = 180;
        array_rotateY[4] = 240;
        array_rotateY[5] = 300;
    }
    array_rotate_f();
    products_rotate_f();
});

left_button_PUM_id.addEventListener('click', _ => {
    array_rotateY[0] -= 60;
    array_rotateY[1] -= 60;
    array_rotateY[2] -= 60;
    array_rotateY[3] -= 60;
    array_rotateY[4] -= 60;
    array_rotateY[5] -= 60;
    if (array_rotateY[0] == -360) {
        array_rotateY[0] = 0;
        array_rotateY[1] = 60;
        array_rotateY[2] = 120;
        array_rotateY[3] = 180;
        array_rotateY[4] = 240;
        array_rotateY[5] = 300;
    }
    array_rotate_f();
    products_rotate_f();
});

function array_rotate_f() {
    mp_1_b.parentElement.style.transform = `rotateY(${array_rotateY[0]}deg) translateZ(250px) translateY(20px)`;
    mp_2_b.parentElement.style.transform = `rotateY(${array_rotateY[1]}deg) translateZ(250px) translateY(20px)`;
    mp_3_b.parentElement.style.transform = `rotateY(${array_rotateY[2]}deg) translateZ(250px) translateY(20px)`;
    mp_4_b.parentElement.style.transform = `rotateY(${array_rotateY[3]}deg) translateZ(250px) translateY(20px)`;
    mp_5_b.parentElement.style.transform = `rotateY(${array_rotateY[4]}deg) translateZ(250px) translateY(20px)`;
    mp_6_b.parentElement.style.transform = `rotateY(${array_rotateY[5]}deg) translateZ(250px) translateY(20px)`;
}

function products_rotate_f() {
    let xy = [0, ''];
    if (mp_1_b.parentElement.style.transform == 'rotateY(360deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform == 'rotateY(-360deg) translateZ(250px) translateY(20px)') {xy[0] = 0; xy[1] = 'url(/static/A-1.jpg)'};
    if (mp_1_b.parentElement.style.transform == 'rotateY(60deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform == 'rotateY(-300deg) translateZ(250px) translateY(20px)') {xy[0] = 5; xy[1] = 'url(/static/A-6.jpg)'};
    if (mp_1_b.parentElement.style.transform == 'rotateY(120deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform == 'rotateY(-240deg) translateZ(250px) translateY(20px)') {xy[0] = 4; xy[1] = 'url(/static/A-5.jpg)'};
    if (mp_1_b.parentElement.style.transform == 'rotateY(180deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform == 'rotateY(-180deg) translateZ(250px) translateY(20px)') {xy[0] = 3; xy[1] = 'url(/static/A_4.jpg)'};
    if (mp_1_b.parentElement.style.transform == 'rotateY(240deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform == 'rotateY(-120deg) translateZ(250px) translateY(20px)') {xy[0] = 3; xy[1] = 'url(/static/A_3.jpg)'};
    if (mp_1_b.parentElement.style.transform == 'rotateY(300deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform == 'rotateY(-60deg) translateZ(250px) translateY(20px)') {xy[0] = 1; xy[1] = 'url(/static/A_2.jpg)'};
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.p_${i + 1}_b`).style.backgroundImage = xy[1];
        document.querySelector(`.p_${i + 1}_b`).nextElementSibling.textContent = products_after[xy[0]] +' №' + (i + 1);
    }
}