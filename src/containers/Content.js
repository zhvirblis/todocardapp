import { connect } from 'react-redux'
import ContentComp from '../components/Content'

const mapStateToProps = state => {
    return {
        todos: state
    }
}

let Content = connect(mapStateToProps)(ContentComp)

export default Content
