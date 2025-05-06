import type { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-2c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6M5 6.5c-.467.583-.5 1 .5 1h1V11c0 .552.5 1.5 1.5 1.5s1.5-.944 1.5-1.5V7.5h1c1 0 .965-.419.5-1C9 4 8.338 3.358 8.338 3.358a.46.46 0 0 0-.676 0S7.006 4 5 6.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUpload;
