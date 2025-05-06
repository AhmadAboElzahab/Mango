import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12 3.5h.994C14.102 3.5 15 4.387 15 5.498v4.004a2 2 0 0 1-2 1.998v1.99a1.01 1.01 0 0 1-.995 1.01h-8.01A1 1 0 0 1 3 13.49V11.5a2 2 0 0 1-2-1.998V5.498C1 4.395 1.897 3.5 3.006 3.5H4V2.499c0-.552.453-.999.997-.999h6.006c.55 0 .997.443.997.999zm1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 9.5v3.75c0 .135.111.25.248.25h7.504a.25.25 0 0 0 .248-.25V9.5zM5 3v.5h6V3a.5.5 0 0 0-.491-.5H5.491A.5.5 0 0 0 5 3'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPrint;
