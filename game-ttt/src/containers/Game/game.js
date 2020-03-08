import { connect } from 'react-redux'
import ActiveField from '../components/ActiveField'
import { addPoint } from '../actions'

export default connect(null, { addTodo })(Header)