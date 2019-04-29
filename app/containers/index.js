import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'

import { hot } from 'react-hot-loader/root'
import Loading from 'Components/Loading'
import NotFound from './NotFound'
import Blog from './Blog'
import Admin from './Admin'

class IndexApp extends Component {
    render() {
        const { isFetching } = this.props

        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/admin' component={Admin} />
                        <Route path='/' component={Blog} />
                        <Route component={NotFound} />
                    </Switch>
                    <Loading loading={isFetching} />
                </div>
            </Router>
        )
    }
}

IndexApp.defaultProps = {
    isFetching: false
}

IndexApp.propTypes = {
    isFetching: PropTypes.number.isRequired
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

export default hot(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(IndexApp)
)
