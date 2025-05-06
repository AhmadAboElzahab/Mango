import type { SVGProps } from 'react';
const SvgPivot = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M12.733 8.025h.774c.55 0 .743-.361.426-.812l-1.32-1.876c-.314-.448-.824-.45-1.141 0L10.15 7.213c-.316.449-.117.812.425.812h.654c-.15 1.886-1.158 2.772-3.23 2.777V10c0-.552-.361-.742-.812-.42l-1.876 1.34c-.449.32-.45.838 0 1.16l1.876 1.34c.449.32.812.136.812-.42v-.702c2.896-.024 4.552-1.493 4.733-4.273zM2 4h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m3-3h9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPivot;
