import { SEARCH_ITEM_ON, SEARCH_ITEM_OFF, CLEAR_SEARCH_ITEM, EXPAND_ITEM_ON, EXPAND_ITEM_OFF } from "../actionTypes/actionTypes";

const searchItemBegin = (count) => {
  return {
    type: SEARCH_ITEM_ON,
    payload: { numOfFilteredItems: count, isLoading: true}
  };
};

const searchItemComplete = (count) => {
    return {
      type: SEARCH_ITEM_OFF,
      payload: { numOfFilteredItems: count, isLoading: false}
    };
  };

const clearSearchItem = (count) => {
  return {
    type: CLEAR_SEARCH_ITEM,
    payload: { numOfFilteredItems: count, isLoading: false}
  };
};

export { searchItemBegin,searchItemComplete, clearSearchItem };