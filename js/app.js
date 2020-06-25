console.log(`Sanity Check`);
/* document.querySelector(`#title h1`).innerText = (`Tomagotchi: Dima`); */
// constructor
class tomagotchi {
    constructor(hunger = 5, boredom = 5, sleep = 5, health = 20, name = `Dima`) {
        this.hunger = hunger;
        this.boredom = boredom;
        this.sleep = sleep;
        this.health = health;
        this.name = name;
    }
    play() {

    };
    putSleep() {

    };
    feed() {

    };
    set health(max = 5) {

    };
    get healthState() {

    };
}
