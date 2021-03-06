## Описание
Очень простой калькулятор-конвертер объемов данных (биты, байты, килобайты и т.д.) на чистом JS.

### Инструкция по использованию.

1) Подключить js к странице, где должен отображаться калькулятор:

    Способ 1: Внутри тега ```<head></head>```.
    
    Способ 2: Перед закрывающим тегом ```<body></body>```.
    
    *на самом деле работать будет хоть куда подключи*

    *Оба варианта ниже будут работать, нужно только верно указать путь на скрипт в src*
    Скрипт:
    ```
    <script src="js/calculator.js" defer></script>
    ```
    
    Либо
    ```
    <script src="js/calculator.js"></script>
    ```
2) В документе, где нужно отобразить калькулятор, вставьте блок ```<div>```:

    ```
    <div id="data-size-calculator"></div>
   ```

3) Для редактирования внешнего вида калькулятора, нужно в css определить внешний вид для
    ```id="data-size-calculator"```:
    
    ```
    #data-size-calculator {}
    ```
    
    Дальше можно редактировать дочерние input и select
    
    ```
    #data-size-calculator input {}
    #data-size-calculator select {}
    ```
    
    или конкретные элементы
    
    ```
    #data-size-calculator :nth-child(1) {}
    #data-size-calculator :nth-child(2) {}
    #data-size-calculator :nth-child(3) {}
    #data-size-calculator :nth-child(4) {}
    ```
