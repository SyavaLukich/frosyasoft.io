'use strict';

/* Что показываем на каждом «круглом» нажатии.
   Ключи больше не повторяются — все фразы достижимы. */
const MESSAGES = {
    10:  'Десять! Ты в деле 💪',
    25:  'Двадцать пять — серьёзный подход!',
    50:  'Полтинник! 🎉',
    100: 'В туманной тишине ночной',
    150: 'Вспоминаю свои дни беззаботные',
    200: 'Ночь',
    300: 'Спроси у тракториста',
};

const cube = document.getElementById('cube');
const title = document.getElementById('title');
const counter = document.getElementById('counter');

let clicks = 0;

cube.addEventListener('click', () => {
    clicks += 1;
    counter.textContent = 'Нажатий: ' + clicks;

    /* Пружинка на кубе: класс снимаем и вешаем заново, чтобы анимация
       перезапускалась даже при быстрых нажатиях */
    cube.classList.remove('pop');
    void cube.offsetWidth;
    cube.classList.add('pop');

    /* Если число есть в списке — меняем заголовок */
    const message = MESSAGES[clicks];
    if (!message) return;

    title.textContent = message;
    title.classList.add('flash');
});

/* Классы снимаем по окончании анимации, иначе она не запустится второй раз */
cube.addEventListener('animationend', () => cube.classList.remove('pop'));
title.addEventListener('animationend', () => title.classList.remove('flash'));
