import type { SVGProps } from 'react';
const SvgSelectCaret = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M5.601 7H10.4c.495 0 .776-.64.48-1.09l-2.4-3.637a.558.558 0 0 0-.96 0L5.122 5.91c-.296.45-.014 1.09.48 1.09ZM10.4 9H5.6c-.494 0-.776.64-.48 1.09l2.399 3.637c.24.364.72.364.96 0l2.399-3.636c.296-.45.014-1.091-.48-1.091Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSelectCaret;
