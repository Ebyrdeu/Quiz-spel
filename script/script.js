const gameBox = document.querySelector('[data-game-box]'),
    header = document.querySelector('[data-header]'),
    btn = document.querySelectorAll('.answer'),
    restart = document.querySelector('[data-restart]');

let correct = 0,
    all = 0,
    randomCorrectName;

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
    {
        "name": "Calle Nilsson",
        "photo": "assets/images/students/calle-nilsson.jpg",
    },
    {
        "name": "Chikage Takahashi Molander",
        "photo": "assets/images/students/chikage-takahashi-molander.jpg",
    },
    {
        "name": "Daniel Be",
        "photo": "assets/images/students/daniel-be.jpg",
    },
    {
        "name": "Daniel Carlsson",
        "photo": "assets/images/students/daniel-carlsson.jpg",
    },
    {
        "name": "Elin Ahlgren",
        "photo": "assets/images/students/elin-ahlgren.jpg",
    },
    {
        "name": "Emma Käck",
        "photo": "assets/images/students/emma-kack.jpg",
    },
    {
        "name": "Eric Ståhl",
        "photo": "assets/images/students/eric-stahl.jpg",
    },
    {
        "name": "Frans Gustavson Påsse",
        "photo": "assets/images/students/frans-gustavson-passe.jpg",
    },
    {
        "name": "Glafira Veretennikova",
        "photo": "assets/images/students/glafira-veretennikova.jpg",
    },
    {
        "name": "Gustaf Grönlund",
        "photo": "assets/images/students/gustaf-gronlund.jpg",
    },
    {
        "name": "Hanna Håkanson",
        "photo": "assets/images/students/hanna-hakanson.jpg",
    },
    {
        "name": "Heidi Sjöberg",
        "photo": "assets/images/students/heidi-sjoberg.jpg",
    },
    {
        "name": "Hugo Carzborn",
        "photo": "assets/images/students/hugo-carzborn.jpg",
    },
    {
        "name": "Jesper Kling",
        "photo": "assets/images/students/jesper-kling.jpg",
    },
    {
        "name": "Johan Ranestam",
        "photo": "assets/images/students/johan-ranestam.jpg",
    },
    {
        "name": "Johanna Bäckström",
        "photo": "assets/images/students/johanna-backstrom.jpg",
    },
    {
        "name": "Johanna Jönsson",
        "photo": "assets/images/students/johanna-jonsson.jpg",
    },
    {
        "name": "Jona Torsson",
        "photo": "assets/images/students/jona-torsson.jpg",
    },
    {
        "name": "Josefine Ahlstedt",
        "photo": "assets/images/students/josefine-ahlstedt.jpg",
    },
    {
        "name": "Julia Jespersdotter Högman",
        "photo": "assets/images/students/julia-jespersdotter-hogman.jpg",
    },
    {
        "name": "Julia Nemell",
        "photo": "assets/images/students/julia-nemell.jpg",
    },
    {
        "name": "Linus Lindberg",
        "photo": "assets/images/students/linus-lindberg.jpg",
    },
    {
        "name": "Malin Olsson",
        "photo": "assets/images/students/malin-olsson.jpg",
    },
    {
        "name": "Maria Haara-Lundhammar",
        "photo": "assets/images/students/maria-haara-lundhammar.jpg",
    },
    {
        "name": "Maria Lövgren",
        "photo": "assets/images/students/maria-lovgren.jpg",
    },
    {
        "name": "Nikola Dimitrijoski",
        "photo": "assets/images/students/nikola-dimitrijoski.jpg",
    },
    {
        "name": "Paulina Kiendys",
        "photo": "assets/images/students/paulina-kiendys.jpg",
    },
    {
        "name": "Raymond Lam",
        "photo": "assets/images/students/raymond-lam.jpg",
    },
    {
        "name": "Robin Karlsson",
        "photo": "assets/images/students/robin-karlsson.jpg",
    },
    {
        "name": "Sara Almqvist",
        "photo": "assets/images/students/sara-almqvist.jpg",
    },
    {
        "name": "Tim Nilsson",
        "photo": "assets/images/students/tim-nilsson.jpg",
    },
    {
        "name": "Tirapat Sukjit",
        "photo": "assets/images/students/tirapat-sukjit.jpg",
    },
    {
        "name": "Tobias Silfverberg",
        "photo": "assets/images/students/tobias-silfverberg.jpg",
    },
    {
        "name": "Wiktoria Dobrzewinska",
        "photo": "assets/images/students/wiktoria-dobrzewinska.jpg",
    },
];


// Attach Classmate NAME into Buttons
const personName = () => {
    // Generate random index number of array
    const randomFakePerson = () => Math.floor(Math.random() * classDB.length),
        index = Math.floor(Math.random() * btn.length);

    // attach  name
    for (let i = 0; i < btn.length; i++) btn[i].textContent = classDB[randomFakePerson()].name;
    // rewrite one random button
    btn[index].textContent = classDB[randomCorrectName].name;


};

// Attach Classmate Info into Image
const render = () => {

    randomCorrectName = Math.floor(Math.random() * classDB.length);

    header.innerHTML = `<p class="text-success fs-3 fw-bold text-center">Correct: ${correct}/${all} </p>`;

    gameBox.innerHTML = `<section class=""> <img src="${classDB[randomCorrectName].photo}" class="rounded img-fluid  w-25 mb-5 " alt="cheater"></section>`;

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
restart.addEventListener('click', () => {
    correct = 0;
    all = 0;
    render();

});

// Render game on load
render();

