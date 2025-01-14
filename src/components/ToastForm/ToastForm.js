import React from 'react';

import Button from '../Button';

import styles from '../ToastPlayground/ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const { message, setMessage, variant, setVariant, handleFormSubmit } =
    React.useContext(ToastContext);

  return (
    <form onSubmit={handleFormSubmit} className={styles.controlsWrapper}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            className={styles.messageInput}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((variantOption) => {
            const id = `variantOption-${variantOption}`;
            return (
              <label htmlFor={id} key={variantOption}>
                <input
                  id={id}
                  type="radio"
                  name="variantOption"
                  value={variantOption}
                  checked={variant === variantOption}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {variantOption}
              </label>
            );
          })}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default ToastForm;
