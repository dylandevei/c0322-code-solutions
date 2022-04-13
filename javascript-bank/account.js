/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var depositSum = 0;
  var withdrawalSum = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositSum += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawalSum += this.transactions[i].amount;
    }
  }
  var balance = depositSum - withdrawalSum;
  return balance;
};
