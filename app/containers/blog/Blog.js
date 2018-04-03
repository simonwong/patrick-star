import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { actions } from '../../reducers/article'

import BlogHeader from '../blogHeader/BlogHeader'
import BlogContent from '../blogContent/BlogContent'
import BlogSider from '../blogSider/BlogSider'
import BlogFooter from '../blogFooter/BlogFooter'
import style from './blog.scss'

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.articleList.length === 0) {
            this.props.get_article_list()
        }
    }

    render() {
        return (
            <div className={style.container}>
                <BlogHeader />
                <div className={style.centerContainer}>
                    <BlogContent articleList={this.props.articleList}/>
                    <BlogSider/>
                </div>
                <BlogFooter />
            </div>
        )
    }
}

Blog.defaultProps = {
    articleList: [],
}

Blog.propTypes = {
    articleList: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        articleList: state.article.articleList
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
