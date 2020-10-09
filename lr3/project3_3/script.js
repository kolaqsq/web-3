function copyArr(inp_arr) {
    let out_arr = [];

    for (let i in inp_arr) {
        out_arr.push(inp_arr[i]);
    }

    return out_arr;
}

function cloneArr(inp_arr) {
    let out_arr = [];
    let check = false;

    if (Array.isArray(inp_arr)) {
        for (let i in inp_arr) {
            if (Array.isArray(inp_arr[i])) {
                check = true;
                break;
            }
        }

        if (check) {
            for (let i in inp_arr) {
                out_arr.push(cloneArr(inp_arr[i]));
            }
        } else {
            out_arr = copyArr(inp_arr);
        }
    } else {
        out_arr = inp_arr;
    }

    return out_arr;
}

let inp_arr = [[9, 8, 7, 6, [6, 5, 5, [4, 7, [0, 9]]], 5, 4, 3, 2, 1],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 6];
let clone_arr = [];

clone_arr = cloneArr(inp_arr);

console.log(inp_arr, clone_arr);

inp_arr[1][2]= 20000;
clone_arr[1][2] = 10000;

console.log(inp_arr, clone_arr);
