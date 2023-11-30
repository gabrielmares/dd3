import { initialState } from "../interfaces"

export const wordleReducer = ({ state, action }: initialState) => {
    switch (action?.type) {
        case "reset": {
            return state
        }
        default:
            return state
    }
}