"use strict"

//Свойства копирования (стандартная вёрстка)_________________________________________

function MyCopyText() {
    var target_text = window.getSelection(),
    add_text = '<br><br> Источник: ' + document.location.href,
    out_text = target_text + add_text,
    fake = document.createElement('div');
    fake.style.position = 'absolute';
    fake.style.left = '-99999px';
    document.body.appendChild(fake);
    fake.innerHTML = out_text;
    target_text.selectAllChildren(fake);
    window.setTimeout(function() {document.body.removeChild(fake);}, 100);
};

let copy_properties = document.getElementById('copy_properties');
copy_properties.addEventListener('copy', MyCopyText);

//Свойства копирования (вёрстка чисто на Java Script)_________________________________________

let Copy_properties_gen_JS = document.getElementById('Copy_properties_gen_JS');

let new_div_1 = document.createElement('div');
new_div_1.className = 'block_Copy_properties';
Copy_properties_gen_JS.append( new_div_1);

new_div_1.insertAdjacentHTML('beforeend', '<div oncopy="return false;">Этот текст нельзя скопировать (можете попробовать скопировать и вставить в любое приложение (excel, word и т.д))</div>');

let new_div_3 = document.createElement('div');
new_div_3.id = 'copy_properties_JS';
new_div_3.innerText = 'При копировании этого текста у и вставке его в любое приложение (excel, word и т.д) с скопированным текстом будет прилагатся ссылка на источник';
new_div_1.append(new_div_3);

function MyCopyText_JS() {
    var target_text = window.getSelection(),
    add_text = '<br><br> Источник: ' + document.location.href,
    out_text = target_text + add_text,
    fake = document.createElement('div');
    fake.style.position = 'absolute';
    fake.style.left = '-99999px';
    document.body.appendChild(fake);
    fake.innerHTML = out_text;
    target_text.selectAllChildren(fake);
    window.setTimeout(function() {document.body.removeChild(fake);}, 100);
};

let copy_properties_JS = document.getElementById('copy_properties_JS');
copy_properties_JS.addEventListener('copy', MyCopyText_JS);

//Свойства копирования (вёрстка в JQuery)_________________________________________

$('<div class="block_Copy_properties" id="div_JQ_1">')
    .appendTo('#Copy_properties_gen_JQ')

$('<div oncopy="return false;">')
    .text('Этот текст нельзя скопировать (можете попробовать скопировать и вставить в любое приложение (excel, word и т.д))')
    .appendTo('#div_JQ_1')

$('<div id="copy_properties_JQ">')
    .text('При копировании этого текста у и вставке его в любое приложение (excel, word и т.д) с скопированным текстом будет прилагатся ссылка на источник')
    .appendTo('#div_JQ_1')

function MyCopyText_JQ() {
    var target_text = window.getSelection(),
    add_text = '<br><br> Источник: ' + document.location.href,
    out_text = target_text + add_text,
    fake = document.createElement('div');
    fake.style.position = 'absolute';
    fake.style.left = '-99999px';
    document.body.appendChild(fake);
    fake.innerHTML = out_text;
    target_text.selectAllChildren(fake);
    window.setTimeout(function() {document.body.removeChild(fake);}, 100);
};

$('#copy_properties_JQ').on('copy', MyCopyText_JQ);