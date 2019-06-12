/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object;
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example1(){
    console.log(this);  
}

example1();

// Principle 2

// code example for Implicit Binding

const example2 = {
    something: 'test',
    something_function: function(i) {
      console.log(`${this.something} this should say hola: ${i}`);
      console.log(this);
    }
  };
  example2.something_function('hola');

// Principle 3

// code example for New Binding

function example3(something){
    this.something1 = something;
    this.something2 = 'test2';
    
}

example3.prototype.speak = function() {
    console.log(this.something1, this.something2)
}

const test1 = new example3('hola')
const test2 = new example3('hola2')
test1.speak()
test2.speak()

// Principle 4

// code example for Explicit Binding

function example4(skill1, skill2, skill3) {
    return `I have 3 skills: ${skill1}, ${skill1}, ${skill1}`
}

const skills = ['skill1', 'skill2', 'skill3']

console.log(example4.call(null, ...skills))