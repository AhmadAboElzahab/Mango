import type { SVGProps } from 'react';
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12.954 4.46a.5.5 0 0 0-.008-.706l-.7-.7a.49.49 0 0 0-.706-.008L8 6.586l-3.54-3.54a.5.5 0 0 0-.706.008l-.7.7a.49.49 0 0 0-.008.706L6.586 8l-3.54 3.54c-.19.19-.19.509.008.706l.7.7a.49.49 0 0 0 .706.008L8 9.414l3.54 3.54c.19.19.509.19.706-.008l.7-.7a.49.49 0 0 0 .008-.706L9.414 8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgX;
