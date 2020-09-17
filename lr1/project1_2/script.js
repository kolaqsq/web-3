let size = 9;

for (let i = 1; i <= size; i++) {
    let str = '';
    for (let j = 1; j <= size; j++) {
        str += i * j.toString() + ' ';
    }
    console.log(str);
}
