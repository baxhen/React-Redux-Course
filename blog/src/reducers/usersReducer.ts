import { Action } from "../interfaces";

export default (state = [], action:Action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};