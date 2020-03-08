import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActiveField from '../conponents/ActiveField'
import * as Actions from '../actions'

const mapStateToProps = state => ({
    game: state.game
  })
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActiveField)