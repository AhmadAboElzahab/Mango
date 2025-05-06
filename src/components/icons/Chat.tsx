import type { SVGProps } from 'react';
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8.334 11.21h3.658A2.005 2.005 0 0 0 14 9.212V4.207c0-1.101-.9-1.997-2.008-1.997H4.009A2.005 2.005 0 0 0 2 4.207v5.005c0 1.1.895 1.993 2 1.998v1.99c0 .567.37.753.828.437z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChat;
