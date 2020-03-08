import * as types from '../constants/ActionTypes'

export const addPoint = (pointType, row, column) => ({ type: types.ADD_POINT, row, column, pointType})