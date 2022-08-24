import * as React from 'react'
import css from './email-signup.module.css'

export default function EmailSignupForm() {
  return (
    <form className={css.form} action="" method="POST" target="_blank">
      <h3>Help build the movement:</h3>
      <div style={{ display: 'flex', gap: '0.5em', padding: '0.5em 0', justifyContent: 'flex-end', flexFlow: 'wrap' }}>
        <label htmlFor="email" className="visually-hidden">Email</label>
        <input
          id="email"
          name="EMAIL"
          placeholder="Your email…"
          required
          type="email"
        />
        <button type="submit">Subscribe</button>
      </div>
      <div style={{ fontSize: '0.6em' }}>
        No spam. Never shared. Opt out any time.
      </div>
      <input type="hidden" name="b_faedf5dec8739fb92e05b4131_14e8024c6c" tabIndex={-1} value="" />
      <input type="hidden" name="ROLE" id="newsletter-role" tabIndex={-1} value="" />
    </form>
  )
}
