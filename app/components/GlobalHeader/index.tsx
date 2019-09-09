import * as React from 'react'
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
}

const GlobalHeader: React.SFC<IHeaderProps> = ({ onClickStart }) => (
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

GlobalHeader.defaultProps = {
    onClickStart: () => {},
}

export default GlobalHeader
