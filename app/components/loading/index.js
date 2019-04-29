import React, { Component } from 'react'
import className from 'classnames'
import { Spin, Icon } from 'antd'

import style from './loading.scss'

const loadingIcon = <Icon type='loading' style={{ fontSize: 36 }} spin />

const Loading = ({ loading }) => (
    <div className={className(style.loading, loading ? style.show : style.hide )}>
        {
            !!loading && <Spin size='large' indicator={loadingIcon} />
        }
    </div>
)

export default Loading
