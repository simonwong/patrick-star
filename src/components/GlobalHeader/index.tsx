import * as React from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'
import { routerRedux } from 'dva/router'
import classname from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import styles from './index.scss'

export interface IHeaderProps {
    onClickStart: () => void
    onClickLogo: () => void
    dispatch: Dispatch
}

const GlobalHeader: React.SFC<IHeaderProps> = ({ onClickStart, dispatch }) => {
  const handleClickLogo = () => {
    // console.log()
    dispatch(routerRedux.push('/'))
  }

  return (
    <div className={classname(styles.container, styles.hideShadow)}>
      <AppBar
        className={styles.header}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onClickStart}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={handleClickLogo}
            variant="h6"
            noWrap
          >
                        王思杰的个人网站
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </div>
  )
}

GlobalHeader.defaultProps = {
  onClickStart: () => {},
  onClickLogo: () => {},
}

export default connect()(GlobalHeader)
