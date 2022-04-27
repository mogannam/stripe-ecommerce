import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        default:
            return state;
    }
};

// used to help initialize global state object and provide functionality 
// for updating the state automatically by running it through our custom reducer
// Think of this as a more in-depth way of using the useState() Hook we've used so much.
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }