/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

function longestCommonPrefix(strs: string[]): string {
    let prefix: string = "";

    // #1 iterate strs
    // #2 check index with item

    let smallestStr: string = strs[0];
    let isBreak = false;
    
    for (const str of strs) {
        
        if (str.length < smallestStr.length) { 
            smallestStr = str;
        }
    }

    const checkPrefix = (str: string, char: string, idx: number): boolean => char === str[idx]

    for (let i = 0; i < smallestStr.length; i++) { 
        
        if (isBreak) return prefix;

        for (const [index,str] of strs.entries()) {
            if (!checkPrefix(str, smallestStr[i], i)) { 
                isBreak = true;
                break;
            }

            if (index === strs.length - 1) { 
                prefix += smallestStr[i]
            }
        }
    }

    
    
    return prefix;
};



const arr: string[] = ["cir","car"];
const outputFunc: string = longestCommonPrefix(arr);

console.log(outputFunc);

