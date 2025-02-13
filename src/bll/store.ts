import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { countReducer } from './countReducer';
import { thunk } from 'redux-thunk';
import { loadState, saveState } from '../utils/localStorage-utils';

export interface RootState {
  counter: ReturnType<typeof countReducer>; // Используйте ReturnType для конкретного редьюсера
}

const rootReducer = combineReducers({
  counter: countReducer,
});

const persistedState = loadState();

export const store = createStore(
  rootReducer, 
  persistedState as Partial<RootState>, 
  applyMiddleware(thunk) 
  // + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

(window as any).store = store;

store.subscribe(() => {
  saveState(store.getState())
})

export type RootReducerType = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;
