import {actionTypes} from './actionTypes'

export const preventUnselectAllReducer = (selectedIndexes, action) => {
    if (action.type === actionTypes.toggle_index) {
        const isOnlySelected =
            selectedIndexes.includes(action.index) && selectedIndexes.length === 1 // it is the only selected index if it is part of the selected indexes and there is only one selected index
        if (isOnlySelected) {
            // if index is the only selected index
            return selectedIndexes // return the same selectedIndexes as nothing should change.
        }
    }
}

/*
export const preventUnselectAllReducer = (selectedList, action) => {
    if (action.type === actionTypes.toggle_index) {
        const isOnlySelected =
        selectedList[action.index] &&
        selectedList.filter((x) => x === true).length === 1 // it is the only selected index if it is part of the selected indexes and there is only one selected index
        if (isOnlySelected) {
        // if index is the only selected index
        return selectedList // return the same selectedIndexes as nothing should change.
        }
    }
}
*/