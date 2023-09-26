import * as redux from 'redux'

export const COUNTER_INCREMENT = 'increment';
export const COUNTER_DECREMENT = 'decrement';

const initialState = {
    count : 0
}

const counterReducer = (state = initialState,action) => {
    switch(action.type) {
        case COUNTER_INCREMENT : {
            return {...state, count : state.count+1}
        }
        case COUNTER_DECREMENT : {
            return {...state, count : state.count-1}
        }
        default : {
            return state;
        }
    }
}

const arrayReducer = (state = [],action) => {
    switch(action.type) {
        case 'push' : {
            console.log(action.value)

            const data = [...state];
            data.push(action.value);
            return [...data]
        }
        case 'pop' : {
            console.log(action.value)
            const data = [...state]
            data.pop()
            return [...data]
        } 
        default : {
            return state;
        }
    }
}

const rootReducer = (state = {},action) => {
    return {
        counter : counterReducer(state.counter,action),
        array : arrayReducer(state.array,action)
    }
}

const store = redux.createStore(rootReducer);
export default store;