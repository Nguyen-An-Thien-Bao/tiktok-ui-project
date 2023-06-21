import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import style from './Image.module.scss';

const cx = classNames.bind(style);
function Image(
    {
        src,
        alt,
        className,
        fallbackAvatar: fb = 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
        ...props
    },
    ref,
) {
    const [fallbackAvatar, setFallbackAvatar] = useState('');

    const handleFallback = () => {
        setFallbackAvatar(fb);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallbackAvatar || src}
            alt={alt}
            {...props}
            onError={handleFallback}
        />
    );
}

export default forwardRef(Image);
