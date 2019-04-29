import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import BlogHeader from './BlogHeader'
import BlogFooter from './BlogFooter'

import BlogHome from 'Containers/BlogHome'
import BlogNote from 'Containers/BlogNote'
import BlogEssay from 'Containers/BlogEssay'
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
                    <div className={style.content}>
                        <Switch>
                            <Route path='/home' component={BlogHome} />
                            <Route path='/fenote' component={BlogNote} />
                            <Route path='/essay' component={BlogEssay} />
                            <Route path='/about' component={BlogAbout} />
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                    <BlogFooter />
                </Router>
            </div>
        )
    }
}

export default Blog
