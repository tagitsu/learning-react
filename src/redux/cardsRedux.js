export const getCard = (cards, cardId) => {
  return cards.find( card => card.id === cardId );
};

export const favoriteCards = (cards) => {
  return cards.filter(card => card.isFavorite === true);
};
