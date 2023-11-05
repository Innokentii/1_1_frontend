"use state"
let _18_load_id = document.getElementById('_18_load_id');
_18_load_id.style.display = 'none';

//Конвертер валют (стандартная вёрстка)_____________________________________________________________
function convert() {
    _18_load_id.style.display = '';

    let convertible_int = document.getElementById('convertible_int').value;

    let convertible = document.getElementById('convertible').value;
    if (convertible == 'Тенге') {convertible = 'KZT'};
    if (convertible == 'Рубли') {convertible = 'RUB'};
    if (convertible == 'Доллары') {convertible = 'USD'};
    if (convertible == 'ЕВРО') {convertible = 'EUR'};

    let converted = document.getElementById('converted').value;
    if (converted == 'Тенге') {converted = 'KZT'};
    if (converted == 'Рубли') {converted = 'RUB'};
    if (converted == 'Доллары') {converted = 'USD'};
    if (converted == 'ЕВРО') {converted = 'EUR'};
    
    let converted_int = document.getElementById('converted_int');

    var myHeaders = new Headers();
    myHeaders.append("apikey", "OJsSxOQmq3HyLktC4J0DNm2YX5tmWAAA");
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    asyncFun(requestOptions, convertible_int, convertible, converted, converted_int);
    asyncFun_two(requestOptions, convertible_int, convertible, converted, converted_int);
};

async function asyncFun(requestOptions, convertible_int, convertible, converted, converted_int) {
    let Obj_API_result = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted}&from=${convertible}&amount=${convertible_int}`, requestOptions);
    let result = await Obj_API_result.json();
    console.log(result);
    converted_int.value = result['result']
};

async function asyncFun_two(requestOptions, convertible_int, convertible, converted, converted_int) {
    let Obj_API_result_two = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted}&from=${convertible}&amount=${convertible_int}`, requestOptions);
    let result_two = await Obj_API_result_two.json();
    _18_load_id.style.display = 'none';
    let KZT_1_str = document.getElementById('KZT_1_str');
    let KZT_2_int = document.getElementById('KZT_2_int');
    let KZT_2_str = document.getElementById('KZT_2_str');
    KZT_1_str.textContent = result_two['query']['from'];
    KZT_2_int.textContent = result_two['info']['quote'];
    KZT_2_str.textContent = result_two['query']['to']
}

//Конвертер валют (вёрстка чисто на Java Script)_____________________________________________________________

let Currency_converter_JS = document.getElementById('Currency_converter_JS');

let new_div_1 = document.createElement('div');
new_div_1.className = 'Currency_converter';
Currency_converter_JS.append(new_div_1);

let new_div_2 = document.createElement('div');
new_div_2.className = 'block_of_money';
new_div_1.append(new_div_2);

new_div_2.insertAdjacentHTML('beforeend', '<div><label><input type="text" id="convertible_int_JS"><select class="convertible" id="convertible_JS"><option>Тенге</option><option>Рубли</option><option>Доллары</option><option>ЕВРО</option></select></label></div>');
new_div_2.insertAdjacentHTML('beforeend', '<span> => </span>');
new_div_2.insertAdjacentHTML('beforeend', '<div><label><input type="text" readonly id="converted_int_JS"><select class="converted" id="converted_JS"><option>Тенге</option><option>Рубли</option><option>Доллары</option><option>ЕВРО</option></select></label></div>');

let new_div_3 = document.createElement('div');
new_div_1.append(new_div_3);

let new_buttom = document.createElement('button');
new_buttom.id = 'new_buttom_JS';
new_buttom.textContent = 'Конвертировать';
new_div_3.append(new_buttom);

new_div_3.insertAdjacentHTML('beforeend', '<b>1</b><span id="KZT_1_str_JS">KZT</span> = <b id="KZT_2_int_JS">1</b><span id="KZT_2_str_JS">KZT</span>');

new_buttom.addEventListener('click', _ => {
    _18_load_id.style.display = '';
    let convertible_int_JS = document.getElementById('convertible_int_JS').value;

    let convertible_JS = document.getElementById('convertible_JS').value;
    if (convertible_JS == 'Тенге') {convertible_JS = 'KZT'};
    if (convertible_JS == 'Рубли') {convertible_JS = 'RUB'};
    if (convertible_JS == 'Доллары') {convertible_JS = 'USD'};
    if (convertible_JS == 'ЕВРО') {convertible_JS = 'EUR'};

    let converted_JS = document.getElementById('converted_JS').value;
    if (converted_JS == 'Тенге') {converted_JS = 'KZT'};
    if (converted_JS == 'Рубли') {converted_JS = 'RUB'};
    if (converted_JS == 'Доллары') {converted_JS = 'USD'};
    if (converted_JS == 'ЕВРО') {converted_JS = 'EUR'};

    let converted_int_JS = document.getElementById('converted_int_JS');

    var myHeaders_JS = new Headers();
    myHeaders_JS.append("apikey", "OJsSxOQmq3HyLktC4J0DNm2YX5tmWAAA");
    
    var requestOptions_JS = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders_JS
    };

    asyncFun_JS(requestOptions_JS, convertible_int_JS, convertible_JS, converted_JS, converted_int_JS);
    asyncFun_two_JS(requestOptions_JS, convertible_int_JS, convertible_JS, converted_JS, converted_int_JS);
});

