import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M6.648 10.297a3.648 3.648 0 1 1 0-7.297 3.648 3.648 0 0 1 0 7.297m8.06 2.346-3.109-2.936c-.044-.044-.1-.065-.149-.1a5.6 5.6 0 0 0 .846-2.958A5.654 5.654 0 0 0 6.648.999 5.654 5.654 0 0 0 1 6.65a5.654 5.654 0 0 0 5.648 5.648c1.001 0 1.94-.264 2.756-.723.041.067.072.139.131.197l3.108 2.936a1 1 0 0 0 1.414 0l.65-.65a1 1 0 0 0 0-1.414Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSearch;
