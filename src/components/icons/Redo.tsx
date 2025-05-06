import type { SVGProps } from 'react';
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8.5 1.918c-2.73 0-5.035 2.167-5.76 4.167H2c-.411 0-.646.637-.4.966l2 2.75c.2.267.6.309.8.042l2-2.813c.248-.329.013-.945-.4-.945H4.876c.635-1 2.016-2.167 3.625-2.167 2.206 0 4 1.878 4 4.083s-1.794 4.042-4 4.042a3.97 3.97 0 0 1-2.103-.576 1.003 1.003 0 0 0-1.376.334 1.005 1.005 0 0 0 .323 1.382 6 6 0 0 0 3.156.899c3.309 0 6-2.773 6-6.082s-2.691-6.082-6-6.082Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgRedo;
