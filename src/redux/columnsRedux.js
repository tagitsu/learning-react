import strContains from '../utils/strContains';

export const filteredCards = (cards, columnId, search) => {
  if(search) {
    return cards.filter(card => card.columnId === columnId && strContains(card.title, search))
  } else {
    return cards.filter(card => card.columnId === columnId)
  }
};
