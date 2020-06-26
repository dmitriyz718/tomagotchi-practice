console.log(`Sanity Check`);
/* document.querySelector(`#title h1`).innerText = (`Tomagotchi: Dima`); */
// constructor
const feed = document.getElementById(`feed`);
const play = document.getElementById(`play`);
const evolve = document.getElementById(`evolve`);
const birth = document.getElementById(`birth`);
const fire = document.getElementById(`fire`);
const sleep = document.getElementById(`sleep`);
const gameWin = document.getElementById(`game-window`);
const endGame = document.getElementById(`end-game`);

class tomagotchi {
    constructor(hunger = 10, boredom = 10, sleep = 10, name = `Dima`) {
        this.hunger = hunger;
        this.boredom = boredom;
        this.sleep = sleep;
        this.health = 20;
        this.name = name;
    }
    newGame() {
        let newName = prompt(`Enter new pets name`);
        document.querySelector(`h1`).innerText = (`Tomagotchi: ${newName}`);
        this.name = newName;
        console.log(newName);
        feed.style.backgroundColor = `lightblue`;
        play.style.backgroundColor = `lightblue`;
        evolve.style.backgroundColor = `lightblue`;
        birth.style.backgroundColor = `lightblue`;
        fire.style.backgroundColor = `lightblue`;
        sleep.style.backgroundColor = `lightblue`;
        this.setHealth
        window.setInterval(checkTime, 3000);
        /*         gameWin.querySelector(`p`).innerHTML = (`${this.name}'s current stats:<p>Health: ${tomagotchi.health}</p><p>Boredom: ${this.boredom}</p><p>Sleep: ${this.sleep}</p><p>Hunger: ${this.hunger}</p>`); */
    }
    play() {
        console.log(`play clicked`);
        this.boredom = this.boredom + 1;
    };
    putSleep() {
        console.log(`put sleep clicked`);
        this.sleep = this.sleep + 1;
        this.health = this.health + 1;
    };
    feed() {
        console.log(`feed clicked`);
        this.hunger = this.hunger + 1;
        this.health = this.health + 1;
    };
    evolve() {
        console.log(`evolve clicked`);
        const myImageEvolve = $(`#game-window img`); //only instance of jQuery
        myImageEvolve.attr(`src`, `images/vapo.png`);
        this.health = this.health + 1;
        this.setHealth;
    };
    set setHealth(max = 20) {
        this.health = this.health + max;
    };
    get healthState() {
        return this.health;
    };
    endGame() {
        const myImage = $(`#game-window img`);
        myImage.attr(`src`, `images/deadpet.png`);
        console.log(`end game clicked`)
        gameWin.querySelector(`p`).innerHTML = (`${newGo.name}'s current state: dead`);
        return 0;
    };
    newPet() {
        console.log(`new pet/birth clicked`);
        if (this.health >= 20) {
            let babyImg = document.createElement(`img`);
            let babyDiv = document.createElement(`div`);
            babyImg.src = `images/baby.jpg`;
            document.body.append(babyDiv);
            document.querySelector(`div:last-child`).append(babyImg);
        };
    };
    fire() {
        console.log(`fire clicked`);
        this.boredom = this.boredom + 1;
    };
    /*     birth() {
            let babyImg = document.createElement(`img`);
            let babyDiv = document.createElement(`div`);
            babyImg.src = `images/baby.jpg`;
            document.body.append(babyDiv);
            document.querySelector(`div:last-child`).append(babyImg);
        } */
}
//new game button
let newGo = null;
const newStart = document.getElementById(`new-game`);
newStart.addEventListener(`click`, function () {
    newGo = new tomagotchi();
    newGo.newGame();
});

//add click event listeners
play.addEventListener(`click`, () => {
    newGo.play();
});
feed.addEventListener(`click`, () => {
    newGo.feed()
});
sleep.addEventListener(`click`, () => {
    newGo.putSleep()
});
fire.addEventListener(`click`, () => {
    newGo.fire()
});
evolve.addEventListener(`click`, () => {
    newGo.evolve()
});
birth.addEventListener(`click`, () => {
    newGo.newPet()
});
endGame.addEventListener(`click`, () => {
    newGo.endGame()
});
//check time loop
function checkTime() {
    newGo.sleep = newGo.sleep - 1;
    newGo.health = newGo.health - 1;
    newGo.boredom = newGo.boredom - 1;
    newGo.hunger = newGo.hunger - 1;
    if (newGo.sleep === 0 || newGo.health === 0 || newGo.boredom === 0 || newGo.hunger === 0) {
        newGo.endGame();
    } else {
        gameWin.querySelector(`p`).innerHTML = (`${newGo.name}'s current stats:<p>Health: ${newGo.health}</p><p>Boredom: ${newGo.boredom}</p><p>Sleep: ${newGo.sleep}</p><p>Hunger: ${newGo.hunger}</p>`);
    }
};
window.setInterval(checkTime, 3000);

evolve.onclick = newGo.evolve();
/* feed.addEventListener = newGo.feed();
sleep.addEventListener = newGo.putSleep();
fire.addEventListener = newGo.fire(); */
