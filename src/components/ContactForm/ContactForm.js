import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleAddContact = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.number === '') {
            alert('Please enter data');
            return;
        }
        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleAddContact} className={styles.form}>
                <label>
                    <p>Name</p>
                    <input
                        name='name'
                        value={name}
                        type='text'
                        placeholder='Name'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
                        name='number'
                        value={number}
                        type='tel'
                        placeholder='Phone number'
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type='submit' className={styles.button}>Add contact</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: ( name, number ) => dispatch(Actions.addContact(name, number)),
})
export default connect(null, mapDispatchToProps)(ContactForm);