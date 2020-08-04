import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import pokeReducer from './pokeDuck';
import detailDuck from './detailDuck'

const rootReducer = combineReducers({
    pokemons: pokeReducer,
    details: detailDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function getStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
};