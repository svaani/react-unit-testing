import test from 'ava';
import { add as iAddNumbers } from '../helpers/calc.helpers.js';

test('2+3=5', t => {
    const sum = iAddNumbers(2, 3);
    t.is(sum,5);
});

test('large number test 1000000000+1000000000=2000000000', t => {
    const sum = iAddNumbers(1000000000, 1000000000);
    t.is(sum,2000000000);
});

test('max safe integer 9007199254740991+1=9007199254740992', t => {
    const sum = iAddNumbers(9007199254740991, 1);
    t.is(sum,9007199254740992);
});

test('max 32 bit integer 2,147,483,647+1=2,147,483,648', t => {
    const sum = iAddNumbers(2147483647, 1);
     t.is(sum,2147483648);
});

test('bigInt 91942213363574161572522430563301811072406154908250+1=91942213363574161572522430563301811072406154908251', t => {
    const sum = iAddNumbers(91942213363574161572522430563301811072406154908250, 1);
    t.is(sum,91942213363574161572522430563301811072406154908251);
});
/*
"ava": {
    "babel": {
      "testOptions": {
        "presets": ["@babel/preset-react"]
      }
    }
  }*/