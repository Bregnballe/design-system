import {actionTypes} from './actionTypes'

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
