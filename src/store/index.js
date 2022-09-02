import { createStore } from "redux";


const ReducerFN = (state = {counter :0},action) => {
    if(action.type === "INC"){
        return {counter: state.counter + 1}
    }
    if(action.type === "DEC"){
        return {counter: state.counter - 1}
    }
    return state
}
 const store = createStore(ReducerFN)

export default store;