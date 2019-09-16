import * as React from 'react'
import classname from 'classnames'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import CustomIcon from '@/components/CustomIcon'

import { IRouterConfig } from '@/router'

import styles from './index.scss'

export interface IMenuProps {
    menu: Array<IRouterConfig>
    current: string
    onChange?: (item: IRouterConfig) => void
}

const MenuBar: React.SFC<IMenuProps> = ({ menu, current, onChange }) => (
    <div className={styles.wrap}>
        <MenuList className={styles.menu}>
            {
                menu.map((item) => {
                    if (item.name) {
                        return (
                            <MenuItem
                                key={item.path}
                                className={classname(styles.item, item.path === current ? styles.active : '')}
                                onClick={() => onChange && onChange(item)}
                            >
                                {
                                    item.icon && (
                                        <CustomIcon
                                            className={styles.icon}
                                            type={item.icon}
                                        />
                                    )
                                }
                                { item.name }
                            </MenuItem>
                        )
                    }
                    return null
                })
            }
        </MenuList>
    </div>
)

MenuBar.defaultProps = {
    menu: [],
    current: '',
    onChange: () => {},
}

export default MenuBar
