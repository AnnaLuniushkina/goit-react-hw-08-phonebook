import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'services/selectors';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './FilterContact.module.css';

const FilterContact = ({title}) => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <label className={styles.filter__label}>
            {title}
            <input
                className={styles.filter__input}
                type='text'
                value={value}
                onChange={event => dispatch(changeFilter(event.currentTarget.value))} />
        </label>
    );
};

FilterContact.propTypes = {
    title: PropTypes.string.isRequired,
};

export default FilterContact;