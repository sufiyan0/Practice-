// Dom Element
const hangmanPart = document.querySelectorAll('.hangman-part');
const incorrectLettorContainer = document.getElementById('incorrect-lettor-container');
const word = document.getElementById('word');
const popupContainer = document.getElementById('popup-container');
const finalMassage = document.getElementById('final-massage');
const playAgainButton = document.getElementById('play-btn');
const notificationContainer = document.getElementById('notification-container');
const incorrectLettors = document.getElementById('incorrect-lettors');



const words = ["successful","behavior","by","similar","bill","tell","ordinary","joy","sale","brother","circle","universe","map","slide","figure","dream","silence","spirit","thing","salmon","spell","liquid","greatest","southern","burst","higher","area","excitement","season","effort","examine","active","army","piano","town","fill","our","southern","advice","percent","captain","daily"]

const  selectedWords =  words[Math.floor (Math.random() * words.length)]
const incorrectGuesses = [];
const corectGuesses = ['a','e','i','o','u'];

// function randomWord(){
//     fetch(`https://api.api-ninjas.com/v1/randomword`)
//     .then (res => res.json())
//     .then (data => {
//         const wordContainer = data.word;
//         pushdata(wordContainer);
//         dispalyWord();
        
//     });
// } 


// async function randomWord(){
//     const res = await fetch(`https://api.api-ninjas.com/v1/randomword`)
//     const data = await res.json()
//     const wordContainer = data.word;
//     pushdata(wordContainer);
//     console.log(words[0]);
//     await dispalyWord();

// } 

// console.log(words[0]);

function pushdata(rndWord){
    words.push(rndWord);
}

function dispalyWord() {
    word.innerHTML = `
        ${selectedWords
            .split('')
            .map(letter => `
                <span class="letter" >
                    ${corectGuesses.includes(letter) ? letter : ''  }
                </span>
                `
            )
            .join('')
        }
    `; 

    const innerWord = word.innerText.replace(/\n/g, '');
    console.log(innerWord)

    if(innerWord === selectedWords){
        finalMassage.innerHTML = "You Won the game";
        popupContainer.style.display = 'flex';
    
    }
};







function showNotification(){
    notificationContainer.classList.add('show')
    setTimeout(() => {
        notificationContainer.classList.remove('show')
    }, 2000);
}


function updataIncorrectLetter(){
    incorrectLettors.innerHTML=`
    ${incorrectGuesses.length > 0 ? '<p>Incorrect Letter</p>': '' }
    ${incorrectGuesses.map(letter => `<span>${letter}</span>`) }

    `;
    const error = incorrectGuesses.length;
    hangmanPart.forEach((part, index) => {
        if(error > index ){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';
        }

    })


    if(hangmanPart.length===incorrectGuesses.length){
        finalMassage.innerHTML = "You Lost the game";
        popupContainer.style.display = 'flex';

    }
    
}
// randomWord();


window.addEventListener('keypress', e => {
    if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 97) {
        const letter = e.key;
        if (selectedWords.includes(letter)) {
            if (!corectGuesses.includes(letter)) {
                corectGuesses.push(letter);
                dispalyWord();
            } else {
                showNotification();
            }
        } else {
            if (!incorrectGuesses.includes(letter)) {
                incorrectGuesses.push(letter);
                updataIncorrectLetter();
            } else {
                showNotification()
            }
            
            
        }
    }
})



playAgainButton.addEventListener('click', () => {
    corectGuesses.splice(0);

    // incorrectGuesses.splice(0);

    // corectGuesses.add('a','e','i','o','u')
    const  selectedWords =  words[Math.floor (Math.random() * words.length)];
    updataIncorrectLetter()
    popupContainer.style.display = 'none'

    dispalyWord();
})
    
dispalyWord();