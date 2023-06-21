import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '../../../../configs/routes';
import { HomeIcon, PeoplesIcon, LiveIcon } from '../../../Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.home} title="For You" icon={<HomeIcon />} />
                <MenuItem to={config.follow} title="Following" icon={<PeoplesIcon />} />
                <MenuItem to={config.live} title="Live" icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
