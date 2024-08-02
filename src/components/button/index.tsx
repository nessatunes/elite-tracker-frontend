import clsx from 'clsx';
import { type ComponentProps } from 'react';

import styles from './styles.module.css';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'info' | 'error';
};

export function Button({
  children,
  disabled,
  variant = 'info',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        styles.container,
        variant === 'error' && styles.error,
        disabled && styles.disabled,
      )}
    >
      {children}
    </button>
  );
}
