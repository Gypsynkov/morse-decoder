const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var arr = expr.match(/.{10}/g);
    var results = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        var resultArr = arr[i].replace(/^0+/gm, "")
        .replace(/10/gm, ".")
        .replace(/11/gm, "-");
        console.log(resultArr);
        if (arr[i] === "**********") {
            results.push(" ");
        } else {
            results.push(MORSE_TABLE[resultArr]);
            console.log(results);
        }
    }
    return results.join("");
}

module.exports = {
    decode
}
