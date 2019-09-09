import * as React from 'react'
import classname from 'classnames'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import CustomIcon from '@/components/CustomIcon'

import styles from './index.scss'

export interface IMenuObj {
    name: string
    path: string
    key: string
    icon: string
}

export interface IOnChange {
    (item: IMenuObj): void
}

export interface IMenuProps {
    menu: Array<IMenuObj>
    current: string
    onChange?: IOnChange
}

const MenuBar: React.SFC<IMenuProps> = ({ menu, current, onChange }) => (
    <div className={styles.wrap}>
        <MenuList className={styles.menu}>
            {
                menu.map((item) => (
                    <MenuItem
                        key={item.key}
                        className={classname(styles.item, item.key === current ? styles.active : '')}
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
                ))
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
