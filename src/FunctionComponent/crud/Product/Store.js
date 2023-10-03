import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import productList from './data';

export const COUNTER_INCREMENT = 'increment';
export const COUNTER_DECREMENT = 'decrement';

const initialState = {
    count : 0,
    products : productList
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

const getReducer = (state = {get: null},action) => {
    switch(action.type) {
        case 'getData' : {
            return {data : action.data}
        }
        case 'removeData' : {
            return {data : null}
        }
        default : {
            return state;
        }
    }
}

// const rootReducer = (state = {},action) => {
//     return {
//         counter : counterReducer(state.counter,action),
//         array : arrayReducer(state.array,action)
//     }
// }

const reducer = combineReducers({
    counter : counterReducer,
    array : arrayReducer,
    get : getReducer,
    form : reduxFormReducer
});

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

//const store = createStore(reducer,applyMiddleware(thunk));
export default store;