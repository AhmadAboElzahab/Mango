import React from 'react';
import './TextField.styles.ts';
import { TextFieldProps } from './TextField.types';

const TextField: React.FC<TextFieldProps> = () => {
  return (
    <div className='text-field'>
      <h1>TextField</h1>
    </div>
  );
};
export default TextField;
