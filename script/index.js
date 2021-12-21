// NOTE Array
const classDB = [
    {
        "name": "Adi Dzocaj",
        "photo": "assets/images/students/adi-dzocaj.jpg",
    },
    {
        "name": "Alexander Bergquist",
        "photo": "assets/images/students/alexander-bergquist.jpg",
    },
    {
        "name": "Alexander Kocman",
        "photo": "assets/images/students/alexander-kocman.jpg",
    },
    {
        "name": "Benjamin Benson",
        "photo": "assets/images/students/benjamin-benson.jpg",
    },
    {
        "name": "Benjamin Tsubarah",
        "photo": "assets/images/students/benjamin-tsubarah.jpg",
    },
];


// NOTE Btn Coll.
const btn = document.querySelectorAll('[data-btns] button');

// NOTE Global VARS
let score = 0,
    questionNumber = 0,
    random;

// NOTE Names/Photos Arrays
const classmatesName = classDB.map(e => e.name),
    classmatesPhoto = classDB.map(e => e.photo);


// NOTE Attach Names To Buttons
const attachNamesToButtons = () => {

    // NOTE FILTER IF FAKE NAME = CORRECT NAME
    const filter = classmatesName.filter(arr => !classmatesName[random].includes(arr));

    // NOTE RANDOM FILTERED ARR
    const randomFilter = filter.sort(() => 0.5 - Math.random());

    // NOTE RANDOM BTN INDEX
    const btnIndex = Math.floor(Math.random() * btn.length);

    // NOTE RENDER 3 BUTTONS TEXT WITH Fake ANSWERS
    btn.forEach((e, i) => {
        e.textContent = randomFilter[i];
    })

    // NOTE RENDER ALL BUTTONS TEXT WITH RIGHT ANSWER
    btn[btnIndex].textContent = classmatesName[random];

    document.querySelector('[data-input]').value = classmatesName[random];

    
    

}
// NOTE Render
const render = () => {

    // NOTE CORRECT RANDOM INDEX
    random = Math.floor(Math.random() * classDB.length);

    // NOTE RENDER SCORE
    document.querySelector('[data-score]').innerHTML = `Score ${score}/${questionNumber}`;

    // NOTE RENDER IMG
    document.querySelector('.img-0').innerHTML = `<img class="rounded-3 img-thumbnail img-fluid d-block mx-auto w-25 mb-5" src="${classmatesPhoto[random]}" alt="${classmatesName[random]}">`;

    // NOTE FAKE NAME FUNCTION
    attachNamesToButtons()

}


// NOTE Initial Render
render();


// NOTE Win
const win = () => {
 
    score++;
    questionNumber++;
    render();
}

// NOTE Loose
const loose = () => {
    score--;
    if (score < 0) score = 0;
    questionNumber++;
    render();
}

// NOTE Btn func
btn.forEach(e => {
    e.addEventListener('click', e => {
        if (e.target.textContent === classmatesName[random]) win();
        else loose();
    })
})

// NOTE New Game 
document.querySelector('[data-new-game]').addEventListener('click', () => {
    score = 0;
    questionNumber = 0;
    render()
});

// NOTE Input
document.querySelector('[data-input]').addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (document.querySelector('[data-input]').value === classmatesName[random]) win();
        else loose();
    }
})
