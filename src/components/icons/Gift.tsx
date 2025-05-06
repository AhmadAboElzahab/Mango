import type { SVGProps } from 'react';
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M9 6.75h4.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5H7v-2.5h2zm-2 .5H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H9v8H7zm-.717-3.5c-.621 0-1.125-.448-1.125-1s.504-1 1.125-1q1.187 0 1.472 2zm4.375 0H8.5q.576-3 2.158-3a1.5 1.5 0 0 1 0 3'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGift;
