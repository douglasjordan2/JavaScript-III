/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle for "this" is the Window/Global Object Binding. "this" will point to the console object (as in the object parameter).
* 2. The second is Implicit Binding. When a function is called by a preceeding period, "this" points to the object before the period.
* 3. The third principle is New Binding. If a constructor function is used, "this" points to the specific object created by the constructor. "this" would be defined in the prototype, but it would point to the specific object created by the constructor.
* 4. The last principle of "this" is Explicit Binding. When using .call() or .apply(), "this" is explicitly definded, meaning a specific "this" is created with those functions.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myFunc(param) {
    return this;
}

// Principle 2

// code example for Implicit Binding
const myObj = {
    type: "Object",
    returnThis: function() {
        return `Object type: ${this.type}`;
    }
}

// Principle 3

// code example for New Binding
function Person(name) {
    this.name = name,
    this.myName = function() {
        return this.name;
    }
}

const me = new Person("Douglas");
me.myName();

// Principle 4

// code example for Explicit Binding
function Me(myAttributes) {
    Person.call(this, myAttributes)
}