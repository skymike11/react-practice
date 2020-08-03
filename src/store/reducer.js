import {INCREMENT, DECREMENT, SETSIZE} from "./actionTypes";

const defaultState = {
    totalNum: 0,
    size : 0
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            defaultState.totalNum +=1;
            return defaultState;
        case DECREMENT:
            defaultState.totalNum -=1;
            return defaultState;
        case SETSIZE:
            if (action.size !== defaultState.size) {
                defaultState.totalNum = 0;
                defaultState.size = action.size;
            }
            return defaultState;
        default:
            return defaultState;
    }
}
