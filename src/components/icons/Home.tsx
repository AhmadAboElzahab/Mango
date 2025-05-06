import type { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M7.312 1.506a.945.945 0 0 1 1.376 0l4.624 4.806c.38.396.688 1.156.688 1.715v6.254c0 .282-.215.51-.49.51h-3.02a.49.49 0 0 1-.49-.49v-3.51s0-2-2-2-1.934 1.516-1.934 1.516A9 9 0 0 0 6 11.28v3.02c0 .27-.215.49-.49.49H2.49a.5.5 0 0 1-.49-.51V8.027c0-.552.306-1.317.688-1.715z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHome;
