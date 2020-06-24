import { Action } from "../interfaces";

export default (state = [], action:Action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};