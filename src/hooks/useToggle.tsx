import {useReducer} from 'react'
import {actionTypes} from '../reducers/toggleReducers/actionTypes'
import {toggleReducer} from '../reducers/toggleReducers/toggleReducer'

export const useToggle = ({reducer = toggleReducer} = {}) => {
  // useToggle takes an object that is set to {} if it is undefined.
  // The object contains a reducer that is set to toggleReducer by default. You can pass another reducer if needed.
  const [selectedList, dispatch] = useReducer(reducer, []) //  reducer is set to the reducer passed to useToggle. selectedIndexes is the state and set to [0].

    const toggleIndex = (index:number) =>
        dispatch({type: actionTypes.toggle_index, index}) // The toggleIndex function takes an index and dispatches the toggle_index type

  return {selectedList, toggleIndex} // returns the selectedIndexes and the toggle function
}
