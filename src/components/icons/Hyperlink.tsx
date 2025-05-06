import type { SVGProps } from 'react';
const SvgHyperlink = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M3 9c.55 0 1 .45 1 1s-.45 1-1 1h-.999A2 2 0 0 1 0 9.007V4.493C0 3.393.892 2.5 1.992 2.5h7.016C10.1 2.5 11 3.396 11 4.501V8c0 .55-.45 1-1 1s-1-.45-1-1V5.999A1 1 0 0 0 7.997 5H3.003A1 1 0 0 0 2 6.01v1.98A1 1 0 0 0 3 9m10-4h.999A2 2 0 0 1 16 6.993v4.514c0 1.1-.892 1.993-1.992 1.993H6.992A2 2 0 0 1 5 11.499v-3.5c0-.55.45-1 1-1s1 .45 1 1v2.002c0 .556.449.999 1.003.999h4.994A1 1 0 0 0 14 9.99V8.01A1 1 0 0 0 13.003 7H13c-.55 0-1-.45-1-1s.45-1 1-1'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHyperlink;
