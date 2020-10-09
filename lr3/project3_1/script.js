let symbols = [' ', '\'','"',':',';','<','>','.',',','!','?','–','«','»'];

function isPalindrome(str) {
    let line = '';

    for (let i=0; i < str.length; i++){
        let check = true;

        for (let g in symbols){
            if (str[i] === symbols[g]){
                check = false;
            }
        }

        if(check){
            line += str[i].toLowerCase();
        }
    }

    for (let i = 0; i < Math.floor(line.length/2); i++) {
        if (line[i] !== line[line.length-1-i]){
            return "Данная фраза не является палиндромом";
        }
        return "Данная фраза является палиндромом";
    }
}

text = prompt("Введите фразу");

alert(isPalindrome(text));
