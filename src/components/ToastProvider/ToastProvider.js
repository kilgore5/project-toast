import React from 'react';

export const ToastContext = React.createContext();

import useKeydown from '../../hooks/use-keydown';

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newToast = { id: Math.random(), message, variant };
    setToasts([...toasts, newToast]);

    // reset form
    setMessage('');
    setVariant('notice');
  };

  const removeToast = (id) => {
    toastsToKeep = toasts.filter((toast) => toast.id !== id);
    setToasts([...toastsToKeep]);
  };

  // use `useCallback` to memoize the function
  // since the callback is added as a dependency in SetToasts
  const removeAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', removeAllToasts);

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        handleFormSubmit,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
