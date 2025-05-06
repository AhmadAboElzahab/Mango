import type { SVGProps } from 'react';
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M14 10V9h-1v1h-1v1h1v1h1v-1h1v-1zM1 1.996C1 1.446 1.443 1 2.01 1h1.98C4.549 1 5 1.445 5 1.996v9.008c0 .55-.443.996-1.01.996H2.01C1.451 12 1 11.555 1 11.004zm5 .01C6 1.452 6.443 1 7.01 1h1.98C9.549 1 10 1.45 10 2.007v11.986C10 14.55 9.557 15 8.99 15H7.01C6.451 15 6 14.55 6 13.993zm5-.003A1 1 0 0 1 12.01 1h1.98A1 1 0 0 1 15 2.003v4.994A1 1 0 0 1 13.99 8h-1.98A1 1 0 0 1 11 6.997z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgStack;
