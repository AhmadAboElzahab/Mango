import type { SVGProps } from 'react';
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M1 11.5V8.288c0-.546.397-.784.887-.525l5.226 2.769c.49.26 1.284.259 1.774 0l5.226-2.769c.49-.26.887-.024.887.525V11.5c0 .823-.67 1.5-1.498 1.5H2.498A1.5 1.5 0 0 1 1 11.5m0-6V4.498C1 3.67 1.67 3 2.498 3h11.004A1.5 1.5 0 0 1 15 4.498V5.5L8.887 8.557c-.49.245-1.284.245-1.774 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgEnvelope;
