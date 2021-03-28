import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

import ContactListItem from '../ContactListItem';

const ContactList = ({filteredContacts, handleDeleteContact}) => (
    <ul className={styles.list}>
        {
            filteredContacts.map(filteredContact => (
                <ContactListItem
                    key={filteredContact.id}
                    id={filteredContact.id}
                    name={filteredContact.name}
                    number={filteredContact.number}
                    handleDeleteContact={handleDeleteContact}
                />))
        }
    </ul>);

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string
        })
    ).isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
};


export default ContactList;