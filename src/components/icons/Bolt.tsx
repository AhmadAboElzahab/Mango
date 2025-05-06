import type { SVGProps } from 'react';
const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M8.854 1.506C8.92.678 8.6.57 8.143 1.259L3.542 8.177c-.306.458-.105.83.446.83H6.49c.552 0 .968.438.928 1.003l-.322 4.495c-.059.83.242.921.665.215l4.717-7.86c.282-.471.063-.853-.487-.853H9.488a.91.91 0 0 1-.919-.99z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBolt;
