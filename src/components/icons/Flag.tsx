import type { SVGProps } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M4.625 3.245c.93-.3 2.543-.7 3.75-.36 1.8.508 4.023-.349 4.023-.349.264-.087.477.066.477.338v6.238c0 .274-.221.555-.477.617 0 0-2.223.645-4.023.264-1.207-.255-2.82.116-3.75.388V13a.5.5 0 0 1-.508.501h-.484a.51.51 0 0 1-.508-.5V3a.5.5 0 0 1 .508-.5h.484c.28 0 .508.23.508.501z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFlag;
