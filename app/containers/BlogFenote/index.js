import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '@/reducers/article'

import BlogContent from 'Components/BlogContent'
import BlogSider from 'Components/BlogSider'

import styles from './index.scss'

class BlogFenote extends Component {
    componentWillMount() {
        if (this.props.list.length === 0) {
            this.props.get_article_list({
                type: null,
                isPublish: true,
            })
        }
    }

    render () {
        return (
            <div className={styles.container}>
                <BlogContent articleList={this.props.list}/>
                <BlogSider/>
            </div>
        )
    }
}


BlogFenote.defaultProps = {
    list: [],
}

BlogFenote.propTypes = {
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
)(BlogFenote)
