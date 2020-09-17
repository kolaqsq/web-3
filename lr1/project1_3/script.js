let name = ''
let check = false

while (!check) {
    name = prompt("Введите имя пользователя")
    if (name === '' || name === null) {
        continue
    }
    check = confirm("Введенные данные верны?\n" + name);
    if (check) {
        alert('Привет ' + name);
    }
}