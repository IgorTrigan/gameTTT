import React from 'react'
import classes from './Cell.module.css'
import * as StepTypes from '../constants/StepTypes'

export default function Cell({addPoint, stepType}) {
  let csl = ['Cell'];
  cls.posh(stepType)
    return (
        <div className={classes[cls.join(' ')]}>
            <button onClick={() => addPoint()}>Step = {stepType}</button>
        </div>
    )
}
