# `cabinetApp` — Тестовое задание на должность Frontend-разработчик

Приложение выводит таблицу с данными из личного кабинета пользователя. Приложение получает данные с API. 
Кроме этого, в шапке выводится информация о текущем пользователе. В проекте использовалась библиотека 
Angular Material.


## Запуск приложения

Чтобы собрать и запустить приложение нужно установить менеджер задач Gulp. Запуск локального сервера
не установлен.



## Структура приложения

```
src/            --> корневая папка
  API               --> здесь лежит API
  img               --> папка с изображениями
  js/               --> здесь собраны контроллеры, директории, константы
    _controllers/           --> папка содержит контроллеры
      journalsCtrl.js         --> контроллер отвечающий за вывод информации по странице Журналы
      menuCtrl.js             --> контроллер отвечающий за вывод меню
      sideCtrl.js             --> работа шапки сайта
      userDataCtrl.js         --> вывод информации о пользователе
    _directories/           --> папка содержит директории
      hideonloading.js        --> плавная загрузка таблицы
    _factories              --> папка содержит фабрики
    constants.js         --> хранилище данных приложения защищенных от изменений
  sass/             --> папка содержит стили
    base/            --> папка с обязательными стилями и миксинами
        _base.scss              --> аналог normalize.css
        _mixins.scss            --> миксины, почти не использовались
        _typo.scss              --> типографика
    layout/          --> папка со стилями страниц
        _journals.scss          --> стили страницы Журналы
        _media.scss             --> медиа запросы
        _style.scss             --> стили для всего приложения
     vendor          --> папка для стилий сторонних библиотек
        _vendor.scss            --> стили для сторонних библиотек
     style.scss      --> корневой файл стилей   
  templates/        --> шаблоны страниц
    account.jade      --> страница Личный Счет
    appeal.jade       --> страница Обращения
    counters.jade     --> страница Счетчики
    journals.jade     --> страница Журналы (корневая)
  app.js         --> корневой JavaScript файл приложения
  index.jade     --> корневой HTML(Jade) файл приложения

```

## Контакты

Для связи почта [egor.record@yandex.ru][mail], Егор Сяськов. 


[mail]: https://egor.record@yandex.ru

