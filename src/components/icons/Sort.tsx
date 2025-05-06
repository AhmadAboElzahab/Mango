import type { SVGProps } from 'react';
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='m11.61 3.291 2.28 2.933c.336.43.162.784-.391.784H12v5.997a.993.993 0 0 1-1 1.003 1 1 0 0 1-1-1.002V7.007H8.503c-.555 0-.73-.35-.392-.784l2.28-2.932c.335-.43.883-.433 1.22 0Zm-6 9.416c-.336.433-.884.43-1.22 0L2.11 9.775c-.336-.434-.162-.784.393-.784H4V2.994a1 1 0 0 1 1-1.003c.552 0 1 .438 1 1.003v5.997h1.498c.553 0 .727.353.392.784z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSort;
