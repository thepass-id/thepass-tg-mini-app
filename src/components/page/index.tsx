import css from './index.module.css';
import {FC, HTMLProps} from 'react';
import cla from 'classnames';

const Page: FC<HTMLProps<HTMLDivElement>> = function ({
  children,
  className,
  ...props
}) {
  return (
    <div className={cla([css.container, className])} {...props}>
      {children}
    </div>
  );
};

export default Page;
