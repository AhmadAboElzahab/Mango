import type { SVGProps } from 'react';
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgRadio;
