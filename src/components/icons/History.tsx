import type { SVGProps } from 'react';
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M7.902 9.3a1 1 0 0 1-.4-.812V5.5a1 1 0 0 1 2 0v2.53l1.3 1.07a1 1 0 1 1-1.2 1.6zM1.746 6.167a6.97 6.97 0 0 1 3.256-4.23 7 7 0 1 1-.528 11.79 1 1 0 0 1 1.15-1.638A5 5 0 1 0 3.85 6.167h1.152c.412 0 .647.616.4.945l-2 2.813c-.2.266-.6.224-.8-.042l-2-2.75c-.247-.33-.012-.966.4-.966z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHistory;
