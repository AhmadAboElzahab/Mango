import type { SVGProps } from 'react';
const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M6 1.992H4a2 2 0 0 0-2 2v2h2v-2h2zm0 10.016H4V9.992H2v2.016a2 2 0 0 0 2 2h2zm4 2v-2h2V9.992h2v2.016a2 2 0 0 1-2 2zm0-10.016v-2h2a2 2 0 0 1 2 2v2h-2v-2zm-4.5 2.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFullscreen;
