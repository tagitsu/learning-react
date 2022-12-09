import { createStore } from 'redux';
import initialState from './initialState';

export const filteredCards = (cards, columnId, search) => {
  if(search) {
    return cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(search.toLowerCase()))
  } else {
    return cards.filter(card => card.columnId === columnId)
  }
};


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.payload]}; // eslint-disable-next-line
      break;
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload]}; // eslint-disable-next-line
      break;
    case 'SEARCH_CARD':
      return {...state, search: action.payload}; // eslint-disable-next-line
      break;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;