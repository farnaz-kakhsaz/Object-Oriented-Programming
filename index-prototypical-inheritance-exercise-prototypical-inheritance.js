function HtmlElement() {
    this.click = function() {
        console.log("Clicked");
    }
}

HtmlElement.prototype.focus = function() {
    console.log("Focused");
};

const e = new HtmlElement();


function HtmlSelectElement(items = []) {
    // ES6:
    // (items = [])
    // Before ES6:
    // this.items = items || [];

    this.items = items;

    this.addItem = function(item) {
        this.items.push(item)
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
// This is an instance of an HtmlElement object.
// new HtmlElement

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// These two are the same:
// new HtmlSelectElement.prototype.constructor() === new HtmlSelectElement()

const s = new HtmlSelectElement();