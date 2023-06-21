import classNames from 'classnames/bind';
import styles from './ContentOnly.module.scss';

const cx = classNames.bind(styles);

function ContentOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default ContentOnly;
