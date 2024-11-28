function wordBreak(s: string, wordDict: string[]): boolean {
	
    function cutWord (word:string): string { 
        return s.replace(word, "")
    }

    function checkOtherStrings(wordDict: string[]) { 

        let theLastWord = ""

        // base case
        if (s.length === 0 && wordDict.length === 0) { 
            return true
        }
    }

    if (checkOtherStrings(wordDict)) {
        return true
    } else {
        return false
    } 
}; 


console.log(wordBreak("goalspecial", [ "go", "goal","special"]));
