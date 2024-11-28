/*

Roman numerals are represented by seven different symbols:
    I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

*/

function romanToInt(s: string): number {

    if(s.length === 0 ) return 0;

    interface Obj { 
        [key: string]: number;
    }

    const romanObject: Obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let num = 0;

    for (let i = 0; i < s.length; i++) { 
        // #1 add obj value
        // #2 check index of previous and next 

        if (romanObject[s[i]] < romanObject[s[i + 1]] && romanObject[s[i +1]]) {
            num += -(romanObject[s[i]])
        } else { 
            num += romanObject[s[i]]
        }
    }

    return num;
};

const inp = "MCMXCIV"
const res = romanToInt(inp);

console.log(res);
