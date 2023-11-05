from flask import Flask, render_template, request, jsonify, Response

app = Flask(__name__)
@app.route('/')
@app.route('/frontend') # Главная страница
def frontend():
    return render_template('frontend.html')

@app.route('/1_Counter_html') # Счетчик
def Counter_html():
    return render_template('1_Counter_html.html')

@app.route('/2_Traffic_lights') # Светофор
def Traffic_lights():
    return render_template('2_Traffic_lights.html')

@app.route('/3_Calculator') # Калькулятор
def Calculator():
    return render_template('3_Calculator.html')

@app.route('/4_loading') # Загрузка
def loading():
    return render_template('4_loading.html')

@app.route('/5_Modal_window') # Модальное окно
def Modal_window():
    return render_template('5_Modal_window.html')

@app.route('/6_Screen_standardization') # Стандартицация экрана для гаджетов
def Screen_standardization():
    return render_template('6_Screen_standardization.html')

@app.route('/7_Mouse_coordinates') # Координаты мышки. Нажатие мышки, клавиатуры
def Mouse_coordinates():
    return render_template('7_Mouse_coordinates.html')

@app.route('/8_Hover_click') # hover, click (анимации). Плавное изменение цвета при событии. Изменение цвета рамки
def Hover_click():
    return render_template('8_Hover_click.html')

@app.route('/9_Animation') # Анимация часов, двери, вращающегося куба.
def Animation():
    return render_template('9_Animation.html')

@app.route('/10_Information_editor') # Редактор содержания информации.
def Information_editor():
    return render_template('10_Information_editor.html')

@app.route('/11_Information_filter') # Фильтр информации по значению
def Information_filter():
    return render_template('11_Information_filter.html')

@app.route('/12_Stop_input') # Stop ввод определенных символов
def Stop_input():
    return render_template('12_Stop_input.html')

@app.route('/13_Line_selection') # Выбор строки с анимацией (с комбинацией клавиш)
def Line_selection():
    return render_template('13_Line_selection.html')

@app.route('/14_Pop-up_menu') # Сплывающий меню
def Pop_up_menu():
    return render_template('14_Pop-up_menu.html')

@app.route('/15_Football_field') # футбольное поле
def Football_field():
    return render_template('15_Football_field.html')

@app.route('/16_Opening_another_site') # Открытие других сайтов (ютуб, форум)
def Opening_another_site():
    return render_template('16_Opening_another_site.html')

@app.route('/17_Image_magnification') # Выбор изображения и увеличение изображения (Лупа)
def Image_magnification():
    return render_template('17_Image_magnification.html')

@app.route('/18_Currency_converter') # Конвертер валют - API
def Currency_converter():
    return render_template('18_Currency_converter.html')

@app.route('/19_Copy_properties') # Ссылка на источник, запрет копирования текста
def Copy_properties():
    return render_template('19_Copy_properties.html')

def create_app():
    # Функция запуска;
    return app