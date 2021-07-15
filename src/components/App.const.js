/** Компонент хранит переменныe*/

export const newsCategory = [
    { title: 'Сейчас в СМИ', active: true },
    { title: 'в Германии', active: false },
    { title: 'Рекомендуем', active: false }
];

export const newsItems = [
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'Путин упростил получение автомобильных номеров'
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'В команде Зеленского раскрыли план реформ на Украине'
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: '"Турпомощь" прокомментировала шибель десятков россиян в Анталье'
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'Суд закрыл дело Демпартии США против России'
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'На Украине призвали создать ракеты для удала по Москву'
    }
]

export const exchange = [
    { name: 'USD MOEX', value: '63,52', dif: '+0,09' },
    { name: 'EUR MOEX', value: '70,86', dif: '+0,14' },
    { name: 'НЕФТЬ', value: '64,90', dif: '+1,63%' },
];

export const advertising = {
    icon: "https://placeimg.com/70/70/tech",
    link: 'https://netology.ru/',
    title: 'Работа над ошибками',
    text: 'Смотрите на ЯндЫксе и запоминайте'
}

export const searchCategory = [
    { title: 'Видео', active: true },
    { title: 'Картинки', active: false },
    { title: 'Новости', active: false },
    { title: 'Карты', active: false },
    { title: 'Маркет', active: false },
    { title: 'Переводчик', active: false },
    { title: 'Эфир', active: false },
    { title: 'еще', active: false }
]

export const searchExamples = [
    'фаза луны сегодня',
    'самый тупой запрос',
    'что если я шаурма',
    'кого зовут как Андрея',
    'кот Никель и его друзья'
]

export const advertisingBanner = {
    icon: "https://placeimg.com/800/80/tech",
    link: 'https://netology.ru/',

}

export const favourite = [
    { title: 'Недвижимость', text: 'о сталинках' },
    { title: 'Маркет', text: 'люстры и светильники' },
    { title: 'Авто.ру', text: 'привод 4x4 до 500 000' },
];

export const tvProgramm = [
    { time: '02:00', name: 'ТНТ.Best', channel: 'ТНТ.International' },
    { time: '02:15', name: 'Джинглики', channel: 'Карусель INT' },
    { time: '02:25', name: 'Наедине со всеми', channel: 'Первый' },
];

export const onAir = [
    { name: 'Управление как искусство', channel: 'Успех' },
    { name: 'Ночь. Мир в это время', channel: 'earthTV' },
    { name: 'Андрей Возн...', channel: 'Совершенно секретно' },
]