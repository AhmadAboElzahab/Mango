import type { SVGProps } from 'react';
const SvgQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M7 8.5v-3c0-.556-.448-1-1-1H3c-.556 0-1 .448-1 1v3c0 .556.448 1 1 1h1v2h1l2-2zm7 0v-3c0-.556-.448-1-1-1h-3c-.556 0-1 .448-1 1v3c0 .556.448 1 1 1h1v2h1l2-2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgQuote;
