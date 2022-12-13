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

export const favoriteCards = (cards) => {
  return cards.filter(card => card.isFavorite === true);
}

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

export const getCard = (cards, cardId) => {
  return cards.find( card => card.id === cardId );
};

// KREATORY AKCJI

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });


// MAGAZYN
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [ ...statePart, { ...action.payload}];
    default: 
      return statePart;  
  }
};

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [ ...statePart, { ...action.payload }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default: 
      return statePart;  
  }
};

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload }];
    default: 
      return statePart;    
  }
};

const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'SEARCH_CARD':
      return action.payload;
    default:
      return statePart;
  }
};

const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    search: searchReducer(state.search, action)
  };
  return newState;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;