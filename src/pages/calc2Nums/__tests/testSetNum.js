import test from 'ava';
import ACTION_HANDLERS from '../helpers/calc.actionHandlers.js';
import { getState, setState } from '../../../test_utils/actionHandlersParams.mock.js';

test('user Changes Number 1', t => {
    //initial Value
    setState({ num1: 0, num2: 0, result: 0 });

    // User input
    const input = { value: 5 };

    ACTION_HANDLERS['setNum1']({ getState, setState, params: input });

    //get result and compare
    const { result } = getState();
    t.is(result, 5);
});

test('user Changes Number 2', t => {
    //initial Value
    setState({ num1: 5, num2: 0, result: 0 });

    // User input
    const input = { value: 5 };

    ACTION_HANDLERS['setNum2']({ getState, setState, params: input });

    //get result and compare
    const { result } = getState();
    t.is(result, 10);
});


test('no user input', t => {
    //initial Value
    setState({ num1: 5, num2: 0, result: 0 });
    
    //get result and compare
    const { result } = getState();
    t.is(result, 0);
});
