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

    /*  {
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
      },*/
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

    // NOTE SHALLOW COPY OF CLASSMATES NAMES
    const copy = [...classmatesName];

    // NOTE FILTER IF FAKE NAME = CORECT NAME
    const filter = classmatesName.filter(arr => !copy[random].includes(arr));

    const btnIndex = Math.floor(Math.random() * btn.length)

    // NOTE RENDER 3 BUTTONS TEXT WITH Fake ANSWERS
    btn.forEach((e, i) => {
        e.textContent = filter[i]
    })

    // NOTE RENDER ALL BUTTONS TEXT WITH RIGHT ANSWER
    btn[btnIndex].textContent = classmatesName[random];

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


// NOTE Btn func
btn.forEach(e => {

    e.addEventListener('click', e => {

        if (e.target.textContent === classmatesName[random]) {
            score++;
            questionNumber++;
            render();
        } else {
            score--;
            if (score < 0) score = 0;
            questionNumber++;
            render();
        }
    })
})

// NOTE New Game 
document.querySelector('[data-new-game]').addEventListener('click', () => {
    score = 0;
    questionNumber = 0;
    render()
});