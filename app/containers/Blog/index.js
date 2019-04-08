import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import { actions } from '../../reducers/article'

import BlogHeader from 'Containers/BlogHeader'
import BlogContent from 'Containers/BlogContent'
import BlogSider from 'Containers/BlogSider'
import BlogFooter from 'Containers/BlogFooter'
import BlogFenote from 'Containers/BlogFenote'
import style from './index.scss'

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.list.length === 0) {
            this.props.get_article_list({
                type: null,
                isPublish: true,
            })
        }
    }

    render() {
        return (
            <div className={style.container}>
                <Router>
                    <BlogHeader />
                    <Switch>
                        <Route path='/' component={BlogFenote} />
                        <Route path='/fenote' component={BlogFenote} />
                        <Route path='/essay' component={BlogFenote} />
                    </Switch>
                    {/* <div className={style.centerContainer}>
                        <BlogContent articleList={this.props.list}/>
                        <BlogSider/>
                    </div> */}
                    <BlogFooter />
                </Router>
            </div>
        )
    }
}

Blog.defaultProps = {
    list: [],
}

Blog.propTypes = {
    list: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        list: state.article.list
    }
}

const mapPropsToProps = (dispatch) => {
    return {
        get_article_list: bindActionCreators(actions.get_article_list, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapPropsToProps
)(Blog)
