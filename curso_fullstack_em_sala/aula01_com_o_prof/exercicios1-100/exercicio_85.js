const palavras = ["javascript", "html", "css", "nodejs"];

function manipularArrayDeStrings(arrayDeStrings) {
    const novoArray = arrayDeStrings.map(string => string.toUpperCase());
    return novoArray;
}

console.log(manipularArrayDeStrings(palavras));