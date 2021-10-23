const words: string[] = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour'
];

const anagramSort = (words: string[]) => {
    const modifyWord = (word: string) =>
        word
            .toLowerCase()
            .split("")
            .sort()
            .filter(char => char.match(/[a-zA-z]/))
            .join("");

    let anagramsSorted: string[] = [];

    words.forEach( word => {
        const modifiedWord: string = modifyWord(word); // eg. eopr, from rope
        if (anagramsSorted[modifiedWord]) {
            return anagramsSorted[modifiedWord].push(word); // [eopr: ['rope', 'pore']]
        } else {
            anagramsSorted[modifiedWord] = [word];
        }
    });

    anagramsSorted = Object.values(anagramsSorted); // create keyless array
    console.log(anagramsSorted);
}

anagramSort(words);

