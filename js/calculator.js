function dataSizeCalculator() {
    let calc_block = document.getElementById('data-size-calculator');

    // Список единиц измерения
    let measures = [
        {text: 'бит', value: 1},
        {text: 'Кбит', value: 1024},
        {text: 'Мбит', value: 1048576},
        {text: 'Гбит', value: 1073741824},
        {text: 'Тбит', value: 1099511627776},
        {text: 'Байт', value: 8},
        {text: 'КБ', value: 8192},
        {text: 'МБ', value: 8388608},
        {text: 'ГБ', value: 8589934592},
        {text: 'ТБ', value: 8796093022208}
    ];

    // Значения по-умолчанию
    let defaults = {
        selectLeft: 'Мбит',
        selectRight: 'МБ',
        inputLeft: 80,
        inputRight: 10
    };

    calc_block.innerHTML = `
    <select name="sizeCalcSelectLeft"></select>
    <input type="number" name="sizeCalcInputLeft" value="` + defaults.inputLeft + `">
    =
    <input type="number" name="sizeCalcInputRight" value="` + defaults.inputRight + `">
    <select name="sizeCalcSelectRight"></select>
    `;

    let selectLeft = document.querySelector('#data-size-calculator select[name="sizeCalcSelectLeft"]');
    let selectRight = document.querySelector('#data-size-calculator select[name="sizeCalcSelectRight"]');
    let inputLeft = document.querySelector('#data-size-calculator input[name="sizeCalcInputLeft"]');
    let inputRight = document.querySelector('#data-size-calculator input[name="sizeCalcInputRight"]');

    // Добавление опций из списка
    measures.forEach(function (measure) {
        let option = document.createElement('option');
        option.value = measure.value;
        option.innerText = measure.text;

        let option_left = option;
        let option_right = option.cloneNode(true);

        if (measure.text === defaults.selectLeft) {
            option_left.setAttribute('selected', 'selected');
        } else if (measure.text === defaults.selectRight) {
            option_right.setAttribute('selected', 'selected');
        }

        selectLeft.appendChild(option_left);
        selectRight.appendChild(option_right);
    });

    // События, вызывающие пересчет
    let leftIndex = selectLeft.selectedIndex;
    let rightIndex = selectRight.selectedIndex;

    selectLeft.onchange = function () {
        checkDataSizeInputEquality(true);
        recalculateDataSizes(true);
        leftIndex = selectLeft.selectedIndex;
        rightIndex = selectRight.selectedIndex;
    };
    inputLeft.oninput = function () {
        recalculateDataSizes(true);
    };

    selectRight.onchange = function () {
        checkDataSizeInputEquality(false);
        recalculateDataSizes(false);
        leftIndex = selectLeft.selectedIndex;
        rightIndex = selectRight.selectedIndex;
    };
    inputRight.oninput = function () {
        recalculateDataSizes(false);
    };

    // Функция пересчета результатов
    function recalculateDataSizes(right = true) {
        if (right) {
            inputRight.value = parseInt(inputLeft.value, 10) * (selectLeft.value / selectRight.value);
        } else {
            inputLeft.value = parseInt(inputRight.value, 10) * (selectRight.value / selectLeft.value);
        }
    }

    // Проверка на одинаковые поля
    function checkDataSizeInputEquality(right = true) {
        if (selectLeft.value === selectRight.value) {
            if (right) {
                selectRight.selectedIndex = leftIndex;
            } else {
                selectLeft.selectedIndex = rightIndex;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    dataSizeCalculator();
});