import { useRef } from 'react';
import * as SC from './Select.style';
import { nanoid } from 'nanoid';

export const Select = ({ options, label, id, value = '', ...restParams }) => {
  const inputId = useRef(id ?? nanoid());

  return (
    <SC.Container>
      <SC.Label htmlFor={inputId.current}>{label}</SC.Label>
      <SC.Select {...restParams} id={inputId.current} value={value}>
        <option value="">empty</option>
        {options.map((options) => (
          <option key={options.value} value={options.value}>
            {options.label}
          </option>
        ))}
      </SC.Select>
    </SC.Container>
  );
};
