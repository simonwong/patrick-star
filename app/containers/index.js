import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from 'Components/Loading'
import NotFound from './NotFound'
import Blog from './Blog'
import Admin from './Admin'

import '../lib/normalize.css'

class IndexApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/admin' component={Admin} />
                        <Route path='/' component={Blog} />
                        <Route component={NotFound} />
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
