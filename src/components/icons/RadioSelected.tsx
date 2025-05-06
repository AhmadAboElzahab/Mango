import type { SVGProps } from 'react';
const SvgRadioSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'
      clipRule='evenodd'
    />
    <path fill='#333' d='M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0' />
  </svg>
);
export default SvgRadioSelected;
