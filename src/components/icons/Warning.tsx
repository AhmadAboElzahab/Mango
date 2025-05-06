import type { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M9.1 8.495C9.1 9.13 8.605 9.65 8 9.65s-1.1-.52-1.1-1.155V5.028c0-.636.495-1.156 1.1-1.156s1.1.52 1.1 1.156zM8 13.117c-.605 0-1.1-.52-1.1-1.156s.495-1.155 1.1-1.155 1.1.52 1.1 1.155c0 .636-.495 1.156-1.1 1.156m7.85.578L8.954 1.15a1.075 1.075 0 0 0-1.906 0L.149 13.695c-.424.77.106 1.733.953 1.733h13.796c.847 0 1.377-.963.953-1.733Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgWarning;
