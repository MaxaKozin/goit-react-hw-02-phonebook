import React from 'react';
import styles from './Phonebook.module.css';

const Phonebook = ({ contacts, onDelete }) => {
  return (

    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        name && (<li className={styles.item} key={id}>
          <span>{name} : {number}</span>
          <button type="button" className={styles.close} onClick={() => onDelete(id)}>+</button>
        </li>)

      ))}
    </ul>

  )
}

export default Phonebook;