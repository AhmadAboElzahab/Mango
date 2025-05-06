import type { SVGProps } from 'react';
const SvgTabs = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M1 3.006C1 1.898 1.897 1 3.006 1h9.988C14.102 1 15 1.897 15 3.006v9.988A2.006 2.006 0 0 1 12.994 15H3.006A2.007 2.007 0 0 1 1 12.994zm2 .99v8.009c0 .54.446.995.995.995h8.01c.54 0 .995-.446.995-.995v-8.01c0-.54-.446-.995-.995-.995h-8.01C3.455 3 3 3.446 3 3.995zM5.53 6.47 8 8.94l2.47-2.47a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTabs;
