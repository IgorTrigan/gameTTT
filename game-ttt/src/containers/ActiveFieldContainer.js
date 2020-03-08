import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActiveField from '../components/ActiveField'
import * as Actions from '../actions'

const mapStateToProps = state => ({
    fullState: state
  })
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })


  const ActiveFieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActiveField)
  
  export default ActiveFieldContainer