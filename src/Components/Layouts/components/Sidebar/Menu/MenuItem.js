import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, activeIcon, to }) {
    return (
        <NavLink to={to} className={({ isActive }) => cx('menuItem', { active: isActive })}>
            <span className={cx('menuItem--icon')}>{icon}</span>
            <span className={cx('menuItem--title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default MenuItem;
