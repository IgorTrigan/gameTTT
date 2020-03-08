import React from 'react'
import classes from './Cell.module.css'
import * as StepTypes from '../constants/StepTypes'

export default function Cell({addPoint, stepType}) {
  let cls = ['classes.Cell'];
  cls.push(stepType)
    return (
        <div className={classes.Cell}>
            <button onClick={() => addPoint()}>Step = {stepType}</button>
        </div>
    )
}
