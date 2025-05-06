import type { SVGProps } from 'react';
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12.207 7.26c.617-.414.589-1.04-.08-1.39L4.442 1.86c-.666-.346-1.153-.022-1.085.728l.79 8.634c.069.748.63 1.019 1.255.6l1.58-1.06.037.04 2.95 3.083a1.274 1.274 0 0 0 1.63.178l.326-.218c.514-.345.706-1.01.455-1.575l-1.731-3.902-.023-.048 1.582-1.06Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCursor;
