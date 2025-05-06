import type { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M3.714 7C3.32 7 3 7.224 3 7.5v1c0 .276.32.5.714.5h8.572c.394 0 .714-.224.714-.5v-1c0-.276-.32-.5-.714-.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMinus;
