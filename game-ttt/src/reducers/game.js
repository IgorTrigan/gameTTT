import { ADD_POINT } from '../constants/ActionTypes'

const initialState = {
    title: "hello world",
    steps: []
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT:
        return {
            ...state,
            steps: [
                ...state.steps, action.step
            ]
        }
    default:
      return state
  }
}

export default game