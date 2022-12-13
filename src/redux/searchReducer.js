const SEARCH_CARD = 'app/search/SEARCH_CARD';

export const searchCard = payload => ({ type: SEARCH_CARD, payload });

const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH_CARD:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchReducer;