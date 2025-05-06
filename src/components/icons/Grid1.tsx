import type { SVGProps } from 'react';
const SvgGrid1 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M2 3.5C2 2.672 2.674 2 3.5 2h2C6.328 2 7 2.674 7 3.5v2C7 6.328 6.326 7 5.5 7h-2C2.672 7 2 6.326 2 5.5zm0 7C2 9.672 2.674 9 3.5 9h2c.828 0 1.5.674 1.5 1.5v2c0 .828-.674 1.5-1.5 1.5h-2c-.828 0-1.5-.674-1.5-1.5zm7-7c0-.828.674-1.5 1.5-1.5h2c.828 0 1.5.674 1.5 1.5v2c0 .828-.674 1.5-1.5 1.5h-2C9.672 7 9 6.326 9 5.5zm0 7c0-.828.674-1.5 1.5-1.5h2c.828 0 1.5.674 1.5 1.5v2c0 .828-.674 1.5-1.5 1.5h-2c-.828 0-1.5-.674-1.5-1.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGrid1;
