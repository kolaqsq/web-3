let table = [];

for (let j = 0; j <= 10; j++) {
    let row = [];
    for (let i = 0; i <= 10; i++) {
        row[i] = i * j;
    }
    table[j] = row;
}

x = prompt("Введите x");
y = prompt("Введите y");

console.log(table);

if (x >= 0 && x < 11 && y >= 0 && y < 11) {
    console.log(table[x][y]);
} else {
    console.log("Данные введены некорректно")
}
