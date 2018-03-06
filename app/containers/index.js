import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import Loading from '../components/loading/Loading'
import NotFound from '../components/notFound/NotFound'
import Blog from '../containers/blog'
import Admin from '../containers/admin'

import '../lib/normalize.css'

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
    isFetching: true
}

IndexApp.propTypes = {
    isFetching: PropTypes.bool.isRequired
}

export default IndexApp
