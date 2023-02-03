import { forwardRef } from 'react';
import type { InputProps } from '../../../../types';
import * as Styled from './styles';

export function Input({ name, onChange, value, ...rest }: InputProps) {
  return (
    <Styled.Input name={name} onChange={onChange} value={value} {...rest} />
  );
}
