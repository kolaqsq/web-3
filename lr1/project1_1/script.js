let inp = prompt('Сколько дней прошло?', '');

inp = 100 - inp;

if (inp < 0) {
    alert('Нельзя вводить числа больше 100');
} else if (inp % 10 === 1 && inp !== 11) {
    alert('Остался ' + inp + ' день');
} else if ((inp % 10 === 2 && inp !== 12) || (inp % 10 === 3 && inp !== 13)) {
    alert('Осталось ' + inp + ' дня');
} else {
    alert('Осталось ' + inp + ' дней');
}
