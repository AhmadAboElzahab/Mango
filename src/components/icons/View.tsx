import type { SVGProps } from 'react';
const SvgView = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006zm2.073 6.933A.25.25 0 0 0 2 9.104V12.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V8.125a.25.25 0 0 0-.1-.2L10 5 6 8 4 7zM3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgView;
