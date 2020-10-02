let name = '';
let correct = false;

while (!correct) {
    name = prompt("Введите строку")
    if (name !== '' && name != null && name.includes(';')) {
        correct = true;
    }
}

let array = name.split(';');
console.log(array);
for (let i in array) {
    if (array[i] !== '')
        document.write(array[i].toString(), "<br \/>");
}
