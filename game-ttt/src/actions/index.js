import * as types from '../constants/ActionTypes'

export const addPoint = (row, column) => ({ type: types.ADD_POINT, step: {row, column}})