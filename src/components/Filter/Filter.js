import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../redux/actions';

const Filter = ({ value, onChange }) => (
    <label>
        Find contacts by name
         <br />
        <input type='text' value={value} onChange={onChange} placeholder='Search contacts' />
    </label>);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ value: state.filter });

const mapDispatchToProps = dispatch => ({ onChange: (e) => dispatch(Actions.changeFilter(e.target.value)) });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);