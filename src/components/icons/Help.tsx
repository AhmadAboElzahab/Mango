import type { SVGProps } from 'react';
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8.759 9.5c0 .276-.216.5-.5.5H7.5a.505.505 0 0 1-.5-.5V9c0-.651 2.25-1.94 2.25-3 0-.348-.225-1.25-1.25-1.25-1.021 0-1.212.984-1.245 1.25 0 0-1.486.022-1.485 0-.001-.934.734-2.75 2.73-2.75 1.721 0 2.75 1.398 2.75 2.75 0 1.373-1.991 2.61-1.991 3zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHelp;
