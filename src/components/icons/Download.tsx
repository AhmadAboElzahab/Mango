import type { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 2C4.692 2 2 4.692 2 8s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6m3 7.5c-2.006 2.5-2.662 3.143-2.662 3.143a.46.46 0 0 1-.676 0S7 12 5 9.5c-.465-.581-.5-1 .5-1h1V5c0-.556.5-1.5 1.5-1.5s1.5.948 1.5 1.5v3.5h1c1 0 .967.417.5 1'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDownload;
