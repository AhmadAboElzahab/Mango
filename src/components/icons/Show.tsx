import type { SVGProps } from 'react';
const SvgShow = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M1.244 8.658c-.411-.363-.422-.956 0-1.316 0 0 2.758-2.842 6.758-2.842s6.755 2.842 6.755 2.842c.41.363.421.956 0 1.316 0 0-2.755 2.842-6.755 2.842S1.244 8.658 1.244 8.658M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgShow;
