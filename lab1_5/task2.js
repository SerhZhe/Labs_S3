function upperCase(sentence){
    return sentence.split(" ").map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}

let sentence = "one two three"
console.log(upperCase(sentence))