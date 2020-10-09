function decSort(a, b) {
    return (b - a);
}

let arr = [0, -11, 11, 1, 12, 2, 0.1, 1.1, 22, 3, 100];

arr.sort(decSort);

console.log(arr);
