import initialState from "./initialState";

export const getColumnsByList = (columns, listId) => {
  return columns.filter( column => listId === column.listId );
};

export const getListById = (lists, listId) => {
  return lists.find( list => list.id === listId );
};

export const getAllLists = () => {
  return initialState.lists;
};
