//  Mixins - use to achive composition

function mixin(target, ...sources){
    // Object.assign() - use to copy the properties and methods from one object to another.
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating..');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking..');
    }
};

const canSwim = {
    swim: function() {
        console.log('swiming..');
    }
};

function Person() {
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);


function GoldFish() {
}

mixin(GoldFish.prototype, canEat, canSwim);

const goldfish = new GoldFish();
console.log(goldfish);