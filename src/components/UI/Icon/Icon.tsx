import React from 'react';
import { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg {...props} viewBox='0 0 16 16' style={{ shapeRendering: 'geometricPrecision' }}>
      <use href={`/static/icon.svg#${props.name}`}></use>
    </svg>
  );
};
