import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from '../components/loading/Loading'
import NotFound from '../components/notFound/NotFound'
import Blog from '../containers/blog/Blog'
import Admin from '../containers/admin/Admin'

import '../lib/normalize.css'
import style from './indexApp.scss'

class IndexApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/404' component={NotFound} />
                        <Route path='/admin' component={Admin} />
                        <Route component={Blog} />
                    </Switch>
                    { this.props.isFetching && <Loading /> }
                </div>
            </Router>
        )
    }
}

IndexApp.defaultProps = {
    isFetching: false
}

IndexApp.propTypes = {
    isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    const { isFetching, msg } = state.global

    return {
        isFetching,
        msg,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexApp)
