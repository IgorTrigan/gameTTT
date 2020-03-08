import * as types from '../constants/ActionTypes'
const socket = { send: true }
export const addPoint = (row, column) => ({ type: types.ADD_POINT, step: {row, column}, socket})