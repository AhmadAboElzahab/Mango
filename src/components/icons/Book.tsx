import type { SVGProps } from 'react';
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M4.302 2.647 6.36 1.275c.1-.067.318-.09.428-.048l5.565 2.14c.06.024.147.15.147.22v9.994a.5.5 0 1 0 1 0V3.587c0-.484-.341-.98-.788-1.153L7.147.294a1.56 1.56 0 0 0-1.341.149L3.223 2.165l-.334.222.002.007c-.237.107-.391.353-.391.687v9.049c0 .552.418 1.154.932 1.344l6.123 2.262c.515.19.932-.106.932-.655v-9.49c0-.552-.43-1.134-.948-1.297z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBook;