async function asyncFun_JS(requestOptions_JS, convertible_int_JS, convertible_JS, converted_JS, converted_int_JS) {
    let Obj_API_result_JS = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted_JS}&from=${convertible_JS}&amount=${convertible_int_JS}`, requestOptions_JS);
    let result_JS = await Obj_API_result_JS.json();
    console.log(result_JS);
    converted_int_JS.value = result_JS['result']
};

async function asyncFun_two_JS(requestOptions_JS, convertible_int_JS, convertible_JS, converted_JS, converted_int_JS) {
    let Obj_API_result_two_JS = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted_JS}&from=${convertible_JS}&amount=${convertible_int_JS}`, requestOptions_JS);
    let result_two_JS = await Obj_API_result_two_JS.json();
    _18_load_id.style.display = 'none';
    let KZT_1_str_JS = document.getElementById('KZT_1_str_JS');
    let KZT_2_int_JS = document.getElementById('KZT_2_int_JS');
    let KZT_2_str_JS = document.getElementById('KZT_2_str_JS');
    KZT_1_str_JS.textContent = result_two_JS['query']['from'];
    KZT_2_int_JS.textContent = result_two_JS['info']['quote'];
    KZT_2_str_JS.textContent = result_two_JS['query']['to']
};

//Конвертер валют (вёрстка в JQuery)_____________________________________________________________

$('<div id="div_1">')
    .addClass('Currency_converter')
    .appendTo('#Currency_converter_JQ')

$('<div id="div_2">')
    .addClass('block_of_money')
    .appendTo('#div_1')

$('<div id="div_4">')
    .appendTo('#div_2')

$('<label><input type="text" id="convertible_int_JQ"><select class="convertible" id="convertible_JQ"><option>Тенге</option><option>Рубли</option><option>Доллары</option><option>ЕВРО</option></select></label>')
    .appendTo('#div_4')

$('<span>')
    .text(' => ')
    .appendTo('#div_2')

$('<div id="div_5">')
    .appendTo('#div_2')

$('<label><input type="text" readonly id="converted_int_JQ"><select class="converted" id="converted_JQ"><option>Тенге</option><option>Рубли</option><option>Доллары</option><option>ЕВРО</option></select></label>')
    .appendTo('#div_5')

$('<div id="div_3">')
    .appendTo('#div_1')

$('<button id="new_button_JQ">')
    .text('Конвертировать')
    .appendTo('#div_3')

$('<b>1</b><span id="KZT_1_str_JQ">KZT</span> = <b id="KZT_2_int_JQ">1</b><span id="KZT_2_str_JQ">KZT</span>')
    .appendTo('#div_3')

$('#new_button_JQ').on('click', _ => {
    _18_load_id.style.display = '';
    let convertible_int_JQ = document.getElementById('convertible_int_JQ').value;

    let convertible_JQ = document.getElementById('convertible_JQ').value;
    if (convertible_JQ == 'Тенге') {convertible_JQ = 'KZT'};
    if (convertible_JQ == 'Рубли') {convertible_JQ = 'RUB'};
    if (convertible_JQ == 'Доллары') {convertible_JQ = 'USD'};
    if (convertible_JQ == 'ЕВРО') {convertible_JQ = 'EUR'};

    let converted_JQ = document.getElementById('converted_JQ').value;
    if (converted_JQ == 'Тенге') {converted_JQ = 'KZT'};
    if (converted_JQ == 'Рубли') {converted_JQ = 'RUB'};
    if (converted_JQ == 'Доллары') {converted_JQ = 'USD'};
    if (converted_JQ == 'ЕВРО') {converted_JQ = 'EUR'};

    let converted_int_JQ = document.getElementById('converted_int_JQ');

    var myHeaders_JQ = new Headers();
    myHeaders_JQ.append("apikey", "OJsSxOQmq3HyLktC4J0DNm2YX5tmWAAA");
    
    var requestOptions_JQ = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders_JQ
    };

    asyncFun_JQ(requestOptions_JQ, convertible_int_JQ, convertible_JQ, converted_JQ, converted_int_JQ);
    asyncFun_two_JQ(requestOptions_JQ, convertible_int_JQ, convertible_JQ, converted_JQ, converted_int_JQ);
});

async function asyncFun_JQ(requestOptions_JQ, convertible_int_JQ, convertible_JQ, converted_JQ, converted_int_JQ) {
    let Obj_API_result_JQ = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted_JQ}&from=${convertible_JQ}&amount=${convertible_int_JQ}`, requestOptions_JQ);
    let result_JQ = await Obj_API_result_JQ.json();
    console.log(result_JQ);
    converted_int_JQ.value = result_JQ['result']
};

async function asyncFun_two_JQ(requestOptions_JQ, convertible_int_JQ, convertible_JQ, converted_JQ, converted_int_JQ) {
    let Obj_API_result_two_JQ = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted_JQ}&from=${convertible_JQ}&amount=${convertible_int_JQ}`, requestOptions_JQ);
    let result_two_JQ = await Obj_API_result_two_JQ.json();
    _18_load_id.style.display = 'none';
    let KZT_1_str_JQ = document.getElementById('KZT_1_str_JQ');
    let KZT_2_int_JQ = document.getElementById('KZT_2_int_JQ');
    let KZT_2_str_JQ = document.getElementById('KZT_2_str_JQ');
    KZT_1_str_JQ.textContent = result_two_JQ['query']['from'];
    KZT_2_int_JQ.textContent = result_two_JQ['info']['quote'];
    KZT_2_str_JQ.textContent = result_two_JQ['query']['to']
};
