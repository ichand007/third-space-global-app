import { CLEAR_SEARCH_ITEM, SEARCH_ITEM_ON, SEARCH_ITEM_OFF, EXPAND_ITEM_ON, EXPAND_ITEM_OFF } from "../actionTypes/actionTypes";


const initialState = {
  isLoading: false,
  numOfFilteredItems: 0,
};

export const onlineStoreReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_ITEM_ON:
        return action.payload;

    case SEARCH_ITEM_OFF:
        return action.payload;

    case CLEAR_SEARCH_ITEM:
        return action.payload;

    case EXPAND_ITEM_ON:
        return {
            ...state,
            isLoading: state.isLoading
        };

    case EXPAND_ITEM_OFF:
        return {
            ...state,
            isLoading: state.isLoading
        };

    default:
      return state;
  }
};
