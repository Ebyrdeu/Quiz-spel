const gameBox = document.querySelector('[data-game-box]'),
    header = document.querySelector('[data-header]'),
    btn = document.querySelectorAll('.answer'),
    restart = document.querySelector('[data-restart]');

let correct = 0,
    all = 0,
    randomCorrectName;

const classDB = [
    {
        name: "Zenos",
        src: "https://metromode.se/files/2017/09/framgang8151.jpg"
    },
    {
        name: "Y'shtola",
        src: "https://svd.vgc.no/v2/images/7ad7300b-6f61-4c01-847e-7e60db8d39a0?h=630&q=80&upscale=true&w=1200&s=4da31994ab8d57888fe6085faf4171e2569affa7"
    },
    {
        name: "Tia",
        src: "https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg"
    },
    {
        name: "Erk",
        src: "https://www.thenews.com.pk/assets/uploads/updates/2021-01-13/773676_9402039_294840_094028_updates_updates.jpg"
    },
    {
        name: "Chad",
        src: "https://www.wehale.life/globalassets/common-files/public-health/2019-10-how-to-support-someone-with-copd/wehale-copd-1440x777.jpg"
    },
    {
        name: "Jesus",
        src: "https://nmaahc.si.edu/sites/default/files/styles/featured_image_16x9/public/images/header/audience-citizen_0.jpg?itok=yoGQec7Q"
    },
    {
        name: "Lyse",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
    },
    {
        name: "Alise",
        src: "https://miro.medium.com/max/11520/0*yNQ3UdtoAXyB8Whx"
    },
    {
        name: "Chad",
        src: "https://lingopolo.org/thai/sites/lingopolo.org.thai/files/styles/entry/public/images/2016/08/29/person-1911.jpg"
    },
];

// Array of fake names
const fakeName = [
    "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank",
    "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger",
    "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
]

// Attach Classmate NAME into Buttons
const personName = () => {
    // Generate random index number of array
    const randomFakeName = () => Math.floor(Math.random() * classDB.length),
        index = Math.floor(Math.random() * btn.length);
    
    /* !NOTE// Only depend on classmates names
    randomFakePerson = () => Math.floor(Math.random() * classDB.length)
    for (let i = 0; i < btn.length; i++) btn[i].textContent = classDB[randomFakePerson()].name;
    */

    // attach fake name
    for (let i = 0; i < btn.length; i++) btn[i].textContent = fakeName[randomFakeName()];

    // rewrite one random button
    btn[index].textContent = classDB[randomCorrectName].name;


};

// Attach Classmate Info into Image
const render = () => {

    randomCorrectName = Math.floor(Math.random() * classDB.length);

    header.innerHTML = `<p class="text-success fs-3 fw-bold text-center">Correct: ${correct}/${all} </p>`;

    gameBox.innerHTML = `<section class=""> <img src="${classDB[randomCorrectName].src}" class="rounded img-fluid  w-25 mb-5 " alt="cheater"></section>`;

    personName();
};

// Answer buttons
btn.forEach(e => {

    // create random index number of array
    const randomNew = (index) => Math.floor(Math.random() * index);

    e.addEventListener('click', e => {
        if (e.target.textContent === classDB[randomCorrectName].name) {
            correct++;
            all++
            randomNew(randomCorrectName);
            render();

        } else {
            correct--;
            if (correct < 0) correct = 0
            all++;
            randomNew(randomCorrectName);
            render();
        }
    })
});

// New Game
restart.addEventListener('click', render);

// Render game on load
render();

