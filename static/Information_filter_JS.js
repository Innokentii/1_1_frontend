"use strict"

//Фильтр информации (стандартная вёрстка)_________________________________________________
let th_1_id = document.getElementById('th_1_id');
let th_2_id = document.getElementById('th_2_id');
let th_3_id = document.getElementById('th_3_id');
let th_4_id = document.getElementById('th_4_id');

th_1_id.addEventListener('click', _ => {
    let th_1 = Array.from(table_id.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    console.log(Array.from(table_id.rows))
    console.log(th_1)
    console.log(table_id.tBodies[0])
    table_id.tBodies[0].append(...th_1);
});

th_2_id.addEventListener('click', _ => {
    let th_2 = Array.from(table_id.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
    table_id.tBodies[0].append(...th_2);
});

th_3_id.addEventListener('click', _ => {
    let th_3 = Array.from(table_id.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
    table_id.tBodies[0].append(...th_3);
});

th_4_id.addEventListener('click', _ => {
    let th_4 = Array.from(table_id.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[3].innerHTML > rowB.cells[3].innerHTML ? 1 : -1);
    table_id.tBodies[0].append(...th_4);
});

//Фильтр информации (вёрстка чисто на Java Script)_________________________________________________
let Information_filter_id_JS = document.getElementById('Information_filter_id_JS');
Information_filter_id_JS.insertAdjacentHTML('beforeend', '<table id="table_id_JS"></table>');

let new_div = document.createElement('div');
new_div.innerText = 'Нажмите на заглавную строку текущего столбца для сортировки данных по значению';
new_div.className = 'span_IF';
Information_filter_id_JS.append(new_div);

const th_array_id = ['th_1_id_JS','th_2_id_JS','th_3_id_JS','th_4_id_JS'];

const th_array = ['№','ФИО','Год рож-дения','Город проживания'];
const td_array_1 = ['1','Иванов Иван Иванович','2001','Москва'];
const td_array_2 = ['2','Третьяков Антон Васильевич','1985','Алматы'];
const td_array_3 = ['3','Владислав Евгений Викторович','1995','Екатеринбург'];
const td_array_4 = ['4','Станислав Артур Григорьевич','2003','Нью-Йорк'];
const td_array_5 = ['5','Самойлов Александр Евгеньевич','1989','Якутск'];
const td_array_6 = ['6','Протопопов Антон Витальевич','1991','Нерюнгри'];
const td_array_7 = ['7','Станислав Артур Григорьевич','1975','Хабаровск'];

const array_td_th = [th_array, td_array_1, td_array_2, td_array_3, td_array_4, td_array_5, td_array_6, td_array_7]

let new_table = document.getElementById('table_id_JS');

for (let n = 0; n < 8; n++) {
    new_table.insertAdjacentHTML('beforeend' ,`<tr id="tr_id_${n + 1}"></tr>`);
    for (let x = 0; x < 4; x++) {
        let tr_id_ = document.getElementById(`tr_id_${n + 1}`);
        if (n == 0) {
            tr_id_.insertAdjacentHTML('beforeend' ,`<th id="${th_array_id[x]}">${array_td_th[n][x]}</th>`);
        }
        else {
            tr_id_.insertAdjacentHTML('beforeend' ,`<td>${array_td_th[n][x]}</td>`);
        }
    }
}

let th_1_id_JS = document.getElementById('th_1_id_JS');
let th_2_id_JS = document.getElementById('th_2_id_JS');
let th_3_id_JS = document.getElementById('th_3_id_JS');
let th_4_id_JS = document.getElementById('th_4_id_JS');

th_1_id_JS.addEventListener('click', _ => {
    let th_1 = Array.from(table_id_JS.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
        console.log(Array.from(table_id_JS.rows))
        console.log(th_1)
        console.log(table_id_JS.tBodies[0])
        table_id_JS.tBodies[0].append(...th_1);
});

th_2_id_JS.addEventListener('click', _ => {
    let th_2 = Array.from(table_id_JS.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
    table_id_JS.tBodies[0].append(...th_2);
});

th_3_id_JS.addEventListener('click', _ => {
    let th_3 = Array.from(table_id_JS.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
    table_id_JS.tBodies[0].append(...th_3);
});

th_4_id_JS.addEventListener('click', _ => {
    let th_4 = Array.from(table_id_JS.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[3].innerHTML > rowB.cells[3].innerHTML ? 1 : -1);
    table_id_JS.tBodies[0].append(...th_4);
});

//Фильтр информации (вёрстка в JQuery)_________________________________________________
const th_array_id_JQ = ['th_1_id_JQ','th_2_id_JQ','th_3_id_JQ','th_4_id_JQ'];

const th_array_JQ = ['№','ФИО','Год рож-дения','Город проживания'];
const td_array_1_JQ = ['1','Иванов Иван Иванович','2001','Москва'];
const td_array_2_JQ = ['2','Третьяков Антон Васильевич','1985','Алматы'];
const td_array_3_JQ = ['3','Владислав Евгений Викторович','1995','Екатеринбург'];
const td_array_4_JQ = ['4','Станислав Артур Григорьевич','2003','Нью-Йорк'];
const td_array_5_JQ = ['5','Самойлов Александр Евгеньевич','1989','Якутск'];
const td_array_6_JQ = ['6','Протопопов Антон Витальевич','1991','Нерюнгри'];
const td_array_7_JQ = ['7','Станислав Артур Григорьевич','1975','Хабаровск'];

const array_td_th_JQ = [th_array_JQ, td_array_1_JQ, td_array_2_JQ, td_array_3_JQ, td_array_4_JQ, td_array_5_JQ, td_array_6_JQ, td_array_7_JQ]

$('<table id="table_id_JQ">')
    .appendTo('#Information_filter_id_JQ')

    for (let n = 0; n < 8; n++) {
        $(`<tr id="tr_id_${n + 1}_JQ">`)
        .appendTo('#table_id_JQ')
        for (let x = 0; x < 4; x++) {
            if (n == 0) {
                $(`<th id="${th_array_id_JQ[x]}">${array_td_th_JQ[n][x]}</th>`)
                    .appendTo(`#tr_id_${n + 1}_JQ`)
            }
            else {
                $(`<td>${array_td_th_JQ[n][x]}</td>`)
                    .appendTo(`#tr_id_${n + 1}_JQ`)
            }
        }
    }

$('<div class="span_IF">')
    .text('Нажмите на заглавную строку текущего столбца для сортировки данных по значению')
    .appendTo('#Information_filter_id_JQ')

    let th_1_id_JQ = document.getElementById('th_1_id_JQ');
    let th_2_id_JQ = document.getElementById('th_2_id_JQ');
    let th_3_id_JQ = document.getElementById('th_3_id_JQ');
    let th_4_id_JQ = document.getElementById('th_4_id_JQ');

    
    th_1_id_JQ.addEventListener('click', _ => {
        let th_1 = Array.from(table_id_JQ.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
            console.log(Array.from(table_id_JQ.rows))
            console.log(th_1)
            console.log(table_id_JQ)
            table_id_JQ.append(...th_1);
    });
    
    th_2_id_JQ.addEventListener('click', _ => {
        let th_2 = Array.from(table_id_JQ.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
        table_id_JQ.append(...th_2);
    });
    
    th_3_id_JQ.addEventListener('click', _ => {
        let th_3 = Array.from(table_id_JQ.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
        table_id_JQ.append(...th_3);
    });
    
    th_4_id_JQ.addEventListener('click', _ => {
        let th_4 = Array.from(table_id_JQ.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[3].innerHTML > rowB.cells[3].innerHTML ? 1 : -1);
        table_id_JQ.append(...th_4);
    });

