
import sinon from 'sinon';

// We need to maintain a common state. Otherwise the stubs are going to be messy
const state = {};

// Should we use stub here?
const getState = sinon.stub().returns(state);
const setState = sinon.stub().callsFake(val=>{
    Object.keys(val)?.forEach(entry=>state[entry]=val[entry]);
    return state;
});

export { getState, setState };