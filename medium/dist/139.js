"use strict";
function wordBreak(s, wordDict) {
    function cutWord(word) {
        return s.replace(word, "");
    }
    function checkOtherStrings(wordDict) {
        let theLastWord = "";
        // base case
        if (s.length === 0 && wordDict.length === 0) {
            return true;
        }
    }
    if (checkOtherStrings(wordDict)) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log(wordBreak("goalspecial", ["go", "goal", "special"]));
