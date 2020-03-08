import { ADD_POINT } from '../constants/ActionTypes'
import * as StepTypes from '../constants/StepTypes'

const initialState = {
    options: {
        rows: 3,
        columns: 3
    },
    userOptions: {
        currentStepType: StepTypes.CROSS
    },
    title: "hello world",
    steps: []
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT:{
        const step = action.step;
        step.stepType = state.userOptions.currentStepType;
        const newState = {
            ...state,
            steps: [
                ...state.steps, step
            ]
        };
        newState.userOptions.currentStepType = newState.userOptions.currentStepType === StepTypes.CROSS
            ? StepTypes.ZERO
            : StepTypes.CROSS;
        return newState;
    }
    default:
      return state
  }
}

export default game