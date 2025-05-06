import type { SVGProps } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M2.5 12v-1a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 0 1-3 0m4 0V8.5a1.5 1.5 0 0 1 3 0V12a1.5 1.5 0 0 1-3 0m4 0V4a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 1 1-3 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChart;
