import type { SVGProps } from 'react';
const SvgExpandSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M10 2v12h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2m1.22 5.28 1.97 1.97-1.97 1.97a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgExpandSidebar;
