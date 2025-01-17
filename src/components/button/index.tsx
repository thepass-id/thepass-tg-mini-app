import css from './index.module.css';
import {ButtonHTMLAttributes, FC} from 'react';
import cla from 'classnames';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = function ({
  children,
  className,
  ...props
}) {
  return (
    <button className={cla([css.button, className])} {...props}>
      {children}
    </button>
  );
};

export default Button;
