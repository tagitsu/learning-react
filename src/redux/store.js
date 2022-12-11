import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

// SELEKTORY
export const filteredCards = (cards, columnId, search) => {
  if(search) {
    return cards.filter(card => card.columnId === columnId && strContains(card.title, search))
  } else {
    return cards.filter(card => card.columnId === columnId)
  }
};

export const getAllColumns = () => {
  return initialState.columns;
};

export const getAllLists = () => {
  return initialState.lists;
};

export const getColumnsByList = (columns, listId) => {
  return columns.filter( column => listId === column.listId );
};

export const getListById = (lists, listId) => {
  return lists.find( list => list.id === listId );
};

// KREATORY AKCJI

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

export const addList = payload => ({ type: 'ADD_LIST', payload });

// MAGAZYN
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
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, action.payload]}; // eslint-disable-next-line
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