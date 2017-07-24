import { connect } from 'react-redux'
import ForecastPanel from './ForecastPanel'


const mapStateToProps = (state) => ({
  forecast: state.forecast
})

export default connect(mapStateToProps)(ForecastPanel)
