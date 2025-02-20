// data encapsulation in js

// class fields:
//1. Public fields
//2. Private fields
//3. Public methods
//4. Private methods 
// (there are also static version)

class Account {
    // 1. public fields: they are on instances and not prototype.
    locale = navigator.language; // looks like a variable but is not. and requires ; at the end
    
    //2. Private fields: (instances)
    #movements = [];
    #pin;


    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        // Protected properties
        this.#pin = pin;
        // this._movements = []; 
        // this.locale = navigator.language;
    }

    // 3. Public methods:
    // they are in  prototype: 
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this; // for chaining methodss
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan Approved`);
            return this;
        }
    }

    // 4. Private  Methods:
    // #approveLoan(val){
    _approveLoan(val){
        return true;
    }
}

const acc1 = new Account ('Abhyudaya', 'USD', 1234);

// console.log(acc1.#movements); -> cannot access

// console.log(acc1.getMovements()); -> can access

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());