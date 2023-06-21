import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/user/@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('account-info')}>
                <h4 className={cx('account-name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('account-username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default AccountItem;
