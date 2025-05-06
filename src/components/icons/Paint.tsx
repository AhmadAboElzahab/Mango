import type { SVGProps } from 'react';
const SvgPaint = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M5.364 3.136H3.793a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3.086a1 1 0 0 1 .707.293l.228.228a1 1 0 0 1 .257.186L13.728 7.5a1 1 0 0 1 0 1.414L8.07 14.571a1 1 0 0 1-1.414 0L1 8.914A1 1 0 0 1 1 7.5zm2.707.778a1 1 0 0 0-1.414 0L3.364 7.207l7.929-.071zM14.043 14.1c-.69 0-1.25-.56-1.25-1.25q0-.626 1.026-2.714a.25.25 0 0 1 .448 0q1.026 2.088 1.026 2.714c0 .69-.56 1.25-1.25 1.25'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPaint;
