const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, number) => sum + number);
console.log('sum:', sum);

const product = numbers.reduce((product, number) => product * number);
console.log('product:', product);

const balance = account.reduce((balance, account) => {
  if (account.type === 'deposit') {
    balance += account.amount;
  } else {
    balance -= account.amount;
  }
  return balance;
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((composite, trait) => Object.assign(trait, composite));
console.log('composite:', composite);
