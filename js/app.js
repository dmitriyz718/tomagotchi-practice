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
    };
    feed() {
        console.log(`feed clicked`);
        this.hunger = this.hunger + 1;
    };
    evolve() {
        console.log(`evolve clicked`);
        myImage.attr(`src`, `images/vapo.png`);
        this.health = this.health + 1;
        setHealth(20);
    };
    set setHealth(max = 20) {
        this.health = max;
    };
    get healthState() {

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

        };
    };
    fire() {
        console.log(`fire clicked`);
        this.boredom = this.boredom + 1;
    };
}
//new game button
let newGo = null;
const newStart = document.getElementById(`new-game`);
newStart.addEventListener(`click`, function () {
    newGo = new tomagotchi();
    newGo.newGame();
});

//add click event listeners
play.addEventListener(`click`, function () {
    newGo.play();
});
feed.addEventListener(`click`, function () {
    newGo.feed()
});
sleep.addEventListener(`click`, function () {
    newGo.putSleep()
});
fire.addEventListener(`click`, function () {
    newGo.fire()
});
evolve.addEventListener(`click`, function () {
    newGo.evolve()
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
