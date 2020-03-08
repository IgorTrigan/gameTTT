import React, { Component } from 'react'
import PropTypes from 'prop-types'

import React from 'react'

const ActiveField = ({ fullState, actions }) => {
    return (
        <div>
            <h1>{fullState.title}</h1>
        </div>
    )
}

ActiveField.propTypes = {
    fullState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

export default ActiveField

  /*
  PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
    */