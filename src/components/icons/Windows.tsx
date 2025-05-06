import type { SVGProps } from 'react';
const SvgWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='m2 3.711 4.907-.671v4.726H2zm5.498-.764L14 2v5.726H7.498v-4.78ZM2 8.266h4.907v4.74L2 12.32zm5.498.063H14V14l-6.502-.918'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgWindows;
