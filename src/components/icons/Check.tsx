import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M5.782 11.727a1.03 1.03 0 0 0 1.433-.009l5.272-5.18a1.483 1.483 0 0 0 .012-2.116 1.47 1.47 0 0 0-2.11.025L6.847 8.123a.465.465 0 0 1-.685-.01l-.587-.64a1.42 1.42 0 0 0-2.075-.05 1.473 1.473 0 0 0 .017 2.105l2.266 2.2Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCheck;
