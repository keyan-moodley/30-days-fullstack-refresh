//Exercise 3
function wordFrequency(sentence) {
    let count = {};
    let words = sentence.split(" ");
    for (let word of words) {
        if (count[word]) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    }
    return count;
}

console.log(wordFrequency("apple banana apple orange banana apple"))