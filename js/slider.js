let arr1 = ['img/single-room.jpg' ,'https://xaike.ru/assets/images/photo/photo_xl/0c/21/5193990cae9236a56e6d50a8cb30.jpg', 'https://supersnimki.ru/images/pub/2018/09/12/145d9a46-b65d-11e8-ac77-fa18aa9d266b_original.jpg?1479136'], 
    arr2 = ['img/double-room.jpg' ,'https://xaike.ru/assets/images/photo/photo_xl/0c/21/5193990cae9236a56e6d50a8cb30.jpg', 'https://supersnimki.ru/images/pub/2018/09/12/145d9a46-b65d-11e8-ac77-fa18aa9d266b_original.jpg?1479136'],
    arr3 = ['img/twin-room.jpg' ,'https://xaike.ru/assets/images/photo/photo_xl/0c/21/5193990cae9236a56e6d50a8cb30.jpg', 'https://supersnimki.ru/images/pub/2018/09/12/145d9a46-b65d-11e8-ac77-fa18aa9d266b_original.jpg?1479136'],
    card1 = document.querySelector('#card-1'),
    card2 = document.querySelector('#card-2'),
    card3 = document.querySelector('#card-3'),
    left1 = document.querySelector('#left-1'),
    right1 = document.querySelector('#right-1'),
    left2 = document.querySelector('#left-2'),
    right2 = document.querySelector('#right-2'),
    left3 = document.querySelector('#left-3'),
    right3 = document.querySelector('#right-3'),
    i = 0;

function change(i, card, arr) {
    card.style.backgroundImage = `url('${arr[i]}')`;
    console.log(i);
}

change(0, card1, arr1);
change(0, card2, arr2);
change(0, card3, arr3);

function RL (right, left, card, arr) {
    right.addEventListener('click', ()=> {
        if (i >= (arr.length - 1)) {
            i = -1;
        }
        i++;
        change(i, card, arr);
    });
    
    left.addEventListener('click', ()=> {
        if (i <= 0) {
            i = arr.length;
        }
        i--;
        change(i, card, arr);
    });
}

RL(right1, left1, card1, arr1);
RL(right2, left2, card2, arr2);
RL(right3, left3, card3, arr3); 

const PHRASE = document.querySelector('#phrase'),
    AUTHOR = document.querySelector('#initials'),
    PREV = document.querySelector('#nav-left'),
    NEXT = document.querySelector('#nav-right');
let phrases = ['a', 'b', 'c', 'd', 'e'],
    authors = ['a1', 'a2', 'a3', 'a4', 'a5'],
    phrasesNew = [],
    authorsNew = [],
    x = 0,
    k = 0;
    
while (x != phrases.length) {
    rand = (Math.floor(Math.random() * phrases.length) + 1) - 1;
    phrasesNew.push(phrases[rand]);
    authorsNew.push(authors[rand]);
    console.log(phrasesNew[x], authorsNew[x]);
    x++;
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

