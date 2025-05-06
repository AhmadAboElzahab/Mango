import type { SVGProps } from 'react';
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M4 3.006C4 1.898 4.887 1 5.998 1h4.004C11.105 1 12 1.897 12 3.006v9.988A1.997 1.997 0 0 1 10.002 15H5.998A2 2 0 0 1 4 12.994zm1 .504v7.98c0 .287.22.51.491.51h5.018a.506.506 0 0 0 .491-.51V3.51c0-.288-.22-.51-.491-.51H5.491A.506.506 0 0 0 5 3.51m2.5 9.99c0 .268.224.5.5.5.268 0 .5-.224.5-.5 0-.268-.224-.5-.5-.5-.268 0-.5.224-.5.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMobile;
