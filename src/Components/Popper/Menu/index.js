import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../index';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ children, items, hideOnClick = true }) {
    const [childMenu, setChildMenu] = useState([{ data: items }]);
    const lastChild = childMenu[childMenu.length - 1];

    const renderItem = () => {
        return lastChild.data.map((ele, idx) => {
            const classes = cx('menu-item', ele.seperate ? 'seperate' : '');
            return (
                <MenuItem
                    className={classes}
                    data={ele}
                    key={idx}
                    onClick={() => {
                        if (!!ele.children) {
                            setChildMenu((prev) => [...prev, ele.children]);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setChildMenu((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            placement="bottom-end"
            delay={[0, 600]}
            interactive
            render={(attrs) => (
                <div {...attrs} className={cx('menuWrapper')}>
                    <PopperWrapper className={cx('menu-list')}>
                        {childMenu.length > 1 && <MenuHeader title={lastChild.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setChildMenu((prev) => [...prev.slice(0, 1)])}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
};

export default Menu;
