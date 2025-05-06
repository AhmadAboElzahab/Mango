import type { SVGProps } from 'react';
const SvgCollapseSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M10 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7zM3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2m4.78 9.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L5.81 8.25z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCollapseSidebar;
