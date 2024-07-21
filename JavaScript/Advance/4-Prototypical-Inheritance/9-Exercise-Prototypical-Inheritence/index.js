//  Exercise Prototypical Inheritence

function HTMLElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HTMLElement.prototype.focus = function() {
    console.log('focued');
}

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item)
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);

// instance of an htmlElement object
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;


const e = new HTMLElement();
const s = new HTMLSelectElement();