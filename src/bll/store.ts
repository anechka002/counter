import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { countReducer } from './countReducer';
import { thunk } from 'redux-thunk';
import { loadState, saveState } from '../utils/localStorage-utils';

const rootReducer = combineReducers({
  counter: countReducer,
});

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})

export type RootReducerType = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
