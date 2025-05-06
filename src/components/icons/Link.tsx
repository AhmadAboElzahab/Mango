import type { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M7.418 7H1.007A1 1 0 0 1 0 6V3c0-.552.45-1 1.007-1h11.986A1 1 0 0 1 14 3v3c0 .552-.45 1-1.007 1h-4.42l.856 1.483.866-.5a.5.5 0 0 1 .749.465l-.209 2.322c-.05.547-.495.806-.996.574l-2.114-.98a.5.5 0 0 1-.028-.88l.866-.5zm-.662 2c-.55.71-.363 1.823.527 2.261l2.136.99c1.128.524 2.301-.155 2.412-1.392L11.998 9h3.004c.551 0 .998.444.998 1v3a1 1 0 0 1-.998 1H3.998A.997.997 0 0 1 3 13v-3a1 1 0 0 1 .998-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLink;
