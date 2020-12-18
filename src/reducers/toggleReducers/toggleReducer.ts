import {actionTypes} from './actionTypes'

export const toggleReducer = (selectedIndexes, action) => {
    switch (action.type) {
        case actionTypes.toggle_index: {
            const isSelected = selectedIndexes.includes(action.index) // it is Selected if it is part of the currently selected indexes
            return isSelected // if the index is selected
            ? selectedIndexes.filter((i) => i !== action.index) // return selected indexes without this index
            : [...selectedIndexes, action.index] // else return the selected indexes and this index
        }
        default: {
            throw new Error(`Unhandled type in accordionReducer: ${action.type}`)
        }
    }
}
    

/*
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
*/