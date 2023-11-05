"use strict"

//Открытие сторонних сайтов (вёрстка чисто на Java Script)___________________________________
let new_iframe_1 = document.createElement('iframe');
new_iframe_1.src = 'https://www.youtube.com/embed/HJA92LQrsvw';
new_iframe_1.frameborder = '1';
new_iframe_1.width = '500px';
new_iframe_1.height = '350px';
document.getElementById('Ifarme_html_id_JS').append(new_iframe_1);

let new_iframe_2 = document.createElement('iframe');
new_iframe_2.src = 'https://ru.wikipedia.org/wiki/Iframe';
new_iframe_2.frameborder = '1';
new_iframe_2.width = '500px';
new_iframe_2.height = '350px';
document.getElementById('Ifarme_html_id_JS').append(new_iframe_2);

//Открытие сторонних сайтов (вёрстка в JQuery)___________________________________
$('<iframe>')
    .attr('src', 'https://www.youtube.com/embed/HJA92LQrsvw')
    .attr('frameborder', '1')
    .attr('width', '500px')
    .attr('height', '350px')
    .appendTo('#Ifarme_html_id_JQ')
$('<iframe>')
    .attr('src', 'https://ru.wikipedia.org/wiki/Iframe')
    .attr('frameborder', '1')
    .attr('width', '500px')
    .attr('height', '350px')
    .appendTo('#Ifarme_html_id_JQ')