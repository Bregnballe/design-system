import {actionTypes} from './actionTypes'

export const onlySelectOneReducer = (selectedIndexes, action) => {
    if (action.type === actionTypes.toggle_index) {
        const isSelected = selectedIndexes.includes(action.index)
        if (!isSelected) {
            return [action.index] // return only selected index, meaning select and unselect all others
        }
    }
}


/*
export const onlySelectOneReducer = (selectedList, action) => {
    if (action.type === actionTypes.toggle_index) {
        const isSelected = selectedList[action.index]
        if (!isSelected) {
        let ToggledList = [...selectedList]
        ToggledList.fill(false)
        ToggledList[action.index] = !ToggledList[action.index]
        return ToggledList
        }
    }
}
*/