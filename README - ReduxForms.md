App.js :-
----------

const App  = props => {
    return (
        <Provider store={store}>
            <div>
                <FieldlevelValidation onSubmit={ShowResults}></FieldlevelValidation>
            </div>
        </Provider>
    );
}

export default App;

-----------------------------------------------------------------------------------------------------------------

FieldlevelValidation :-
-------------------------

const FieldlevelValidation = props => {
    
    const {handleSubmit,pristine,reset,submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
    )
}
export default reduxForm({
    form : 'fieldlevelValidation'
})(FieldlevelValidation);


-----------------------------------------------------------------------------------------------------------------

store.js :-
-------------

import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

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