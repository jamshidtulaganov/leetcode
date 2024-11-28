/* 

Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000


Roman numerals are formed by appending the conversions of decimal place values from highest to lowest.
Converting a decimal place value into a Roman numeral has the following rules:


If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input,
append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.


If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol,
for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. 
Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).


Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10.
You cannot append 5 (V), 50 (L), or 500 (D) multiple times.
If you need to append a symbol 4 times use the subtractive form.


Input: num = 3749 = 3 * 1000 + 4 * 100 + 4*10 + 5;
                    MMM +  

Output: "MMMDCCXLIX"

Explanation:

    3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
    700 = DCC as 500 (D) + 100 (C) + 100 (C)
    40 = XL as 10 (X) less of 50 (L)
    9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

*/


function intToRoman(num: number): string {
    if (num >= 4000) { 
        return "No undefined";
    }

    interface IFloatNumbers { 
        [key: string]: number;
    }

    /*
        floatNumbers = {
            "1000": 3,
            "100": 7,
            "10": 5,
            "1": 12
        }
    */
    
    let divider = 1000;

    const floatNumbers = new Map();
    const romanObject: IFloatNumbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    while (num > 0) {
        
        if (num / divider > 0) { 
            floatNumbers.set(divider, Math.floor(num / divider));
            num = num % divider;
        }

        divider /= 10;
    }


    let romanStr = "";

    for (const row of floatNumbers) {
        // check 1000
            if (row[0] === 1000 && row[1] > 0) {
                
                if (row[1] === 1) {
                    romanStr += "M"
                } else if (row[1] === 2) {
                    romanStr += "MM"
                } else {
                    romanStr += "MMM"
                }
            }
        

        // check 100
            if (row[0] === 100) {

                if (row[1] === 4 || row[1] === 9) {
                    romanStr += subtractStr("C", "D", "M", row[1]);
                } else { 
                    romanStr += appendStr(row[1], "C", "D")
                }
            }
        
        
       // check 10
            if (row[0] === 10) {

                if (row[1] === 4 || row[1] === 9) {
                    romanStr += subtractStr("X", "L", "C", row[1]);
                } else { 
                    romanStr += appendStr(row[1], "X", "L")
                }
            }
        
        // check 1
            if (row[0] === 1) {

                if (row[1] === 4 || row[1] === 9) {
                    romanStr += subtractStr("I", "V", "X", row[1]);
                } else { 
                    romanStr += appendStr(row[1], "I", "V")
                }
            }
    }

    function subtractStr(mainStr: string, small: string, large: string, num: number): string { 
        if (num === 4) {
            return mainStr + small
        } else { 
            return mainStr + large
        }
    }

    function appendStr(num: number, firstStr: string, secondStr: string): string { 
        if (num === 5) {
            return secondStr
        } else if (num < 5) {
            let sum = "";

            for (var i = 0; i < num; i++) {
                sum += firstStr;
            }

            return sum;
        } else { 
            let sum = secondStr;

            for (var i = 0; i < num - 5; i++) {
                sum += firstStr;
            }

            return sum;
        }
    }

    return romanStr
};

const inp = 2000

console.log(intToRoman(inp));