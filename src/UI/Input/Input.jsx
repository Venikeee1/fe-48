import { nanoid } from 'nanoid';
import { useRef } from 'react';
import * as SC from './Input.style';

export const Input = ({ label, id, value, ...restProps }) => {
  const inputId = useRef(id ?? nanoid());

  return (
    <SC.Container>
      <SC.Label htmlFor={inputId}>{label}</SC.Label>
      <SC.Input value={value} {...restProps} id={inputId} />
    </SC.Container>
  );
};
