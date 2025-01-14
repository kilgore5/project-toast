import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, message, variant, removeToast }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const variantStyles = styles[variant];

  return (
    <div className={`${styles.toast} ${variantStyles}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}: </VisuallyHidden> {message}
      </p>
      <button
        onClick={(e) => removeToast(id)}
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
