export const combineReducers = (...reducers) => {
    // takes a list of reducers
    return (state, action) => {
      // return a function that takes state and action and then returns the result
    
        for (const reducer of reducers) {
            // for every reducer
            const result = reducer(state, action) // run the reducer
            if (result) {
            return result
            } //if that reducer returns a result, return that result from the combine reducers (don't move on to next reducer)
        }
    }
}
