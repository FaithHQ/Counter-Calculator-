import React from 'react';

const CounterHook = () => {
    const Reducer = (state, action) => {
        if(action.type === 'setValue') {
            return {...state}
        }
        else if (action.type === 'increment') {
            return {...state, count: action.thePrevPos + action.theCurrentPos}
        }
        else if (action.type === 'decrement') {
            return {...state, count: action.thePrevNeg + action.theCurrentNeg}
        }
        else if (action.type === 'reset') {
            return {...state, count: state.count = 0}
        }
        else {
            throw new Error("404");
        }
    }
    return {Reducer}
}
export default CounterHook;
