import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import BlogHeader from './BlogHeader'
import BlogFooter from './BlogFooter'

import BlogFenote from 'Containers/BlogFenote'
import BlogAbout from 'Containers/BlogAbout'
import style from './index.scss'

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    handleMenuChange = (key) => {
        const { history } = this.props
        history.push(`/${key}`)
    }

    render() {
        

        return (
            <div className={style.container}>
                <Router>
                    <BlogHeader onChange={this.handleMenuChange} />
                    <Switch>
                        <Route path='/home' component={BlogFenote} />
                        <Route path='/fenote' component={BlogFenote} />
                        <Route path='/essay' component={BlogFenote} />
                        <Route path='/about' component={BlogAbout} />
                    </Switch>
                    <BlogFooter />
                </Router>
            </div>
        )
    }
}

export default Blog
