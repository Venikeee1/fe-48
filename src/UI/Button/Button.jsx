import * as SC from './Button.style';

export const Button = ({ children, ...restProps }) => {
  return <SC.Button {...restProps}>{children}</SC.Button>;
};
