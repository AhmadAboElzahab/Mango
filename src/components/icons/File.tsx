import type { SVGProps } from 'react';
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M11.291 6H8.998a.5.5 0 0 1-.498-.498V3.213c0-.447.541-.672.858-.355l2.287 2.287a.5.5 0 0 1-.354.855m-1.085-4.294C9.816 1.316 9.062 1 8.497 1H4.506A2.005 2.005 0 0 0 2.5 3.006v9.988C2.5 14.102 3.4 15 4.492 15h7.016a1.99 1.99 0 0 0 1.992-2V5.995c0-.55-.314-1.309-.706-1.7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFile;
