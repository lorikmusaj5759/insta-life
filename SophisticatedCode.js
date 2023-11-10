/**
 * File Name: SophisticatedCode.js
 * 
 * Description:
 * This code is a simulation of a banking system that handles user accounts and transactions.
 * It includes various classes such as User, Account, Transaction, and Bank, along with their respective methods and properties.
 * 
 * Disclaimer:
 * This code is simplified and not intended for production use. It serves only as a demonstration for educational purposes.
 */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.accounts = [];
  }
  
  addAccount(account) {
    this.accounts.push(account);
  }
  
  getAccount(accountId) {
    return this.accounts.find(account => account.id === accountId);
  }
  
  removeAccount(accountId) {
    this.accounts = this.accounts.filter(account => account.id !== accountId);
  }
  
  toString() {
    return `User: ${this.name}, Email: ${this.email}`;
  }
}

class Account {
  static nextId = 1;
  
  constructor(owner) {
    this.id = Account.nextId++;
    this.owner = owner;
    this.balance = 0;
    this.transactions = [];
  }
  
  createTransaction(amount, description) {
    const transaction = new Transaction(amount, description);
    this.transactions.push(transaction);
    return transaction;
  }
  
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, "Deposit");
    transaction.approve();
    return transaction;
  }
  
  withdrawal(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      const transaction = this.createTransaction(-amount, "Withdrawal");
      transaction.approve();
      return transaction;
    } else {
      const transaction = this.createTransaction(-amount, "Withdrawal");
      transaction.reject("Insufficient balance");
      return transaction;
    }
  }
  
  toString() {
    return `Account ID: ${this.id}, Owner: ${this.owner.name}, Balance: $${this.balance}`;
  }
}

class Transaction {
  static nextId = 1;
  
  constructor(amount, description) {
    this.id = Transaction.nextId++;
    this.amount = amount;
    this.description = description;
    this.status = "Pending";
  }
  
  approve() {
    this.status = "Approved";
  }
  
  reject(reason) {
    this.status = `Rejected: ${reason}`;
  }
  
  toString() {
    return `Transaction ID: ${this.id}, Amount: $${this.amount}, Description: ${this.description}, Status: ${this.status}`;
  }
}

class Bank {
  constructor(name) {
    this.name = name;
    this.users = [];
  }
  
  registerUser(name, email) {
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }
  
  findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }
  
  toString() {
    return `Bank: ${this.name}, Users: ${this.users.length}`;
  }
}

// Create a bank instance
const myBank = new Bank("My Bank");

// Register users
const user1 = myBank.registerUser("John Doe", "john.doe@example.com");
const user2 = myBank.registerUser("Jane Smith", "jane.smith@example.com");

// Create accounts for users
const account1 = new Account(user1);
const account2 = new Account(user2);

// Add accounts to users
user1.addAccount(account1);
user2.addAccount(account2);

// Perform transactions
account1.deposit(1000);
account2.deposit(500);
account1.withdrawal(200);
account2.withdrawal(1000);

// Print account details
console.log(user1.toString());
console.log(user2.toString());

// Print transaction details
console.log(account1.transactions);
console.log(account2.transactions);

// Remove an account from a user
user1.removeAccount(account1.id);

// Print updated user details
console.log(user1.toString());
console.log(user2.toString());

// Print bank details
console.log(myBank.toString());

// End of code
