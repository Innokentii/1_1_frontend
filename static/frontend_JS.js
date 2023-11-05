"use strict"

//_____Генерация кнопок_____
let array_hreft = ['/1_Counter_html', '/2_Traffic_lights', '/3_Calculator', '/4_loading', '/5_Modal_window', '/6_Screen_standardization',
                '/7_Mouse_coordinates', '/8_Hover_click', '/9_Animation', '/10_Information_editor', '/11_Information_filter',
                '/12_Stop_input', '/13_Line_selection', '/14_Pop-up_menu', '/15_Football_field', '/16_Opening_another_site',
                '/17_Image_magnification', '/18_Currency_converter', '/19_Copy_properties'
                ];
 // Массив для данных вызова страницы сайта
let array_text = ['Счетчик', 'Светофор', 'Калькулятор', 'Загрузка', 'Модальное окно', 'Стандартицация экрана для гаджетов',
                'Координаты мышки. Нажатие мышки, клавиатуры', 'hover, click (анимации). Плавное изменение цвета при событии. Изменение цвета рамки',
                'Анимация часов, двери, вращающегося куба', 'Редактор содержания информации', 'Фильтр информации по значению',
                'Stop ввод определенных символов', 'Выбор строки с анимацией (с комбинацией клавиш)', 'Сплывающий меню', 'футбольное поле', 
                'Открытие других сайтов (ютуб, форум)', 'Выбор изображения и увеличение изображения (Лупа)', 'Конвертер валют - API',
                'Ссылка на источник, запрет копирования текста'
                ];
let array_bottom = array_hreft.length; // Количество кнопок
let footer_id = document.getElementById('footer_id'); //
for (let n = 0; n < array_bottom; n++) {
    let new_a = document.createElement('a'); //
    new_a.href = array_hreft[n];  //
    footer_id.append(new_a); //
    let new_div = document.createElement('div'); //
    new_div.textContent = (n+1) + '_' + array_text[n]; //
    new_a.append(new_div); //
};

//________________________________________________________

let new_body = document.querySelector('.new_body');
setInterval(_ => {
    let w_footer = footer_id.offsetWidth;
    let w_win;
    w_win = window.innerWidth;
    new_body.style.width = `${w_win - w_footer}px`;
}, 20);