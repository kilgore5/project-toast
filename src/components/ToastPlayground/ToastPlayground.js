import React from 'react';

import Button from '../Button';

//import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    console.log({ toasts });
  }, [toasts]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newToast = { id: Math.random(), message, variant };
    setToasts([...toasts, newToast]);
  };

  const removeToast = (id) => {
    toastsToKeep = toasts.filter((toast) => toast.id !== id);
    setToasts([...toastsToKeep]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} removeToast={removeToast} />

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
    </div>
  );
}

export default ToastPlayground;
