//  Exercise- Polymorphism

function extend(Child, Parenet) {
    // instance of an htmlElement object
    Child.prototype = new Parenet();
    Child.prototype.constructor = Child;
}

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

    this.render = function() {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </selector`;
    }
}
extend(HTMLSelectElement, HTMLElement);


function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" /> `; 
    }
}
extend(HtmlImageElement, HTMLElement);

