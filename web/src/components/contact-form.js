import React from 'react'
import styles from './contact-form.module.css'

export default function Contact() {
  return (
    <div>
      <div id="copy-container">
        <p>If you want to discuss a project, get in touch via the form below</p>
        <form className={styles.contactForm}>
          <div className={styles.contactFormNames}>
            <div className={styles.firstName}>
              <label for='fname'>First Name</label>
              <input type='text' id='fname' name='firstname' className={styles.input} required></input>
            </div>
            <div className={styles.lastName}>
              <label for='lname'>Last Name</label>
              <input type='text' id='lname' name='lastname' className={styles.input} required></input>
            </div>
          </div>
            <div className={styles.email}>
              <label for='email'>Email</label>
              <input type='email' id='email' name='email' className={styles.input} required></input>
            </div>
            <div className={styles.projectDetails}>
              <label for='message'>Project details</label>
              <textarea id='message' name='message' className={styles.input} required></textarea>
            </div>
          <input type='submit' value='submit'></input>
        </form>
      </div>
      <div id="form-container"></div>
    </div>
  )
}
