class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW

const myAccount = new Account("billybob");

console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(120.0, myAccount);

t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount);
