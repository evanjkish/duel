class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, res, power) {
    super(name, cost)
    this.res = res
    this.power = power
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power
        console.log(` ${target.name}'s res is now ${target.res}`);
        return target;
        } else {
            throw new Error("Only Units can be targeted");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.mag = mag
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat = 'power') {
                target.power += this.mag
                console.log(`${target.name}'s power is now ${target.power}!`);
            }
            else if (this.stat = 'res') {
                target.res += this.mag
                console.log(`${target.name}'s res is now ${target.res}!`);
            }
            else {
                throw new Error("Only Units can be targeted");
            }
        }
        return target;
    }
}

const red = new Unit('Red Belt Ninja', 3, 4, 3);
const black = new Unit('Black Belt Ninja', 4, 4, 5);

const halgo = new Effect('Hard Algorithm', 2, "increase target's resilience by 3", 'res', 3);
const upr = new Effect('Unhandled Promise Rejection', 1, "reduce targets resilience by 2", 'res', -2);
const pp = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2);

console.log(red.attack(black));