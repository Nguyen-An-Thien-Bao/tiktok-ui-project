import Button from '../../Button';
import PropTypes from 'prop-types';

function MenuItem({ data, className, onClick }) {
    return (
        <Button className={className} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default MenuItem;
