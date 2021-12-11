const PHRASE = document.querySelector('#phrase'),
    AUTHOR = document.querySelector('#initials'),
    PREV = document.querySelector('#nav-left'),
    NEXT = document.querySelector('#nav-right');
let phrases = ['a', 'b', 'c', 'd', 'e'],
    authors = ['a1', 'a2', 'a3', 'a4', 'a5'],
    phrasesNew = [],
    authorsNew = [],    
    i = 0,
    k = 0;
    
while (i != phrases.length) {
    rand = (Math.floor(Math.random() * phrases.length) + 1) - 1;
    phrasesNew.push(phrases[rand]);
    authorsNew.push(authors[rand]);
    console.log(phrasesNew[i], authorsNew[i]);
    i++;
};

PHRASE.textContent = phrasesNew[0];
AUTHOR.textContent = authorsNew[0];

NEXT.addEventListener('click', () => {
    if (k == (phrasesNew.length - 1)) {
        k = -1;
    }
    k++;
    PHRASE.textContent = phrasesNew[k];
    AUTHOR.textContent = authorsNew[k];
    
    console.log(k);
});

PREV.addEventListener('click', () => {
    if (k == 0) {
        k = phrasesNew.length;
    }
    k--;
    PHRASE.textContent = phrasesNew[k];
    AUTHOR.textContent = authorsNew[k];
    console.log(k);
});
    // console.log(phrases[rand]);
// console.log(phrases[0]);
// console.log(authors[0]);
