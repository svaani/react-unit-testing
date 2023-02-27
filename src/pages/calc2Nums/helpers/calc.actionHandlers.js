import { add } from './calc.helpers.js';

const setNum1 = ({ getState, setState, params }) => {
    const { num2 } = getState();
    setState({ num1: Number(params.value), result: add(num2, params.value) });
}

const setNum2 = ({ getState, setState, params }) => {
    const { num1 } = getState();
    setState({ num2: Number(params.value), result: add(num1, params.value) });
}

const ACTION_HANDLERS = {
    ['setNum1']: setNum1,
    ['setNum2']: setNum2
}

export default ACTION_HANDLERS;