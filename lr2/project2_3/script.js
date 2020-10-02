let arrayRu = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и",
    "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф",
    "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я",];

let arrayEn = ["a", "b", "v", "g", "d", "e", "yo", "zh", "z",
    "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t",
    "u", "f", "h", "cz", "ch", "sh", "shh", "``", "w", "`",
    "e`", "yu", "ya"];


name = prompt("Введите текст");

let arrayText = name.split('');
for (let i in arrayText) {
    let isUpperCase = false;

    if (arrayText[i] === arrayText[i].toUpperCase()) {
        isUpperCase = true;
    }
    arrayText[i] = arrayText[i].toLowerCase();

    if (arrayRu.includes(arrayText[i])) {
        arrayText[i] = arrayEn[arrayRu.indexOf(arrayText[i])]
        if (isUpperCase) {
            arrayText[i] = arrayText[i].toUpperCase();
        }
    }
}

console.log(arrayText.join(''));
