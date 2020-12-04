import {actionTypes} from './actionTypes'

export const toggleReducer = (selectedList, action) => {
    switch (action.type) {
        case actionTypes.toggle_index: {
            let ToggledList = [...selectedList]
            ToggledList[action.index] = !ToggledList[action.index]
            return ToggledList
        }
        default: {
            throw new Error(`Unhandled type in accordionReducer: ${action.type}`)
        }
    }
}
